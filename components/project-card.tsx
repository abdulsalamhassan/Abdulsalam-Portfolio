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
        <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
            {/* Header */}
            <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 flex-1"
                    >
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {title}
                        </h3>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-700 transition-colors" />
                    </Link>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Bullet Points */}
            <div className="border-t border-gray-100 pt-4">
                <ul className="space-y-2.5">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                            <span className="leading-relaxed">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
