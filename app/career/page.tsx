"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "../components/breadcrumb"
import Layout from "../components/layout"
import BackgroundBricks from "../components/background-bricks"
import LineTabs from "../components/line-tabs"

const jobCategories = [
  {
    name: "Academic Positions",
    jobs: [
      {
        id: 1,
        title: "Assistant Professor of Computer Science",
        department: "School of Engineering",
        type: "Full-time",
        location: "Main Campus",
        posted: "2023-07-01",
      },
      {
        id: 2,
        title: "Lecturer in Business Administration",
        department: "School of Business",
        type: "Full-time",
        location: "Main Campus",
        posted: "2023-07-03",
      },
    ],
  },
  {
    name: "Research Positions",
    jobs: [
      {
        id: 3,
        title: "Research Assistant in Biotechnology",
        department: "School of Life Sciences",
        type: "Part-time",
        location: "Research Center",
        posted: "2023-07-05",
      },
      {
        id: 4,
        title: "Postdoctoral Researcher in Physics",
        department: "School of Physical Sciences",
        type: "Full-time",
        location: "Advanced Research Lab",
        posted: "2023-07-07",
      },
    ],
  },
  {
    name: "Administrative Positions",
    jobs: [
      {
        id: 5,
        title: "Student Affairs Coordinator",
        department: "Office of Student Life",
        type: "Full-time",
        location: "Student Center",
        posted: "2023-07-10",
      },
      {
        id: 6,
        title: "Marketing and Communications Manager",
        department: "Office of Communications",
        type: "Full-time",
        location: "Administration Building",
        posted: "2023-07-15",
      },
    ],
  },
  {
    name: "Support Staff Positions",
    jobs: [
      {
        id: 7,
        title: "Library Services Specialist",
        department: "University Library",
        type: "Full-time",
        location: "Main Library",
        posted: "2023-07-12",
      },
      {
        id: 8,
        title: "Laboratory Technician",
        department: "School of Chemistry",
        type: "Full-time",
        location: "Science Complex",
        posted: "2023-07-18",
      },
    ],
  },
]

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState(jobCategories[0].name)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Career Opportunities", href: "/career" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Career Opportunities</h1>
        </div>

        <LineTabs
          tabs={jobCategories.map((category) => category.name)}
          center
          customID="career"
          onTabChange={handleTabChange}
        />

        {jobCategories.map(
          (category) =>
            activeTab === category.name && (
              <div key={category.name} className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.jobs.map((job) => (
                    <Card key={job.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge>{job.type}</Badge>
                          <span className="text-sm text-muted-foreground">Posted: {job.posted}</span>
                        </div>
                        <CardTitle className="mt-2">{job.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.department}</p>
                        <p className="text-muted-foreground">{job.location}</p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={`/career/${job.id}`}
                          className="text-primary hover:text-primary/80 font-medium flex items-center"
                        >
                          View Details
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </Layout>
  )
}

