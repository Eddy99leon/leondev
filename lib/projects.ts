export type Project = {
  id: string;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  images: string[];
  tags: string[];
  color: string;
  iconColor: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const PROJECTS = [
  {
    slug: "plateforme-rencontre",
    title: "Plateforme de Rencontre",
    description: "Application fullstack de mise en relation avec chat temps réel, gestion de profils et tableau de bord Community Manager.",
    image: "/projets/heartbeats/image2.png",
    category: "Fullstack",
    categoryColor: "bg-violet-500",
    tags: ["React", "Next.js", "NestJS", "WebSockets"],
    liveUrl: "https://ton-projet.com",
    featured: true,
  },
  {
    slug: "dashboard-animation",
    title: "Plateforme d'Animation",
    description: "Outil de gestion et d'animation en temps réel pour les community managers avec notifications live.",
    image: "/projets/heartbeats/image2.png",
    category: "Fullstack",
    categoryColor: "bg-pink-500",
    tags: ["React", "Node.js", "Socket.io", "Tailwind"],
    liveUrl: "https://ton-projet.com",
    featured: false,
  },
  {
    slug: "gestion-profils",
    title: "Gestion de Profils",
    description: "Module complet de gestion de profils utilisateurs avec upload d'images et sécurisation JWT.",
    image: "/projets/heartbeats/image2.png",
    category: "Frontend + API",
    categoryColor: "bg-orange-500",
    tags: ["Next.js", "TypeScript", "NestJS", "Figma"],
    liveUrl: null,
    featured: false,
  },
];