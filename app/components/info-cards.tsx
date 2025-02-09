import { ArrowRight, GraduationCap, Building2, BookOpen } from "lucide-react"
import Link from "next/link"

const cards = [
  {
    icon: GraduationCap,
    title: "Graduation",
    description: "Prepare for your future with our comprehensive programs.",
    href: "/graduation",
  },
  {
    icon: Building2,
    title: "University Life",
    description: "Experience a vibrant campus community and diverse activities.",
    href: "/university-life",
  },
  {
    icon: BookOpen,
    title: "Education Services",
    description: "Access world-class resources and support for your academic journey.",
    href: "/education",
  },
]

export default function InfoCards() {
  return (
    <div className="container mx-auto px-4 -mt-20 sm:-mt-24 relative z-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {cards.map((card) => (
          <div key={card.title} className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-start space-x-3">
              <card.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{card.description}</p>
                <Link href={card.href} className="inline-flex items-center text-sm text-primary hover:text-primary/90">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

