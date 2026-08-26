import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've shipped"
          description="Production systems and simulations spanning multi-agent orchestration, RAG, and computer vision."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={project.featured}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
