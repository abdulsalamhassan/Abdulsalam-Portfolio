import { Section } from "@/components/section";
import { ABOUT_PARAGRAPHS } from "@/lib/data";

export function About() {
  return (
    <Section number="01" label="ABOUT" title="Engineer. Builder. Problem Solver.">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-[0.95rem]">
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

        <div className="surface grid gap-4 p-5 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
          <div className="space-y-2 border-b border-[var(--border)] pb-4">
            <p>Focus</p>
            <p className="text-[var(--text)]">Backend systems</p>
            <p className="text-[var(--text)]">AI workflows</p>
          </div>
          <div className="space-y-2 border-b border-[var(--border)] pb-4">
            <p>Base</p>
            <p className="text-[var(--text)]">Mogadishu, Somalia</p>
          </div>
          <div className="space-y-2">
            <p>Direction</p>
            <p className="text-[var(--text)]">Global engineering roles</p>
            <p className="text-[var(--text)]">Chevening pathway</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
