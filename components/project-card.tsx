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
      <div className="project-header">
        <div className="project-title-wrap">
          {project.eyebrow ? <p className="project-eyebrow">{project.eyebrow}</p> : null}
          <div className="stack stack-3">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>

        <span className="pill status-pill">{project.status}</span>
      </div>

      <div className="tag-row" style={{ marginBottom: "24px" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-layout">
        <div className="stack stack-5">
          <ul className="project-bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="project-bullet-item">
                <span className="project-dot" />
                <span className="project-bullet">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="link-row">
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

        <div className="project-side">
          <ArchitectureDiagram nodes={project.architecture} />

          <div className="surface project-proof-card">
            <div className="project-proof-block">
              <p className="project-proof-label">Data Flow</p>
              <p className="project-proof-text">{project.flow}</p>
            </div>
            <div className="project-proof-block project-proof-divider">
              <p className="project-proof-label">Key Tradeoff</p>
              <p className="project-proof-text">{project.tradeoff}</p>
            </div>
            <div className="project-proof-block project-proof-divider">
              <p className="project-proof-label">Engineering Proof</p>
              <div className="tag-row">
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
