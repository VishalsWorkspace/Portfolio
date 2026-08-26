"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface px-6 py-16 text-center sm:px-16"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          />
          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Let&apos;s build something
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Open to GenAI &amp; applied ML roles
            </h2>
            <p className="max-w-xl text-muted">
              If you&apos;re building multi-agent systems, RAG pipelines, or
              vision-driven products, I&apos;d like to hear about it.
            </p>

            <div className="flex flex-col items-center gap-2 font-mono text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-mono text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-background px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-foreground/30"
              >
                <Download className="h-4 w-4" />
                Resume
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <SocialLinks className="mt-4 justify-center" variant="compact" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
