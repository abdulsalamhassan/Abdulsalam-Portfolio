import { Section } from "@/components/section";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <Section number="04" label="04 - EDUCATION" title="Formal foundations, sharpened by applied building.">
      <div className="stack stack-8">
        <div className="surface timeline-line">
          <div className="stack stack-3">
            <h3 className="education-title">{EDUCATION.university}</h3>
            <p className="education-degree">{EDUCATION.degree}</p>
            <p className="education-copy">{EDUCATION.expected}</p>
            <p className="education-copy">{EDUCATION.relevant}</p>
          </div>
        </div>

        <div className="education-grid">
          {EDUCATION.courses.map((course) => (
            <div key={course} className="surface education-card">
              <p className="education-copy">{course}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
