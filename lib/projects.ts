export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  categoryColor: string;
  status: "En production" | "En développement" | "Terminé" | "Maintenance";
  statusColor: string;
  projectType: "Projet Personnel" | "Projet en Entreprise" | "Projet de Stage";
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  year: string;
  role: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "kandra",
    title: "Kandra — Plateforme de Recrutement",
    description: "Plateforme RH complète mettant en relation candidats, entreprises et offres d'emploi avec tableaux de bord interactifs et filtres dynamiques.",
    longDescription: `Kandra est une plateforme SaaS RH moderne conçue pour transformer et simplifier la mise en relation entre candidats, entreprises et recruteurs. L'objectif du projet était de créer un écosystème complet, fluide et intuitif, capable de traiter des flux de données complexes tout en offrant une expérience utilisateur d'un niveau professionnel.

    En tant que développeur fullstack, j'ai assuré la conception globale de l'application de A à Z. Côté backend et données, j'ai architecturé une base PostgreSQL robuste modélisée avec Drizzle ORM, garantissant des requêtes réactives et un typage strict de bout en bout avec TypeScript. Pour offrir une navigation ultra-fluide sans rechargement de page, j'ai intégré une stratégie de mise en cache intelligente et de révalidation automatique côté client avec SWR.

    L'application intègre une authentification hybride sécurisée (Google OAuth & sessions JWT), des tableaux de bord analytiques complets générant des statistiques en temps réel (KPIs de candidatures, vues d'offres, métriques d'engagement), ainsi qu'un moteur de recherche réactif avec filtres dynamiques par métier, secteur et région. Un système de notifications temps réel (badge dynamique dans la Navbar et alertes e-mail) informe instantanément les utilisateurs des étapes clés de leurs recrutements.

    L'écosystème s'articule autour de 3 espaces dédiés :
    - Espace Candidat : gestion du profil, candidature en 1 clic, sauvegarde d'offres et suivi en temps réel.
    - Espace Entreprise : publication d'offres, pipeline de gestion des candidats et statistiques de recrutement.
    - Dashboard Admin : modération des comptes, suivi global de la plateforme et gestion de la nomenclature.`,
    image: "/projets/kandra/kandralight.png",
    gallery: [
      "/projets/kandra/kandralight.png",
      "/projets/kandra/kandradark.png",
      "/projets/kandra/kandralight.png",
    ],
    category: "Fullstack SaaS",
    categoryColor: "bg-emerald-500",
    status: "En production",
    statusColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    projectType: "Projet Personnel",
    tags: ["Next.js", "TypeScript", "Tailwind", "SWR", "PostgreSQL", "Drizzle ORM", "Google OAuth"],
    liveUrl: "https://kandra-mg.vercel.app",
    githubUrl: null,
    featured: true,
    year: "2024 - 2025",
    role: "Développeur Fullstack & UI/UX Designer",
    features: [
      "Authentification hybride : Google OAuth & JWT (Email/Mot de passe)",
      "Gestion des rôles (Talents, Entreprises, Admin)",
      "Tableaux de bord analytiques & statistiques d'activité multi-profils",
      "Moteur de recherche et filtres par secteur/métier/région",
      "Espace Candidat : suivi des candidatures & sauvegarde d'offres",
      "Espace Entreprise : gestion des offres & sélection des candidats",
      "Dashboard Admin : modération & gestion de la nomenclature",
      "Système de notifications en temps réel (Navbar & Alertes Email)",
      "Gestion de cache intelligente avec SWR (UI fluide & temps réel)",
      "Bases de données PostgreSQL réactives",
    ],
  },
  {
    slug: "heartbeats",
    title: "Heartbeats — Plateforme de Rencontre",
    description:
      "Plateforme web communautaire et de rencontre internationale intégrant chat temps réel (WebSockets), multilingue (8 langues), mode sombre/clair et système de crédits.",
    longDescription: `Heartbeats est une plateforme de rencontre et d'échanges communautaires internationale à fort trafic développée au sein de l'entreprise SK'HAY.

    En tant que Développeur Fullstack, j'ai pris en charge l'ensemble des étapes de développement : du prototypage UI/UX sur Figma jusqu'à la mise en place d'une architecture découplée combinant un backend robuste en Symfony (API REST) avec MySQL, et un frontend réactif développé en React avec Material UI (MUI). Le projet a été géré en équipe avec GitLab pour le suivi des versions et de l'intégration.

    L'application offre une expérience temps réel complète via WebSockets (messagerie instantanée, notifications d'interactions, likes, clins d'œil, cadeaux virtuels), un système monétaire basé sur des crédits et des boosts de visibilité, une internationalisation complète (i18n) en 8 langues, la gestion du mode sombre/clair, ainsi qu'une recherche avancée basée sur la géolocalisation et les affinités.`,
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
    category: "Fullstack Web App",
    categoryColor: "bg-pink-500",
    status: "En production",
    statusColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    projectType: "Projet en Entreprise",
    tags: ["Symfony", "React", "MUI", "WebSockets", "JWT", "MySQL", "GitLab", "API REST", "i18n", "Figma"],
    liveUrl: "https://www.heartbeats.community",
    githubUrl: null,
    featured: true,
    year: "2023 – 2024",
    role: "Développeur Fullstack JS / PHP",
    features: [
      "Messagerie instantanée & Chat en temps réel (WebSockets)",
      "Système de crédits, solde utilisateur & profils boostés",
      "Interactions en direct : Likes, clins d'œil, cadeaux virtuels & demandes de chat",
      "Moteur de recherche avancée avec filtres géographiques & critères d'affinité",
      "Espace Communauté, Blog & Événements en ligne",
      "Interface utilisateur complexe & responsive avec React et Material UI (MUI)",
      "Dark / Light Mode pour une expérience utilisateur adaptable",
      "Internationalisation (i18n) complète en 8 langues",
      "Backend robuste & API REST sécurisées développées avec Symfony",
    ],
  },
  {
    slug: "dashboard-animation",
    title: "Plateforme d'Animation",
    description:
      "Outil de gestion et d'animation en temps réel pour les community managers avec notifications live.",
    longDescription: `Outil interne développé chez SK'HAY destiné aux Community Managers pour animer et piloter une communauté en temps réel.

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
    status: "Terminé",
    statusColor: "bg-pink-500/15 text-pink-600 dark:text-pink-400 border-pink-500/30",
    projectType: "Projet en Entreprise",
    tags: ["React", "Node.js", "Socket.io", "Tailwind", "Express"],
    liveUrl: null,
    githubUrl: null,
    featured: false,
    year: "2024",
    role: "Développeur Fullstack JS",
    features: [
      "Dashboard temps réel",
      "Notifications live (Socket.io)",
      "Gestion des campagnes d'animation",
      "Statistiques d'engagement",
      "Interface responsive Tailwind",
      "API REST sécurisées",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}