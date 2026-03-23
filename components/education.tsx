import { Section } from "@/components/section";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <Section number="04" label="04 — EDUCATION" title="Formal foundations, sharpened by applied building.">
      <div className="space-y-8">
        <div className="timeline-line surface max-w-3xl p-6">
          <div className="space-y-3">
            <h3 className="display-font text-3xl leading-none tracking-[-0.05em]">
              {EDUCATION.university}
            </h3>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--primary)]">
              {EDUCATION.degree}
            </p>
            <p className="text-sm leading-7 text-[var(--muted)]">{EDUCATION.expected}</p>
            <p className="text-sm leading-7 text-[var(--muted)]">{EDUCATION.relevant}</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {EDUCATION.courses.map((course) => (
            <div key={course} className="surface p-4 text-sm leading-7 text-[var(--muted)]">
              {course}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
