"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import BackgroundBricks from "../components/background-bricks"

const galleryItems = [
  {
    id: 1,
    title: "Campus Life",
    description: "Students enjoying a sunny day on the main quad.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Research Lab",
    description: "State-of-the-art equipment in our advanced research laboratory.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    description: "Celebrating our graduates' achievements.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Library",
    description: "Our extensive library collection and study spaces.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Sports Event",
    description: "Annual inter-university sports competition.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Art Exhibition",
    description: "Showcasing student artwork in our gallery.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Guest Lecture",
    description: "Distinguished speakers sharing insights with our students.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Student Club Fair",
    description: "Exploring the diverse range of student organizations on campus.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Gallery", href: "/gallery" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">University Gallery</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
              <button onClick={() => setSelectedImage(null)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="relative h-96 mb-4">
              <Image
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-600">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </Layout>
  )
}

