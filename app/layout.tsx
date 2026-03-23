import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SITE_CONFIG } from "@/lib/data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
});

const siteUrl = SITE_CONFIG.siteUrl;

export const metadata: Metadata = {
  title: "Abdulsalam Hassan Shiikhow | Backend & AI Systems Engineer",
  description: SITE_CONFIG.description,
  metadataBase: new URL(siteUrl),
  keywords: [
    "Abdulsalam Hassan Shiikhow",
    "Software Engineer",
    "Backend Engineer",
    "AI Systems Engineer",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "Mogadishu",
    "Somalia",
    "Chevening",
  ],
  authors: [{ name: SITE_CONFIG.name, url: siteUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    title: "Abdulsalam Hassan Shiikhow | Backend & AI Systems Engineer",
    description: SITE_CONFIG.description,
    url: siteUrl,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: `${SITE_CONFIG.name} profile image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Hassan Shiikhow | Backend & AI Systems Engineer",
    description: SITE_CONFIG.description,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
