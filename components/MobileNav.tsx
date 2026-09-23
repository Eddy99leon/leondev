"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

const NAV_LINKS = [
  {
    href: "#hero",
    sectionId: "hero",
    label: "Home",
    icon: "solar:home-bold-duotone",
    color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
  },
  {
    href: "#about",
    sectionId: "about",
    label: "About",
    icon: "solar:user-bold-duotone",
    color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400",
  },
  {
    href: "#projects",
    sectionId: "projects",
    label: "Projects",
    icon: "solar:code-square-bold-duotone",
    color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
  },
  {
    href: "#contact",
    sectionId: "contact",
    label: "Contact",
    icon: "solar:letter-bold-duotone",
    color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400",
  },
];

const MobileNav = ({ activeSection }: { activeSection: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded">
          <Icon icon="solar:hamburger-menu-linear" className="text-3xl" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-5 flex flex-col">
        <SheetHeader className="text-left mb-6">
          <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 flex-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 p-4 rounded-2xl text-base font-bold transition-all ${
                  isActive
                    ? link.color
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon icon={link.icon} className="w-5 h-5 shrink-0" />
                {link.label}
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-current" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Settings
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>

          <Button className="w-full h-14 rounded-2xl font-bold text-base">
            <Icon icon="solar:letter-bold-duotone" className="mr-2 w-5 h-5" />
            Hire Me
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;