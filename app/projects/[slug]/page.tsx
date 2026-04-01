import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const caseStudiesData = {
  "operation-sentinel": {
    title: "Operation Sentinel: Regional Bank Security Overhaul",
    metadataTitle: "Zero-Trust Cybersecurity Implementation for Bank in Kenya | Afringe",
    metadataDesc: "Afringe Limited deployed a zero-trust network architecture and endpoint detection for a regional bank in Kenya, achieving zero breaches and full NDPA compliance.",
    challenge: "The bank faced increasingly sophisticated targeted ransomware attacks attempting to compromise their core banking systems. The legacy antivirus solutions were ineffective against zero-day threats, and they were at risk of non-compliance with the Kenya Data Protection Act and international financial regulations.",
    solution: "Afringe Limited deployed a complete Zero-Trust network architecture. We replaced standard antivirus with advanced Endpoint Detection and Response (EDR) powered by AI behavioral analysis. Furthermore, we integrated a 24/7 Security Operations Center (SOC) to monitor all telemetry data across their branches in Kenya.",
    technologies: ["Zero-Trust Architecture", "CrowdStrike EDR", "Fortinet Firewalls", "24/7 Active SOC"],
    results: "Zero breaches since deployment. 100% compliance with NDPA and ODPC regulations. Millisecond threat resolution time across all 50+ branches."
  },
  "cloud-nexus": {
    title: "Cloud Nexus: High-Traffic Retail Scaling",
    metadataTitle: "Cloud Infrastructure Scaling & AWS Migration in Kenya | Afringe",
    metadataDesc: "Afringe Limited successfully migrated a high-traffic e-commerce platform in Kenya to an auto-scaling AWS cloud infrastructure, reducing load times by 65%.",
    challenge: "A leading Kenyan retail chain experienced critical system crashes during peak holiday sales due to legacy on-premise servers. The slow page load times were causing massive cart abandonment, and their infrastructure lacked the elastic scalability required for flash sales.",
    solution: "We orchestrated a zero-downtime migration of their entire legacy e-commerce platform to a fully automated, auto-scaling AWS cloud environment. We implemented robust load balancing, asset compression, and a distributed caching layer.",
    technologies: ["AWS Cloud", "Auto-Scaling Groups", "Next.js Web Development", "CloudFront CDN"],
    results: "Supported a 500% increase in concurrent traffic during Black Friday. Reduced average page load times by 65%. Maintained 100% uptime through the holiday sprint."
  },
  "automated-enterprise": {
    title: "Automated Enterprise: Logistics Workflow Integration",
    metadataTitle: "Business Automation & ERP Integration for Logistics Kenya | Afringe",
    metadataDesc: "Afringe modernized a major Kenyan logistics firm by automating procurement and HR workflows, integrating Sage ERP and MPESA payment systems.",
    challenge: "A major logistics firm in East Africa was severely bottlenecked by manual data entry, paper-based procurement, and disconnected HR systems. These data silos delayed reporting to the executive board and introduced costly human errors into financial reconciliation.",
    solution: "Afringe developed custom business automation software that seamlessly connected their disparate operations. We integrated their existing Sage ERP with custom web portals for vendor management and added MPESA API integration for automated payments and reconciliations.",
    technologies: ["Sage ERP Integration", "Business Process Automation", "MPESA API", "React & Node.js"],
    results: "Saved the team over 40 hours of manual data entry weekly. Centralized real-time analytics for the executive board. 100% data accuracy in financial reporting."
  }
};

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const data = caseStudiesData[params.slug as keyof typeof caseStudiesData];
  if (!data) return { title: 'Case Study Not Found' };

  return {
    title: data.metadataTitle,
    description: data.metadataDesc,
    alternates: { canonical: `https://www.afringelimited.co.ke/projects/${params.slug}` },
  };
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = caseStudiesData[params.slug as keyof typeof caseStudiesData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="dark" />
      <div className="bg-midnight pt-40 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/projects" className="text-azure uppercase tracking-widest font-mono text-xs mb-8 inline-block hover:underline">&larr; Back to Projects</Link>
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">{data.title}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-20 text-midnight text-lg leading-relaxed font-sans">
        
        <h2 className="text-2xl font-bold mb-4 font-sans text-midnight">The Challenge</h2>
        <p className="mb-12">{data.challenge}</p>

        <h2 className="text-2xl font-bold mb-4 font-sans text-midnight">Afringe&apos;s Solution</h2>
        <p className="mb-12">{data.solution}</p>

        <h2 className="text-2xl font-bold mb-4 font-sans text-midnight">Technologies Used</h2>
        <ul className="list-disc pl-6 mb-12 flex flex-col gap-2">
          {data.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 font-sans text-midnight">Results</h2>
        <div className="bg-titanium p-8 rounded-2xl border-l-4 border-azure">
          <p className="font-semibold text-azure text-xl">{data.results}</p>
        </div>

      </div>
      <Footer />
    </main>
  );
}
