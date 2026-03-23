import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/data";

export function FeaturedProjects() {
  const featuredProject = PROJECTS.find((project) => project.featured);
  const standardProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <Section number="03" label="03 — WORK" title="Systems work with clear engineering decisions.">
      <div id="work" className="space-y-6">
        {featuredProject ? <ProjectCard project={featuredProject} /> : null}

        <div className="grid gap-6 xl:grid-cols-2">
          {standardProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
