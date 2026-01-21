'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GoogleReviewCard } from './google-review-card';
import type { GoogleReview } from '@/lib/google-reviews';

interface GoogleReviewsCarouselProps {
    reviews: GoogleReview[];
}

export function GoogleReviewsCarousel({ reviews }: GoogleReviewsCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    if (!reviews || reviews.length === 0) {
        return (
            <div className="text-center p-8 bg-background/90 rounded-lg border">
                <p className="text-muted-foreground">Tidak dapat memuat ulasan saat ini. Coba lagi nanti.</p>
            </div>
        );
    }

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {reviews.map((review, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 h-full">
                            <GoogleReviewCard review={review} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex" />
            <CarouselNext className="hidden xl:flex" />
        </Carousel>
    );
}
