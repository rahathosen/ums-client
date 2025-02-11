import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionRequirements() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Academic Qualifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Combined GPA of 8.0 in both SSC and HSC with a minimum GPA of 3.5
              in each
              <br />
              OR
            </li>
            <li>
              GCE O-Levels and A-Levels: O-Levels in five subjects with a
              minimum Average Grade Point of 2.5 and A-Levels in two subjects
              with a minimum Average Grade Point of 2.0. Only one &apos;E&apos;
              Grade is acceptable in combined O & A-Levels. (Scale A=5, B=4,
              C=3, D=2 & E=1)
              <br />
              OR
            </li>
            <li>
              US High School Diploma, IB Diploma Program (IB-DP) or equivalent.
            </li>
          </ul>
          <p className="mt-4">
            Students with academic qualifications other than the above need to
            contact the Admissions Office to check their eligibility.
          </p>
          <p className="mt-2">
            <strong>Foreign Applicants:</strong> Candidates must have a minimum
            avg 60% marks in Grades 10th and 12th.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Specific Program Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Engineering programs (BS in CSE, EEE, and CEE):</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Math and Physics with a minimum B grade in HSC OR</li>
                <li>
                  Math & Physics with a minimum C & E grade respectively in
                  A-Levels OR
                </li>
                <li>
                  Math and Physics with a minimum C grade in O-Levels AND must
                  have Math or Physics with a minimum C grade in A-Levels
                </li>
              </ul>
            </li>
            <li>
              <strong>B.Arch. (Bachelor of Architecture):</strong> Math or
              Physics with a minimum &apos;B&apos; grade in HSC or a
              &apos;C&apos; grade in A-Levels
            </li>
            <li>
              <strong>Biochemistry and Microbiology:</strong> Biology and
              Chemistry in SSC/HSC or O/A Levels
            </li>
            <li>
              <strong>BPharm:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Physics, Chemistry, and Biology with a minimum &apos;A&apos;
                  grade in SSC/Equivalent and HSC/Equivalent separately
                </li>
                <li>
                  Physics, Chemistry, and Biology with a minimum &apos;B&apos;
                  grade in A-Levels
                </li>
              </ul>
              <p className="mt-2 text-sm italic">
                Note: Candidate must pass HSC/A-Levels in the current year or
                the previous year for BPharm Program.
              </p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
        role="alert"
      >
        <p className="font-bold">Please read carefully:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Please check the eligibility criteria before applying. Applicants
            not meeting the eligibility criteria may be refused admission and
            payments made for the same will not be refunded.
          </li>
          <li>
            Candidates whose first choice is LLB or BPharm will be given first
            preference.
          </li>
        </ul>
      </div>
    </div>
  );
}
