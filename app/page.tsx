import Layout from "./components/layout"
import HeroCarousel from "./components/hero-carousel"
import InfoCards from "./components/info-cards"
import EventsSection from "./components/events-section"
import GallerySection from "./components/gallery-section"
import NoticeSection from "./components/notice-section"
import WelcomeSection from "./components/welcome-section"
import FeaturedContentSection from "./components/featured-content-section"
import StudentGroupsSection from "./components/student-groups-section"
import JoinCommunitySection from "./components/join-community-section"

export default function Home() {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <HeroCarousel />
        <InfoCards />
        <WelcomeSection />
        <FeaturedContentSection />
        <StudentGroupsSection />
        <JoinCommunitySection />
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>
            <EventsSection />
          </div>
        </section>
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Campus Gallery</h2>
            <GallerySection />
          </div>
        </section>
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Important Notices</h2>
            <NoticeSection />
          </div>
        </section>
      </div>
    </Layout>
  )
}

