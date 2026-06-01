"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home", color: "bg-emerald-50 text-emerald-600" },
  { href: "/projects", label: "Projects", color: "bg-blue-50 text-blue-600" },
  { href: "/about", label: "About", color: "bg-orange-50 text-orange-600" },
  { href: "/contact", label: "Contact", color: "bg-pink-50 text-pink-600" },
];

const MobileNav = ({ pathname }: { pathname: string }) => {
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

export default MobileNav;