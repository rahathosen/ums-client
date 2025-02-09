"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Newspaper, Users, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tabData = [
  {
    value: "all",
    label: "All",
    icon: Users,
    content: [
      {
        title: "University Ranked Top 10 in Research",
        type: "News",
        date: "2023-07-05",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Annual Science Fair",
        type: "Event",
        date: "2023-07-15",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "International Conference on AI",
        type: "Conference",
        date: "2023-08-01",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Workshop on Sustainable Development",
        type: "Workshop",
        date: "2023-07-20",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "New Partnership with Tech Giant",
        type: "News",
        date: "2023-06-30",
        image: "/placeholder.svg?height=200&width=300",
      },
      { title: "Alumni Homecoming", type: "Event", date: "2023-07-22", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    value: "news",
    label: "News",
    icon: Newspaper,
    content: [
      {
        title: "University Ranked Top 10 in Research",
        date: "2023-07-05",
        image: "/placeholder.svg?height=200&width=300",
      },
      { title: "New Partnership with Tech Giant", date: "2023-06-30", image: "/placeholder.svg?height=200&width=300" },
      { title: "Professor Wins Nobel Prize", date: "2023-06-25", image: "/placeholder.svg?height=200&width=300" },
      {
        title: "Breakthrough in Quantum Computing Research",
        date: "2023-07-02",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "University Launches New Sustainability Initiative",
        date: "2023-07-08",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Student Team Wins International Competition",
        date: "2023-07-10",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    value: "events",
    label: "Events",
    icon: Calendar,
    content: [
      { title: "Annual Science Fair", date: "2023-07-15", image: "/placeholder.svg?height=200&width=300" },
      { title: "Alumni Homecoming", date: "2023-07-22", image: "/placeholder.svg?height=200&width=300" },
      { title: "Career Fair", date: "2023-07-28", image: "/placeholder.svg?height=200&width=300" },
      { title: "University Open Day", date: "2023-08-05", image: "/placeholder.svg?height=200&width=300" },
      { title: "Student Art Exhibition", date: "2023-08-10", image: "/placeholder.svg?height=200&width=300" },
      { title: "Sports Tournament", date: "2023-08-15", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
  {
    value: "conferences",
    label: "Conferences",
    icon: Users,
    content: [
      { title: "International Conference on AI", date: "2023-08-01", image: "/placeholder.svg?height=200&width=300" },
      { title: "Global Climate Change Summit", date: "2023-08-10", image: "/placeholder.svg?height=200&width=300" },
      { title: "Biotech Innovations Symposium", date: "2023-08-15", image: "/placeholder.svg?height=200&width=300" },
      {
        title: "Digital Transformation in Education Conference",
        date: "2023-08-20",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "International Business Ethics Forum",
        date: "2023-08-25",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Advances in Renewable Energy Conference",
        date: "2023-08-30",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    value: "workshops",
    label: "Workshops",
    icon: BookOpen,
    content: [
      {
        title: "Workshop on Sustainable Development",
        date: "2023-07-20",
        image: "/placeholder.svg?height=200&width=300",
      },
      { title: "Data Science Bootcamp", date: "2023-07-25", image: "/placeholder.svg?height=200&width=300" },
      { title: "Creative Writing Masterclass", date: "2023-07-30", image: "/placeholder.svg?height=200&width=300" },
      { title: "Entrepreneurship Workshop Series", date: "2023-08-05", image: "/placeholder.svg?height=200&width=300" },
      {
        title: "Artificial Intelligence in Healthcare Workshop",
        date: "2023-08-12",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Cybersecurity Best Practices Workshop",
        date: "2023-08-18",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
]

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
  customID?: string
  icon: React.ElementType
}


const Tab = ({ text, selected, setSelected, customID, icon: Icon }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${selected ? "text-primary" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        } relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 focus-within:outline-primary/50 flex items-center`}
    >
      <Icon className="w-4 h-4 mr-2" />
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        />
      )}
    </button>
  )
}

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(tabData[0].value)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">University Updates</h2>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-600">
          {tabData.map((tab) => (
            <Tab
              key={tab.value}
              text={tab.label}
              selected={activeTab === tab.value}
              setSelected={() => setActiveTab(tab.value)}
              customID="university-updates"
              icon={tab.icon}
            />
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tabData
            .find((tab) => tab.value === activeTab)
            ?.content.map((item, index) => (
              <Card key={index} className="bg-white text-card-foreground overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  {("type" in item) && (
                    <p className="text-sm text-muted-foreground mt-1">Type: {item.type}</p>
                  )}
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
        {activeTab === "all" && (
          <div className="text-center mt-8">
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Updates
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

