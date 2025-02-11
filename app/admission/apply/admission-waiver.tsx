import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionWaiver() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Admission Test Waiver Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Admission test is waived for eligible candidates who meet the
            admission requirements and with the following:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>SAT score 1150 (1600 scale) or 1700 (2400 scale) or</li>
            <li>IELTS 7.0 or</li>
            <li>
              TOEFL scores:
              <ul className="list-disc pl-6 mt-1">
                <li>Paper-Based Test (PBT) 563 or</li>
                <li>Computer-Based Test (CBT) 223 or</li>
                <li>Internet-Based Test (IBT) 85</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4">
            However, students with admission tests waived against IELTS or TOEFL
            scores will not be eligible to get admission in BS Economics, BPharm
            and any of the engineering programs (B.Arch., CSE, EEE & CEE)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Application Procedure for Admission Test Waiver</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Applicant must complete the online application form</li>
            <li>
              Candidates have to send us a formal email to
              admissions@techsand.edu with the following attached documents:
              <ul className="list-disc pl-6 mt-1">
                <li>Admit card</li>
                <li>Scan copy of IELTS/SAT/TOEFL certificate</li>
                <li>All academic transcripts and certificates</li>
              </ul>
            </li>
            <li>
              Candidate must verify their documents (IELTS/SAT/TOEFL) through
              online portal (for online verification, user id and password will
              be needed).
            </li>
          </ol>
          <p className="mt-4 italic text-sm">
            Note: Documents must be submitted by application deadline
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
