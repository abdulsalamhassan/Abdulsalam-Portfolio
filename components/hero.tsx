"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Mail } from "lucide-react";
import { HERO_BADGES, SITE_CONFIG } from "@/lib/data";

export function Hero() {
  const badgeRail = [...HERO_BADGES, ...HERO_BADGES];

  return (
    <section className="min-h-screen flex flex-col justify-between py-8 sm:py-10">
      <div className="flex items-start justify-end">
        <Link
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pill gap-2 uppercase tracking-[0.24em]"
        >
          <Github size={14} />
          GitHub
        </Link>
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[var(--muted)]">
              {SITE_CONFIG.heroLabel}
            </p>
            <div className="space-y-4">
              <h1 className="hero-title">{SITE_CONFIG.name.toUpperCase()}</h1>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {SITE_CONFIG.tagline}
              </p>
              <p className="max-w-xl text-sm leading-7 text-[var(--text)]">
                <span className="technical-phrase">{SITE_CONFIG.location}</span>
                {" · "}
                <span className="text-[var(--muted)]">{SITE_CONFIG.identity}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
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

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 bg-[rgba(0,212,170,0.12)] blur-3xl" aria-hidden="true" />
          <div
            className="relative overflow-hidden border-2 border-[var(--primary)] bg-[var(--surface)]"
            style={{ borderRadius: "4px", boxShadow: "0 0 60px rgba(0,212,170,0.15)" }}
          >
            <Image
              src={SITE_CONFIG.profileImage}
              alt={SITE_CONFIG.name}
              priority
              width={700}
              height={860}
              className="h-full w-full object-cover grayscale-[12%]"
            />
          </div>
        </div>
      </div>

      <div className="marquee mt-12">
        <div className="marquee-track py-4">
          {badgeRail.map((badge, index) => (
            <div key={`${badge}-${index}`} className="pill mx-2 whitespace-nowrap">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
