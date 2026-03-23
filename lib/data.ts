export const SITE_CONFIG = {
  name: "Abdulsalam Hassan Shiikhow",
  role: "Software Engineer — Backend & AI Systems",
  heroLabel: "SOFTWARE ENGINEER — BACKEND & AI",
  tagline: "Building production-grade AI systems from Mogadishu.",
  location: "Mogadishu, Somalia",
  identity: "CS student building production-grade AI systems for real African problems.",
  description:
    "Portfolio of Abdulsalam Hassan Shiikhow, a software engineer focused on backend engineering, AI systems, and production-grade applications rooted in real African problems.",
  email: "abdulsalam.shiikhow@gmail.com",
  github: "https://github.com/abdulsalamhassan",
  linkedin: "https://www.linkedin.com/in/abdulsalamhassan11/",
  profileImage: "/profile.jpg",
  interviewVideo: "https://www.facebook.com/share/v/17ETcRR4kY/",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulsalamh.vercel.app/",
};

export const HERO_BADGES = [
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Docker",
  "Next.js",
  "TypeScript",
  "OpenAI API",
  "RAG Systems",
  "GitHub Actions",
  "Nginx",
];

export const ABOUT_PARAGRAPHS = [
  "I am a backend and AI systems engineer specializing in NestJS, FastAPI, and PostgreSQL. I build systems that handle real load, not just demos.",
  "Based in Mogadishu, I am building AI-powered tools for problems that matter in East Africa — from drought prediction systems to academic infrastructure. My work connects global engineering standards with local impact.",
  "Currently pursuing a BSc in Computer Science at SIMAD University while targeting global engineering roles and the Chevening scholarship for postgraduate study in the UK.",
];

export const TECH_STACK = [
  {
    category: "Backend Engineering",
    skills: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "REST",
      "JWT",
      "Docker",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "React Query",
      "TypeScript",
      "SSR/SSG",
    ],
  },
  {
    category: "AI & Data",
    skills: [
      "RAG Systems",
      "pgvector",
      "Embeddings",
      "LLM APIs",
      "Claude API",
      "OpenAI API",
      "LangFuse",
      "FastAPI AI",
    ],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      "Docker",
      "GitHub Actions",
      "VPS Deployment",
      "Nginx",
      "Git",
      "Postman",
      "VS Code",
    ],
  },
];

export type ProjectProofType =
  | "Architecture"
  | "Data Flow"
  | "Tradeoff"
  | "Constraint"
  | "Failure Handling"
  | "Scale";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  status: "Live" | "In Development" | "Prototype";
  featured?: boolean;
  eyebrow?: string;
  tags: string[];
  links: ProjectLink[];
  bullets: string[];
  proof: ProjectProofType[];
  architecture: string[];
  flow: string;
  tradeoff: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DroughtGuard",
    slug: "droughtguard",
    description:
      "Climate-aware drought intelligence system translating environmental signals into usable decisions for East African communities.",
    status: "Prototype",
    featured: true,
    eyebrow: "FEATURED PROJECT",
    tags: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Claude API",
      "Leaflet",
      "Docker",
    ],
    links: [],
    bullets: [
      "Structured the system as a Next.js client over a FastAPI forecasting layer so geospatial visualization stays responsive while heavier AI analysis runs asynchronously.",
      "Designed a pipeline that stores regional drought observations in PostgreSQL before LLM summarization, reducing repeated inference cost and preserving auditable records.",
      "Used map-first rendering to surface district-level risk signals quickly instead of burying the decision point in long narrative output.",
      "Framed the product around East African infrastructure limits, prioritizing compact payloads and graceful fallback states when external model calls are slow.",
    ],
    proof: ["Architecture", "Data Flow", "Tradeoff", "Constraint"],
    architecture: [
      "User",
      "Next.js UI",
      "FastAPI Backend",
      "Claude API",
      "PostgreSQL",
      "Leaflet Map",
    ],
    flow:
      "Weather and regional inputs move through FastAPI for analysis, persist in PostgreSQL for traceability, then return to the map layer as human-readable drought signals.",
    tradeoff:
      "Separated forecasting and interface concerns to keep latency-sensitive UI interactions independent from variable LLM response times.",
  },
  {
    title: "UniMind — AI Academic Assistant",
    slug: "unimind",
    description:
      "AI-powered academic infrastructure turning static course material into structured, chapter-level learning workflows.",
    status: "In Development",
    tags: [
      "NestJS",
      "FastAPI",
      "OpenAI API",
      "PostgreSQL",
      "Next.js",
      "Docker",
    ],
    links: [{ label: "GitHub", href: "https://github.com/abdulsalamhassan/UniMind" }],
    bullets: [
      "Architected a dual-service backend separating NestJS orchestration from FastAPI AI processing to isolate LLM latency from core API response times.",
      "Modeled chapter-level retrieval instead of whole-document prompting, improving context precision and making lecturer approval workflows easier to audit.",
      "Containerized the stack with Docker so the same academic pipeline can run consistently across local development and deployment targets.",
      "Used PostgreSQL-backed persistence for course structure and generation history, avoiding brittle file-based state as content volume grows.",
    ],
    proof: ["Architecture", "Data Flow", "Tradeoff", "Scale"],
    architecture: [
      "Student",
      "Next.js App",
      "NestJS API",
      "FastAPI AI",
      "OpenAI API",
      "PostgreSQL",
    ],
    flow:
      "Students request a chapter experience through Next.js, NestJS coordinates permissions and content, FastAPI handles AI generation, and PostgreSQL stores chapters plus generation state.",
    tradeoff:
      "Chose service separation over a single monolith so AI workloads can evolve independently without destabilizing academic CRUD endpoints.",
  },
  {
    title: "Multi-Tenant API Platform",
    slug: "multi-tenant-api-platform",
    description:
      "Organization-scoped API platform for projects and tasks with authentication, validation, observability, and deployment discipline.",
    status: "Live",
    tags: ["NestJS", "JWT", "PostgreSQL", "Prisma", "TypeScript", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/abdulsalamhassan/Orchard-API" }],
    bullets: [
      "Implemented organization-scoped access boundaries so project and task queries resolve against tenant context instead of trusting client-supplied identifiers.",
      "Combined Prisma validation, DTO constraints, and Swagger documentation to reduce contract drift across authenticated endpoints.",
      "Added Winston logging and pagination to make operational debugging and list performance predictable as tenant data grows.",
      "Containerized the service with Docker for reproducible environments across development and deployment.",
    ],
    proof: ["Tradeoff", "Constraint", "Failure Handling"],
    architecture: [
      "Client",
      "NestJS API",
      "JWT Guard",
      "Prisma",
      "PostgreSQL",
    ],
    flow:
      "Requests enter through authenticated NestJS controllers, tenant context is enforced in the service layer, and Prisma persists organization-scoped records to PostgreSQL.",
    tradeoff:
      "Enforced tenant isolation in backend logic rather than UI convention because authorization bugs are infrastructure failures, not presentation issues.",
  },
  {
    title: "Issue Tracker & Project Management System",
    slug: "issue-tracker-and-project-management-system",
    description:
      "Full-stack issue tracking system built around modular interfaces, RBAC, and project-state visibility for engineering teams.",
    status: "Prototype",
    tags: ["Node.js", "Express.js", "Next.js", "MongoDB", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/abdulsalamhassan/DevTrack" }],
    bullets: [
      "Designed RBAC boundaries so project actions map to role permissions instead of scattered frontend checks, tightening control over operational workflows.",
      "Used a modular Next.js frontend to keep issue views, project controls, and status updates maintainable as the interface expanded.",
      "Designed a MongoDB schema for user profiles and message history that favors flexible iteration without forcing early relational complexity.",
      "Focused the system on real team coordination constraints, balancing project visibility with a lightweight stack suitable for rapid iteration.",
    ],
    proof: ["Tradeoff", "Data Flow", "Constraint"],
    architecture: ["User", "Next.js UI", "Express API", "RBAC Layer", "MongoDB"],
    flow:
      "Project updates move from the Next.js interface through Express authorization rules into MongoDB, where issue state and team activity are stored for retrieval.",
    tradeoff:
      "Chose MongoDB for schema flexibility during product shaping, accepting looser relational guarantees in exchange for faster workflow iteration.",
  },
];

export const EDUCATION = {
  degree: "BSc Computer Science",
  university: "SIMAD University",
  expected: "Expected: 2028",
  relevant:
    "Relevant: Data Structures, Algorithms, Operating Systems, Database Systems",
  courses: [
    "Full-Stack Development — Coursera",
    "Backend Development with NestJS — Udemy",
    "SQL & PostgreSQL Fundamentals — Udemy",
    "Generative AI for Software Development — Coursera",
  ],
};
