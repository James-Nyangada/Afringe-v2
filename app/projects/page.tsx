import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsLedger } from "@/components/projects/ProjectsLedger";
import { ProjectsCaseStudies } from "@/components/projects/ProjectsCaseStudies";
import { ProjectsTechStack } from "@/components/projects/ProjectsTechStack";
import { ProjectsNewsletter } from "@/components/projects/ProjectsNewsletter";

export default function ProjectsPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-midnight">
      <Navbar theme="dark" />
      <ProjectsHero />
      <ProjectsLedger />
      <ProjectsCaseStudies />
      <ProjectsTechStack />
      <ProjectsNewsletter />
      <Footer />
    </main>
  );
}
