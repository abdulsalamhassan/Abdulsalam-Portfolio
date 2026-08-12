import { Section } from "@/components/section";
import { EDUCATION } from "@/lib/data";

const META = [
  { label: "Current Level", value: EDUCATION.level },
  { label: "GPA", value: EDUCATION.gpa },
  { label: "Expected", value: EDUCATION.expected },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Formal foundations, sharpened by applied building.">
      <div className="edu-grid">
        <div className="edu-main-card">
          <h3 className="edu-degree">{EDUCATION.degree}</h3>
          <p className="edu-uni">{EDUCATION.university}</p>
          <p className="edu-date">{EDUCATION.period}</p>

          <div className="edu-meta-grid">
            {META.map((item) => (
              <div key={item.label} className="edu-meta-item">
                <p className="edu-rel-label">{item.label}</p>
                <p className="edu-rel-text">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="edu-courses">
          {EDUCATION.certifications.map((certification) => (
            <div key={certification} className="edu-course-card">
              {certification}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
