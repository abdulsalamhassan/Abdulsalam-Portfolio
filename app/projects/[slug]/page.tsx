import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { STATUS_BADGE } from "@/components/project-card";
import { PROJECTS, SITE_CONFIG } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();

  const badge = STATUS_BADGE[project.status];

  return (
    <div className="case-study">
      <div className="case-study-topbar">
        <Link href="/#work" className="case-study-back">
          ← Back to Selected Work
        </Link>
        <Link href="/" className="case-study-home-name">
          {SITE_CONFIG.name}
        </Link>
      </div>

      <header className="case-study-header">
        <div className="case-study-header-top">
          <p className="case-study-eyebrow">{project.eyebrow ?? "PROJECT"}</p>
          <span className={`pcard-badge ${badge.className}`}>{badge.label}</span>
        </div>

        <h1 className="case-study-title">{project.title}</h1>
        <p className="case-study-desc">{project.description}</p>

        {project.metric ? (
          <div className="case-study-metric">
            <span className="case-study-metric-value">{project.metric.value}</span>
            <span className="case-study-metric-label">{project.metric.label}</span>
          </div>
        ) : null}

        <div className="case-study-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pcard-tag case-study-tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="case-study-section">
        <h2 className="case-study-section-title">Engineering Decisions</h2>
        <div className="case-study-bullets">
          {project.bullets.map((bullet) => (
            <div key={bullet} className="case-study-bullet">
              <span className="case-study-bullet-dot" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section-title">Architecture</h2>
        <div className="case-study-flow">
          {project.architecture.map((step, index) => (
            <span key={step} className="case-study-flow-item">
              <span className="case-study-flow-step">{step}</span>
              {index < project.architecture.length - 1 ? (
                <span className="case-study-flow-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section-title">Data &amp; AI Flow</h2>
        <p className="case-study-paragraph">{project.flow}</p>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section-title">Engineering Tradeoff</h2>
        <p className="case-study-paragraph">{project.tradeoff}</p>
      </section>

      <section className="case-study-section">
        <h2 className="case-study-section-title">Proof Points</h2>
        <div className="case-study-proof">
          {project.proof.map((point) => (
            <span key={point} className="case-study-proof-pill">
              {point}
            </span>
          ))}
        </div>
      </section>

      {project.links.length > 0 ? (
        <section className="case-study-section">
          <div className="pcard-links">
            {project.links.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="pcard-link pcard-link-standalone">
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <Footer />
    </div>
  );
}
