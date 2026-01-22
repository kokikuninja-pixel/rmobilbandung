import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  type?: 'image' | 'video';
  platform?: 'Instagram' | 'TikTok';
  postUrl?: string;
  caption?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
