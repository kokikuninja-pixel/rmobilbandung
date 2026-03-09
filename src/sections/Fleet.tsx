'use client'
import { motorInventory } from '@/lib/data'
import { MotorCard } from '@/components/motor-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Fleet() {
  const featuredMotors = motorInventory.slice(0, 6);

  return (
    <section
      id="armada"
      className="relative w-full py-20 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4`}
          >
            Armada Pilihan
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-foreground mb-4`}
          >
            Temukan <span className="text-primary">Motor Tepat</span> Untukmu
          </h2>
          <p
            className={`text-lg text-muted-foreground`}
          >
            Dari matic lincah untuk keliling kota hingga motor bertenaga untuk perjalanan jauh, kami punya yang Anda butuhkan.
          </p>
        </div>

        {/* Scooter Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMotors.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-16`}
        >
          <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold px-8 group">
            <Link href="/armada">
                Lihat Semua Armada
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
