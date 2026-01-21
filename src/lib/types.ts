import { z } from 'zod';

// This is the clean, final type the UI components will use.
export const GoogleReviewSchema = z.object({
  author_name: z.string().describe('The name of the reviewer.'),
  profile_photo_url: z.string().url().describe("URL for the reviewer's profile photo."),
  rating: z.number().min(0).max(5).describe('The star rating given by the reviewer.'),
  relative_time_description: z.string().describe('How long ago the review was posted (e.g., "a week ago").'),
  text: z.string().describe('The content of the review.'),
});
export type GoogleReview = z.infer<typeof GoogleReviewSchema>;

// This is the raw response from the NEW Places API
export const NewPlacesReviewResponseSchema = z.object({
    authorAttribution: z.object({
        displayName: z.string(),
        photoUri: z.string().url(),
        uri: z.string().url(),
    }),
    publishTime: z.string(), // ISO 8601 format
    rating: z.number().min(0).max(5),
    relativePublishTimeDescription: z.string(),
    text: z.object({
        text: z.string(),
        languageCode: z.string(),
    }),
}).passthrough();
