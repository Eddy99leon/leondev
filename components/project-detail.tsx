"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TAG_ICONS: Record<string, string> = {
  "React": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "Node.js": "logos:nodejs-icon",
  "NestJS": "logos:nestjs",
  "TypeScript": "logos:typescript-icon",
  "Tailwind": "logos:tailwindcss-icon",
  "PostgreSQL": "logos:postgresql",
  "MongoDB": "logos:mongodb-icon",
  "WebSockets": "logos:websocket",
  "Socket.io": "logos:socket-io",
  "Figma": "logos:figma",
  "Express": "simple-icons:express",
  "Symfony": "logos:symfony",
};

interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  category: string;
  categoryColor: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl?: string | null;
  featured?: boolean;
  year: string;
  role: string;
  features: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-4 lg:py-4">
        <div className="flex items-center justify-between mb-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group transition-all"
          >
            <Link href="/#projects">
              <Icon 
                icon="solar:alt-arrow-left-bold-duotone" 
                className="mr-1 w-5 h-5 text-primary transition-transform duration-300 group-hover:-translate-x-1" 
              />
              <span>Retour aux projets</span>
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <Button asChild size="sm" className="font-bold">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Icon icon="solar:eye-bold-duotone" className="mr-1 w-4 h-4" />
                  Voir le live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="sm" className="rounded-xl font-bold h-9 border-2">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:github" className="mr-1.5 w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-8">
          <div className="relative col-span-2 rounded overflow-hidden border border-border group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover aspect-4/3 transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg ${project.categoryColor}`}>
                {project.category}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {project.year}
                </span>
                {project.featured && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-500/30">
                    <Icon icon="solar:star-bold" className="w-3.5 h-3.5" />
                    Projet phare
                  </span>
                )}
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground leading-tight mb-1">
                {project.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-muted/40 border border-border/50 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon icon="solar:user-rounded-bold-duotone" className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Mon Rôle</p>
                  <p className="text-xs font-bold text-foreground">{project.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon icon="solar:calendar-bold-duotone" className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Année</p>
                  <p className="text-xs font-bold text-foreground">{project.year}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                Stack Technique
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-muted/60 border border-border text-xs font-bold text-foreground"
                  >
                    {TAG_ICONS[tag] && (
                      <Icon icon={TAG_ICONS[tag]} className="w-4 h-4 shrink-0" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 lg:hidden">
              {project.liveUrl && (
                <Button asChild className="flex-1 h-11 rounded-xl font-bold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Icon icon="solar:eye-bold-duotone" className="mr-2 w-5 h-5" />
                    Voir le live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Icon icon="solar:document-text-bold-duotone" className="w-5 h-5 text-primary" />
              À propos du projet
            </h2>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {project.longDescription.split("\n").map((paragraph, i) => (
                paragraph.trim() && (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-2">
                    {paragraph.trim()}
                  </p>
                )
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Icon icon="solar:checklist-minimalistic-bold-duotone" className="w-5 h-5 text-primary" />
              Fonctionnalités clés
            </h2>
            <Card className="p-4 rounded-xl bg-muted/40 border border-border/50">
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon icon="solar:check-circle-bold" className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Icon icon="solar:gallery-bold-duotone" className="w-5 h-5 text-primary" />
              Aperçus du projet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded overflow-hidden border border-border transition-all group"
                >
                  <img
                    src={img}
                    alt={`${project.title} - aperçu ${i + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}