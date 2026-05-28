"use client";

import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#7C3AED] flex items-center justify-center shadow-[0_8px_16px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform">
            <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-2xl" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Leon.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${pathname.endsWith('/') ? 'bg-emerald-50 text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            Home
          </Link>
          <Link href="/projects" className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${pathname.includes('/projects') ? 'bg-emerald-50 text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            Projects
          </Link>
          <Link href="/about" className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${pathname.includes('/about') ? 'bg-emerald-50 text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            About
          </Link>
          <Link href="/contact" className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all duration-300 ${pathname.includes('/contact') ? 'bg-emerald-50 text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Button>
            Hire Me
          </Button>
        </div>
      </div>
    </header>
  );
}