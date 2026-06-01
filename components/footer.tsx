import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home", color: "text-emerald-600 bg-emerald-50" },
  { href: "/projects", label: "Projects", color: "text-blue-600 bg-blue-50" },
  { href: "/about", label: "About", color: "text-orange-600 bg-orange-50" },
  { href: "/contact", label: "Contact", color: "text-pink-600 bg-pink-50" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com",
    icon: "mdi:github",
    label: "GitHub",
    color: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  },
  {
    href: "https://linkedin.com",
    icon: "mdi:linkedin",
    label: "LinkedIn",
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    href: "https://twitter.com",
    icon: "mdi:twitter",
    label: "Twitter",
    color: "bg-sky-50 text-sky-500 hover:bg-sky-100",
  },
  {
    href: "mailto:hello@leon.dev",
    icon: "solar:letter-bold-duotone",
    label: "Email",
    color: "bg-violet-50 text-violet-600 hover:bg-violet-100",
  },
];

const TECH_STACK = [
  { icon: "logos:react", label: "React" },
  { icon: "logos:nextjs-icon", label: "Next.js" },
  { icon: "logos:tailwindcss-icon", label: "Tailwind" },
  { icon: "logos:typescript-icon", label: "TypeScript" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-8 border-b border-border">
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Leon.
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Freelance Full-Stack Developer. I build modern web applications with a focus on clean design and great user experience.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Contact
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Have a project in mind? Let's work together and bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted text-muted-foreground text-xs font-bold"
                >
                  <Icon icon={tech.icon} className="w-4 h-4" />
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear}{" "}
            <span className="font-bold text-foreground">Leon.</span>{" "}
            All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
              >
                <Icon icon={social.icon} className="w-4 h-4" />
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with
            <Icon icon="solar:heart-bold" className="w-3.5 h-3.5 text-pink-500" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;