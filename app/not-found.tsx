import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Layout from "./components/layout";
import { Button } from "@/components/ui/button";
import BackgroundBricks from "./components/background-bricks";

export default function NotFound() {
  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <BackgroundBricks
          patternColor="#fb3a5d"
          backgroundColor="#f8f9fa"
          className="absolute inset-0 opacity-10"
        />
        <div className="container mx-auto px-4 py-16 relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <Button
            asChild
            size="lg"
            variant={"outline"}
            className="bg-primary p-2 hover:bg-primary/90 rounded-md text-base text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl mb-12"
          >
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">
              Here are some helpful links:
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {["Academics", "Admissions", "Campus Life", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-primary hover:underline hover:text-primary/80 transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
