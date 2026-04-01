import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const instrument = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Afringe Limited | IT Solutions & Cybersecurity',
  description: 'Empowering your digital transformation journey with strategic technology solutions.',
};

import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-midnight selection:bg-azure selection:text-white" suppressHydrationWarning>
        <svg className="noise-overlay">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Afringe Limited",
              "alternateName": "Afringe IT Solutions",
              "url": "https://www.afringelimited.co.ke",
              "logo": "https://www.afringelimited.co.ke/Afringe limited logo.png",
              "image": "https://www.afringelimited.co.ke/office-work.png",
              "description": "Afringe Limited is a Nairobi-based IT company offering cybersecurity, business automation, CCTV installation, hardware integration, software development, and managed IT services to businesses and government agencies in Kenya and East Africa.",
              "telephone": "+254720837270",
              "email": "info@afringe.co.ke",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.286389,
                "longitude": 36.817223
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              "priceRange": "KES",
              "areaServed": ["Kenya", "Uganda", "Tanzania", "Rwanda", "East Africa"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Solutions" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV & Camera Installation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hardware Integration" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website & Mobile App Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Privacy Compliance" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Network Infrastructure" } }
                ]
              },
              "sameAs": [
                "https://www.linkedin.com/company/afringe-limited",
                "https://twitter.com/afringelimited"
              ]
            })
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
