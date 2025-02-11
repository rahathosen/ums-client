import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdmissionRequirements from "./admission-requirements";
import AdmissionProcess from "./admission-process";
import PaymentProcess from "./payment-process";
import TestProcedure from "./test-procedure";
import AdmissionWaiver from "./admission-waiver";
import CourseWaiver from "./course-waiver";
import BackgroundBricks from "../../components/background-bricks";

export default function AdmissionApplyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Admission", href: "/admission" },
            { label: "Apply", href: "/admission/apply" },
          ]}
        />
        <div className="relative py-16 mb-12">
          <BackgroundBricks
            patternColor="#fb3a5d"
            backgroundColor="#f8f9fa"
            className="opacity-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            Undergraduate Admission
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Admission Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="requirements">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="process">Application Process</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="test">Test Procedure</TabsTrigger>
                <TabsTrigger value="admission-waiver">
                  Admission Test Waiver
                </TabsTrigger>
                <TabsTrigger value="course-waiver">Course Waiver</TabsTrigger>
              </TabsList>
              <TabsContent value="requirements">
                <AdmissionRequirements />
              </TabsContent>
              <TabsContent value="process">
                <AdmissionProcess />
              </TabsContent>
              <TabsContent value="payment">
                <PaymentProcess />
              </TabsContent>
              <TabsContent value="test">
                <TestProcedure />
              </TabsContent>
              <TabsContent value="admission-waiver">
                <AdmissionWaiver />
              </TabsContent>
              <TabsContent value="course-waiver">
                <CourseWaiver />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
