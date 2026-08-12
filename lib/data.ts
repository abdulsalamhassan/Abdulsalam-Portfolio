export const SITE_CONFIG = {
  name: "Abdulsalam Hassan Shiikhow",
  role: "AI Product Engineer | LLM, RAG & Backend Systems",
  roleShort: "AI Product Engineer",
  roleSubline: "LLM · RAG · Backend Systems",
  heroLabel: "AI PRODUCT ENGINEER",
  tagline: "I build reliable AI and backend systems for universities, healthcare, and enterprise operations.",
  location: "Mogadishu, Somalia",

  identity: "AI Product Engineer building production LLM, RAG, backend, and enterprise systems.",

  description:
    "Portfolio of Abdulsalam Hassan Shiikhow, an AI Software Engineer and AI Product Engineer building production-oriented LLM applications, RAG systems, backend platforms, and institutional software.",

  email: "abdulsalam.shiikhow@gmail.com",
  github: "https://github.com/abdulsalamhassan",
  linkedin: "https://www.linkedin.com/in/abdulsalamhassan11/",

  profileImage: "/profile.jpg",

  universityStory: "https://simad.edu.so/posts/simad-university-abdulsalam-hassan-success-story",
  interviewVideo: "https://www.facebook.com/reel/842931364840192",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdulsalamh.vercel.app/",
};

export const PROFILE_FACTS = {
  focus: "LLM applications, RAG & backend systems",
  base: "Mogadishu, Somalia",
  current: "AI Product Engineer — SIMAD AI Institute",
};

export const HERO_METRICS = [
  { value: "8,000+", label: "Patient records", note: "Production healthcare" },
  { value: "700+", label: "University staff", note: "Workforce platform" },
  { value: "~1,100", label: "Exam contexts", note: "AI moderation" },
];

export const ABOUT_PARAGRAPHS = [
  "I am an AI Product Engineer and Software Engineer focused on building production-oriented AI applications, backend systems, and enterprise platforms. My work spans LLM applications, Retrieval-Augmented Generation (RAG), document intelligence, structured AI workflows, and reliable backend architecture.",

  "At SIMAD AI Institute, I architect and build institutional AI products, including an AI-assisted examination moderation platform and UniMind, a RAG-based learning system. Beyond AI, I have independently engineered production systems including a healthcare platform managing 8,000+ patient records and a workforce platform designed for 700+ university staff.",

  "I am currently pursuing a Bachelor of Computer Science at SIMAD University while continuing to build production software, lead engineering work, and deepen my expertise in AI systems, backend architecture, and reliable intelligent applications.",
];

export const HERO_BADGES = ["Python", "FastAPI", "OpenAI", "RAG", "PGVector", "NestJS", "PostgreSQL", "TypeScript", "Docker"];

export const TECH_STACK = [
  {
    category: "AI Systems",
    skills: ["Retrieval-Augmented Generation", "LLM Applications", "Embeddings", "Structured Outputs", "Human-in-the-Loop AI"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "NestJS", "PostgreSQL", "Prisma", "REST APIs"],
  },
  {
    category: "Product",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Railway", "Vercel", "Nginx", "GitHub Actions"],
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

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  status: "Production" | "Pilot" | "In Development" | "Prototype" | "Completed";
  featured?: boolean;
  eyebrow?: string;
  metric?: ProjectMetric;
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
    title: "SIMAD AI Examination Moderation Platform",
    slug: "simad-ai-exam-moderation",
    description:
      "AI-assisted academic quality assurance platform that evaluates examination documents against formal moderation criteria while preserving deterministic evidence verification and human committee authority.",
    status: "Pilot",
    featured: true,
    eyebrow: "FLAGSHIP AI SYSTEM",
    metric: { value: "~1,100", label: "Course/exam contexts" },
    tags: ["OpenAI", "LLM", "Document AI", "NestJS", "Next.js", "PostgreSQL", "Human-in-the-Loop"],
    links: [],
    bullets: [
      "Architected and independently developed the system end-to-end for SIMAD University's examination moderation workflow.",
      "Designed structured AI evaluation using examination documents, course context, formal moderation criteria, and schema-validated LLM outputs.",
      "Implemented deterministic verification of AI-proposed evidence, provenance tracking, prompt-injection warnings, reliability classification, and fail-closed behavior.",
      "Preserved human committee authority by separating AI-generated evidence from final PASS / REVISE / REJECT decisions.",
      "Designed the platform for approximately 1,100 course and examination contexts across university faculties.",
    ],
    proof: ["Architecture", "Data Flow", "Failure Handling", "Scale", "Constraint"],
    architecture: [
      "Exam Documents",
      "Extraction",
      "Course Context",
      "OpenAI",
      "Structured Evidence",
      "Verification Layer",
      "Committee Review",
    ],
    flow:
      "Exam documents and academic context are assembled for LLM evaluation, converted into structured evidence, deterministically verified against source material, then presented to committee members for final academic judgment.",
    tradeoff:
      "The system deliberately treats model output as untrusted evidence rather than allowing the LLM to make academic decisions directly.",
  },
  {
    title: "UniMind — AI Learning & RAG Platform",
    slug: "unimind",
    description:
      "RAG-based learning platform that transforms lecture documents into grounded Q&A, summaries, quizzes, mind maps, and personalized learning resources.",
    status: "Completed",
    tags: ["RAG", "FastAPI", "OpenAI", "Gemini", "PGVector", "Embeddings", "NestJS", "PostgreSQL"],
    links: [],
    bullets: [
      "Co-developed a three-person AI learning platform combining NestJS application services with a dedicated FastAPI AI microservice.",
      "Implemented token-aware document chunking targeting roughly 400–500 tokens with overlap for more precise retrieval.",
      "Used OpenAI text-embedding-3-small embeddings with semantic vector retrieval for grounded learning workflows.",
      "Designed structured RAG responses containing answers, confidence levels, and evidence references.",
      "Supported OpenAI and Gemini providers across AI workflows including RAG, summaries, quizzes, and learning-content generation.",
    ],
    proof: ["Architecture", "Data Flow", "Tradeoff", "Scale"],
    architecture: [
      "Lecture PDF",
      "Document Processing",
      "Token Chunking",
      "Embeddings",
      "PGVector",
      "Semantic Retrieval",
      "LLM",
    ],
    flow:
      "Lecture content is extracted, chunked and embedded, retrieved semantically from the vector store, then passed as evidence to the selected LLM for structured grounded generation.",
    tradeoff: "Separated the AI workload into FastAPI rather than coupling generation logic directly to the NestJS application layer.",
  },
  {
    title: "DAS Health — Healthcare Management Platform",
    slug: "das-health",
    description:
      "Production healthcare information system supporting patient registration, screening, surgery workflows, follow-ups, and operational healthcare management for DirectAid Somalia.",
    status: "Production",
    metric: { value: "8,000+", label: "Patient records" },
    tags: ["Healthcare", "Next.js", "PostgreSQL", "Production", "Full-Stack"],
    links: [],
    bullets: [
      "Independently engineered the platform end-to-end.",
      "Currently manages 8,000+ patient records in active healthcare operations.",
      "Designed operational workflows spanning patient registration, screening, surgery/treatment processes, follow-ups, and reporting.",
      "Built the system around persistent patient histories and operational traceability rather than isolated transactional forms.",
    ],
    proof: ["Architecture", "Scale", "Constraint"],
    architecture: ["Healthcare Staff", "Application", "Backend Services", "Patient Records", "Operational Workflows", "Database"],
    flow:
      "Healthcare teams manage patients through registration, screening, treatment and follow-up workflows while maintaining a persistent longitudinal record.",
    tradeoff: "Prioritized operational reliability and longitudinal patient records over feature-heavy UI complexity.",
  },
  {
    title: "SIMAD Workforce Management Platform",
    slug: "simad-workforce",
    description:
      "Institutional workforce platform designed for 700+ university staff across attendance, multi-campus operations, performance management, approvals, and reporting.",
    status: "Pilot",
    metric: { value: "700+", label: "University staff" },
    tags: ["NestJS", "Next.js", "PostgreSQL", "React Native", "Workforce", "Enterprise"],
    links: [],
    bullets: [
      "Independently architected and engineered the platform end-to-end.",
      "Designed for 700+ SIMAD University staff across multiple campuses.",
      "Built attendance workflows around geofencing, check-in/check-out, campus movement, approvals, and administrative reporting.",
      "Extended the platform into evidence-based staff performance and institutional workforce workflows.",
    ],
    proof: ["Architecture", "Scale", "Constraint"],
    architecture: ["Staff Mobile App", "API", "Geofence / Attendance", "Workforce Services", "Management Web", "PostgreSQL"],
    flow:
      "Staff interact through the mobile application while workforce events flow into the backend and management portal for approvals, oversight, and reporting.",
    tradeoff: "Separated staff interaction from management workflows to keep mobile usage simple while preserving stronger administrative controls.",
  },
  {
    title: "Dersify — AI-Native Personalized Learning",
    slug: "dersify",
    description:
      "AI-native education product designed around persistent learner modeling, diagnostic learning paths, retrieval practice, spaced repetition, and adaptive AI feedback.",
    status: "In Development",
    tags: ["AI", "Personalized Learning", "NestJS", "Next.js", "PostgreSQL", "PGVector", "Anthropic", "OpenAI"],
    links: [],
    bullets: [
      "Designed the product around a persistent learner model rather than one-off AI tutoring interactions.",
      "Combined diagnostic learning maps, retrieval practice, spaced repetition, and error-driven adaptation into the product architecture.",
      "Designed a NestJS / Next.js / PostgreSQL architecture with AI provider abstraction, queues, vector search, and asynchronous learning workflows.",
      "Structured the platform for long-term learner state and adaptive learning rather than stateless prompt-response sessions.",
    ],
    proof: ["Architecture", "Tradeoff", "Scale"],
    architecture: ["Learner", "Diagnostic Model", "Learning Map", "AI Engine", "Learner State", "Spaced Repetition", "Adaptive Feedback"],
    flow: "Learner performance updates a persistent learner model, which drives future content selection, retrieval practice, scheduling, and AI feedback.",
    tradeoff: "Chose persistent learner modeling over generic chatbot tutoring because personalization requires longitudinal state.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period?: string;
  location?: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "AI Product Engineer",
    company: "SIMAD AI Institute",
    period: "May 2026 — Present",
    location: "Mogadishu, Somalia",
    bullets: [
      "Architect and develop institutional AI products from problem discovery and system design through implementation and stakeholder delivery.",
      "Independently developed SIMAD's AI-assisted Examination Moderation Platform, combining document intelligence, structured LLM evaluation, deterministic evidence verification, and human committee review.",
      "Co-developed UniMind, a RAG-based learning platform using FastAPI, embeddings, semantic retrieval, PGVector, OpenAI, and Gemini.",
      "Independently engineered a workforce platform designed for 700+ university staff across attendance, performance, approvals, and reporting.",
    ],
  },
  {
    role: "Lead Engineer",
    company: "ACCO Ltd",
    period: "June 2026 — Present",
    location: "Mogadishu, Somalia",
    bullets: [
      "Lead engineering team developing an enterprise construction ERP.",
      "Own architecture and key technical decisions across NestJS, Next.js, PostgreSQL, Prisma, RBAC, workflows, and auditability.",
      "Translate construction operations into software workflows spanning contracts, BOQ, procurement, inventory, progress certification, IPC, and finance.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "DevLink",
    period: "November 2025 — August 2026",
    location: "Remote",
    bullets: [
      "Contributed to full-stack web application development across frontend, backend, APIs, and data integration.",
      "Worked in a remote engineering environment using modern JavaScript and TypeScript technologies.",
    ],
  },
];

export type RecognitionEntry = {
  title: string;
  source: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const RECOGNITION: RecognitionEntry[] = [
  {
    title: "From First-Year Student to Full-Stack Developer",
    source: "SIMAD University × SIMAD NextGen",
    description:
      "Featured by SIMAD University after progressing into professional Full-Stack Development while still in my first year of Computer Science. The university highlighted the journey as an example of disciplined self-learning, persistence, and making full use of university opportunities.",
    ctaLabel: "Watch University Interview",
    href: "https://www.facebook.com/reel/842931364840192",
  },
  {
    title: "From Self-Taught Developer to AI Product Engineer",
    source: "SIMAD University",
    description:
      "Featured again by SIMAD University during my second year after progressing from Full-Stack Development into AI Product Engineering and applying software and AI skills to real institutional systems.",
    ctaLabel: "Read Success Story",
    href: "https://simad.edu.so/posts/simad-university-abdulsalam-hassan-success-story",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Science",
  university: "SIMAD University",
  period: "2024 — 2028",
  expected: "2028",
  gpa: "3.67 / 4.00",
  level: "Year 3",
  certifications: ["AI Engineering Specialization", "Full-Stack Development Specialization — Coursera"],
};
