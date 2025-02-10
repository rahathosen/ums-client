"use client";

import {
  Mail,
  MapPin,
  User,
  Phone,
  Calendar,
  Book,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  {
    icon: Mail,
    text: "contact@techsand.edu",
    href: "mailto:contact@techsand.edu",
  },
  { icon: Phone, text: "+880 1330-459609", href: "tel:+8801330-459609" },
  { icon: MapPin, text: "Campus Map", href: "/campus-map" },
  { icon: Calendar, text: "Events", href: "/events" },
  { icon: Book, text: "Library", href: "/library" },
  { icon: MessageSquare, text: "AI Chat", href: "/ai-chat" },
];

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          {/* Desktop view */}
          <div className="hidden md:flex space-x-4 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center hover:underline"
              >
                <link.icon className="h-4 w-4 mr-1" />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>

          {/* Mobile view */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground hover:text-primary-foreground/80"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Login button (visible on both desktop and mobile) */}
          <Link
            href="/login"
            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors"
          >
            <User className="h-3 w-3 mr-1" />
            Login
          </Link>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-2 space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center text-sm hover:underline py-1"
              >
                <link.icon className="h-4 w-4 mr-2" />
                <span>{link.text}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
