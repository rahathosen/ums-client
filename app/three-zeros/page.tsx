import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import BackgroundBricks from "../components/background-bricks"

export default function ThreeZerosPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Three Zeros", href: "/three-zeros" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">A World of Three Zeros</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Zero Poverty</h2>
              <p>Eliminating poverty through social business and microcredit initiatives.</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Zero Unemployment</h2>
              <p>Creating opportunities for everyone to contribute to the economy.</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Zero Net Carbon Emissions</h2>
              <p>Achieving environmental sustainability through responsible business practices.</p>
            </CardContent>
          </Card>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">The Current State of Capitalism</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Muhammad Yunus argues that the current capitalist system is inherently flawed, leading to extreme wealth
                inequality, environmental degradation, and social unrest. He attributes these issues to the pursuit of
                profit maximization at the expense of social and environmental well-being.
              </p>
              <p>
                Yunus criticizes traditional measurements of economic success, such as GDP, for failing to account for
                social and environmental costs. This narrow focus on financial gains has led to the neglect of human
                needs and the planet&apos;s sustainability.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Illustration of wealth inequality"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="my-12 bg-muted p-6 rounded-lg">
          <blockquote className="text-2xl italic font-semibold text-center">
            &quot;Poverty is not created by poor people. It&apos;s created by the system we have built.&quot;
            <footer className="text-right mt-2">— Muhammad Yunus</footer>
          </blockquote>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">The Concept of Social Business</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Social business concept illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="mb-4">
                Yunus introduces the concept of social business as a potential solution to the problems of traditional
                capitalism. He defines a social business as a non-loss, non-dividend company dedicated to solving social
                problems.
              </p>
              <p>
                Unlike traditional businesses, social businesses are not driven by profit maximization but by the
                pursuit of social and environmental goals. Yunus provides examples such as Grameen Danone, a joint
                venture that produces affordable, nutritious yogurt for malnourished children in Bangladesh.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">The Role of Microcredit in Poverty Alleviation</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Microcredit, the practice of providing small loans to entrepreneurs who lack access to traditional
                banking systems, is another key concept in A World of Three Zeros. Yunus explains how Grameen Bank
                pioneered the use of microcredit to empower the poor, particularly women, to start their own businesses
                and improve their economic status.
              </p>
              <p>
                He emphasizes that microcredit is not charity but a powerful tool for poverty alleviation. By providing
                individuals with the means to create their own livelihoods, microcredit can break the cycle of poverty
                and foster economic self-sufficiency.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Microcredit in action"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="my-12 bg-muted p-6 rounded-lg">
          <blockquote className="text-2xl italic font-semibold text-center">
            &quot;All human beings are born entrepreneurs. Some get a chance to unleash that capacity. Some never got the
            chance, never knew that he or she has that capacity.&quot;
            <footer className="text-right mt-2">— Muhammad Yunus</footer>
          </blockquote>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Creating a World of Three Zeros</h2>
          <p className="mb-4">
            Yunus envisions a world of three zeros: zero poverty, zero unemployment, and zero net carbon emissions. He
            argues that achieving these ambitious goals requires a fundamental shift in our economic mindset. Instead of
            focusing solely on profit, businesses should prioritize social and environmental impact.
          </p>
          <p>
            Governments, too, need to create policies that incentivize and support these new economic models. Yunus
            calls for a global movement to transform capitalism into a more inclusive, sustainable, and humane system.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Key Steps Towards Three Zeros:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Promote and support social businesses</li>
              <li>Expand access to microcredit</li>
              <li>Implement policies that prioritize social and environmental impact</li>
              <li>Redefine economic success beyond financial metrics</li>
              <li>Foster innovation in sustainable technologies</li>
              <li>Encourage youth entrepreneurship</li>
            </ul>
          </div>
        </section>

        <section className="my-12">
          <Card className="bg-primary text-primary-foreground p-6">
            <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
            <p className="mb-4">
              Be part of the global effort to create a world of three zeros. Learn more about social businesses, support
              microcredit initiatives, and advocate for policies that prioritize people and the planet.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Together, we can build a more equitable and sustainable future.
            </Badge>
          </Card>
        </section>
      </div>
    </Layout>
  )
}

