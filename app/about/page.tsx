import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutSolutions } from "@/components/about/AboutSolutions";
import { AboutTestimonials } from "@/components/about/AboutTestimonials";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutNewsletter } from "@/components/about/AboutNewsletter";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Navbar theme="dark" />
      <AboutHero />
      <AboutIntro />
      <AboutSolutions />
      <AboutTestimonials />
      <AboutTeam />
      <AboutNewsletter />
      <Footer />
    </main>
  );
}
