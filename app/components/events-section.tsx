import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    title: "Annual Science Fair",
    date: "2023-07-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    category: "Academic",
  },
  {
    title: "Guest Lecture: AI in Healthcare",
    date: "2023-07-20",
    time: "2:00 PM - 4:00 PM",
    location: "Medical Sciences Building, Room 201",
    category: "Lecture",
  },
  {
    title: "Summer Music Festival",
    date: "2023-07-25",
    time: "6:00 PM - 10:00 PM",
    location: "University Amphitheater",
    category: "Cultural",
  },
  {
    title: "Career Fair 2023",
    date: "2023-08-05",
    time: "9:00 AM - 3:00 PM",
    location: "Student Union Building",
    category: "Career",
  },
  {
    title: "International Student Welcome Day",
    date: "2023-08-10",
    time: "11:00 AM - 2:00 PM",
    location: "International Center",
    category: "Social",
  },
  {
    title: "Research Symposium",
    date: "2023-08-15",
    time: "1:00 PM - 5:00 PM",
    location: "Science Complex, Auditorium A",
    category: "Academic",
  },
]

export default function EventsSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <Card
          key={index}
          className="bg-white text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge variant="secondary" className="mb-2">
                {event.category}
              </Badge>
              <div className="flex items-center text-primary">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{event.date}</span>
              </div>
            </div>
            <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
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
            <Link href="#" className="text-primary hover:text-primary/80 text-sm font-medium flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

