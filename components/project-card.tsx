import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-3">
          {project.eyebrow ? (
            <p className="text-[11px] uppercase tracking-[0.36em] text-[var(--primary)]">
              {project.eyebrow}
            </p>
          ) : null}
          <div className="space-y-3">
            <h3 className="display-font text-[clamp(1.8rem,4vw,2.7rem)] leading-[0.95] tracking-[-0.05em]">
              {project.title}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.description}</p>
          </div>
        </div>

        <span className="pill status-pill">{project.status}</span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
        <div className="space-y-5">
          <ul className="space-y-3">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button"
              >
                {link.label}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <ArchitectureDiagram nodes={project.architecture} />

          <div className="surface grid gap-4 p-4 text-sm leading-7 text-[var(--muted)]">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--primary)]">Data Flow</p>
              <p>{project.flow}</p>
            </div>
            <div className="space-y-2 border-t border-[var(--border)] pt-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--primary)]">Key Tradeoff</p>
              <p>{project.tradeoff}</p>
            </div>
            <div className="space-y-2 border-t border-[var(--border)] pt-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--primary)]">Engineering Proof</p>
              <div className="flex flex-wrap gap-2">
                {project.proof.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
