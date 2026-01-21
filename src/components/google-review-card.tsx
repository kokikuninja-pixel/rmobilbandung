import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import type { GoogleReview } from '@/lib/google-reviews';

interface GoogleReviewCardProps {
    review: GoogleReview;
}

export function GoogleReviewCard({ review }: GoogleReviewCardProps) {
    return (
        <Card className="h-full bg-background/90 p-6 border flex flex-col shadow-sm hover:shadow-primary/10 transition-shadow rounded-lg">
            <CardContent className="p-0 flex flex-col items-start gap-2 flex-grow">
                <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-primary/20">
                        <AvatarImage src={review.profile_photo_url} alt={review.author_name} />
                        <AvatarFallback>{review.author_name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{review.author_name}</p>
                        <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-1 mt-3 text-primary">
                     {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i + review.rating} className="w-5 h-5 text-muted-foreground/50 fill-muted-foreground/20" />
                    ))}
                </div>

                <p className="text-muted-foreground text-sm mt-3 flex-grow line-clamp-5">"{review.text}"</p>
            </CardContent>
        </Card>
    );
}
