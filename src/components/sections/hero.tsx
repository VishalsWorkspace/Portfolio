"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { GlowMesh } from "@/components/ui/glow-mesh";
import { Terminal } from "@/components/ui/terminal";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <GlowMesh />
      <Container className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for opportunities · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          >
            Building AI systems
            <br />
            that <span className="text-gradient">ship</span>, not just{" "}
            <span className="relative inline-block">
              notebooks.
              <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-accent/60" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-lg text-muted"
          >
            I&apos;m {profile.name}, an applied GenAI engineer focused on{" "}
            <span className="text-foreground">multi-agent systems</span>,{" "}
            <span className="text-foreground">local &amp; cloud RAG</span>, and{" "}
            <span className="text-foreground">edge computer vision</span> — built
            with Python, LangChain, YOLOv8, and Next.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-foreground/30"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <SocialLinks variant="compact" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-2/10 blur-2xl" />
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border-subtle">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-medium text-foreground">{profile.name}</p>
              <p className="font-mono text-xs text-muted">{profile.role}</p>
            </div>
          </div>
          <Terminal />
        </motion.div>
      </Container>
    </section>
  );
}
