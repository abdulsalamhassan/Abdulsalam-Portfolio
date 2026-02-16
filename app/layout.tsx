import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulsalamh.vercel.app/";

export const metadata: Metadata = {
  title: "Abdulsalam Hassan | CS Student & FullStack Developer",
  description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Abdulsalam Hassan",
    "Abdulsalam Hassan Shiikhow",
    "FullStack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "AI Engineer",
    "Portfolio",
    "Mogadishu",
    "Somalia"
  ],
  authors: [{ name: "Abdulsalam Hassan", url: siteUrl }],
  creator: "Abdulsalam Hassan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abdulsalam Hassan | CS Student & FullStack Developer",
    description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
    url: siteUrl,
    siteName: "Abdulsalam Hassan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg", // Ideally a specific OG image (1200x630)
        width: 800,
        height: 800,
        alt: "Abdulsalam Hassan Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Hassan | CS Student & FullStack Developer",
    description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center transition-colors duration-200"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <main className="w-full max-w-2xl px-6 py-12 md:py-20">
            {children}
            <JsonLd />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
