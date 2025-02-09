import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "../components/breadcrumb"
import Layout from "../components/layout"
import BackgroundBricks from "../components/background-bricks"

const notices = [
  {
    id: 1,
    title: "Important Update on Fall Semester Registration",
    date: "2023-07-01",
    category: "Academic",
    excerpt:
      "All students are required to complete their course registration by July 31st. Late registration fees will apply after this date.",
  },
  {
    id: 2,
    title: "New Research Funding Opportunities",
    date: "2023-06-28",
    category: "Research",
    excerpt:
      "The Office of Research has announced new grant opportunities for faculty members in STEM fields. Application deadline is August 15th.",
  },
  {
    id: 3,
    title: "Campus Safety Measures Update",
    date: "2023-06-25",
    category: "Administrative",
    excerpt:
      "In light of recent events, we've updated our campus safety protocols. All students and staff are required to review the new guidelines.",
  },
  {
    id: 4,
    title: "Library Hours Extended for Finals Week",
    date: "2023-07-05",
    category: "Facilities",
    excerpt: "The university library will have extended hours during finals week to accommodate student study needs.",
  },
  {
    id: 5,
    title: "New Online Learning Resources Available",
    date: "2023-07-10",
    category: "Academic",
    excerpt:
      "The IT department has launched new online learning resources to support remote and hybrid learning experiences.",
  },
  {
    id: 6,
    title: "Upcoming Campus Sustainability Initiative",
    date: "2023-07-15",
    category: "Campus Life",
    excerpt: "Join us in our new campus-wide sustainability initiative aimed at reducing our carbon footprint.",
  },
]

export default function NoticesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Notices", href: "/notices" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Important Notices</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notices.map((notice) => (
            <Card key={notice.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge>{notice.category}</Badge>
                  <span className="text-sm text-muted-foreground">{notice.date}</span>
                </div>
                <CardTitle className="mt-2">{notice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{notice.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/notices/${notice.id}`}
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

