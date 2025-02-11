import Layout from "../components/layout";
import Breadcrumb from "../components/breadcrumb";
import BackgroundBricks from "../components/background-bricks";
import type React from "react";
import type { Metadata } from "next";
import AIChat from "../components/ai-chat";

export const metadata: Metadata = {
  title: "AI",
  openGraph: {
    images: [
      {
        url: "/api/og?title=Techsand AI",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AIChatPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "AI Chat Assistant", href: "/ai-chat" }]}
        />
        <div className="relative py-16 mb-12">
          <BackgroundBricks
            patternColor="#fb3a5d"
            backgroundColor="#f8f9fa"
            className="opacity-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">
            AI Chat Assistant
          </h1>
        </div>
        <AIChat />
      </div>
    </Layout>
  );
}
