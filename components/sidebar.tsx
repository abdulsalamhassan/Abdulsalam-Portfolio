"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "AI & Engineering" },
  { id: "work", label: "Selected Work" },
  { id: "experience", label: "Experience" },
  { id: "recognition", label: "Recognition" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-strip" aria-hidden="true">
        <div className="scroll-strip-fill" style={{ height: `${progress}%` }} />
      </div>

      <aside className="sidebar">
        <div className="sb-profile">
          <div className="sb-avatar">
            <Image src={SITE_CONFIG.profileImage} alt={SITE_CONFIG.name} width={72} height={72} priority />
          </div>
          <p className="sb-role">{SITE_CONFIG.roleShort}</p>
          <p className="sb-name">{SITE_CONFIG.name}</p>
          <p className="sb-subline">{SITE_CONFIG.roleSubline}</p>
        </div>

        <nav className="sb-nav" aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`sb-nav-link ${active === item.id ? "is-active" : ""}`}
            >
              {active === item.id ? <span className="sb-nav-dot" /> : <span className="sb-nav-spacer" />}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sb-block">
          <div className="sb-block-head">Connect With</div>
          <div className="sb-socials">
            <Link
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-social"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-social"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link href={`mailto:${SITE_CONFIG.email}`} className="sb-social" aria-label="Email">
              <Mail />
            </Link>
          </div>
        </div>

        <p className="sb-location">{SITE_CONFIG.location}</p>
      </aside>
    </>
  );
}
