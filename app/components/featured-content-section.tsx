import TabSection from "./tab-section"

export default function FeaturedContentSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Content</h2>
        <TabSection />
      </div>
    </section>
  )
}

