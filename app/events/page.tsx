import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import Breadcrumb from "../components/breadcrumb"
import Layout from "../components/layout"
import BackgroundBricks from "../components/background-bricks"

const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "2023-07-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    category: "Academic",
  },
  {
    id: 2,
    title: "Guest Lecture: AI in Healthcare",
    date: "2023-07-20",
    time: "2:00 PM - 4:00 PM",
    location: "Medical Sciences Building, Room 201",
    category: "Lecture",
  },
  {
    id: 3,
    title: "Summer Music Festival",
    date: "2023-07-25",
    time: "6:00 PM - 10:00 PM",
    location: "University Amphitheater",
    category: "Cultural",
  },
  {
    id: 4,
    title: "Career Fair 2023",
    date: "2023-08-05",
    time: "9:00 AM - 3:00 PM",
    location: "Student Union Building",
    category: "Career",
  },
  {
    id: 5,
    title: "International Student Welcome Day",
    date: "2023-08-10",
    time: "11:00 AM - 2:00 PM",
    location: "International Center",
    category: "Social",
  },
  {
    id: 6,
    title: "Research Symposium",
    date: "2023-08-15",
    time: "1:00 PM - 5:00 PM",
    location: "Science Complex, Auditorium A",
    category: "Academic",
  },
]

export default function AllEventsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 bg-[#F1EDE4]">
        <Breadcrumb items={[{ label: "Events", href: "/events" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">All Events</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary">{event.category}</Badge>
                  <div className="flex items-center text-primary">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                </div>
                <CardTitle className="mt-2">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/events/${event.id}`}
                  className="text-primary hover:text-primary/80 font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

