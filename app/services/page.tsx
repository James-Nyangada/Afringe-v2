import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "IT Services in Kenya | Cybersecurity, Software, CCTV & More | Afringe Limited",
  description: "Afringe offers cybersecurity, business automation, CCTV & camera installation, hardware integration, web development, mobile apps, and managed IT services across Kenya.",
  alternates: { canonical: 'https://www.afringelimited.co.ke/services' }
};
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesBento } from "@/components/services/ServicesBento";
import { ServicesMatrix } from "@/components/services/ServicesMatrix";
import { ServicesNewsletter } from "@/components/services/ServicesNewsletter";

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Navbar theme="dark" />
      <ServicesHero />
      <ServicesBento />
      <ServicesMatrix />
      <ServicesNewsletter />
      <Footer />
    </main>
  );
}
