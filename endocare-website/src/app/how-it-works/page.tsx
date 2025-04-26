import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MainLayout } from "@/components/layout/main-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "How It Works | Endocare Health Solutions",
  description: "Discover the science behind Endocare products and how our innovative health solutions deliver superior results for your wellbeing.",
}

const processSteps = [
  {
    number: "01",
    title: "Advanced Formulation",
    description: "Our scientists research and develop formulations based on the latest scientific discoveries, focusing on synergistic ingredient combinations that maximize effectiveness."
  },
  {
    number: "02",
    title: "Premium Ingredients",
    description: "We source only the highest quality natural ingredients, each selected for their purity, potency, and specific health benefits."
  },
  {
    number: "03",
    title: "Precision Manufacturing",
    description: "Using state-of-the-art technology, we produce our products under strict quality control measures that exceed industry standards."
  },
  {
    number: "04",
    title: "Rigorous Testing",
    description: "Every batch undergoes comprehensive testing for potency, purity, and efficacy before being approved for distribution."
  }
]

export default function HowItWorks() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              How Endocare Works
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              The science behind our revolutionary health solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              Our Development Process
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg text-center mx-auto mt-4">
              From research to your hands, every step is optimized for quality and efficacy.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col h-full p-6 bg-background rounded-xl border shadow-sm">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground flex-1">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Explanation */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
              The Science of Endocare
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg text-center mx-auto mt-4">
              Discover how our products work at the molecular level to deliver results.
            </p>
          </div>
          
          <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
            <Tabs defaultValue="bioavailability" className="w-full">
              <div className="px-4 md:px-6 pt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="bioavailability">Bioavailability</TabsTrigger>
                  <TabsTrigger value="synergy">Synergistic Effects</TabsTrigger>
                  <TabsTrigger value="delivery">Delivery System</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="bioavailability" className="p-6">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Enhanced Bioavailability</h3>
                    <p className="text-muted-foreground mb-4">
                      Bioavailability refers to how well your body can absorb and use the active ingredients in a product. Endocare uses advanced techniques to enhance bioavailability:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Liposomal encapsulation for improved cellular uptake</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Enzymatic pre-digestion of complex compounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Optimized particle size for maximum absorption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Strategic combination of complementary nutrients</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-xl border bg-background">
                      <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                        Bioavailability Diagram
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="synergy" className="p-6">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Synergistic Formulation</h3>
                    <p className="text-muted-foreground mb-4">
                      Our ingredients work together to create effects greater than the sum of their parts. We carefully select compounds that:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Enhance each other's bioavailability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Target multiple biological pathways simultaneously</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Provide complementary benefits for comprehensive support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Create balanced physiological responses without side effects</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-xl border bg-background">
                      <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                        Synergy Diagram
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="delivery" className="p-6">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Advanced Delivery System</h3>
                    <p className="text-muted-foreground mb-4">
                      Our proprietary delivery systems ensure ingredients reach their intended targets:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Time-release technology for sustained benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Targeted delivery to specific tissues or systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Protective encapsulation of sensitive compounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Optimized dissolution profiles for ideal absorption timing</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-xl border bg-background">
                      <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                        Delivery System Diagram
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Clinical Validation */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Clinical Validation
              </h2>
              <p className="text-muted-foreground mb-6">
                We don't just claim our products work—we prove it through rigorous scientific testing and clinical trials. Our research team collaborates with leading institutions to validate the safety and efficacy of every formulation.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">95%</h3>
                  <p className="text-sm text-muted-foreground">User satisfaction in clinical trials</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">3x</h3>
                  <p className="text-sm text-muted-foreground">More effective than conventional alternatives</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">14+</h3>
                  <p className="text-sm text-muted-foreground">Published scientific papers</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">1000+</h3>
                  <p className="text-sm text-muted-foreground">Research participants</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl border bg-background">
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                  Clinical Research Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 