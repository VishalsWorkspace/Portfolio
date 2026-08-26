"use client";

import { FileCode2, Sparkles, Mail, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { socials } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/brand-icons";

type IconComponent = LucideIcon | typeof GithubIcon;

const ICONS: Record<string, IconComponent> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: XIcon,
  FileCode2,
  Sparkles,
  Mail,
};

export function SocialLinks({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "compact";
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {socials.map((social, i) => {
        const Icon = ICONS[social.icon];
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -2 }}
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent",
              variant === "compact"
                ? "h-10 w-10 justify-center"
                : "px-4 py-2 text-sm",
            )}
            aria-label={social.label}
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {variant === "default" && (
              <span className="font-mono">{social.label}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
