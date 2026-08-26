import { Container } from "@/components/ui/container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
          Tailwind.
        </p>
        <p className="font-mono text-xs text-muted">
          Bengaluru, India · {profile.email}
        </p>
      </Container>
    </footer>
  );
}
