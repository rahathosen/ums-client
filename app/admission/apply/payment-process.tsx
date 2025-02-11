import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentProcess() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Options</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Bkash:</strong>
              <p>bKash payment amount: Tk. 1,523.00</p>
            </li>
            <li>
              <strong>Bank Transfer:</strong>
              <p>Bank payment amount: Tk. 1,500.00</p>
            </li>
          </ul>
          <p className="mt-4">
            For detailed instructions on how to make the payment, please contact
            the admissions office or check the university website.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
