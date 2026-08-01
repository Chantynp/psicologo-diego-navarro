import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://psicologo-diego-navarro.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: '2026-08-01',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: '2026-08-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: '2026-08-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/consentimiento`,
      lastModified: '2026-08-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}