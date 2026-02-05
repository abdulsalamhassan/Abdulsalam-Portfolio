import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    bullets: string[];
}

export function ProjectCard({ title, description, tags, link, bullets }: ProjectCardProps) {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200">
            {/* Header */}
            <div className="mb-4">
                <div className="flex    items-start justify-between gap-4 mb-2">
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 flex-1"
                    >
                        <h3 className="text-lg dark:text-gray-100 font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {title}
                        </h3>
                        <ExternalLink size={16} className="text-gray-400 dark:text-gray-600 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors" />
                    </Link>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-medium text-blue-700 dark:text-blue-50 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-100 dark:border-blue-900"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Bullet Points */}
            <div className="border-t border-gray-100  dark:border-gray-700 pt-4">
                <ul className="space-y-2.5">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex dark:text-gray-50 items-start gap-3 text-sm text-gray-700 dark:text-gray-400">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
