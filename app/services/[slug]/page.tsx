import { Metadata } from 'next';
import { servicesData } from "@/data/servicesData";
import { ServiceDetailClient } from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Afringe Limited",
      description: "The requested IT service could not be located.",
    };
  }
  return {
    title: `${service.title} | Afringe Limited Kenya`,
    description: service.heroDescription.substring(0, 160),
    alternates: { canonical: `https://www.afringelimited.co.ke/services/${slug}` },
  };
}

export default async function ServiceDetailServer(props: Props) {
  const params = await props.params;
  return <ServiceDetailClient slug={params.slug} />;
}
