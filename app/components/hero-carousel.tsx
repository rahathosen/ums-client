"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextEffect } from "@/components/core/text-effect";

const slides = [
  {
    title: "Discover Your Potential",
    subtitle:
      "Join a community of innovators and leaders in technology and economics.",
    label: "ACADEMICS",
    image:
      "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
    alt: "Modern university building",
  },
  {
    title: "Shape the Future",
    subtitle: "Engage in cutting-edge research and collaborative projects.",
    label: "RESEARCH",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Historic university campus",
  },
  {
    title: "Experience Campus Life",
    subtitle: "Immerse yourself in a vibrant and diverse university community.",
    label: "STUDENT LIFE",
    image:
      "https://images.unsplash.com/photo-1571443979997-d25042c872e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "University library interior",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[600px] max-h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block text-primary-foreground/90 font-semibold mb-4">
              {slides[currentIndex].label}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <TextEffect
                key={currentIndex}
                preset="fade-in-blur"
                speedReveal={1.1}
                speedSegment={0.3}
              >
                {slides[currentIndex].title}
              </TextEffect>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
              <TextEffect key={currentIndex} per="char" preset="fade">
                {slides[currentIndex].subtitle}
              </TextEffect>
            </p>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-primary text-primary-foreground text-sm md:text-base rounded-md hover:bg-primary/90 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-secondary/70 hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-secondary/70 hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
