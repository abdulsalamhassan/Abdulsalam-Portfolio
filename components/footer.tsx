import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">{SITE_CONFIG.name}</span>
      <span className="footer-copy">© {new Date().getFullYear()} — Built with precision</span>
    </footer>
  );
}
