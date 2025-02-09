"use client"

import { useState } from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Lightbulb, Users, BookOpen } from "lucide-react"
import BackgroundBricks from "../components/background-bricks"
import LineTabs from "../components/line-tabs"

const researchAreas = [
  {
    name: "Industrial Economics",
    icon: Microscope,
    description: "Studying the structure of and boundaries between firms and markets",
    topics: [
      "Market Structure and Firm Behavior",
      "Regulation and Competition Policy",
      "Innovation and Technological Change",
      "Network Economics",
    ],
  },
  {
    name: "Technology Management",
    icon: Lightbulb,
    description: "Exploring the intersection of technology, innovation, and business strategy",
    topics: [
      "Technology Strategy and Innovation",
      "Digital Transformation",
      "R&D Management",
      "Technology Adoption and Diffusion",
    ],
  },
  {
    name: "Business Analytics",
    icon: Users,
    description: "Applying data-driven approaches to solve complex business problems",
    topics: ["Predictive Analytics", "Machine Learning in Business", "Big Data Management", "Decision Support Systems"],
  },
  {
    name: "Sustainable Technologies",
    icon: BookOpen,
    description: "Investigating technologies and strategies for sustainable development",
    topics: [
      "Green Technologies",
      "Circular Economy",
      "Sustainable Supply Chain Management",
      "Energy Efficiency and Renewable Energy",
    ],
  },
]

const researchCenters = [
  {
    name: "Center for Industrial Economics and Competition",
    description: "Focuses on research related to market structures, firm behavior, and competition policy.",
    projects: [
      "Antitrust Policy in Digital Markets",
      "Innovation Ecosystems and Platform Competition",
      "Merger Analysis in Dynamic Industries",
    ],
  },
  {
    name: "Technology Innovation Lab",
    description: "Explores cutting-edge technologies and their impact on business and society.",
    projects: [
      "AI and Machine Learning Applications in Business",
      "Blockchain for Supply Chain Transparency",
      "Internet of Things (IoT) in Smart Cities",
    ],
  },
  {
    name: "Sustainable Business Research Group",
    description: "Investigates strategies for sustainable business practices and technologies.",
    projects: [
      "Circular Economy Business Models",
      "Green Technology Adoption Barriers",
      "Sustainable Innovation in Emerging Markets",
    ],
  },
  {
    name: "Data Analytics and Decision Science Center",
    description: "Develops advanced analytics techniques for business decision-making.",
    projects: [
      "Predictive Analytics for Customer Behavior",
      "Real-time Analytics for Supply Chain Optimization",
      "Natural Language Processing for Market Intelligence",
    ],
  },
]

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState("Research Areas")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Research", href: "/research" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Research</h1>
        </div>

        <LineTabs
          tabs={["Research Areas", "Research Centers"]}
          center
          customID="research"
          onTabChange={handleTabChange}
        />

        {activeTab === "Research Areas" && (
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <area.icon className="h-6 w-6 mr-2" />
                    {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{area.description}</p>
                  <h4 className="font-semibold mb-2">Key Research Topics:</h4>
                  <ul className="list-disc pl-5">
                    {area.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "Research Centers" && (
          <div className="grid md:grid-cols-2 gap-6">
            {researchCenters.map((center) => (
              <Card key={center.name}>
                <CardHeader>
                  <CardTitle>{center.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{center.description}</p>
                  <h4 className="font-semibold mb-2">Current Projects:</h4>
                  <ul className="list-disc pl-5">
                    {center.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

