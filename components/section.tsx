interface SectionProps {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ number, label, title, children }: SectionProps) {
  return (
    <section>
      <div className="section-shell">
        <div className="section-marker" aria-hidden="true">
          {number}
        </div>
        <div className="section-content">
          <header className="stack stack-3">
            <p className="section-label">{label}</p>
            <h2 className="section-title">{title}</h2>
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}
