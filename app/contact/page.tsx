import Layout from "../components/layout"
import Breadcrumb from "../components/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Image from "next/image"
import BackgroundBricks from "../components/background-bricks"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 University Avenue, Cityville, State 12345, Country",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@industrialeconomics.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 9:00 AM - 5:00 PM",
  },
]

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />
        <div className="relative py-16 mb-12">
          <BackgroundBricks patternColor="#fb3a5d" backgroundColor="#f8f9fa" className="opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-center relative z-10">Get in Touch</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">
                    Name
                  </Label>
                  <Input id="name" placeholder="Your Name" className="w-full bg-gray-50/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="w-full bg-gray-50/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base">
                  Subject
                </Label>
                <Input id="subject" placeholder="How can we help you?" className="w-full bg-gray-50/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base">
                  Message
                </Label>
                <Textarea id="message" placeholder="Your message here..." rows={6} className="w-full bg-gray-50/50" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>

          <div className="lg:pl-12 space-y-8">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="University Campus"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="grid gap-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start">
                      <item.icon className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-primary-foreground/90 mt-1">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Find Us on Campus</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164965!2d-73.98492378459375!3d40.75838197932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794293527!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

