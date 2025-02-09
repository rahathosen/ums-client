"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, GraduationCap, Users } from "lucide-react"

export default function StudentGroupsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Student Groups</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: "Social Committee", icon: Users },
            { title: "Student Magazine", icon: GraduationCap },
            { title: "ESTIEM", icon: Users },
            { title: "Cultural Committee", icon: Users },
          ].map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <group.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{group.title}</h3>
              <Link href="#" className="inline-flex items-center text-sm text-primary">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

