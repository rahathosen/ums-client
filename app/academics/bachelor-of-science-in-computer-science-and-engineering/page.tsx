import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BackgroundBricks from "../../components/background-bricks";

const curriculum = [
  {
    year: "First Year",
    semesters: [
      {
        name: "Fall Semester",
        courses: [
          {
            code: "CSE101",
            name: "Introduction to Computer Science",
            credits: 3,
          },
          { code: "MATH101", name: "Calculus I", credits: 4 },
          { code: "PHYS101", name: "Physics I", credits: 4 },
          { code: "ENG101", name: "English Composition", credits: 3 },
          { code: "GEN101", name: "General Education Elective", credits: 3 },
        ],
      },
      {
        name: "Spring Semester",
        courses: [
          { code: "CSE102", name: "Programming Fundamentals", credits: 4 },
          { code: "MATH102", name: "Calculus II", credits: 4 },
          { code: "PHYS102", name: "Physics II", credits: 4 },
          { code: "CSE103", name: "Discrete Mathematics", credits: 3 },
          { code: "GEN102", name: "General Education Elective", credits: 3 },
        ],
      },
    ],
  },
  {
    year: "Second Year",
    semesters: [
      {
        name: "Fall Semester",
        courses: [
          {
            code: "CSE201",
            name: "Data Structures and Algorithms",
            credits: 4,
          },
          { code: "CSE202", name: "Digital Logic Design", credits: 3 },
          { code: "MATH201", name: "Linear Algebra", credits: 3 },
          { code: "CSE203", name: "Object-Oriented Programming", credits: 3 },
          { code: "GEN201", name: "General Education Elective", credits: 3 },
        ],
      },
      {
        name: "Spring Semester",
        courses: [
          { code: "CSE204", name: "Computer Architecture", credits: 3 },
          { code: "CSE205", name: "Database Systems", credits: 3 },
          { code: "MATH202", name: "Probability and Statistics", credits: 3 },
          { code: "CSE206", name: "Software Engineering", credits: 3 },
          { code: "GEN202", name: "General Education Elective", credits: 3 },
        ],
      },
    ],
  },
  {
    year: "Third Year",
    semesters: [
      {
        name: "Fall Semester",
        courses: [
          { code: "CSE301", name: "Operating Systems", credits: 4 },
          { code: "CSE302", name: "Computer Networks", credits: 3 },
          {
            code: "CSE303",
            name: "Algorithms Design and Analysis",
            credits: 3,
          },
          { code: "CSE304", name: "Web Development", credits: 3 },
          { code: "CSE305", name: "Technical Writing", credits: 2 },
        ],
      },
      {
        name: "Spring Semester",
        courses: [
          { code: "CSE306", name: "Artificial Intelligence", credits: 3 },
          {
            code: "CSE307",
            name: "Software Testing and Quality Assurance",
            credits: 3,
          },
          { code: "CSE308", name: "Computer Graphics", credits: 3 },
          { code: "CSE309", name: "Machine Learning", credits: 3 },
          { code: "CSE310", name: "Ethics in Computing", credits: 2 },
        ],
      },
    ],
  },
  {
    year: "Fourth Year",
    semesters: [
      {
        name: "Fall Semester",
        courses: [
          { code: "CSE401", name: "Cybersecurity", credits: 3 },
          { code: "CSE402", name: "Cloud Computing", credits: 3 },
          { code: "CSE403", name: "Big Data Analytics", credits: 3 },
          { code: "CSE404", name: "CSE Elective I", credits: 3 },
          { code: "CSE405", name: "Capstone Project I", credits: 3 },
        ],
      },
      {
        name: "Spring Semester",
        courses: [
          { code: "CSE406", name: "Distributed Systems", credits: 3 },
          { code: "CSE407", name: "Mobile App Development", credits: 3 },
          { code: "CSE408", name: "CSE Elective II", credits: 3 },
          { code: "CSE409", name: "CSE Elective III", credits: 3 },
          { code: "CSE410", name: "Capstone Project II", credits: 3 },
        ],
      },
    ],
  },
];

export default function CSEProgramPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Academics", href: "/academics" },
            {
              label: "Bachelor of Science in Computer Science and Engineering",
              href: "/academics/bachelor-of-science-in-computer-science-and-engineering",
            },
          ]}
        />
        <div className="relative py-16 mb-12">
          <BackgroundBricks
            patternColor="#fb3a5d"
            backgroundColor="#f8f9fa"
            className="opacity-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            Bachelor of Science in Computer Science and Engineering
          </h1>
        </div>

        <Card className="mb-8 bg-white shadow-md">
          <CardHeader>
            <CardTitle>Program Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Bachelor of Science in Computer Science and Engineering
              program is designed to provide students with a strong foundation
              in both theoretical and practical aspects of computing. This
              comprehensive program covers software development, hardware
              design, and the integration of both to create efficient and
              innovative computing systems.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Duration: 4 years</li>
              <li>Total Credits: 130</li>
              <li>
                Degree Awarded: Bachelor of Science (B.S.) in Computer Science
                and Engineering
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
        {curriculum.map((year) => (
          <div key={year.year} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{year.year}</h3>
            {year.semesters.map((semester) => (
              <Card key={semester.name} className="mb-4 bg-white shadow-md">
                <CardHeader>
                  <CardTitle>{semester.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course Code</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Credits</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {semester.courses.map((course) => (
                        <TableRow key={course.code}>
                          <TableCell>{course.code}</TableCell>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.credits}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}

        <Card className="bg-white shadow-md">
          <CardHeader>
            <CardTitle>Career Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Graduates of the Bachelor of Science in Computer Science and
              Engineering program are well-prepared for a wide range of career
              opportunities in the technology sector. Some potential career
              paths include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Software Developer</li>
              <li>Systems Analyst</li>
              <li>Database Administrator</li>
              <li>Network Engineer</li>
              <li>Cybersecurity Specialist</li>
              <li>Artificial Intelligence Engineer</li>
              <li>Cloud Computing Architect</li>
              <li>Mobile App Developer</li>
              <li>Data Scientist</li>
              <li>Research and Development Engineer</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
