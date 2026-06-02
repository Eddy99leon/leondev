export const SKILLS = [
  {
    category: "Frontend",
    color: "bg-pink-500",
    lightColor: "bg-pink-50 dark:bg-pink-950/40",
    textColor: "text-pink-600 dark:text-pink-400",
    borderColor: "border-pink-100 dark:border-pink-900",
    items: [
      { label: "React / Next.js", level: 95 },
      { label: "TypeScript", level: 90 },
      { label: "Tailwind CSS", level: 95 },
      { label: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    color: "bg-blue-500",
    lightColor: "bg-blue-50 dark:bg-blue-950/40",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-900",
    items: [
      { label: "Node.js / Express", level: 88 },
      { label: "PostgreSQL", level: 82 },
      { label: "Prisma / Drizzle", level: 85 },
      { label: "REST / GraphQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    color: "bg-orange-500",
    lightColor: "bg-orange-50 dark:bg-orange-950/40",
    textColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-100 dark:border-orange-900",
    items: [
      { label: "Git / GitHub", level: 92 },
      { label: "Docker", level: 75 },
      { label: "Figma", level: 85 },
      { label: "Vercel / Railway", level: 90 },
    ],
  },
];

export const EXPERIENCES = [
  {
    period: { fr: "2023 - Présent", en: "2023 - Present" },
    role: { fr: "Développeur Full-Stack Freelance", en: "Freelance Full-Stack Developer" },
    company: "Indépendant",
    description: {
      fr: "Conception et développement d'applications web sur mesure pour des clients internationaux. Spécialisé en Next.js, TypeScript et design systems.",
      en: "Design and development of custom web applications for international clients. Specialized in Next.js, TypeScript and design systems.",
    },
    color: "bg-pink-500",
    textColor: "text-pink-600 dark:text-pink-400",
    lightColor: "bg-pink-50 dark:bg-pink-950/40",
    borderColor: "border-pink-200 dark:border-pink-900",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    period: { fr: "2021 - 2023", en: "2021 - 2023" },
    role: { fr: "Développeur Frontend Senior", en: "Senior Frontend Developer" },
    company: "TechCorp Inc.",
    description: {
      fr: "Lead developer sur une plateforme SaaS B2B utilisée par +50 000 entreprises. Migration de l'architecture vers React + TypeScript.",
      en: "Lead developer on a B2B SaaS platform used by 50,000+ companies. Migration of the architecture to React + TypeScript.",
    },
    color: "bg-blue-500",
    textColor: "text-blue-600 dark:text-blue-400",
    lightColor: "bg-blue-50 dark:bg-blue-950/40",
    borderColor: "border-blue-200 dark:border-blue-900",
    tags: ["React", "TypeScript", "GraphQL"],
  },
];

export const STATS = [
  { value: "5+", labelKey: "years_exp", color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900" },
  { value: "30+", labelKey: "projects_done", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900" },
  { value: "20+", labelKey: "clients", color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900" },
];