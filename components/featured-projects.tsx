import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/data";

export function FeaturedProjects() {
  const featuredProject = PROJECTS.find((project) => project.featured);
  const standardProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <Section number="03" label="03 — WORK" title="Systems work with clear engineering decisions.">
      <div id="work" className="projects-shell">
        {featuredProject ? <ProjectCard project={featuredProject} /> : null}

        <div className="project-grid">
          {standardProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              compact
              lastHalf={standardProjects.length % 2 === 1 && index === standardProjects.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
