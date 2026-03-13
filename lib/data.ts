import {
    Github,
    Linkedin,
    Mail,
    Server,
    Layout,
    Brain,
    Wrench,
    BookOpen,
    Sparkles,
    Database,
    GraduationCap
} from "lucide-react";

export const SITE_CONFIG = {
    name: "Abdulsalam Hassan Shiikhow",
    title: "Full-Stack Software Engineer | Scalable Web & AI Systems",
    description: "I am a Full-Stack Software Engineer focused on building scalable, production-ready web applications and AI-enabled systems. I prioritize strong fundamentals, clean architecture, and maintainable code.",
    email: "abdulsalam.shiikhow@gmail.com",
    github: "https://github.com/abdulsalamhassan",
    linkedin: "https://www.linkedin.com/in/abdulsalamhassan11/",
    profileImage: "/profile.jpg",
    interviewVideo: "https://www.facebook.com/share/v/17ETcRR4kY/",
};

export const TECH_STACK = [
    {
        category: "Backend Engineering",
        icon: Server,
        iconColor: "text-blue-600 dark:text-blue-400",
        skills: ["TypeScript", "NestJS", "PostgreSQL", "Prisma", "REST APIs", "MongoDB"],
        colorClass: "blue"
    },
    {
        category: "Frontend Development",
        icon: Layout,
        iconColor: "text-purple-600 dark:text-purple-400",
        skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "React Query"],
        colorClass: "purple"
    },
    {
        category: "AI / Data",
        icon: Brain,
        iconColor: "text-amber-600 dark:text-amber-400",
        skills: ["Python", "FastAPI", "LLMs", "Embeddings"],
        colorClass: "amber"
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        iconColor: "text-gray-600 dark:text-gray-400",
        skills: ["Git & GitHub", "Docker", "VS Code", "Postman"],
        colorClass: "gray"
    }
];

export const PROJECTS = [
    {
        title: "UniMind — AI Academic Assistant",
        description: "AI-Powered Academic Infrastructure Transforming static course materials into structured, interactive, chapter-level learning experiences using retrieval-augmented intelligence.",

        tags: ["NestJS", "Python (fastAPI)", "OpenAI API", "PostgreSQL", "Next.js", "Tailwind", "Docker"],
        link: "https://github.com/abdulsalamhassan/UniMind",
        bullets: [
            "Architected an AI-powered academic platform that transforms static course materials into structured interactive chapter-level learning experiences using Retrieval-Augmented Generation (RAG)",
            " Built a NestJS backend and a FastAPI AI microservice, connected via a clean service layer with PostgreSQL for persistence.",
            "Deployed via Docker with a Next.js frontend hosted on Vercel; lecturer-approved AI assistance foruniversity students."
        ]
    },
    {
        title: "Multi-Tenant API Platform",
        description: "Multi-tenant REST API built with NestJS, Prisma, and PostgreSQL with JWT auth, organization-scoped projects/tasks CRUD, pagination, validation, Swagger docs, and Winston logging.",
        tags: ["NestJS", "JWT", "PostgreSQL", "Prisma", "TypeScript", "Docker"],
        link: "https://github.com/abdulsalamhassan/Orchard-API",
        bullets: [
            " Designed and implemented a robust multi-tenant REST API using NestJS, Prisma, and PostgreSQL, featuring JWT authentication and organization-scoped CRUD operations for projects and tasks.",
            "Multi-tenant REST API built with NestJS, Prisma, and PostgreSQL with JWT auth, organizationscoped projects/tasks CRUD, pagination, validation, Swagger docs, and Winston logging.",
            "Containerized the application using Docker for consistent development and deployment environments."
        ]
    },
    {
        title: "Issue Tracker & Project Management System",
        description: "Full-stack issue tracking system with project management, role-based access control, and real-time status updates, built with a modular frontend and scalable backend architecture.",
        tags: ["NodeJs", "ExpressJs", "NextJs", "MongoDB", "Tailwind"],
        link: "https://github.com/abdulsalamhassan/DevTrack",
        bullets: [
            "Designed and built a full-stack issue tracking system with project management, role-based access control (RBAC), and real-time status updates.",
            "Implemented a modular frontend architecture using Next.js and Tailwind CSS, ensuring a responsive and intuitive user interface.",
            "Designed a MongoDB schema to store message history and user profiles efficiently."
        ]
    }
];

export const EDUCATION = {
    degree: "BSc Computer Science",
    university: "SIMAD University",
    graduation: "Expected Graduation: 2028",
    courses: [
        {
            name: "FullStack Development Specialization",
            platform: "Coursera",
            icon: GraduationCap
        },
        {
            name: "Backend Development with NestJS",
            platform: "Udemy",
            icon: BookOpen
        },
        {
            name: "SQL & PostgreSQL Fundamentals",
            platform: "Udemy",
            icon: Database
        },
        {
            name: "Generative AI for Software Development",
            platform: "Coursera",
            icon: Sparkles
        }
    ]
};
