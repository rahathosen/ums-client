import Layout from "../../components/layout";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "../../components/breadcrumb";

const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "2023-07-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus Auditorium",
    category: "Academic",
    description:
      "Join us for a day of scientific discovery and innovation. Students from all departments will showcase their research projects and experiments. This event is open to the public and features interactive demonstrations, guest speakers, and a special robotics showcase.",
    schedule: [
      { time: "10:00 AM", activity: "Opening Ceremony" },
      { time: "10:30 AM", activity: "Project Exhibitions Open" },
      { time: "12:00 PM", activity: "Lunch Break" },
      {
        time: "1:00 PM",
        activity: "Guest Speaker: Dr. Jane Smith on 'The Future of AI'",
      },
      { time: "2:30 PM", activity: "Robotics Demonstration" },
      { time: "3:30 PM", activity: "Awards Ceremony" },
      { time: "4:00 PM", activity: "Closing Remarks" },
    ],
  },
  // Add more event details here...
];

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === Number.parseInt(params.id));

  if (!event) {
    notFound();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Events", href: "/events" },
            { label: event.title, href: `/events/${event.id}` },
          ]}
        />
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <Badge>{event.category}</Badge>
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-2">
            <Clock className="h-5 w-5 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Event Description</h2>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Event Schedule</h2>
            <ul className="space-y-2">
              {event.schedule.map((item, index) => (
                <li key={index} className="flex">
                  <span className="font-medium w-24">{item.time}</span>
                  <span className="text-muted-foreground">{item.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
