import type { Metadata } from 'next';

export function generateSeoMetadata(locationName: string, title: string, description: string, canonicalPath: string): Metadata {
  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalPath,
    },
  };
}
