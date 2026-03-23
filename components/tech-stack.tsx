import { Section } from "@/components/section";
import { TECH_STACK } from "@/lib/data";

export function TechStack() {
  return (
    <Section number="02" label="02 - STACK" title="Production tools, chosen for systems work.">
      <div className="stack-grid">
        {TECH_STACK.map((item) => (
          <article key={item.category} className="surface stack-card">
            <p className="stack-card-title">{item.category}</p>
            <div className="tag-row">
              {item.skills.map((skill) => (
                <span key={skill} className="pill">
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
