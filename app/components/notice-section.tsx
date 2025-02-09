import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const notices = [
  {
    title: "Important Update on Fall Semester Registration",
    date: "2023-07-01",
    category: "Academic",
    excerpt:
      "All students are required to complete their course registration by July 31st. Late registration fees will apply after this date.",
  },
  {
    title: "New Research Funding Opportunities",
    date: "2023-06-28",
    category: "Research",
    excerpt:
      "The Office of Research has announced new grant opportunities for faculty members in STEM fields. Application deadline is August 15th.",
  },
  {
    title: "Campus Safety Measures Update",
    date: "2023-06-25",
    category: "Administrative",
    excerpt:
      "In light of recent events, we've updated our campus safety protocols. All students and staff are required to review the new guidelines.",
  },
]

export default function NoticeSection() {
  return (
    <div className="space-y-6">
      {notices.map((notice, index) => (
        <Card
          key={index}
          className="bg-white text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge variant="default" className="mb-2">
                {notice.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{notice.date}</span>
            </div>
            <CardTitle className="text-lg font-semibold">{notice.title}</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-muted-foreground">{notice.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Link href="#" className="text-primary hover:text-primary/80 font-medium flex  text-sm items-center">
              Read Full Notice
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

