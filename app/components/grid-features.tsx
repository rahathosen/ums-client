"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

export default function GridFeatures() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Left - Historic Building */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xl7jjIBYg3OQtUdG4nUpQu33j2ESGl.png"
            alt="Historic university building"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Top Right - Main Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#202020] text-white p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Main Board of the Association</h2>
          <p className="text-gray-300 mb-6">
            The main board&apos;s primary task is to ensure good communication and cooperation between various student
            initiatives, and to manage and allocate resources in a responsible manner.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Bottom Left - Student Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background p-8 rounded-lg border border-muted"
        >
          <span className="text-primary text-sm font-semibold">SOCIAL LIFE</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Join a Fantastic Student Environment</h2>
          <p className="text-muted-foreground mb-6">
            We have associations that cater to most interests, and you&apos;ll find an organization for anyone who wants to
            get involved!
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Get Involved
          </Link>
        </motion.div>

        {/* Bottom Right - Student Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative aspect-[4/3] rounded-lg overflow-hidden"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xl7jjIBYg3OQtUdG4nUpQu33j2ESGl.png"
            alt="Large group of students in formal attire"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

