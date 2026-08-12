import { Section } from "@/components/section";
import { TECH_STACK } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="stack" eyebrow="AI & Engineering" title="Engineering stack for production AI systems.">
      <div className="skills-grid">
        {TECH_STACK.map((group) => (
          <article key={group.category} className="skill-card">
            <p className="skill-card-cat">{group.category}</p>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
