import Link from "next/link";
import { Section } from "@/components/section";
import { SITE_CONFIG } from "@/lib/data";

export function Contact() {
  return (
    <Section number="05" label="05 — CONTACT" title="Available for global opportunities and engineering conversations.">
      <div id="contact" className="space-y-8 text-center">
        <p className="mx-auto max-w-3xl display-font text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.96] tracking-[-0.05em]">
          Available for global opportunities and engineering conversations.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="ghost-button">
            GitHub
          </Link>
          <Link href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="ghost-button">
            LinkedIn
          </Link>
          <Link href={`mailto:${SITE_CONFIG.email}`} className="ghost-button">
            Email
          </Link>
        </div>

        <p className="text-sm leading-7 text-[var(--muted)]">
          Based in Mogadishu, Somalia. Open to remote roles worldwide.
        </p>
      </div>
    </Section>
  );
}
