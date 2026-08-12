import { Section } from "@/components/section";
import { ABOUT_PARAGRAPHS, PROFILE_FACTS } from "@/lib/data";

const HIGHLIGHT_PATTERN =
  /(SIMAD AI Institute|UniMind|8,000\+ patient records|700\+ university staff|SIMAD University|Bachelor of Computer Science)/g;

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer, builder, problem solver.">
      <div className="about-grid">
        <div className="about-body">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.split(HIGHLIGHT_PATTERN).map((part, index) =>
                HIGHLIGHT_PATTERN.test(part) ? (
                  <span key={`${part}-${index}`} className="about-hl">
                    {part}
                  </span>
                ) : (
                  part
                ),
              )}
            </p>
          ))}
        </div>

        <div className="about-card">
          <div className="about-card-row">
            <span className="about-card-label">Focus</span>
            <span className="about-card-val">{PROFILE_FACTS.focus}</span>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">Base</span>
            <span className="about-card-val">{PROFILE_FACTS.base}</span>
          </div>
          <div className="about-card-row">
            <span className="about-card-label">Current</span>
            <span className="about-card-val">{PROFILE_FACTS.current}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
