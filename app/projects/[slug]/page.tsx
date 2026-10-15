import { notFound } from "next/navigation";
import { getProjectBySlug, RAW_PROJECTS } from "@/lib/projects";
import { ProjectDetail } from "@/components/project-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RAW_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "fr");

  if (!project) return { title: "Projet introuvable" };

  return {
    title: `${project.title} | Eddy Léon`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug, "fr");

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}