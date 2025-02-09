import Link from "next/link"
import WeatherWidget from "./weather-widget"

const footerLinks = [
  {
    title: "Student Corner",
    links: [
      { name: "Student Portal", href: "/student-portal" },
      { name: "Alumni", href: "/alumni" },
      { name: "Convocation", href: "/convocation" },
      { name: "Semester Policy", href: "/semester-policy" },
      { name: "Download Center", href: "/downloads" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Admission", href: "/admission" },
      { name: "Registration", href: "/registration" },
      { name: "Requirements & Procedures", href: "/requirements" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Clubs",
    links: [
      { name: "Annex", href: "/clubs/annex" },
      { name: "AML Club", href: "/clubs/aml" },
      { name: "Rover Scout", href: "/clubs/rover-scout" },
      { name: "Cultural Club", href: "/clubs/cultural" },
      { name: "Programming Club", href: "/clubs/programming" },
      { name: "IT Club", href: "/clubs/it" },
      { name: "Sports Club", href: "/clubs/sports" },
      { name: "Language Club", href: "/clubs/language" },
      { name: "Social Welfare", href: "/clubs/social-welfare" },
      { name: "Photography Club", href: "/clubs/photography" },
    ],
  },
  {
    title: "Academic",
    links: [
      { name: "Notice", href: "/notices" },
      { name: "Library", href: "/library" },
      { name: "Results", href: "/results" },
      { name: "Class Routine", href: "/class-routine" },
      { name: "Exam Routine", href: "/exam-routine" },
    ],
  },
  {
    title: "Important Links",
    links: [
      { name: "UGC", href: "https://www.ugc.gov.bd/" },
      { name: "ICT Division", href: "https://ictd.gov.bd/" },
      { name: "Prime Minister Office", href: "http://www.pmo.gov.bd/" },
      { name: "Ministry of Education", href: "https://moedu.gov.bd/" },
      { name: "List of All Universities", href: "/universities" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-muted pt-12 rounded-md">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
      <div className="lg:col-span-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2">
        <WeatherWidget />
      </div>
    </div>
  </div>

  {/* NEW FULL-WIDTH WHITE SECTION */}
  <div className="bg-background w-full mt-8">
    <div className="container mx-auto px-4 py-6  text-sm text-muted-foreground">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Industrial Economics Association. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          <Link href="/contact" className="hover:text-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

