
import { MetadataRoute } from 'next';
import { motorInventory } from '@/lib/data';

const siteUrl = 'https://rmb-rental-bandung.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const motorUrls = motorInventory.map(motor => ({
    url: `${siteUrl}/armada/${motor.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/armada`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/harga`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
        url: `${siteUrl}/galeri`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    },
    {
        url: `${siteUrl}/tentang-kami`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    },
    {
        url: `${siteUrl}/lokasi`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.7,
    },
    {
      url: `${siteUrl}/snk`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...motorUrls];
}
