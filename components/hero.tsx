"use client";

import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TECH_STACK = [
  { icon: "logos:react", label: "React.js", color: "bg-blue-50 dark:bg-blue-950/40" },
  { icon: "logos:nextjs-icon", label: "Next.js", color: "bg-muted" },
  { icon: "logos:typescript-icon", label: "TypeScript", color: "bg-blue-50 dark:bg-blue-950/40" },
  { icon: "logos:nodejs-icon", label: "Node.js", color: "bg-green-50 dark:bg-green-950/40" },
  { icon: "logos:nestjs", label: "NestJS", color: "bg-red-50 dark:bg-red-950/40" },
  { icon: "logos:symfony", label: "Symfony", color: "bg-slate-100 dark:bg-slate-900/50" }
];

const PROFILE_BADGES = [
  { icon: "solar:code-bold-duotone", label: "Frontend", color: "bg-violet-500" },
  { icon: "solar:pen-bold-duotone", label: "Backend", color: "bg-pink-500" },
  { icon: "solar:rocket-bold-duotone", label: "UI/UX", color: "bg-orange-500" },
];

export function Hero() {
  const t = useTranslations("Hero");

  const STATS = [
    { 
      value: "3+", 
      label: t("yearsExp"), 
      color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border-violet-100 dark:border-violet-900" 
    },
    { 
      value: "15+", 
      label: t("projectsCompleted"), 
      color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-300 border-pink-100 dark:border-pink-900" 
    },
    { 
      value: "100%", 
      label: t("commitment"), 
      color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-300 border-orange-100 dark:border-orange-900" 
    },
  ];

  return (
    <section id="hero" className="w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 tracking-widest uppercase">
                {t("available")}
              </span>
            </div>

            <h1 className="flex flex-col text-4xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-foreground">{t("titleLine1")}</span>
              <span className="text-primary">{t("titleHighlight")}</span>
              <span className="text-foreground">{t("titleLine2")}</span>
            </h1>

            <p className="text-muted-foreground max-w-lg leading-relaxed text-sm sm:text-base">
              {t("description")}
            </p>

            <div className="flex gap-2 md:gap-3">
              <Button
                asChild
                size="lg"
                className="flex-1 h-10 sm:h-12 font-bold rounded-xl text-sm sm:text-base"
              >
                <Link href="#contact">
                  <Icon icon="solar:letter-bold-duotone" className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  {t("contactBtn")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 h-10 sm:h-12 font-bold rounded-xl text-sm sm:text-base border-2"
              >
                <a href="/cv.pdf" download>
                  <Icon icon="solar:file-download-bold-duotone" className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  {t("downloadCv")}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center flex-1 sm:flex-initial px-2 sm:px-3 py-1 rounded-lg border-2 ${stat.color}`}
                >
                  <span className="text-lg font-black">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-80 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">

            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-violet-50 dark:bg-violet-950/30 -top-8 -right-8 z-0" />
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-pink-50 dark:bg-pink-950/30 bottom-0 -left-4 rotate-12 z-0" />
            <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-50 dark:bg-orange-950/30 top-12 left-8 -rotate-6 z-0" />

            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-card/80 backdrop-blur-sm rounded border-2 border-border p-4 shadow-xl">

                <div className="flex flex-col items-center gap-4 pb-4 border-b border-border">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-border">
                      <img
                        src="/images/hero.png"
                        alt="Eddy Léon - Développeur Fullstack"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-card flex items-center justify-center shadow-sm">
                      <Icon icon="solar:check-circle-bold" className="text-white w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-card-foreground">Eddy Léon</h3>
                    <p className="text-sm text-muted-foreground font-semibold">{t("role")}</p>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap justify-center">
                    {PROFILE_BADGES.map((badge) => (
                      <div
                        key={badge.label}
                        className={`flex items-center gap-1.5 pl-3 pr-4 py-1.5 rounded ${badge.color} text-white shadow-sm cursor-default`}
                      >
                        <Icon icon={badge.icon} className="w-3.5 h-3.5" />
                        <span className="text-xs font-bold">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 text-center">
                    {t("techStackTitle")}
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {TECH_STACK.map((tech) => (
                      <div
                        key={tech.label}
                        className={`flex flex-col items-center gap-2 p-3 rounded ${tech.color} border border-border/50 hover:border-border hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default`}
                        title={tech.label}
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