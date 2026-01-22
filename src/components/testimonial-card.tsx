import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/data';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card className="bg-background/90 p-6 border flex flex-col shadow-sm hover:shadow-primary/10 transition-shadow rounded-lg">
            <CardContent className="p-0 flex flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-1 mt-3 text-primary">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                </div>

                <p className="text-muted-foreground text-sm mt-3">"{testimonial.comment}"</p>
            </CardContent>
        </Card>
    );
}
