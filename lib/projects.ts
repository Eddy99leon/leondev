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
      "/projets/heartbeats/image1.png",
      "/projets/heartbeats/image2.png",
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
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image1.png",
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
      "/projets/heartbeats/image1.png",
      "/projets/heartbeats/image2.png",
    ],
    tags: ["Next.js", "Stripe", "Tailwind", "Supabase"],
    color: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900",
    iconColor: "bg-orange-500",
    icon: "solar:bag-bold-duotone",
    liveUrl: "https://shopeasy.com",
    githubUrl: "https://github.com",
    featured: true,
  },
];