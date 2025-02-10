"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Welcome to TECHSAND
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-4 md:space-y-6">
            <span className="text-primary text-sm font-semibold">
              STUDENT ASSOCIATION
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Techsand International University
            </h3>
            <p className="text-muted-foreground">
              Join a community of innovators and leaders in technology and
              economics. Our program prepares you for the challenges of
              tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                About the Program
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-muted-foreground rounded-md hover:bg-muted transition-colors"
              >
                View Events
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571443979997-d25042c872e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="University library interior"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
