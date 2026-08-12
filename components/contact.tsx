import Link from "next/link";
import { Section } from "@/components/section";
import { SITE_CONFIG } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Interested in building reliable AI systems?">
      <p className="contact-sub">
        Open to AI engineering, backend engineering, product development, and technically ambitious collaborations.
      </p>

      <div className="contact-btns">
        <Link href={`mailto:${SITE_CONFIG.email}`} className="contact-btn contact-btn-primary">
          Email Me
        </Link>
        <Link href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-ghost">
          GitHub
        </Link>
        <Link
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-btn-ghost"
        >
          LinkedIn
        </Link>
      </div>
    </Section>
  );
}
