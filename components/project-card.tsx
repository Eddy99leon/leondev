"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/lib/projects";
import { Card } from "./ui/card";

export function ProjectCard({
  project,
  locale,
  viewProject,
}: {
  project: Project;
  locale: string;
  viewProject: string;
}) {
  return (
    <Card className="p-0">
      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-52 bg-muted overflow-hidden">
                  {img ? (
                    <img
                      src={img}
                      alt={`${project.title} - screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                      <div className={`w-16 h-16 rounded-2xl ${project.iconColor} flex items-center justify-center`}>
                        <Icon icon={project.icon} className="text-white w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">
                        {project.title}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/20 to-transparent" />

                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold">
                    {index + 1} / {project.images.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {project.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-border shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
        </Carousel>

        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-4 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground">
            {project.title}
          </h1>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon icon="mdi:github" className="w-4 h-4 text-foreground" />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Icon icon="solar:arrow-right-up-bold" className="w-4 h-4 text-foreground" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {project.description[locale as "fr" | "en"]}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
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
  );
}