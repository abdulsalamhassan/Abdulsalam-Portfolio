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
        title: "AI-Powered Content Platform",
        description: "A scalable platform generating personalized content using LLMs.",
        tags: ["NestJS", "Python", "OpenAI API", "PostgreSQL"],
        link: "https://github.com/abdulsalamhassan",
        bullets: [
            "Architected a microservices-based backend using NestJS for core logic and Python FastAPI for AI processing.",
            "Integrated OpenAI's GPT-4 API to generate dynamic text based on user preferences.",
            "Implemented efficient queue-based processing with Redis to handle high-concurrency requests."
        ]
    },
    {
        title: "E-Commerce API with Caching",
        description: "High-performance backend API for an online retail system.",
        tags: ["Node.js", "Express", "Redis", "Docker"],
        link: "https://github.com/abdulsalamhassan",
        bullets: [
            "Developed RESTful endpoints for product management, user authentication, and order processing.",
            "Optimized database queries and implemented Redis caching, reducing response times by 40%.",
            "Containerized the application using Docker for consistent development and deployment environments."
        ]
    },
    {
        title: "Real-time Chat Application",
        description: "Full-stack chat app with real-time messaging capabilities.",
        tags: ["React", "Socket.io", "MongoDB", "Tailwind"],
        link: "https://github.com/abdulsalamhassan",
        bullets: [
            "Built a responsive frontend using React and Tailwind CSS for a seamless user experience.",
            "Implemented real-time bi-directional communication using Socket.io.",
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
