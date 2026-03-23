import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
