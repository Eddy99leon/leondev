"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

// Factorisation des routes
const NAV_LINKS = [
  { href: "/", label: "Home", color: "bg-emerald-50 text-emerald-600" },
  { href: "/projects", label: "Projects", color: "bg-blue-50 text-blue-600" },
  { href: "/about", label: "About", color: "bg-orange-50 text-orange-600" },
  { href: "/contact", label: "Contact", color: "bg-pink-50 text-pink-600" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-xl" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Leon.
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive ? link.color : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
            <MobileNav pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded">
          <Icon icon="solar:hamburger-menu-linear" className="text-3xl" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4">
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname.endsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`p-4 rounded-2xl text-lg font-bold transition-all ${
                  isActive ? link.color : "bg-muted/50 text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button className="w-full mt-4 h-14 rounded-2xl font-bold text-lg">
            Hire Me
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}