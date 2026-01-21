import { z } from 'zod';

export const GoogleReviewSchema = z.object({
  author_name: z.string().describe('The name of the reviewer.'),
  profile_photo_url: z.string().url().describe("URL for the reviewer's profile photo."),
  rating: z.number().min(1).max(5).describe('The star rating given by the reviewer.'),
  relative_time_description: z.string().describe('How long ago the review was posted (e.g., "a week ago").'),
  text: z.string().describe('The content of the review.'),
});
export type GoogleReview = z.infer<typeof GoogleReviewSchema>;

export const ReviewResponseSchema = GoogleReviewSchema.extend({
    time: z.number(),
}).passthrough();
