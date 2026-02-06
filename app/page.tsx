import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Layout,
  Brain,
  Wrench,
  GraduationCap,
  BookOpen,
  Sparkles,
  Database,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg grayscale hover:grayscale-0 transition-all duration-300">
            <img
              src="/profile.jpg"
              alt="Abdulsalam Hassan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-5 flex-1">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight md:text-4xl dark:text-white whitespace-nowrap">
              Abdulsalam Hassan Shiikhow
            </h1>
            <p className="text-sm md:text-md text-gray-600 font-medium mt-2 whitespace-nowrap">
              Computer Science Student | FullStack Software Engineer
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href="https://github.com/abdulsalamhassan"
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all"
            >
              <Github size={16} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdulsalamhassan11/"
              target="_blank"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all"
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
            <Link
              href="mailto:abdulsalam.shiikhow@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 transition-all border border-gray-200 dark:border-gray-700"
            >
              <Mail size={16} />
              Email
            </Link>
          </div>
        </div>
      </header>

      {/* About */}
      <Section title="About Me">
        <p className="text-lg leading-8 text-gray-800 dark:text-gray-300 font-normal">
          I am a computer science student focused on <strong className="font-semibold text-gray-900 dark:text-gray-100">FullStack Software Engineering</strong> and <strong className="font-semibold text-gray-900 dark:text-gray-100">AI-enabled systems</strong>.
          I prioritize fundamentals, clean architecture, and production-ready code.
          Currently, I am building scalable applications with <strong className="font-semibold text-gray-900 dark:text-gray-100">TypeScript</strong>, <strong className="font-semibold text-gray-900 dark:text-gray-100">React/NextJS</strong>, <strong className="font-semibold text-gray-900 dark:text-gray-100">NestJS</strong>, <strong className="font-semibold text-gray-900 dark:text-gray-100">PostgreSQL</strong>, and <strong className="font-semibold text-gray-900 dark:text-gray-100">Python</strong>.
        </p>
      </Section>

      <Separator className="opacity-40 bg-black dark:bg-white" />

      {/* Skills */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-sm uppercase tracking-wide mb-4">
              <Server size={18} className="text-blue-600 dark:text-blue-400" />
              <h3>Backend Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "NestJS", "PostgreSQL", "Prisma", "REST APIs", "MongoDB"].map((s) => (
                <Badge key={s} variant="secondary" className="font-normal bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-100 dark:border-blue-800">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-sm uppercase tracking-wide mb-4">
              <Layout size={18} className="text-purple-600 dark:text-purple-400" />
              <h3>Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Tailwind CSS", "React Query",].map((s) => (
                <Badge key={s} variant="secondary" className="font-normal dark:bg-purple-900/30 dark:hover:bg-purple-900/50 dark:text-purple-300 bg-purple-50 text-purple-800 hover:bg-purple-100 dark:hover:text-purple-200 border border-purple-100 dark:border-purple-800">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-sm uppercase tracking-wide mb-4">
              <Brain size={18} className="text-amber-600 dark:text-amber-400" />
              <h3>AI / Data</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "LLMs", "Embeddings"].map((s) => (
                <Badge key={s} variant="secondary" className="font-normal dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:hover:text-amber-200 border border-amber-100 dark:border-amber-400">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all">
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold text-sm uppercase tracking-wide mb-4">
              <Wrench size={18} className="text-gray-600 dark:text-gray-400" />
              <h3>Tools & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Git & GitHub", "Docker", "VS Code", "Postman"].map((s) => (
                <Badge key={s} variant="secondary" className="font-normal dark:bg-gray-900/30 dark:hover:bg-gray-900/50 dark:text-gray-300 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:hover:text-gray-200 border border-gray-100 dark:border-gray-100">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Separator className="opacity-40 bg-black dark:bg-white" />

      {/* Projects */}
      <Section title="Featured Projects">
        <div className="space-y-6">
          <ProjectCard
            title="AI-Powered Content Platform"
            description="A scalable platform generating personalized content using LLMs."
            tags={["NestJS", "Python", "OpenAI API", "PostgreSQL"]}
            link="https://github.com/abdulsalamhassan"
            bullets={[
              "Architected a microservices-based backend using NestJS for core logic and Python FastAPI for AI processing.",
              "Integrated OpenAI's GPT-4 API to generate dynamic text based on user preferences.",
              "Implemented efficient queue-based processing with Redis to handle high-concurrency requests."
            ]}
          />
          <ProjectCard
            title="E-Commerce API with Caching"
            description="High-performance backend API for an online retail system."
            tags={["Node.js", "Express", "Redis", "Docker"]}
            link="https://github.com/abdulsalamhassan"
            bullets={[
              "Developed RESTful endpoints for product management, user authentication, and order processing.",
              "Optimized database queries and implemented Redis caching, reducing response times by 40%.",
              "Containerized the application using Docker for consistent development and deployment environments."
            ]}
          />
          <ProjectCard
            title="Real-time Chat Application"
            description="Full-stack chat app with real-time messaging capabilities."
            tags={["React", "Socket.io", "MongoDB", "Tailwind"]}
            link="https://github.com/abdulsalamhassan"
            bullets={[
              "Built a responsive frontend using React and Tailwind CSS for a seamless user experience.",
              "Implemented real-time bi-directional communication using Socket.io.",
              "Designed a MongoDB schema to store message history and user profiles efficiently."
            ]}
          />
        </div>
      </Section>

      <Separator className="opacity-40 bg-black dark:bg-white" />

      {/* Education */}
      <Section title="Education">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
              <GraduationCap size={24} className="text-gray-700" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">BSc Computer Science</h3>
              <p className="text-gray-700 font-medium dark:text-gray-100">SIMAD University</p>
              <p className="text-sm text-gray-500 mt-1 dark:text-gray-100">Expected Graduation: 2028</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 dark:text-gray-100">Selected Online Coursework</h3>
            <div className="grid grid-cols-1 gap-3">

              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:bg-gray-800 hover:border-blue-200 transition-all">
                <div className="p-2 bg-blue-100 rounded-md">
                  <BookOpen size={18} className="text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm dark:text-gray-100">Backend Development with NestJS</p>
                  <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-100">Udemy</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:bg-gray-800 hover:border-blue-200 transition-all">
                <div className="p-2 bg-blue-100 rounded-md">
                  <Database size={18} className="text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm dark:text-gray-100">SQL & PostgreSQL Fundamentals</p>
                  <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-100">Coursera</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-100 dark:bg-gray-800 hover:border-blue-200 transition-all">
                <div className="p-2 bg-blue-100 rounded-md">
                  <Sparkles size={18} className="text-blue-700" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm dark:text-gray-100">Generative AI for Software Development</p>
                  <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-100">Coursera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Separator className="opacity-40 bg-black dark:bg-white" />

      {/* Contact */}
      <Section title="Get in Touch">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 text-center">
          <p className="text-gray-700 mb-4 dark:text-gray-100">
            I am always open to discussing FullStack systems, AI systems, or new opportunities.
          </p>
          <a
            href="mailto:abdulsalam.shiikhow@gmail.com?subject=Hello%20Abdulsalam!&body=Hi%20Abdulsalam%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out.%0A%0A"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-black transition-all shadow-sm transform hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </Section>
      <Separator className="opacity-40 bg-black dark:bg-white" />

      <footer className="text-xs text-center text-gray-400 mt-20 pb-8">
        <p>&copy; {new Date().getFullYear()} Abdulsalam Hassan. FullStack Engineer.</p>
      </footer>
    </div>
  );
}
