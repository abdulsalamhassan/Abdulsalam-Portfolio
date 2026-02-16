import { FadeIn } from "@/components/fade-in";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
    return (
        <section className="flex flex-col gap-6">
            <FadeIn>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider relative inline-block">
                    {title}
                    <span className="absolute -bottom-1 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
                </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
                {children}
            </FadeIn>
        </section>
    );
}
