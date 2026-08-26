"use client";

import { motion } from "framer-motion";
import { Bot, Database, ScanEye, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusAreas, profile } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { Bot, Database, ScanEye };

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "TypeScript", "SQL / PostgreSQL"] },
  {
    label: "AI / ML",
    items: ["PyTorch", "Transformers", "YOLOv8", "Fine-tuning", "Embeddings"],
  },
  {
    label: "Generative AI",
    items: ["LangChain", "RAG", "FAISS", "Ollama", "Llama 3", "Mistral", "Agents"],
  },
  {
    label: "Platforms",
    items: ["ROS2", "AirSim", "Supabase", "Vercel", "Hugging Face", "Agentforce"],
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Applied GenAI, end to end"
          description="From perception pipelines to production frontends — I care about AI that works outside a notebook."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-lg leading-relaxed text-muted lg:col-span-3"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-x-8 gap-y-6 lg:col-span-2"
          >
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
                  {group.label}
                </p>
                <ul className="space-y-1 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = ICONS[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:bg-accent/20" />
                {Icon && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-background text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="mb-2 font-medium text-foreground">{area.title}</h3>
                <p className="text-sm text-muted">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
