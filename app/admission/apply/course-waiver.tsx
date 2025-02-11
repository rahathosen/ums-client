import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CourseWaiver() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Course Waiver Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Course(s) waived against:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              minimum SAT score 1150 (1600 scale): ENG102 & BUS112/ MAT112 will
              be waived
            </li>
            <li>
              minimum IELTS 7.0 or TOEFL (PBT 563 or CBT 223 or IBT 85): ENG102
              will be waived
            </li>
            <li>minimum IELTS 8.0 : ENG103 will be waived.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Procedure for Course Waiver</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Candidates have to send an email to admissions@techsand.edu. (You
              must mention the testpass number and attach the scan copy of
              SAT/IELTS/TOEFL certificates in your email.)
            </li>
            <li>
              Candidates must verify their documents through online portal (for
              online verification, user id and password will be needed).
            </li>
          </ol>
          <p className="mt-4 italic text-sm">
            Note: Documents must be submitted by application deadline
          </p>
        </CardContent>
      </Card>

      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
        role="alert"
      >
        <p>
          * Techsand International University reserves the right to change any
          requirement at any time. Candidates are advised to visit the
          university website for updates.
        </p>
      </div>
    </div>
  );
}
