"use client";

import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col items-center text-center gap-2 mb-6">
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
            </span>
            <span className="text-xs font-bold text-blue-700 dark:text-blue-400 tracking-widest uppercase">
              Réalisations
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
            Projets Sélectionnés
          </h2>
          <p className="text-muted-foreground max-w-3xl text-sm md:text-base leading-relaxed">
            Voici une sélection de projets sur lesquels j’ai travaillé, du design UI/UX jusqu’au déploiement backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}