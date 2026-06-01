export type Project = {
  id: string;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  images: string[]; // ← Tableau d'images au lieu d'une seule
  tags: string[];
  color: string;
  iconColor: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "FinTrack",
    description: {
      fr: "Application de gestion financière personnelle avec tableaux de bord interactifs et analyses en temps réel.",
      en: "Personal finance management app with interactive dashboards and real-time analytics.",
    },
    images: [
      "/projects/fintrack-1.png",
      "/projects/fintrack-2.png",
      "/projects/fintrack-3.png",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    color: "bg-violet-50 dark:bg-violet-950/40 border-violet-100 dark:border-violet-900",
    iconColor: "bg-violet-500",
    icon: "solar:wallet-bold-duotone",
    liveUrl: "https://fintrack.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "MediCare",
    description: {
      fr: "Plateforme de gestion médicale pour cliniques avec prise de rendez-vous et suivi des patients.",
      en: "Medical management platform for clinics with appointment booking and patient tracking.",
    },
    images: [
      "/projects/medicare-1.png",
      "/projects/medicare-2.png",
    ],
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    color: "bg-pink-50 dark:bg-pink-950/40 border-pink-100 dark:border-pink-900",
    iconColor: "bg-pink-500",
    icon: "solar:heart-pulse-bold-duotone",
    liveUrl: "https://medicare.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "ShopEasy",
    description: {
      fr: "E-commerce moderne avec gestion des stocks, paiements et tableau de bord analytique.",
      en: "Modern e-commerce with inventory management, payments and analytics dashboard.",
    },
    images: [
      "/projects/shopeasy-1.png",
      "/projects/shopeasy-2.png",
      "/projects/shopeasy-3.png",
    ],
    tags: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    color: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900",
    iconColor: "bg-orange-500",
    icon: "solar:bag-bold-duotone",
    liveUrl: "https://shopeasy.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "TaskFlow",
    description: {
      fr: "Outil de gestion de projets collaboratif inspiré de Notion avec des vues Kanban et calendrier.",
      en: "Collaborative project management tool inspired by Notion with Kanban and calendar views.",
    },
    images: [
      "/projects/taskflow-1.png",
      "/projects/taskflow-2.png",
    ],
    tags: ["React", "TypeScript", "Firebase", "DnD Kit"],
    color: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900",
    iconColor: "bg-blue-500",
    icon: "solar:checklist-bold-duotone",
    liveUrl: "https://taskflow.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "WeatherNow",
    description: {
      fr: "Application météo avec prévisions en temps réel, cartes interactives et alertes personnalisées.",
      en: "Weather app with real-time forecasts, interactive maps and custom alerts.",
    },
    images: [
      "/projects/weathernow-1.png",
      "/projects/weathernow-2.png",
    ],
    tags: ["Next.js", "OpenWeather API", "Mapbox", "Tailwind"],
    color: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-100 dark:border-cyan-900",
    iconColor: "bg-cyan-500",
    icon: "solar:sun-bold-duotone",
    liveUrl: "https://weathernow.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "BlogCMS",
    description: {
      fr: "CMS headless moderne pour blogs et magazines en ligne avec éditeur rich text et SEO avancé.",
      en: "Modern headless CMS for blogs and online magazines with rich text editor and advanced SEO.",
    },
    images: [
      "/projects/blogcms-1.png",
      "/projects/blogcms-2.png",
      "/projects/blogcms-3.png",
    ],
    tags: ["Next.js", "Sanity", "TypeScript", "Tailwind"],
    color: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900",
    iconColor: "bg-emerald-500",
    icon: "solar:document-bold-duotone",
    liveUrl: "https://blogcms.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];