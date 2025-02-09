"use client"

import { motion } from "motion/react"
import ImageCarousel from "./image-carousel"

const slides = [
  {
    title: "Discover Your Potential",
    subtitle: "Join a community of innovators and leaders in technology and economics.",
    label: "ACADEMICS",
  },
  {
    title: "Shape the Future",
    subtitle: "Engage in cutting-edge research and collaborative projects.",
    label: "RESEARCH",
  },
  {
    title: "Experience Campus Life",
    subtitle: "Immerse yourself in a vibrant and diverse university community.",
    label: "STUDENT LIFE",
  },
]

export default function HeroCarousel() {
  return (
    <div className="relative">
      <ImageCarousel />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block text-primary-foreground/90 font-semibold mb-4">{slides[0].label}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{slides[0].title}</h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">{slides[0].subtitle}</p>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-primary text-primary-foreground text-sm md:text-base rounded-md hover:bg-primary/90 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

