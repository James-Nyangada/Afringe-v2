import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IT Projects & Case Studies in Kenya | Afringe Limited Portfolio",
  description: "View Afringe's enterprise IT deployments — from zero-trust cybersecurity for banks to cloud infrastructure scaling and business automation for logistics firms in Kenya.",
  alternates: { canonical: 'https://www.afringelimited.co.ke/projects' }
};
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
