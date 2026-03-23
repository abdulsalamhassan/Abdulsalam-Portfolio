import { Section } from "@/components/section";
import { TECH_STACK } from "@/lib/data";

export function TechStack() {
  return (
    <Section number="02" label="02 — STACK" title="Production tools, chosen for systems work.">
      <div className="grid gap-4 md:grid-cols-2">
        {TECH_STACK.map((item) => (
          <article
            key={item.category}
            className="surface border-l-[3px] border-l-[var(--primary)] p-5"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.36em] text-[var(--primary)]">
              {item.category}
            </p>
            <div className="flex flex-wrap gap-2">
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
