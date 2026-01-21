'use server';

import { z } from 'zod';
import type { GoogleReview } from './types';
import { NewPlacesReviewResponseSchema } from './types';

export async function getGoogleReviews(): Promise<{ reviews: GoogleReview[] }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.error('Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID in .env file.');
    return { reviews: [] };
  }

  // Using the new Places API endpoint for better reliability
  const fields = 'reviews(authorAttribution,publishTime,rating,text,relativePublishTimeDescription)';
  const url = `https://places.googleapis.com/v1/places/${placeId}?fields=${fields}&key=${apiKey}&languageCode=id`;

  try {
    // Revalidate every hour
    const response = await fetch(url, { 
        next: { revalidate: 3600 } 
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching Google Reviews:', response.status, errorData);
      return { reviews: [] };
    }
    const data = await response.json();
    
    if (data && data.reviews) {
      const parsedReviews = z.array(NewPlacesReviewResponseSchema).safeParse(data.reviews);
      
      if (parsedReviews.success) {
        // Map the new API response to our internal GoogleReview type, which the UI components expect
        const mappedReviews: (GoogleReview & { publishTime: Date })[] = parsedReviews.data.map(review => ({
          author_name: review.authorAttribution.displayName,
          profile_photo_url: review.authorAttribution.photoUri,
          rating: review.rating,
          relative_time_description: review.relativePublishTimeDescription,
          text: review.text.text,
          publishTime: new Date(review.publishTime),
        }));

        // Sort reviews to show the newest ones first and take top 5
        const sortedReviews = mappedReviews.sort((a, b) => b.publishTime.getTime() - a.publishTime.getTime());
        return { reviews: sortedReviews.slice(0, 5) };
      } else {
        console.error("Zod validation failed for Google reviews:", parsedReviews.error.flatten());
        return { reviews: [] };
      }
    }
    return { reviews: [] };
  } catch (error) {
    console.error('Failed to fetch from Google Places API:', error);
    return { reviews: [] };
  }
}
