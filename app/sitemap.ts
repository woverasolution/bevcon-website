import { MetadataRoute } from 'next';
import { allProfiles } from './lib/network-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bevcon.net';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/network`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic profile pages
  const profilePages = allProfiles.map((profile) => ({
    url: `${baseUrl}/network/${profile.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...profilePages];
}
