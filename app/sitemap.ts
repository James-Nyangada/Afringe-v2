import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.afringelimited.co.ke', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.afringelimited.co.ke/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.afringelimited.co.ke/services/business-automation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/services/web-development-hosting', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/services/data-privacy-compliance', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/services/endpoint-cybersecurity', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/services/cyber-awareness-training', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.afringelimited.co.ke/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.afringelimited.co.ke/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
