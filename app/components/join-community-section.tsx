"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export default function JoinCommunitySection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src="https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg"
              alt="University campus"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">Amazing Student Community</h3>
            <p className="text-muted-foreground">
              We have student organizations that cater to various interests. Whether you&apos;re passionate about technology,
              business, or social activities, you&apos;ll find your place here.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

