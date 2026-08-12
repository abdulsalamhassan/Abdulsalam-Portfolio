import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SITE_CONFIG } from "@/lib/data";

const heading = localFont({
  src: "./fonts/space-grotesk.woff2",
  weight: "500 700",
  variable: "--font-heading",
  display: "swap",
});

const body = localFont({
  src: "./fonts/plus-jakarta-sans.woff2",
  weight: "400 800",
  variable: "--font-jakarta",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "400 600",
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = SITE_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Abdulsalam Hassan Shiikhow | AI Software Engineer",
  description: SITE_CONFIG.description,
  metadataBase: new URL(siteUrl),
  keywords: [
    "Abdulsalam Hassan Shiikhow",
    "AI Software Engineer",
    "AI Product Engineer",
    "LLM Engineer",
    "RAG Systems",
    "Backend Engineer",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "SIMAD AI Institute",
    "Mogadishu",
    "Somalia",
  ],
  authors: [{ name: SITE_CONFIG.name, url: siteUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    title: "Abdulsalam Hassan Shiikhow | AI Software Engineer",
    description: SITE_CONFIG.description,
    url: siteUrl,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: `${SITE_CONFIG.name} profile image` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Hassan Shiikhow | AI Software Engineer",
    description: SITE_CONFIG.description,
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
