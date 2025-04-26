import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Who it's For | Endocare Health Solutions",
  description: "Discover if Endocare is right for you. Learn about who benefits most from our advanced health products and solutions.",
}

const testimonials = [
  {
    quote: "As a busy professional, I needed something that actually works without complicated routines. Endocare fits perfectly into my lifestyle and delivers results I can feel.",
    author: "Michael T., Business Executive",
    rating: 5,
  },
  {
    quote: "After trying numerous products with minimal results, Endocare was a game-changer for me. The difference in my energy levels and overall wellbeing was noticeable within weeks.",
    author: "Sarah K., Healthcare Professional",
    rating: 5,
  },
  {
    quote: "As a fitness enthusiast, I'm particular about what I put in my body. Endocare meets my high standards for quality while supporting my performance goals.",
    author: "David L., Personal Trainer",
    rating: 5,
  },
]

export default function WhoItsFor() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Who Benefits from Endocare?
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our advanced health solutions are designed for people who prioritize their wellbeing and seek evidence-based products.
            </p>
          </div>
        </div>
      </section>

      {/* User Profiles */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {/* Health-Conscious Professionals */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Health-Conscious Professionals
                </h2>
                <p className="text-muted-foreground">
                  Busy professionals who prioritize their health but have limited time for complex regimens. Endocare provides effective solutions that fit seamlessly into demanding schedules.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Convenient once-daily dosing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Sustained energy without stimulants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Cognitive performance support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Stress resilience and adaptability</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                  <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                    Professional Image
                  </div>
                </div>
              </div>
            </div>

            {/* Active Individuals */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                  <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                    Active Lifestyle Image
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Active Individuals
                </h2>
                <p className="text-muted-foreground">
                  People committed to an active lifestyle who want to optimize their performance and recovery. Endocare provides targeted support for physical demands while promoting long-term wellness.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Enhanced recovery support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Improved endurance and stamina</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Joint and muscle maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Cellular-level energy production</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Health Optimizers */}
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Health Optimizers
                </h2>
                <p className="text-muted-foreground">
                  Forward-thinking individuals who take a proactive approach to their long-term health. Endocare delivers comprehensive support for those looking to optimize their wellbeing at every level.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Advanced nutritional support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Cellular health maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Comprehensive antioxidant protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Full-spectrum systemic balance</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                  <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                    Health Optimizer Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Hear from people who have experienced the Endocare difference in their daily lives.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base italic">"{testimonial.quote}"</CardDescription>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Experience the Endocare Difference?
                </h2>
                <p className="opacity-90 text-lg">
                  Join thousands of satisfied customers who have transformed their health with our revolutionary products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/how-it-works">
                      Learn More
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg overflow-hidden">
                <div className="relative w-full max-w-[400px] aspect-video overflow-hidden rounded-xl border border-primary-foreground/20 bg-primary-foreground/5">
                  <div className="w-full h-full flex items-center justify-center text-primary-foreground/70">
                    Product Demo Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 