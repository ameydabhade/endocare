import Image from "next/image"
import { Star } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Testimonials | Endocare Health Solutions",
  description: "Read what our customers are saying about their experience with Endocare health products.",
}

const testimonials = [
  {
    quote: "As a busy professional, I needed something that actually works without complicated routines. Endocare fits perfectly into my lifestyle and delivers results I can feel.",
    author: "Michael T., Business Executive",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "After trying numerous products with minimal results, Endocare was a game-changer for me. The difference in my energy levels and overall wellbeing was noticeable within weeks.",
    author: "Sarah K., Healthcare Professional",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "As a fitness enthusiast, I'm particular about what I put in my body. Endocare meets my high standards for quality while supporting my performance goals.",
    author: "David L., Personal Trainer",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "The science behind Endocare products impressed me as a researcher. It's rare to find such thoughtfully formulated health products with transparency about the ingredients and research.",
    author: "Dr. Jennifer P., Research Scientist",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "I've struggled with low energy for years and tried countless supplements. Endocare is the first product that's made a genuine difference in my daily vitality and focus.",
    author: "Robert M., Teacher",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "As someone with a sensitive system, I appreciate that Endocare products are gentle yet effective. I've experienced no side effects, just steady improvements in my wellbeing.",
    author: "Emma S., Yoga Instructor",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "My doctor recommended Endocare after reviewing their research. Three months later, my lab results speak for themselves. This is now a permanent part of my health routine.",
    author: "Thomas W., Retiree",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "I was skeptical at first, but the results convinced me. Endocare delivers on its promises and has become an essential part of my wellness journey.",
    author: "Olivia R., Marketing Director",
    rating: 5,
    image: "/placeholder-user.jpg"
  },
  {
    quote: "The quality of Endocare products is evident from day one. I've recommended them to my entire family, and we've all seen improvements in different aspects of our health.",
    author: "James H., Small Business Owner",
    rating: 5,
    image: "/placeholder-user.jpg"
  }
]

export default function Testimonials() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Customer Testimonials
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Read what our customers are saying about their experience with Endocare products.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                      <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">
                        User
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base italic">"{testimonial.quote}"</CardDescription>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Video Testimonials
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Hear directly from our customers about their Endocare experience.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl overflow-hidden border bg-card">
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Video Testimonial {item}
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Customer Success Story {item}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Watch how Endocare transformed this customer's health journey.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Before & After Results
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Visual evidence of the Endocare difference from our satisfied customers.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 text-sm">Before</div>
                  <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500 text-sm">After</div>
                </div>
                <div>
                  <h3 className="font-medium">Customer {item}'s Transformation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Results after 12 weeks of consistent Endocare use.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 