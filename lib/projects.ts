export const PROJECTS = [
  {
    slug: "plateforme-rencontre",
    title: "Plateforme de Rencontre",
    description:
      "Application fullstack de mise en relation avec chat temps réel, gestion de profils et tableau de bord Community Manager.",
    longDescription: `Cette plateforme a été conçue de A à Z pour répondre aux besoins d'une société spécialisée dans l'animation digitale et la mise en relation.

J'ai pris en charge l'intégralité du cycle de développement : maquettage UI/UX sur Figma, architecture backend avec NestJS, API REST sécurisées, WebSockets pour le chat en temps réel, et interface React/Next.js ultra-réactive.

Le système permet aux utilisateurs de créer un profil détaillé, de matcher selon des critères avancés, et d'échanger en temps réel. Un back-office dédié offre aux Community Managers des outils de modération, d'animation et de suivi de l'activité.`,
    image: "/projets/heartbeats/image2.png",
    gallery: [
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
    ],
    category: "Fullstack",
    categoryColor: "bg-violet-500",
    tags: ["React", "Next.js", "NestJS", "WebSockets", "PostgreSQL", "Figma"],
    liveUrl: "https://ton-projet.com",
    githubUrl: null,
    featured: true,
    year: "2024",
    role: "Développeur Fullstack (Design → Déploiement)",
    features: [
      "Authentification JWT sécurisée",
      "Chat en temps réel (WebSockets)",
      "Système de matching avancé",
      "Dashboard Community Manager",
      "Upload et optimisation d'images",
      "Design system responsive (Mobile First)",
      "Modération et gestion des signalements",
    ],
  },
  {
    slug: "dashboard-animation",
    title: "Plateforme d'Animation",
    description:
      "Outil de gestion et d'animation en temps réel pour les community managers avec notifications live.",
    longDescription: `Outil interne destiné aux Community Managers pour animer et piloter une communauté en temps réel.

J'ai développé l'interface d'administration, le système de notifications push/live, ainsi que les API de gestion des campagnes d'animation. L'objectif était de centraliser les actions d'engagement (messages, challenges, stats) dans un seul dashboard clair et performant.

Le projet intègre des mises à jour live via Socket.io et une architecture backend Node.js robuste pour supporter un fort volume d'interactions simultanées.`,
    image: "/projets/heartbeats/image2.png",
    gallery: [
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
    ],
    category: "Fullstack",
    categoryColor: "bg-pink-500",
    tags: ["React", "Node.js", "Socket.io", "Tailwind", "Express"],
    liveUrl: "https://ton-projet.com",
    githubUrl: null,
    featured: false,
    year: "2024",
    role: "Développeur Fullstack",
    features: [
      "Dashboard temps réel",
      "Notifications live (Socket.io)",
      "Gestion des campagnes d'animation",
      "Statistiques d'engagement",
      "Interface responsive Tailwind",
      "API REST sécurisées",
    ],
  },
  {
    slug: "gestion-profils",
    title: "Gestion de Profils",
    description:
      "Module complet de gestion de profils utilisateurs avec upload d'images et sécurisation JWT.",
    longDescription: `Module transverse de gestion des profils utilisateurs, réutilisable sur plusieurs plateformes de l'écosystème.

J'ai conçu le design Figma, développé le frontend Next.js/TypeScript, et mis en place le backend NestJS avec upload d'images, validation des données et sécurisation complète via JWT.

Le module gère la création, l'édition, la suppression et la visualisation des profils, avec une attention particulière portée à l'UX et à la performance des uploads.`,
    image: "/projets/heartbeats/image2.png",
    gallery: [
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
      "/projets/heartbeats/image2.png",
    ],
    category: "Frontend + API",
    categoryColor: "bg-orange-500",
    tags: ["Next.js", "TypeScript", "NestJS", "Figma", "JWT"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    year: "2023 – 2024",
    role: "Développeur Fullstack",
    features: [
      "CRUD complet des profils",
      "Upload d'images optimisé",
      "Authentification & sécurisation JWT",
      "Validation des formulaires",
      "UI/UX conçue sur Figma",
      "API NestJS documentée",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export type Project = (typeof PROJECTS)[number];