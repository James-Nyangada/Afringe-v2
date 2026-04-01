import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IT Solutions & Cybersecurity Company in Kenya | Afringe Limited",
  description: "Afringe Limited delivers enterprise IT solutions, cybersecurity, CCTV installation, business automation, and fullstack software development in Nairobi, Kenya.",
  keywords: ["IT solutions Kenya", "cybersecurity company Nairobi", "CCTV installation Kenya", "IT company Kenya", "government IT services Kenya"],
  openGraph: {
    title: "IT Solutions & Cybersecurity Company in Kenya | Afringe Limited",
    description: "Enterprise IT, cybersecurity and software development in Kenya",
    url: "https://www.afringelimited.co.ke",
    siteName: "Afringe Limited",
    locale: "en_KE",
    type: "website",
  },
  alternates: { canonical: 'https://www.afringelimited.co.ke' }
};
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Sectors />
      <WhyChooseUs />
      <Process />
      <Team />
      <Newsletter />
      <Footer />
    </main>
  );
}
