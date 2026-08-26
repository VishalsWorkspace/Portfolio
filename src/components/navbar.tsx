"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, socials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const github = socials.find((s) => s.label === "GitHub");

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          vishal<span className="text-accent">.</span>singh
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-8 w-8 items-center justify-center rounded-md border border-border-subtle bg-surface text-muted transition-colors hover:text-foreground hover:border-foreground/30 sm:inline-flex"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          )}
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex h-8 items-center rounded-md bg-foreground px-3 font-mono text-xs font-medium text-background transition-opacity hover:opacity-85"
          >
            Contact
          </a>
        </div>
      </Container>
    </motion.header>
  );
}
