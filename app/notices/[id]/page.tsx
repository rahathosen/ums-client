import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "../../components/breadcrumb";
import Layout from "@/app/components/layout";

const notices = [
  {
    id: 1,
    title: "Important Update on Fall Semester Registration",
    date: "2023-07-01",
    category: "Academic",
    content: `
      <p>All students are required to complete their course registration by July 31st. Late registration fees will apply after this date.</p>
      <h3>Key Information:</h3>
      <ul>
        <li>Registration period: July 1st - July 31st</li>
        <li>Late registration: August 1st - August 7th (additional fees apply)</li>
        <li>Course catalog available online from June 25th</li>
        <li>Consult with academic advisors before finalizing your schedule</li>
      </ul>
      <p>Please ensure you complete your registration on time to avoid any inconvenience or additional fees. If you have any questions or concerns, please contact the Registrar's Office.</p>
    `,
  },
  {
    id: 2,
    title: "New Research Funding Opportunities",
    date: "2023-06-28",
    category: "Research",
    content: `
      <p>The Office of Research has announced new grant opportunities for faculty members in STEM fields. Application deadline is August 15th.</p>
      <h3>Grant Details:</h3>
      <ul>
        <li>Total funding pool: $5 million</li>
        <li>Individual grants up to $500,000</li>
        <li>Priority areas: AI, Renewable Energy, Biotechnology</li>
        <li>Collaborative proposals encouraged</li>
      </ul>
      <p>Interested faculty members should submit their proposals through the online portal. For more information, please attend the information session on July 10th or contact the Office of Research.</p>
    `,
  },
  // Add more notice details here...
];

export default function NoticePage({ params }: { params: { id: string } }) {
  const notice = notices.find((n) => n.id === Number.parseInt(params.id));

  if (!notice) {
    notFound();
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Notices", href: "/notices" },
            { label: notice.title, href: `/notices/${notice.id}` },
          ]}
        />
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{notice.title}</h1>
            <Badge>{notice.category}</Badge>
          </div>
          <div className="text-sm text-muted-foreground mb-6">
            Published on: {notice.date}
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />
        </div>
      </div>
    </Layout>
  );
}
