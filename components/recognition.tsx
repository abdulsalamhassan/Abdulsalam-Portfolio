import Link from "next/link";
import { Section } from "@/components/section";
import { RECOGNITION } from "@/lib/data";

export function Recognition() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Recognition & journey.">
      <div className="recognition-grid">
        {RECOGNITION.map((entry) => (
          <div key={entry.title} className="recognition-card">
            <p className="recognition-source">{entry.source}</p>
            <h3 className="recognition-title">{entry.title}</h3>
            <p className="recognition-desc">{entry.description}</p>
            <Link href={entry.href} target="_blank" rel="noopener noreferrer" className="recognition-link">
              {entry.ctaLabel}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
