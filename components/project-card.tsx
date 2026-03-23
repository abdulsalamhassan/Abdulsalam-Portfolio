import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  lastHalf?: boolean;
}

const STATUS_LABELS: Record<Project["status"], string> = {
  Live: "Live",
  "In Development": "In Dev",
  Prototype: "Prototype",
};

export function ProjectCard({ project, compact = false, lastHalf = false }: ProjectCardProps) {
  const statusClass =
    project.status === "Live"
      ? "status-live"
      : project.status === "In Development"
        ? "status-dev"
        : "status-prototype";

  const cardClass = [
    "project-card",
    project.featured ? "featured" : "standard",
    compact ? "project-card-compact" : "project-card-hero",
    lastHalf ? "project-card-half" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const primaryLink = project.links[0];

  return (
    <article className={cardClass}>
      <div className="project-header">
        <div className="project-title-wrap">
          {project.eyebrow ? <p className="project-eyebrow">{project.eyebrow}</p> : null}
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-header-actions">
          <span className={`project-status ${statusClass}`}>{STATUS_LABELS[project.status]}</span>
          {primaryLink ? (
            <Link
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-external"
              aria-label={`${project.title} external link`}
            >
              <ArrowUpRight size={15} />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-divider" />

      <ul className="project-bullets">
        {project.bullets.slice(0, compact ? 3 : 4).map((bullet) => (
          <li key={bullet} className="project-bullet-item">
            <span className="project-bullet-bar" />
            <span className="project-bullet">{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
