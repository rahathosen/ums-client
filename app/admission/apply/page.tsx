"use client";

import { useState } from "react";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AdmissionRequirements from "./admission-requirements";
import AdmissionProcess from "./admission-process";
import PaymentProcess from "./payment-process";
import TestProcedure from "./test-procedure";
import AdmissionWaiver from "./admission-waiver";
import CourseWaiver from "./course-waiver";
import BackgroundBricks from "../../components/background-bricks";

const tabs = [
  "Requirements",
  "Application Process",
  "Payment",
  "Test Procedure",
  "Admission Test Waiver",
  "Course Waiver",
];

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected, customID }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-primary" : "hover:text-foreground"
      } relative rounded-md px-2 py-1 text-sm font-medium text-muted-foreground transition-colors duration-300 focus-within:outline-primary/50`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

export default function AdmissionApplyPage() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Requirements":
        return <AdmissionRequirements />;
      case "Application Process":
        return <AdmissionProcess />;
      case "Payment":
        return <PaymentProcess />;
      case "Test Procedure":
        return <TestProcedure />;
      case "Admission Test Waiver":
        return <AdmissionWaiver />;
      case "Course Waiver":
        return <CourseWaiver />;
      default:
        return <AdmissionRequirements />;
    }
  };

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
            <div
              className={cn(
                "mb-8 flex flex-wrap items-center gap-2 border-b border-muted",
                "justify-center"
              )}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  text={tab}
                  selected={selectedTab === tab}
                  setSelected={setSelectedTab}
                  customID="admission"
                />
              ))}
            </div>
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
