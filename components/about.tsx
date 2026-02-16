import { Section } from "@/components/section";

export function About() {
    return (
        <Section title="About Me">
            <p className="text-lg leading-8 text-gray-800 dark:text-gray-300 font-normal">
                I am a Full-Stack Software Engineer focused on{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    on building scalable, production-ready web applications
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    AI-enabled systems
                </strong>
                . I prioritize strong fundamentals, clean architecture, and maintainable
                code. Currently, I am building scalable applications with{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    TypeScript
                </strong>
                ,{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    React/NextJS
                </strong>
                ,{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    NestJS
                </strong>
                ,{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    PostgreSQL
                </strong>
                , and{" "}
                <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    Python
                </strong>
                .
            </p>
        </Section>
    );
}
