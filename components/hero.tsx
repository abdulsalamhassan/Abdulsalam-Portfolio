import Image from "next/image";
import Link from "next/link";
import { HERO_METRICS, PROFILE_FACTS, SITE_CONFIG } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">{SITE_CONFIG.heroLabel}</p>
          <h1 className="hero-name">{SITE_CONFIG.name}</h1>
          <p className="hero-tagline">{SITE_CONFIG.tagline}</p>
          <p className="hero-current-role">{PROFILE_FACTS.current}</p>

          <div className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Available for new opportunities
          </div>

          <div className="hero-actions">
            <Link href="#work" className="hero-cta">
              View Selected Work
              <span className="hero-cta-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="hero-cta-secondary">
              GitHub
            </Link>
          </div>

          <div className="hero-rule" />

          <div className="hero-metrics">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="hero-metric">
                <span className="hero-metric-value">{metric.value}</span>
                <span className="hero-metric-label">{metric.label}</span>
                <span className="hero-metric-note">{metric.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <Image src={SITE_CONFIG.profileImage} alt={SITE_CONFIG.name} priority width={640} height={860} />
          </div>
          <div className="hero-stat-card">
            <div className="stat-info">
              <span className="stat-num">{PROFILE_FACTS.current.split(" — ")[0]}</span>
              <span className="stat-sub">{PROFILE_FACTS.current.split(" — ")[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
