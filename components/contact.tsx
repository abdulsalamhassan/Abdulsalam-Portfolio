import Link from "next/link";
import { Section } from "@/components/section";
import { SITE_CONFIG } from "@/lib/data";

export function Contact() {
  return (
    <Section number="05" label="05 - CONTACT" title="Available for global opportunities and engineering conversations.">
      <div id="contact" className="contact-shell stack stack-8">
        <p className="contact-title">
          Available for global opportunities and engineering conversations.
        </p>

        <div className="center-row">
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

        <p className="contact-note">
          Based in Mogadishu, Somalia. Open to remote roles worldwide.
        </p>
      </div>
    </Section>
  );
}
