'use server';

/**
 * @fileOverview A server action to fetch Google reviews for a specific Place ID.
 *
 * - getGoogleReviews - A function that fetches reviews from the Google Places API.
 */
import { z } from 'zod';
import type { GoogleReview } from './types';
import { ReviewResponseSchema } from './types';

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
