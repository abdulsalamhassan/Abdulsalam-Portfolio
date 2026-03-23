import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(17,17,24,0.78)] py-6">
      <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>{SITE_CONFIG.name}</p>
        <p>© 2024 — Built with precision</p>
      </div>
    </footer>
  );
}
