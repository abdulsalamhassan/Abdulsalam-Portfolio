import { Section } from "@/components/section";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Building and leading production engineering work.">
      <div className="experience-list">
        {EXPERIENCE.map((entry) => (
          <div key={`${entry.company}-${entry.role}`} className="experience-item">
            <div className="experience-top">
              <div>
                <p className="experience-role">{entry.role}</p>
                <p className="experience-company">{entry.company}</p>
              </div>
              {entry.period ? <span className="experience-period">{entry.period}</span> : null}
            </div>
            {entry.bullets.length > 0 ? (
              <div className="experience-bullets">
                {entry.bullets.map((bullet) => (
                  <div key={bullet} className="experience-bullet">
                    <span className="experience-bullet-dot" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
