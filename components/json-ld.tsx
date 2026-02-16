import { SITE_CONFIG } from "@/lib/data";

export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE_CONFIG.name,
        url: "https://abdulsalamh.vercel.app/", // Ideally this comes from env or config
        jobTitle: "Full-Stack Software Engineer",
        description: SITE_CONFIG.description,
        image: `https://abdulsalamh.vercel.app${SITE_CONFIG.profileImage}`,
        sameAs: [
            SITE_CONFIG.github,
            SITE_CONFIG.linkedin,
            "https://twitter.com/abdulsalamhassan", // Add if available
        ],
        knowsAbout: [
            "Software Engineering",
            "Full-Stack Development",
            "Artificial Intelligence",
            "React",
            "Next.js",
            "TypeScript",
            "NestJS",
            "Python",
            "PostgreSQL"
        ],
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "SIMAD University"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
