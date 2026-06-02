"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { href: "#hero", sectionId: "hero", label: "Home", color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400" },
  { href: "#about", sectionId: "about", label: "About", color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400" },
  { href: "#projects", sectionId: "projects", label: "Projects", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400" },
  { href: "#contact", sectionId: "contact", label: "Contact", color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="#hero" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-xl" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Leon.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? link.color
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <Button className="hidden md:flex font-bold p-4">
            Hire Me
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