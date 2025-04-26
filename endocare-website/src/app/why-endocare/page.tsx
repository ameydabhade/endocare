import Image from "next/image"
import { Check, Award, Leaf, Microscope } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"

export const metadata = {
  title: "Why Endocare? | Advanced Health Products",
  description: "Discover what makes Endocare different from other health products and why our science-backed approach delivers better results.",
}

const features = [
  {
    icon: Microscope,
    title: "Science First Approach",
    description: "Every Endocare product is developed based on rigorous scientific research and clinical validation, ensuring effective results you can trust."
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only premium quality natural ingredients, carefully selected for their purity and potency to deliver maximum health benefits."
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Our manufacturing processes adhere to the strictest quality control standards, exceeding industry requirements for safety and efficacy."
  }
]

export default function WhyEndocare() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Why Choose Endocare?
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our commitment to excellence sets us apart in the health products industry.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Endocare vs. Conventional Products
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              See how our advanced health solutions compare to conventional alternatives.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary">Endocare Products</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Scientifically formulated for maximum bioavailability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium natural ingredients with no fillers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Synergistic compounds that work together</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Third-party tested for purity and potency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Transparent sourcing and manufacturing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Conventional Products</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></span>
                  <span>Basic formulations with limited absorption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></span>
                  <span>Synthetic ingredients and unnecessary additives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></span>
                  <span>Isolated compounds that lack synergistic effects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></span>
                  <span>Limited testing for quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-5 w-5 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></span>
                  <span>Unclear sourcing and manufacturing processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Research-Backed Results
              </h2>
              <p className="text-muted-foreground">
                At Endocare, we invest in rigorous research to ensure our products deliver measurable benefits. Our team of scientists and health experts collaborate with leading research institutions to validate our formulations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Clinical studies demonstrating efficacy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Published research in peer-reviewed journals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Ongoing research for continuous improvement</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Research Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 