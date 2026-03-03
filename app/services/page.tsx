import { Navbar } from "@/components/Navbar";
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
