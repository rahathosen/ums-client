import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionProcess() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Online Admission Process</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Complete your registration</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Read carefully your eligibility from the tab Minimum
                  Requirement.
                </li>
                <li>
                  Complete your registration with a valid email and phone
                  number.
                </li>
                <li>Verify your email and then log in again.</li>
              </ul>
            </li>
            <li>
              <strong>Complete your application form</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>After registration, you will get an Application form.</li>
                <li>Complete your application form with valid information.</li>
                <li>
                  You may check your application form carefully before the final
                  Submission.
                </li>
                <li>
                  Once it is submitted you are not able to edit your application
                  form.
                </li>
              </ul>
            </li>
            <li>
              <strong>Payment options for application Fee</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Payment with Bkash: 1523/-</li>
                <li>Payment with Bank: 1500/-</li>
                <li>For details go to the Payment Process tab</li>
              </ul>
            </li>
            <li>
              <strong>Print your admit card</strong>
              <p>Print your admit card to sit for the exam.</p>
            </li>
          </ol>
          <p className="mt-4 font-bold">
            Finally, bring your printed Admit Card with you on Admission Exam
            Day.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
