import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Afringe Limited | Leading IT Company in Nairobi, Kenya",
  description: "Learn about Afringe Limited — a Nairobi-based IT firm providing cybersecurity, network infrastructure, business automation, and software development to corporations and government bodies in Kenya and East Africa.",
  alternates: { canonical: 'https://www.afringelimited.co.ke/about' }
};
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
