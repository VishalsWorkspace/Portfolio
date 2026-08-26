"use client";

import { motion } from "framer-motion";
import {
  Award,
  ArrowUpRight,
  FileCode2,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, achievements, writing } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { FileCode2, Sparkles };

export function Writing() {
  return (
    <section id="writing" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Writing & Credentials"
          title="Where I publish & what's verified"
          description="Technical write-ups, open datasets, and certifications backing the work above."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {writing.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.a
                key={item.platform}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex gap-4">
                  {Icon && (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-background text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      {item.platform}
                    </p>
                    <h3 className="mt-1 font-medium text-foreground">{item.label}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border-subtle bg-surface p-5"
            >
              <Trophy className="mb-3 h-5 w-5 text-amber-400" />
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-xs text-muted">{item.detail}</p>
              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                >
                  View proof <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}

          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i + achievements.length) * 0.05 }}
              className="rounded-xl border border-border-subtle bg-surface p-5"
            >
              <Award className="mb-3 h-5 w-5 text-accent" />
              <p className="text-sm font-medium text-foreground">{cert.title}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {cert.issuer} · {cert.year}
              </p>
              {cert.detail && (
                <p className="mt-1 text-xs text-muted">{cert.detail}</p>
              )}
              {cert.fileUrl && (
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
                >
                  View credential <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
