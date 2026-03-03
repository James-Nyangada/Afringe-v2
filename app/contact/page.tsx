import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntake } from "@/components/contact/ContactIntake";
import { ContactCoordinates } from "@/components/contact/ContactCoordinates";
import { ContactNewsletter } from "@/components/contact/ContactNewsletter";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-midnight">
      <Navbar theme="dark" />
      <ContactHero />
      <ContactIntake />
      <ContactCoordinates />
      <ContactNewsletter />
      <Footer />
    </main>
  );
}
