import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestProcedure() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Admission Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            A two-and-a-half-hour Admission Test consists of English grammar &
            vocabulary, Quantitative Aptitude (General Math), Reading
            comprehension, and Composition (Essay).
          </p>
          <p className="mt-2">
            In addition, there will be a 30-minute drawing test for the Bachelor
            of Architecture candidates.
          </p>
          <p className="mt-2">
            For admission test sample question paper, please visit:{" "}
            <a href="#" className="text-primary hover:underline">
              Sample Question Paper
            </a>
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test Day Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All candidates must bring admit card & one original photo ID
              (Passport or NID or HSC Registration Card).
            </li>
            <li>
              All candidates must report at least 30 min before the admission
              test.
            </li>
            <li>
              Cell phones, digital watches, calculators, tabs, cameras, and
              handbags will not be allowed in the examination hall.
            </li>
            <li>
              All candidates should bring pens, pencils, sharpeners, erasers,
              etc.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Required Documents for Admission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The following documents of the successful candidates will be needed
            at the time of Admission:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>SSC/O-levels mark sheet and certificate</li>
            <li>HSC/A-levels mark sheet and certificate</li>
            <li>
              Two recent passport-size photographs of the candidate and parents
            </li>
            <li>Candidate&apos;s and parent&apos;s NID/Passport</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
