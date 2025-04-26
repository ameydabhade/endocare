import Link from "next/link"
import { Container } from "@/components/ui/container"

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "/why-endocare", label: "Why Endocare?" },
      { href: "/how-it-works", label: "How it Works" },
      { href: "/who-its-for", label: "Who it's For" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-xl block mb-4">
              Endocare
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Advanced health solutions designed to improve your wellbeing and enhance your quality of life.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-medium">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Endocare. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
} 