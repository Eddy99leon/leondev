import { useTranslations } from "next-intl";
import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  categoryColor: string;
  status: string;
  statusColor: string;
  projectType: string;
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  year: string;
  role: string;
  features: string[];
}

const dicts = {
  fr: frMessages,
  en: enMessages,
};

export const RAW_PROJECTS = [
  {
    slug: "kandra",
    image: "/projets/kandra/kandralight.png",
    gallery: [
      "/projets/kandra/kandralight.png",
      "/projets/kandra/kandradark.png",
      "/projets/kandra/kandralight.png",
    ],
    categoryColor: "bg-emerald-500",
    statusKey: "inProduction",
    statusColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    projectTypeKey: "personal",
    tags: ["Next.js", "TypeScript", "Tailwind", "SWR", "PostgreSQL", "Drizzle ORM", "OAuth", "GitHub"],
    liveUrl: "https://kandra-mg.vercel.app",
    githubUrl: null,
    featured: true,
    year: "2024 - 2025",
  },
  {
    slug: "heartbeats",
    image: "/projets/heartbeats/heartbeats.png",
    gallery: [
      "/projets/heartbeats/heartbeats2.png",
      "/projets/heartbeats/heartbeats3.png",
      "/projets/heartbeats/heartbeats7.png",
      "/projets/heartbeats/heartbeats4.png",
      "/projets/heartbeats/heartbeats6.png",
      "/projets/heartbeats/heartbeats5.png",
      "/projets/heartbeats/heartbeats8.png",
    ],
    categoryColor: "bg-pink-500",
    statusKey: "inProduction",
    statusColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    projectTypeKey: "company",
    tags: ["Symfony", "React", "MUI", "WebSockets", "JWT", "MySQL", "GitLab", "API REST", "i18n", "Figma"],
    liveUrl: "https://www.heartbeats.community",
    githubUrl: null,
    featured: true,
    year: "2023 – 2024",
  },
  {
    slug: "kitrana",
    image: "/projets/kitrana/kitrana.png",
    gallery: [
      "/projets/kitrana/kitrana1.png",
      "/projets/kitrana/kitrana2.png",
      "/projets/kitrana/kitrana3.png",
      "/projets/kitrana/kitrana4.png",
      "/projets/kitrana/kitrana5.png",
    ],
    categoryColor: "bg-blue-500",
    statusKey: "inDevelopment",
    statusColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    projectTypeKey: "personal",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "NestJS",
      "Prisma",
      "IA / LLM",
      "React Query",
      "OAuth",
      "CodeMirror",
      "PostgreSQL"
    ],
    liveUrl: "https://kitrana.vercel.app",
    githubUrl: null,
    featured: false,
    year: "2024 - 2025",
  },
];

export const PROJECTS = RAW_PROJECTS;

export function getProjectBySlug(slug: string, locale: "fr" | "en" = "fr"): Project | null {
  const project = RAW_PROJECTS.find((p) => p.slug === slug);
  if (!project) return null;

  const messages = dicts[locale]?.Projects || dicts.fr.Projects;
  const item = (messages.items as Record<string, any>)?.[slug];

  return {
    ...project,
    title: item?.title || "",
    description: item?.description || "",
    longDescription: item?.longDescription || "",
    category: item?.category || "",
    role: item?.role || "",
    status: (messages.statuses as Record<string, string>)?.[project.statusKey] || "",
    projectType: (messages.projectTypes as Record<string, string>)?.[project.projectTypeKey] || "",
    features: Array.isArray(item?.features) ? item.features : [],
  };
}

export function useProjects(): Project[] {
  const t = useTranslations("Projects");

  return RAW_PROJECTS.map((project) => {
    const itemKey = `items.${project.slug}`;
    const rawFeatures = t.raw(`${itemKey}.features`) as string[];

    return {
      ...project,
      title: t(`${itemKey}.title`),
      description: t(`${itemKey}.description`),
      longDescription: t(`${itemKey}.longDescription`),
      category: t(`${itemKey}.category`),
      role: t(`${itemKey}.role`),
      status: t(`statuses.${project.statusKey}`),
      projectType: t(`projectTypes.${project.projectTypeKey}`),
      features: Array.isArray(rawFeatures) ? rawFeatures : [],
    };
  });
}

export function useProjectBySlug(slug: string): Project | null {
  const projects = useProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}