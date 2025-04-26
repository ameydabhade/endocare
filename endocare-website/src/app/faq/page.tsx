import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainLayout } from "@/components/layout/main-layout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Frequently Asked Questions | Endocare",
  description: "Find answers to common questions about Endocare health products, ingredients, usage, and benefits.",
}

const faqCategories = [
  {
    title: "Product Information",
    questions: [
      {
        question: "What makes Endocare products different from other health supplements?",
        answer: "Endocare products are developed using a science-first approach with premium natural ingredients. Our formulations are designed for maximum bioavailability, meaning your body can actually use the nutrients effectively. Unlike many conventional products, we use synergistic combinations of ingredients that work together for enhanced effects, and each product undergoes rigorous testing for quality and efficacy."
      },
      {
        question: "Are Endocare products natural?",
        answer: "Yes, Endocare products are made with premium natural ingredients. We carefully select each component for its purity, potency, and effectiveness. While our formulations are based on advanced scientific research, we prioritize natural compounds that work in harmony with your body's systems."
      },
      {
        question: "How should I store my Endocare products?",
        answer: "For optimal potency, store your Endocare products in a cool, dry place away from direct sunlight. Most products don't require refrigeration unless specifically noted on the packaging. Always keep the container tightly closed when not in use and store out of reach of children."
      }
    ]
  },
  {
    title: "Usage & Benefits",
    questions: [
      {
        question: "How long does it take to see results with Endocare products?",
        answer: "While individual experiences vary, many users report noticeable improvements within 2-4 weeks of consistent use. Some benefits may be felt sooner, while others develop gradually over time. For optimal results, we recommend following the suggested usage guidelines and maintaining consistent daily use for at least 8-12 weeks."
      },
      {
        question: "Can I take multiple Endocare products together?",
        answer: "Yes, our products are designed to work harmoniously together. In fact, many of our formulations complement each other for comprehensive health support. However, we always recommend consulting with a healthcare professional before starting any new health regimen, especially if you're currently taking medications or have existing health conditions."
      },
      {
        question: "Are there any side effects from using Endocare products?",
        answer: "Endocare products are formulated with safety as a priority and rigorously tested. Most users experience no adverse effects. However, as with any nutritional supplement, some individuals may have sensitivities to specific ingredients. If you experience any unexpected reactions, discontinue use and consult a healthcare professional."
      }
    ]
  },
  {
    title: "Ordering & Shipping",
    questions: [
      {
        question: "How quickly will my order ship?",
        answer: "Orders are typically processed within 1-2 business days. Once shipped, domestic deliveries usually arrive within 3-5 business days, while international shipping times vary by location. You'll receive a tracking number via email once your order ships so you can monitor its progress."
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. During checkout, you'll see the shipping options and rates available for your specific country. Please note that customers are responsible for any import duties or taxes that may apply."
      },
      {
        question: "What is your return policy?",
        answer: "We stand behind our products with a 60-day satisfaction guarantee. If you're not completely satisfied with your purchase for any reason, simply contact our customer service team within 60 days of receiving your order to initiate a return. Returned products must be in their original packaging, and shipping costs are non-refundable."
      }
    ]
  },
  {
    title: "Scientific Research",
    questions: [
      {
        question: "Are Endocare products scientifically tested?",
        answer: "Absolutely. Each Endocare formulation undergoes extensive research and development, including in vitro testing, stability analysis, and clinical evaluations. We collaborate with leading research institutions and maintain rigorous quality control standards throughout our development process. Our commitment to science-based formulations is at the core of everything we do."
      },
      {
        question: "Where can I find research supporting your product claims?",
        answer: "We provide summaries of key research supporting our formulations on our product pages. Additionally, our blog features in-depth articles about the science behind our ingredients. For those interested in the technical details, we can provide references to published studies upon request by contacting our customer service team."
      },
      {
        question: "Do you conduct clinical trials on your products?",
        answer: "Yes, we conduct and sponsor clinical evaluations of our formulations. These range from controlled in-house testing to third-party clinical trials, depending on the specific product. We prioritize evidence-based development and continuously evaluate our products' performance through scientific methods."
      }
    ]
  }
]

export default function FAQ() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about Endocare products and services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Our support team is ready to help you with any additional questions you may have about our products or services.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/contact">
                Contact Our Support Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 