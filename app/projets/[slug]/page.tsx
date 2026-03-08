import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <ProjectHero project={project} />
      <div className="section-divider" />
      <ProjectContent project={project} />
      <ProjectNavigation previous={previousProject} next={nextProject} />
    </>
  );
}
