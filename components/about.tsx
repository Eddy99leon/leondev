"use client";

import { Icon } from "@iconify/react";
import { Card } from "@/components/ui/card";
import { TAG_ICONS } from "@/lib/icons";

const EXPERIENCES = [
  {
    role: "Développeur Fullstack JS",
    company: "SK'HAY — Ambatoroka",
    period: "Nov 2023 – Sept 2026",
    description:
      "Conception et développement complet d'applications web (design Figma, API REST, temps réel, sécurité, dynamisation). Réalisation de plateformes de rencontre, d'animation, de gestion de profils et d'outils Community Manager.",
    tags: ["React", "Next.js", "Node.js", "NestJS", "WebSockets", "Figma"],
    color: "bg-violet-500",
    textColor: "text-violet-600 dark:text-violet-400",
  },
  {
    role: "Développeur Fullstack (Stage Licence)",
    company: "H.A.I.S.O.A — Mahazoarivo",
    period: "Juil 2023 – Oct 2023",
    description:
      "Prise en charge du cycle complet : maquettage Figma, intégration Front-end React, conception Backend Node.js/Express, création d'API REST et dynamisation de l'application.",
    tags: ["React", "Node.js", "Express", "API REST", "Figma"],
    color: "bg-pink-500",
    textColor: "text-pink-600 dark:text-pink-400",
  },
];

const SKILLS = [
  {
    category: "Frontend",
    color: "bg-violet-500",
    textColor: "text-violet-600 dark:text-violet-400",
    items: [
      { label: "React / Next.js", level: 90 },
      { label: "TypeScript", level: 85 },
      { label: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "bg-pink-500",
    textColor: "text-pink-600 dark:text-pink-400",
    items: [
      { label: "Node.js / Express", level: 88 },
      { label: "NestJS", level: 80 },
      { label: "Symfony", level: 75 },
    ],
  },
  {
    category: "Tools & Divers",
    color: "bg-orange-500",
    textColor: "text-orange-600 dark:text-orange-400",
    items: [
      { label: "PostgreSQL / MongoDB", level: 82 },
      { label: "Git / GitHub", level: 90 },
      { label: "Figma (UI/UX)", level: 85 },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">

        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="text-xs font-bold text-orange-700 dark:text-orange-400 tracking-widest uppercase">
              Parcours & Compétences
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
            Expériences Professionnelles & Stack Technique
          </h2>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <h3 className="text-lg font-bold text-foreground">Expériences</h3>
          {EXPERIENCES.map((exp, index) => (
            <Card
              key={index}
              className="flex flex-row items-start gap-4 p-5 rounded-xl border-2 border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                <div className={`w-3.5 h-3.5 rounded-full ${exp.color} shadow-md`} />
                <div className="w-0.5 flex-1 bg-border min-h-15" />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-foreground text-base leading-tight">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <span className={`text-xs font-bold whitespace-nowrap ${exp.textColor}`}>
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/60 border border-border text-[11px] font-bold text-muted-foreground shadow-sm"
                    >
                      {TAG_ICONS[tag] && (
                        <Icon icon={TAG_ICONS[tag]} className="w-3.5 h-3.5 shrink-0" />
                      )}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-foreground mb-1">Compétences Techniques</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SKILLS.map((group) => (
              <Card
                key={group.category}
                className="flex flex-col gap-4 p-5 rounded-xl border-2 border-border"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${group.color}`} />
                  <span className={`text-sm font-bold ${group.textColor}`}>
                    {group.category}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {group.items.map((skill) => (
                    <div key={skill.label} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.label}
                        </span>
                        <span className={`text-xs font-bold ${group.textColor}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden border border-border">
                        <div
                          className={`h-full rounded-full ${group.color} transition-all duration-700`}
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

      </div>
    </section>
  );
}