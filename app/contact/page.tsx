import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Afringe Limited | IT Solutions & Cybersecurity Nairobi Kenya",
  description: "Get in touch with Afringe Limited's engineering team for IT consulting, cybersecurity audits, CCTV installation, or software development in Nairobi and across Kenya. Response within 2 hours.",
  alternates: { canonical: 'https://www.afringelimited.co.ke/contact' }
};
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
