"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { SKILLS, EXPERIENCES, STATS } from "@/lib/about";
import { Card } from "./ui/card";

export function About() {
    const t = useTranslations("About");
    const locale = useLocale();

    return (
        <section id="about" className="w-full bg-background">
            <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">

                <div className="flex flex-col items-center text-center gap-2 mb-6">
                    <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-100 dark:border-pink-900">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
                        </span>
                        <span className="text-xs font-bold text-pink-600 dark:text-pink-400 tracking-widest">
                            {t("badge")}
                        </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
                        {t("title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    <div className="flex flex-col gap-6">
                        <p className="text-muted-foreground">
                            {t("description")}
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {STATS.map((stat) => (
                                <div
                                    key={stat.labelKey}
                                    className={`flex flex-col items-center justify-center px-4 py-5 rounded border-2 ${stat.color}`}
                                >
                                    <span className="text-2xl font-bold">{stat.value}</span>
                                    <span className="text-xs font-medium mt-1 text-center leading-tight">
                                        {t(stat.labelKey as any)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <Button
                                asChild
                                size="lg"
                                className="flex-1 h-14 rounded font-bold text-base"
                            >
                                <Link href="/contact">
                                    <Icon icon="solar:letter-bold-duotone" className="mr-2 w-5 h-5" />
                                    {t("contact_me")}
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="flex-1 h-14 rounded font-bold text-base border-2"
                            >
                                <a href="/cv.pdf" download>
                                    <Icon icon="solar:file-download-bold-duotone" className="mr-2 w-5 h-5" />
                                    {t("download_cv")}
                                </a>
                            </Button>
                        </div>
                        <div className="flex gap-3">
                            {[
                                { icon: "mdi:github", href: "https://github.com", color: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700" },
                                { icon: "mdi:linkedin", href: "https://linkedin.com", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40" },
                                { icon: "mdi:twitter", href: "https://twitter.com", color: "bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/40" },
                            ].map((social) => (
                                <Link
                                    key={social.icon}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 h-12 rounded flex items-center justify-center font-bold transition-all hover:scale-105 border border-border ${social.color}`}
                                >
                                    <Icon icon={social.icon} className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col gap-4">
                            {EXPERIENCES.map((exp, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-row items-start gap-4 p-4 rounded"
                                >
                                    <div className="flex flex-col items-center gap-2 shrink-0">
                                        <div className={`w-4 h-4 rounded-full ${exp.color} shadow-md mt-1`} />
                                        <div className="w-0.5 flex-1 bg-border min-h-8" />
                                    </div>

                                    <div className="flex flex-col gap-2 flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                            <div>
                                                <h4 className="font-bold text-foreground text-base">
                                                    {exp.role[locale as "fr" | "en"]}
                                                </h4>
                                                <p className="text-sm font-medium text-muted-foreground">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className={`text-xs font-bold ${exp.textColor}`}>
                                                {exp.period[locale as "fr" | "en"]}
                                            </span> 
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {exp.description[locale as "fr" | "en"]}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 rounded-lg bg-background border border-border text-[11px] font-bold text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex gap-5">
                    {SKILLS.map((skillGroup) => (
                        <Card
                            key={skillGroup.category}
                            className="flex items-start gap-4 p-4 w-full"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${skillGroup.color}`} />
                                <span className={`text-sm font-bold ${skillGroup.textColor}`}>
                                    {skillGroup.category}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                {skillGroup.items.map((skill) => (
                                    <div key={skill.label} className="flex flex-col gap-1.5 w-full">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-foreground">
                                                {skill.label}
                                            </span>
                                            <span className={`text-xs font-bold ${skillGroup.textColor}`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                                            <div
                                                className={`h-full rounded-full ${skillGroup.color} transition-all duration-700`}
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}