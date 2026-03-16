import type { Metadata } from "next";
import { projects as frProjects } from "@/data/fr/projects";
import { ProjectPageClient } from "@/components/project/ProjectPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return frProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = frProjects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: `${project.title} — Raphaël DAVIOT`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Raphaël DAVIOT`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProjectPageClient slug={slug} />;
}
