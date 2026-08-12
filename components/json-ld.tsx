import { SITE_CONFIG } from "@/lib/data";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    jobTitle: SITE_CONFIG.role,
    description: SITE_CONFIG.description,
    image: `${SITE_CONFIG.siteUrl.replace(/\/$/, "")}${SITE_CONFIG.profileImage}`,
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SIMAD University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mogadishu",
      addressCountry: "Somalia",
    },
    knowsAbout: [
      "LLM Applications",
      "Retrieval-Augmented Generation",
      "AI Product Engineering",
      "Backend Engineering",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
