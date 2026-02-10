import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulsalamh.vercel.app/";

export const metadata: Metadata = {
  title: "Abdulsalam Hassan | CS Student & FullStack Developer",
  description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Abdulsalam Hassan | CS Student & FullStack Developer",
    description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsalam Hassan | CS Student & FullStack Developer",
    description: "Portfolio of Abdulsalam Hassan Shiikhow, a Computer Science student and FullStack Developer focused on Backend Engineering and AI-enabled systems.",
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
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
