"use client"

import { useState } from "react"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Globe, DollarSign } from "lucide-react"
import BackgroundBricks from "../components/background-bricks"
import LineTabs from "../components/line-tabs"

const admissionTypes = [
  {
    name: "Undergraduate Admission",
    icon: GraduationCap,
    requirements: [
      "High school diploma or equivalent",
      "Minimum GPA of 3.0",
      "SAT or ACT scores",
      "Letters of recommendation",
      "Personal statement",
    ],
    process: [
      "Submit online application",
      "Pay application fee",
      "Send official transcripts",
      "Submit test scores",
      "Complete interview (if required)",
    ],
  },
  {
    name: "Graduate Admission",
    icon: Users,
    requirements: [
      "Bachelor's degree from an accredited institution",
      "Minimum GPA of 3.2 in undergraduate studies",
      "GRE or GMAT scores",
      "Letters of recommendation",
      "Statement of purpose",
      "Resume or CV",
    ],
    process: [
      "Submit online application",
      "Pay application fee",
      "Send official transcripts",
      "Submit test scores",
      "Provide letters of recommendation",
      "Complete interview (if required)",
    ],
  },
  {
    name: "International Students",
    icon: Globe,
    requirements: [
      "All requirements for Undergraduate or Graduate admission",
      "Proof of English proficiency (TOEFL or IELTS)",
      "Financial documentation",
      "Passport copy",
    ],
    process: [
      "Submit online application",
      "Pay application fee",
      "Send official transcripts (translated if necessary)",
      "Submit test scores",
      "Provide proof of English proficiency",
      "Submit financial documents",
      "Apply for student visa after acceptance",
    ],
  },
]

const financialAid = [
  {
    name: "Scholarships",
    description: "Merit-based awards that don't need to be repaid",
    types: [
      "Academic Excellence Scholarships",
      "Leadership Scholarships",
      "Diversity Scholarships",
      "Athletic Scholarships",
    ],
  },
  {
    name: "Grants",
    description: "Need-based financial aid that doesn't need to be repaid",
    types: ["Federal Pell Grants", "State Grants", "University Grants"],
  },
  {
    name: "Loans",
    description: "Borrowed money that must be repaid with interest",
    types: ["Federal Direct Loans", "Parent PLUS Loans", "Private Student Loans"],
  },
  {
    name: "Work-Study Programs",
    description: "Part-time jobs for students with financial need",
    types: ["On-campus jobs", "Off-campus community service jobs"],
  },
]

export default function AdmissionPage() {
  const [activeTab, setActiveTab] = useState("Admission Requirements")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Admission", href: "/admission" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Admission</h1>
        </div>

        <LineTabs
          tabs={["Admission Requirements", "Financial Aid"]}
          center
          customID="admission"
          onTabChange={handleTabChange}
        />

        {activeTab === "Admission Requirements" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionTypes.map((type) => (
              <Card key={type.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <type.icon className="h-6 w-6 mr-2" />
                    {type.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 mb-4">
                    {type.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Application Process:</h4>
                  <ol className="list-decimal pl-5">
                    {type.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "Financial Aid" && (
          <div className="grid md:grid-cols-2 gap-6">
            {financialAid.map((aid) => (
              <Card key={aid.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-6 w-6 mr-2" />
                    {aid.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{aid.description}</p>
                  <h4 className="font-semibold mb-2">Types:</h4>
                  <ul className="list-disc pl-5">
                    {aid.types.map((type) => (
                      <li key={type}>{type}</li>
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

