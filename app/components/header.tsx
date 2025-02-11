"use client";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type MenuItem = {
  name: string;
  href: string;
  submenu: (SubMenuItem | SubMenuSection)[];
};

type SubMenuItem = {
  name: string;
  href: string;
};

type SubMenuSection = {
  title: string;
  items: SubMenuItem[];
};

function isSubMenuSection(
  item: SubMenuItem | SubMenuSection
): item is SubMenuSection {
  return "title" in item;
}

const menuItems: MenuItem[] = [
  {
    name: "About",
    href: "/about",
    submenu: [
      {
        title: "University Information",
        items: [
          { name: "University Overview", href: "/about/overview" },
          { name: "History & Traditions", href: "/about/history" },
          { name: "Campus Tour", href: "/about/campus-tour" },
        ],
      },
      {
        title: "Leadership & Governance",
        items: [
          { name: "Board of Trustees", href: "/about/board" },
          { name: "University Leadership", href: "/about/leadership" },
          { name: "Policies & Procedures", href: "/about/policies" },
        ],
      },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    submenu: [
      {
        title: "Undergraduate Programs",
        href: "/academics",
        items: [
          {
            name: "Bachelor of Science in Industrial Economics",
            href: "/academics/Bachelor-of-Science-in-Industrial-Economics",
          },
          {
            name: "Bachelor of Science in Computer Science and Engineering",
            href: "/academics/bachelor-of-science-in-computer-science-and-engineering",
          },
          {
            name: "Bachelor of Science in Technology Management",
            href: "/academics/bachelor-of-science-in-computer-science-and-engineering",
          },
          {
            name: "ALL Programs",
            href: "/academics",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          { name: "Academic Calendar", href: "/academics/calendar" },
          { name: "Library", href: "/academics/library" },
          { name: "Research Centers", href: "/academics/research-centers" },
        ],
      },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    submenu: [
      { name: "Undergraduate Admissions", href: "/admission" },
      { name: "Graduate Admissions", href: "/admission/graduate" },
      { name: "International Students", href: "/admission/international" },
      { name: "Financial Aid", href: "/admission/financial-aid" },
      { name: "Apply", href: "/admission/apply" },
    ],
  },
  {
    name: "Research",
    href: "/research",
    submenu: [
      { name: "Research Centers", href: "/research" },
      { name: "Publications", href: "/research/publications" },
      { name: "Partnerships", href: "/research/partnerships" },
      { name: "Funding Opportunities", href: "/research/funding" },
    ],
  },
  {
    name: "Life",
    href: "/campus-life",
    submenu: [
      { name: "Housing", href: "/campus-life/housing" },
      { name: "Dining", href: "/campus-life/dining" },
      { name: "Athletics", href: "/campus-life/athletics" },
      { name: "Student Organizations", href: "/campus-life/organizations" },
      { name: "Career", href: "/career" },
    ],
  },
  {
    name: "Alumni",
    href: "/alumni",
    submenu: [
      { name: "Alumni Network", href: "/alumni/network" },
      { name: "Events", href: "/alumni/events" },
      { name: "Give Back", href: "/alumni/give" },
      { name: "Success Stories", href: "/alumni/stories" },
    ],
  },
  {
    name: "News",
    href: "/news-events",
    submenu: [
      { name: "University News", href: "/news-events/news" },
      { name: "Events", href: "/events" },
      { name: "Notices", href: "/notices" },
      { name: "Gallery", href: "/gallery" },
      { name: "Event Calendar", href: "/events" },
      { name: "Press Releases", href: "/news-events/press-releases" },
      { name: "Media Resources", href: "/news-events/media-resources" },
    ],
  },
  {
    name: "Ideas",
    href: "/three-zeros",
    submenu: [{ name: "Three Zeros", href: "/three-zeros" }],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = (menuName: string) => {
    setExpandedMobileMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((name) => name !== menuName)
        : [...prev, menuName]
    );
  };

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(null);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? "top-0 bg-background shadow-lg" : "top-10 bg-background/95"
      }`}
    >
      <nav className="relative">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.svg?height=40&width=40"
                  alt="University Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                {/* Desktop View */}
                <div className="hidden sm:block">
                  <h1 className="font-bold text-xl leading-none">Techsand</h1>
                  <p className="text-sm text-muted-foreground">
                    International University
                  </p>
                </div>

                {/* Mobile View */}
                <div className="block sm:hidden">
                  <h1 className="font-bold text-lg leading-none">Techsand</h1>
                  <p className="text-xs text-muted-foreground">
                    International University
                  </p>
                </div>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="inline-flex items-center px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors">
                    {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 pl-8 pr-4 py-1.5 text-sm rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <button
                className="lg:hidden text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Submenu - Full Width */}
        {activeSubmenu &&
          menuItems.find((item) => item.name === activeSubmenu)?.submenu && (
            <div
              ref={submenuRef}
              className="absolute left-0 w-full bg-background border-y shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                top: "64px",
                maxHeight: activeSubmenu ? "500px" : "0",
                opacity: activeSubmenu ? 1 : 0,
              }}
              onMouseEnter={() => handleMouseEnter(activeSubmenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {menuItems
                    .find((item) => item.name === activeSubmenu)
                    ?.submenu.map((submenuEntry, index) => {
                      if (isSubMenuSection(submenuEntry)) {
                        return (
                          <div key={index}>
                            <h3 className="font-semibold text-lg mb-2">
                              {submenuEntry.title}
                            </h3>
                            <ul className="space-y-2">
                              {submenuEntry.items.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      } else {
                        return (
                          <div key={index}>
                            <Link
                              href={submenuEntry.href}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                              {submenuEntry.name}
                            </Link>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          )}
      </nav>

      {/* Mobile menu - Slide from right */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-background transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-hidden flex flex-col z-[80]`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-4 py-2 rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-muted">
                  <button
                    onClick={() => toggleMobileMenu(item.name)}
                    className="flex items-center justify-between w-full py-3 px-2 text-left"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-200 ${
                        expandedMobileMenus.includes(item.name)
                          ? "rotate-90"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedMobileMenus.includes(item.name)
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-4 pl-4">
                      {item.submenu.map((submenuItem, sectionIndex) => (
                        <div key={sectionIndex} className="mb-4">
                          {"title" in submenuItem ? (
                            <>
                              <h4 className="font-semibold text-sm mb-2">
                                {submenuItem.title}
                              </h4>
                              <ul className="space-y-2">
                                {submenuItem.items.map((subitem) => (
                                  <li key={subitem.name}>
                                    <Link
                                      href={subitem.href}
                                      className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {subitem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={submenuItem.href}
                              className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {submenuItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden z-[75]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
