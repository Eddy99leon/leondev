"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "3+", labelKey: "experience", color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border-violet-100 dark:border-violet-900" },
  { value: "20+", labelKey: "projects", color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300 border-pink-100 dark:border-pink-900" },
  { value: "100%", labelKey: "satisfaction", color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-300 border-orange-100 dark:border-orange-900" },
];

const TECH_STACK = [
  { icon: "logos:react", label: "React", color: "bg-blue-50 dark:bg-blue-950/40" },
  { icon: "logos:nextjs-icon", label: "Next.js", color: "bg-muted" },
  { icon: "logos:tailwindcss-icon", label: "Tailwind", color: "bg-cyan-50 dark:bg-cyan-950/40" },
  { icon: "logos:typescript-icon", label: "TypeScript", color: "bg-blue-50 dark:bg-blue-950/40" },
  { icon: "logos:nodejs-icon", label: "Node.js", color: "bg-green-50 dark:bg-green-950/40" },
  { icon: "logos:postgresql", label: "PostgreSQL", color: "bg-indigo-50 dark:bg-indigo-950/40" },
];

const FLOATING_BADGES = [
  { icon: "solar:code-bold-duotone", label: "Frontend", color: "bg-violet-500", pos: "top-4 -left-8" },
  { icon: "solar:pen-bold-duotone", label: "Backend", color: "bg-pink-500", pos: "top-1/3 -left-12" },
  { icon: "solar:rocket-bold-duotone", label: "UI/UX", color: "bg-orange-500", pos: "bottom-8 -left-8" },
];

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest">
                {t("badge")}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tighter text-foreground leading-[1.05]">
                {t("title1")}
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-[1.05] text-primary">
                {t("title2")}
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tighter text-foreground leading-[1.05]">
                {t("title3")}
              </h1>
            </div>

            <p className="text-muted-foreground max-w-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded font-bold text-base"
              >
                <Link href="/contact">
                  {t("cta_primary")}
                  <Icon icon="solar:round-arrow-right-bold" className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded font-bold text-base border-2"
              >
                <Link href="/projects">
                  {t("cta_secondary")}
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {STATS.map((stat) => (
                <div
                  key={stat.labelKey}
                  className={`flex flex-col items-center px-4 py-2 rounded border-2 ${stat.color}`}
                >
                  <span className="text-xl font-bold">{stat.value}</span>
                  <span className="text-xs font-medium mt-0.5 capitalize">
                    {t(stat.labelKey as any)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">

            <div className="absolute w-72 h-72 rounded-full bg-violet-50 dark:bg-violet-950/30 -top-8 -right-8 z-0" />
            <div className="absolute w-32 h-32 rounded-3xl bg-pink-50 dark:bg-pink-950/30 bottom-0 -left-4 rotate-12 z-0" />
            <div className="absolute w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-950/30 top-12 left-8 -rotate-6 z-0" />


            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-card rounded border-2 border-border p-6">

                <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
                  <div className="relative">
                    <div className="w-24 h-26 rounded-2xl overflow-hidden shadow-lg border-2 border-border">
                      <img
                        src="/images/hero.png"
                        alt="Leon Dev"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                      <Icon icon="solar:check-circle-bold" className="text-white w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-card-foreground">Eddy Léon</h3>
                    <p className="text-sm text-muted-foreground font-medium">Full-Stack Developer</p>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {FLOATING_BADGES.map((badge) => (
                        <div
                        key={badge.label}
                        className={`flex items-center gap-1 pl-3 pr-4 py-2 rounded-2xl ${badge.color} text-white shadow-lg`}
                        >
                        <Icon icon={badge.icon} className="w-4 h-4" />
                        <span className="text-xs font-bold">{badge.label}</span>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {TECH_STACK.map((tech) => (
                      <div
                        key={tech.label}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl ${tech.color} border border-border hover:-translate-y-1 transition-transform cursor-default`}
                      >
                        <Icon icon={tech.icon} className="w-7 h-7" />
                        <span className="text-[10px] font-bold text-muted-foreground">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}