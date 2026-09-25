"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TAG_ICONS } from "@/lib/icons";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  tags: string[];
  liveUrl: string | null;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col py-0 overflow-hidden rounded-xl border-2 border-border/80 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      <div className="relative h-40 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold text-white shadow-md ${project.categoryColor}`}>
            {project.category}
          </span>
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500 text-[10px] font-bold text-white shadow-md">
              <Icon icon="solar:star-bold" className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 px-3 pb-3 gap-2">
        <div>
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 7).map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/70 border border-border text-[10px] font-bold text-muted-foreground"
            >
              {TAG_ICONS[tag] && (
                <Icon icon={TAG_ICONS[tag]} className="w-3 h-3 shrink-0" />
              )}
              {tag}
            </span>
          ))}
          {project.tags.length > 7 && (
            <span className="px-2 py-0.5 rounded-md bg-muted/70 border border-border text-[10px] font-bold text-muted-foreground">
              +{project.tags.length - 7}
            </span>
          )}
        </div>

        <div className="flex gap-2 pt-3 border-t border-border mt-1">
          {project.liveUrl ? (
            <Button
              asChild
              size="sm"
              className="flex-1 h-9 rounded-xl font-bold text-sm"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Icon icon="solar:eye-bold-duotone" className="mr-1 w-5 h-5" />
                Voir le live
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
              variant="secondary"
              className="flex-1 h-9 rounded-xl font-bold text-sm opacity-60"
            >
              <Icon icon="solar:eye-closed-bold-duotone" className="mr-1 w-5 h-5" />
              Bientôt live
            </Button>
          )}

          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 h-9 rounded-xl font-bold text-sm"
          >
            <Link href={`/projects/${project.slug}`}>
               <Icon icon="solar:file-text-bold-duotone" className="mr-1 w-5 h-5" />
              Détails
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}