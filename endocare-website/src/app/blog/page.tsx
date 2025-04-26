import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Blog | Endocare Health Solutions",
  description: "Discover the latest health insights, research, and tips from the Endocare team of experts.",
}

const categories = [
  { name: "Health Science", slug: "health-science", count: 12 },
  { name: "Nutrition", slug: "nutrition", count: 8 },
  { name: "Wellness", slug: "wellness", count: 14 },
  { name: "Product Research", slug: "product-research", count: 6 },
  { name: "Case Studies", slug: "case-studies", count: 4 },
]

const featuredPosts = [
  {
    title: "The Science of Bioavailability: Why It Matters for Health Supplements",
    excerpt: "Understanding how your body absorbs nutrients is key to selecting effective health products. Learn about the factors that affect bioavailability and how Endocare optimizes this process.",
    category: "Health Science",
    date: "May 15, 2023",
    slug: "science-of-bioavailability",
  },
  {
    title: "Natural vs. Synthetic Ingredients: What's the Real Difference?",
    excerpt: "We examine the pros and cons of natural and synthetic ingredients in health products, and explain why Endocare prioritizes premium natural components in our formulations.",
    category: "Product Research",
    date: "April 22, 2023",
    slug: "natural-vs-synthetic-ingredients",
  },
  {
    title: "5 Key Nutrients Most People Are Missing in Their Diet",
    excerpt: "Modern diets often lack essential nutrients critical for optimal health. Discover the most common deficiencies and how to address them effectively.",
    category: "Nutrition",
    date: "March 10, 2023",
    slug: "key-nutrients-missing-diet",
  },
]

const recentPosts = [
  {
    title: "Stress Management: How Adaptogens Support Your Body's Natural Response",
    excerpt: "Explore the science behind adaptogenic herbs and compounds, and learn how they help your body maintain balance during periods of stress.",
    category: "Wellness",
    date: "June 5, 2023",
    slug: "adaptogens-stress-management",
  },
  {
    title: "Clinical Study Results: Endocare Formulation Shows Promising Benefits",
    excerpt: "A recent clinical trial demonstrates significant improvements in key health markers among participants using Endocare's flagship product.",
    category: "Case Studies",
    date: "May 30, 2023",
    slug: "clinical-study-results",
  },
  {
    title: "The Gut-Brain Connection: How Digestive Health Affects Your Mood",
    excerpt: "New research reveals the fascinating relationship between gut health and mental wellbeing, with implications for holistic health approaches.",
    category: "Health Science",
    date: "May 18, 2023",
    slug: "gut-brain-connection",
  },
  {
    title: "Seasonal Nutritional Support: Adjusting Your Regimen for Summer",
    excerpt: "Learn how to adapt your nutritional intake to support your body's changing needs during the warmer months.",
    category: "Nutrition",
    date: "May 12, 2023",
    slug: "seasonal-nutrition-summer",
  },
  {
    title: "Behind the Scenes: How We Develop and Test New Formulations",
    excerpt: "Take an inside look at Endocare's rigorous research and development process, from initial concept to final product.",
    category: "Product Research",
    date: "May 5, 2023",
    slug: "behind-the-scenes-product-development",
  },
  {
    title: "Holistic Health Practices to Complement Your Endocare Regimen",
    excerpt: "Maximize the benefits of your Endocare products with these complementary lifestyle practices for comprehensive wellness.",
    category: "Wellness",
    date: "April 28, 2023",
    slug: "holistic-health-practices",
  },
]

export default function Blog() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Endocare Health Blog
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Insights, research, and tips from our team of health experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div>
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link 
                        href={`/blog/category/${category.slug}`}
                        className="text-muted-foreground hover:text-foreground transition-colors flex justify-between items-center"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Featured Posts */}
              <div>
                <h2 className="text-xl font-bold mb-4">Featured</h2>
                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <div key={post.slug} className="border-b pb-4 last:border-0 last:pb-0">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        <h3 className="font-medium text-base">{post.title}</h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">{post.date} • {post.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recentPosts.map((post) => (
                  <Card key={post.slug} className="h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <div className="text-xs text-muted-foreground">{post.date}</div>
                      <CardTitle className="text-lg mt-1">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex-none border-t pt-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs bg-muted/80 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <Button variant="ghost" size="sm" className="h-8 px-2" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Read <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Stay Updated
              </h2>
              <p className="opacity-90 max-w-[600px]">
                Subscribe to our newsletter to receive the latest health insights, research updates, and exclusive content directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 flex-1 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 