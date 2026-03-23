import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <p>{SITE_CONFIG.name}</p>
        <p>© 2024 - Built with precision</p>
      </div>
    </footer>
  );
}
