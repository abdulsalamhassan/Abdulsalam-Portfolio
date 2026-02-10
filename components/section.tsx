import { ReactNode } from "react";

interface SectionProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
    return (
        <section className={`mb-12 ${className}`}>
            {title && (
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}
