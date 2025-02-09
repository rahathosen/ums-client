import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    title: "Modern Campus Building",
    image: "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
  },
  {
    title: "Historic Campus",
    image:
      "https://images.unsplash.com/20/cambridge.JPG?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "University Library",
    image:
      "https://images.unsplash.com/photo-1571443979997-d25042c872e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Student Life",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GallerySection() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/gallery"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          View Full Gallery
        </Link>
      </div>
    </>
  )
}

