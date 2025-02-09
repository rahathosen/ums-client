"use client"

import { useState } from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BackgroundBricks from "../components/background-bricks"
import LineTabs from "../components/line-tabs"

const programs = [
  {
    name: "Undergraduate Programs",
    icon: BookOpen,
    description: "Four-year programs leading to a bachelor's degree",
    image: "/placeholder.svg?height=200&width=300",
    courses: [
      {
        name: "Bachelor of Science in Industrial Economics",
        duration: "4 years",
        credits: 120,
        description: "Blend of economic theory and industrial applications",
      },
      {
        name: "Bachelor of Science in Technology Management",
        duration: "4 years",
        credits: 120,
        description: "Focus on managing technological innovation",
      },
      {
        name: "Bachelor of Arts in Economics and Business Analytics",
        duration: "4 years",
        credits: 120,
        description: "Data-driven approach to business decision making",
      },
      {
        name: "Bachelor of Science in Computer Science and Engineering",
        duration: "4 years",
        credits: 130,
        description: "Comprehensive program covering software and hardware aspects of computing",
      },
    ],
  },
  {
    name: "Graduate Programs",
    icon: GraduationCap,
    description: "Advanced degrees for specialized knowledge and research",
    image: "/placeholder.svg?height=200&width=300",
    courses: [
      {
        name: "Master of Science in Industrial Economics",
        duration: "2 years",
        credits: 60,
        description: "Advanced research in industrial organization",
      },
      {
        name: "Master of Technology Management",
        duration: "2 years",
        credits: 60,
        description: "Strategic management of technology and innovation",
      },
      {
        name: "Ph.D. in Economics and Technology",
        duration: "4-5 years",
        credits: 90,
        description: "Original research at the intersection of economics and technology",
      },
    ],
  },
  {
    name: "Professional Development",
    icon: Users,
    description: "Short courses and certificates for working professionals",
    image: "/placeholder.svg?height=200&width=300",
    courses: [
      {
        name: "Certificate in Data Analytics for Business",
        duration: "6 months",
        credits: 15,
        description: "Practical skills in business analytics",
      },
      {
        name: "Executive Program in Technology Strategy",
        duration: "1 year",
        credits: 30,
        description: "Strategic technology management for executives",
      },
      {
        name: "Workshop Series: Innovation Management",
        duration: "3 months",
        credits: 9,
        description: "Hands-on innovation management training",
      },
    ],
  },
]

const departments = [
  {
    name: "Department of Industrial Economics",
    image: "/placeholder.svg?height=200&width=300",
    description: "Focuses on the economic analysis of industrial organizations and markets.",
    faculty: 25,
    students: 450,
    researchAreas: ["Market Structure and Firm Behavior", "Regulation and Competition Policy", "Innovation Economics"],
    facilities: ["Economic Research Lab", "Data Analysis Center", "Industry Collaboration Hub"],
  },
  {
    name: "Department of Technology Management",
    image: "/placeholder.svg?height=200&width=300",
    description: "Explores the intersection of technology, innovation, and business strategy.",
    faculty: 30,
    students: 500,
    researchAreas: ["Technology Strategy and Innovation", "Digital Transformation", "Project and Product Management"],
    facilities: ["Innovation Lab", "Technology Demo Center", "Project Management Studio"],
  },
  {
    name: "Department of Business Analytics",
    image: "/placeholder.svg?height=200&width=300",
    description: "Applies data-driven approaches to solve complex business problems.",
    faculty: 20,
    students: 400,
    researchAreas: ["Predictive Analytics", "Machine Learning in Business", "Big Data Management"],
    facilities: ["Analytics Lab", "Data Visualization Center", "Computing Cluster"],
  },
  {
    name: "Department of Computer Science and Engineering",
    image: "/placeholder.svg?height=200&width=300",
    description: "Focuses on the theory and practice of computing and its applications.",
    faculty: 35,
    students: 600,
    researchAreas: ["Artificial Intelligence", "Cybersecurity", "Software Engineering", "Computer Networks"],
    facilities: ["AI Research Lab", "Cybersecurity Center", "High-Performance Computing Cluster"],
  },
]

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("Academic Programs")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-8 pb-16">
        <Breadcrumb items={[{ label: "Academics", href: "/academics" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Academics</h1>
        </div>

        <LineTabs
          tabs={["Academic Programs", "Departments"]}
          center
          customID="academics"
          onTabChange={handleTabChange}
        />

        {activeTab === "Academic Programs" && (
          <div className="space-y-12">
            {programs.map((program) => (
              <section key={program.name} className="bg-card rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center mb-4">
                      <program.icon className="h-6 w-6 mr-2" />
                      {program.name}
                    </h2>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image src={program.image || "/placeholder.svg"} alt={program.name} fill className="object-cover" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {program.courses.map((course) => (
                    <Card key={course.name} className="bg-muted">
                      <CardHeader>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p>
                            <strong>Duration:</strong> {course.duration}
                          </p>
                          <p>
                            <strong>Credits:</strong> {course.credits}
                          </p>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <Link
                          href={`/academics/${course.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-4"
                        >
                          Learn more <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === "Departments" && (
          <div className="grid gap-8">
            {departments.map((department) => (
              <Card key={department.name} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src={department.image || "/placeholder.svg"}
                      alt={department.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader>
                      <CardTitle>{department.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{department.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">{department.faculty}</div>
                          <div className="text-sm text-muted-foreground">Faculty Members</div>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <div className="text-2xl font-bold text-primary">{department.students}</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Research Areas</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            {department.researchAreas.map((area) => (
                              <li key={area}>{area}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Facilities</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            {department.facilities.map((facility) => (
                              <li key={facility}>{facility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

