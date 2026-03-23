import { Section } from "@/components/section";
import { ABOUT_PARAGRAPHS } from "@/lib/data";

export function About() {
  return (
    <Section number="01" label="ABOUT" title="Engineer. Builder. Problem Solver.">
      <div className="about-grid">
        <div className="about-copy">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="about-paragraph">
              {paragraph
                .split(/(NestJS|FastAPI|PostgreSQL|Mogadishu|SIMAD University|Chevening scholarship)/g)
                .map((part, index) =>
                  /(NestJS|FastAPI|PostgreSQL|Mogadishu|SIMAD University|Chevening scholarship)/.test(part) ? (
                    <span key={`${part}-${index}`} className="technical-phrase">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
            </p>
          ))}
        </div>

        <div className="surface about-panel">
          <div className="about-panel-block about-panel-divider">
            <p>Focus</p>
            <p className="about-panel-value">Backend systems</p>
            <p className="about-panel-value">AI workflows</p>
          </div>
          <div className="about-panel-block about-panel-divider">
            <p>Base</p>
            <p className="about-panel-value">Mogadishu, Somalia</p>
          </div>
          <div className="about-panel-block">
            <p>Direction</p>
            <p className="about-panel-value">Global engineering roles</p>
            <p className="about-panel-value">Chevening pathway</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
