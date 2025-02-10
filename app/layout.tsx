import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Techsand International University",
    template: "%s | Techsand International University",
  },
  description:
    "Student organization for Industrial Economics and Technology Management",
  openGraph: {
    title: "Techsand International University",
    description:
      "Student organization for Industrial Economics and Technology Management",
    url: "/",
    siteName: "Techsand International University",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
      },
    ],
    locale: "bn-BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
