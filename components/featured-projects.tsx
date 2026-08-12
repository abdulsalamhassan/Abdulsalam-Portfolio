import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { PROJECTS } from "@/lib/data";

export function FeaturedProjects() {
  const featuredProject = PROJECTS.find((project) => project.featured);
  const standardProjects = PROJECTS.filter((project) => !project.featured);

  return (
    <Section id="work" eyebrow="Selected Work" title="Production systems built for real institutions.">
      <div className="projects-stack">
        {featuredProject ? <ProjectCard project={featuredProject} /> : null}

        <div className="projects-duo">
          {standardProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
