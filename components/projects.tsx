"use client";

import { useTranslations, useLocale } from "next-intl";
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-14">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <div className="px-3 py-0 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              viewProject={t("view_project")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}