"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { HERO_BADGES, SITE_CONFIG } from "@/lib/data";

export function Hero() {
  const badgeRail = [...HERO_BADGES, ...HERO_BADGES];

  return (
    <section className="hero">
      <div className="hero-topbar">
        <Link
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-icon"
        >
          <Github size={14} />
          GitHub
        </Link>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="hero-label">{SITE_CONFIG.heroLabel}</p>
            <div className="hero-text-block">
              <h1 className="hero-title">{SITE_CONFIG.name.toUpperCase()}</h1>
              <p className="hero-tagline muted-text">{SITE_CONFIG.tagline}</p>
              <p className="hero-identity">
                <span className="technical-phrase">{SITE_CONFIG.location}</span>
                {" · "}
                <span className="muted-text">{SITE_CONFIG.identity}</span>
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <Link href="#work" className="ghost-button primary">
              View My Work
              <ArrowRight size={15} />
            </Link>
            <Link href="#contact" className="ghost-button">
              Get In Touch
              <Mail size={15} />
            </Link>
          </div>
        </div>

        <div className="hero-photo-shell">
          <div className="hero-photo-glow" aria-hidden="true" />
          <div className="hero-photo-frame">
            <Image
              src={SITE_CONFIG.profileImage}
              alt={SITE_CONFIG.name}
              priority
              width={700}
              height={860}
              className="hero-photo"
            />
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {badgeRail.map((badge, index) => (
            <div key={`${badge}-${index}`} className="pill marquee-pill">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
