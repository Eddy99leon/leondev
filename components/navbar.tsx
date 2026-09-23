"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { 
    href: "#hero", 
    id: "hero",
    label: "Accueil", 
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400" 
  },
  { 
    href: "#about", 
    id: "about",
    label: "À propos", 
    color: "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400" 
  },
  { 
    href: "#projects", 
    id: "projects",
    label: "Projects", 
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400" 
  },
  { 
    href: "#contact", 
    id: "contact",
    label: "Contact", 
    color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400" 
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState("hero");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-xl" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            Léon <span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? link.color 
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <Button 
            asChild
            className="hidden md:flex font-bold px-5 h-9 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <Link href="#contact" className="flex items-center gap-2">
              <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
              <span>Me contacter</span>
            </Link>
          </Button>

          <div className="md:hidden">
            <MobileNav activeSection={activeSection} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;