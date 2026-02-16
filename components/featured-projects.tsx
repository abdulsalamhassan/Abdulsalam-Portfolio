import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/lib/data";

export function FeaturedProjects() {
    return (
        <Section title="Featured Projects">
            <div className="space-y-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </Section>
    );
}
