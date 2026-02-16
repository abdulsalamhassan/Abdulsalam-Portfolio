import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { FeaturedProjects } from "@/components/featured-projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Hero />
      <About />

      <Separator className="opacity-40 bg-black dark:bg-white" />

      <TechStack />

      <Separator className="opacity-40 bg-black dark:bg-white" />

      <FeaturedProjects />

      <Separator className="opacity-40 bg-black dark:bg-white" />

      <Education />

      <Separator className="opacity-40 bg-black dark:bg-white" />

      <Contact />

      <Separator className="opacity-40 bg-black dark:bg-white" />

      <Footer />
    </div>
  );
}
