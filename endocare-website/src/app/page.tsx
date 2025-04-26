import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Natural Ingredients",
    description: "Our products use only the highest quality natural ingredients for optimal health benefits.",
    icon: Check,
  },
  {
    title: "Scientifically Proven",
    description: "Each formula is backed by rigorous scientific research and clinical testing.",
    icon: Check,
  },
  {
    title: "Easy to Use",
    description: "Designed for simplicity and convenience, fitting seamlessly into your daily routine.",
    icon: Check,
  },
  {
    title: "Long-lasting Results",
    description: "Our products deliver sustained improvements, not just temporary relief.",
    icon: Check,
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Advanced Health Solutions for Modern Life
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Endocare delivers professional-grade health products designed with cutting-edge science to enhance your wellbeing.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/how-it-works">
                    Discover How It Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/testimonials">See Results</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Product Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Science of Wellbeing
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our flagship product combines cutting-edge research with natural ingredients for optimal results.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Advanced Formulation</h3>
                    <p className="text-muted-foreground">
                      Developed by experts using the latest scientific research to deliver maximum efficacy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Bioavailable Delivery</h3>
                    <p className="text-muted-foreground">
                      Optimized absorption technology ensures your body utilizes every ingredient effectively.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-medium">Quality Assured</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing protocols ensure consistent quality and safety with every dose.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Product Details Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Benefits
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Experience the advantages that set Endocare apart from conventional health products.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/why-endocare">
                Learn More About Endocare
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
