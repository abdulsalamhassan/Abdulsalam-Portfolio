import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Recognition } from "@/components/recognition";
import { Sidebar } from "@/components/sidebar";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Recognition />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
