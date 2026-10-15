"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Eddy99leon",
    icon: "mdi:github",
    label: "GitHub",
    color: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700",
  },
  {
    href: "https://www.linkedin.com/in/eddyleon-dev",
    icon: "mdi:linkedin",
    label: "LinkedIn",
    color: "bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700",
  },
  {
    href: "mailto:eddyleon.dev@gmail.com",
    icon: "solar:letter-bold-duotone",
    label: "Email",
    color: "bg-slate-100 dark:bg-slate-800 text-violet-600 dark:text-violet-400 hover:bg-slate-200 dark:hover:bg-slate-700",
  },
];

const TECH_STACK = [
  { icon: "logos:tailwindcss-icon", label: "Tailwind" },
  { icon: "logos:react", label: "React" },
  { icon: "logos:nextjs-icon", label: "Next.js" },
  { icon: "logos:typescript-icon", label: "TypeScript" },
  { icon: "logos:nodejs-icon", label: "Node.js" },
  { icon: "logos:nestjs", label: "NestJS" },
  { icon: "logos:symfony", label: "Symfony" },
  { icon: "logos:postgresql", label: "PostgreSQL" },
  { icon: "logos:mysql-icon", label: "MySQL" },
  { icon: "logos:mongodb-icon", label: "MongoDB" },
];

export const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 pb-6 sm:pb-8 border-b border-border">
          
          <div className="flex flex-col gap-2 sm:gap-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Icon icon="solar:bolt-circle-bold-duotone" className="text-white text-xl" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                Léon <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              {t("techStackTitle")}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("techStackDescription")}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/60 border border-border text-foreground text-xs font-bold"
                >
                  <Icon icon={tech.icon} className="w-4 h-4" />
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear}{" "}
            <span className="font-bold text-foreground">Eddy Léon.</span>{" "}
            {t("copyright")}
          </p>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-105 ${social.color}`}
              >
                <Icon icon={social.icon} className="w-4 h-4" />
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            {t("builtWith")}
            <Icon icon="solar:heart-bold" className="w-4 h-4 text-pink-600" />
            {t("usingTech")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;