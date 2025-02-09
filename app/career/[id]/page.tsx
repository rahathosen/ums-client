import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import Breadcrumb from "../../components/breadcrumb"

const jobs = [
  {
    id: 1,
    title: "Assistant Professor of Computer Science",
    department: "School of Engineering",
    type: "Full-time",
    location: "Main Campus",
    posted: "2023-07-01",
    description: `
      <p>The School of Engineering at our university is seeking a talented and motivated Assistant Professor of Computer Science to join our faculty. The successful candidate will contribute to our undergraduate and graduate programs through teaching, research, and service.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Teach undergraduate and graduate courses in computer science</li>
        <li>Develop and maintain an active research program</li>
        <li>Advise and mentor students</li>
        <li>Participate in departmental and university service activities</li>
        <li>Collaborate with colleagues across disciplines</li>
      </ul>
      <h3>Qualifications:</h3>
      <ul>
        <li>Ph.D. in Computer Science or a closely related field</li>
        <li>Strong record of research and publication</li>
        <li>Excellent teaching and communication skills</li>
        <li>Commitment to fostering an inclusive and diverse academic environment</li>
      </ul>
      <p>To apply, please submit a cover letter, curriculum vitae, research statement, teaching philosophy, and three references to our online application system.</p>
    `,
  },
  // Add more job details here...
]

export default function JobPage({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === Number.parseInt(params.id))

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Career Opportunities", href: "/career" },
          { label: job.title, href: `/career/${job.id}` },
        ]}
      />
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <Badge>{job.type}</Badge>
        </div>
        <div className="text-sm text-muted-foreground mb-6">Posted on: {job.posted}</div>
        <div className="mb-6">
          <p className="font-semibold">Department: {job.department}</p>
          <p className="font-semibold">Location: {job.location}</p>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  )
}

