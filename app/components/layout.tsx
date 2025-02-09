import type React from "react"
import Header from "./header"
import Footer from "./footer"
import TopBanner from "./top-banner"
import ScrollToTop from "./scroll-to-top"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <TopBanner />
      <Header />
      <main className="flex-grow bg-background pt-28">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

