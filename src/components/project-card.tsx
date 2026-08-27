"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "text-green-400 border-green-400/30 bg-green-400/10",
  Shipped: "text-accent border-accent/30 bg-accent/10",
  Exhibited: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const hasVideo = Boolean(project.video);
  const [activeImage, setActiveImage] = useState(0);
  const [activeMedia, setActiveMedia] = useState<"video" | number>(hasVideo ? "video" : 0);
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideoActive = hasVideo && activeMedia === "video";

  const handleEnter = () => {
    if (!isVideoActive) return;
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const selectScreenshot = (i: number) => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveMedia(i);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors hover:border-accent/40",
        featured && "lg:col-span-2",
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-border-subtle bg-surface-2">
        {hasVideo ? (
          <AnimatePresence mode="wait" initial={false}>
            {isVideoActive ? (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={cn(
                    "object-cover transition-opacity duration-300",
                    hovering ? "opacity-0" : "opacity-100",
                  )}
                  priority={featured}
                />
                <video
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
                  <Play className="h-3 w-3" />
                  hover to play
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`shot-${activeMedia}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[activeMedia as number]}
                  alt={`${project.title} screenshot ${(activeMedia as number) + 1}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <Image
            src={project.images[activeImage]}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {hasVideo ? (
        <div className="flex gap-2 overflow-x-auto border-b border-border-subtle bg-background/40 px-4 py-3">
          <button
            type="button"
            onClick={() => setActiveMedia("video")}
            aria-label="Show video preview"
            aria-current={isVideoActive}
            className={cn(
              "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-colors",
              isVideoActive
                ? "border-accent"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image src={project.images[0]} alt="" fill sizes="80px" className="object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Play className="h-3.5 w-3.5 text-white" />
            </span>
          </button>
          {project.images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => selectScreenshot(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={!isVideoActive && activeMedia === i}
              className={cn(
                "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-colors",
                !isVideoActive && activeMedia === i
                  ? "border-accent"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : (
        project.images.length > 1 && (
          <div className="flex gap-2 border-b border-border-subtle bg-background/40 px-4 py-2">
            {project.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  i === activeImage ? "bg-accent" : "bg-border-subtle hover:bg-muted",
                )}
                aria-label={`Show screenshot ${i + 1}`}
              />
            ))}
          </div>
        )
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
            <p className="mt-1 font-mono text-xs text-accent">{project.tagline}</p>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide",
              STATUS_STYLES[project.status],
            )}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 rounded-lg border border-border-subtle bg-background/60 p-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                  {m.label}
                </p>
                <p className="text-xs font-medium text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-subtle bg-background px-2 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 font-mono text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
