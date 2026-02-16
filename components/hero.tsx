import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Hero() {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            {/* Profile Image */}
            <div className="shrink-0">
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-lg grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                        src={SITE_CONFIG.profileImage}
                        alt={SITE_CONFIG.name}
                        quality={100}
                        fill
                        priority
                        sizes="(min-width: 640px) 12rem, 8rem"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-5 flex-1 min-w-0">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight md:text-4xl dark:text-white sm:whitespace-nowrap">
                        {SITE_CONFIG.name}
                    </h1>
                    <p className="text-sm md:text-md text-gray-600 font-medium sm:whitespace-nowrap">
                        {SITE_CONFIG.title}
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-medium justify-center sm:justify-start">
                    <Link
                        href={SITE_CONFIG.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all"
                    >
                        <Github size={16} />
                        GitHub
                    </Link>
                    <Link
                        href={SITE_CONFIG.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all"
                    >
                        <Linkedin size={16} />
                        LinkedIn
                    </Link>
                    <Link
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200 transition-all border border-gray-200 dark:border-gray-700"
                    >
                        <Mail size={16} />
                        Email
                    </Link>
                </div>
            </div>
        </header>
    );
}
