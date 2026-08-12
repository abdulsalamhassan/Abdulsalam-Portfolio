import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export const STATUS_BADGE: Record<Project["status"], { label: string; className: string }> = {
  Production: { label: "Production", className: "badge-live" },
  Pilot: { label: "Pilot", className: "badge-pilot" },
  "In Development": { label: "In Development", className: "badge-dev" },
  Prototype: { label: "Prototype", className: "badge-proto" },
  Completed: { label: "Completed", className: "badge-completed" },
};

const LANDING_TAG_LIMIT = 4;
const LANDING_BULLET_LIMIT = 2;

export function ProjectCard({ project }: ProjectCardProps) {
  const badge = STATUS_BADGE[project.status];

  return (
    <article className={`pcard ${project.featured ? "pcard--featured" : "pcard--regular"}`}>
      <div className="pcard-top">
        <p className="pcard-eyebrow">{project.eyebrow ?? "PROJECT"}</p>
        <span className={`pcard-badge ${badge.className}`}>{badge.label}</span>
      </div>

      <h3 className="pcard-title">{project.title}</h3>
      <p className="pcard-desc">{project.description}</p>

      {project.metric ? (
        <div className="pcard-metric">
          <span className="pcard-metric-value">{project.metric.value}</span>
          <span className="pcard-metric-label">{project.metric.label}</span>
        </div>
      ) : null}

      <div className="pcard-tags">
        {project.tags.slice(0, LANDING_TAG_LIMIT).map((tag) => (
          <span key={tag} className="pcard-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="pcard-bullets">
        {project.bullets.slice(0, LANDING_BULLET_LIMIT).map((bullet) => (
          <div key={bullet} className="pcard-bullet">
            <span className="pcard-bullet-dot" />
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      <div className="pcard-links">
        <Link href={`/projects/${project.slug}`} className="pcard-link pcard-link-primary">
          View case study
          <ArrowUpRight size={14} />
        </Link>
        {project.links.map((link) => (
          <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="pcard-link">
            {link.label}
            <ArrowUpRight size={14} />
          </Link>
        ))}
      </div>
    </article>
  );
}
