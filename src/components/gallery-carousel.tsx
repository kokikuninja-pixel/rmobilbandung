'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from './ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface GalleryCarouselProps {
    images: ImagePlaceholder[];
}

export function GalleryCarousel({ images }: GalleryCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
                align: "start"
            }}
        >
            <CarouselContent className="-ml-4">
                {images.map((item, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                           <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                                <div className="relative aspect-[4/3]">
                                    {item.type === 'video' ? (
                                      <video
                                        src={item.imageUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover w-full h-full"
                                      />
                                    ) : (
                                      <Image
                                          src={item.imageUrl}
                                          alt={item.description}
                                          fill
                                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                          data-ai-hint={item.imageHint}
                                      />
                                    )}
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex" />
            <CarouselNext className="hidden xl:flex" />
        </Carousel>
    );
}
