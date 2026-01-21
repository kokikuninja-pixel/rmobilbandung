'use server';

/**
 * @fileOverview A server action to fetch Google reviews for a specific Place ID.
 *
 * - getGoogleReviews - A function that fetches reviews from the Google Places API.
 * - GoogleReview - The type for a single Google Review.
 */

import { z } from 'zod';

export const GoogleReviewSchema = z.object({
  author_name: z.string().describe('The name of the reviewer.'),
  profile_photo_url: z.string().url().describe("URL for the reviewer's profile photo."),
  rating: z.number().min(1).max(5).describe('The star rating given by the reviewer.'),
  relative_time_description: z.string().describe('How long ago the review was posted (e.g., "a week ago").'),
  text: z.string().describe('The content of the review.'),
});
export type GoogleReview = z.infer<typeof GoogleReviewSchema>;

const ReviewResponseSchema = GoogleReviewSchema.extend({
    time: z.number(),
}).passthrough();

export async function getGoogleReviews(): Promise<{ reviews: GoogleReview[] }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID in .env file.');
    return { reviews: [] };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}&language=id`;

  try {
    // Revalidate every hour
    const response = await fetch(url, { next: { revalidate: 3600 } }); 
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching Google Reviews:', errorData?.status, errorData?.error_message);
      return { reviews: [] };
    }
    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      const parsedReviews = z.array(ReviewResponseSchema).safeParse(data.result.reviews);
      
      if (parsedReviews.success) {
        // Sort reviews to show the newest ones first and take top 5
        const sortedReviews = parsedReviews.data.sort((a, b) => b.time - a.time);
        return { reviews: sortedReviews.slice(0, 5) };
      } else {
        console.error("Zod validation failed for Google reviews:", parsedReviews.error);
        return { reviews: [] };
      }
    }
    return { reviews: [] };
  } catch (error) {
    console.error('Failed to fetch from Google Places API:', error);
    return { reviews: [] };
  }
}
