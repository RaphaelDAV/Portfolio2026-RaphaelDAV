"use client";

import Link from "next/link";
import { projects, projectOrder } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectContent } from "@/components/project/ProjectContent";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { useI18n } from "@/components/providers/I18nProvider";

interface ProjectPageClientProps {
  slug: string;
}

export function ProjectPageClient({ slug }: ProjectPageClientProps) {
  const { locale, t } = useI18n();

  const orderIndex = new Map(projectOrder.map((id, index) => [id, index]));
  const orderedProjects = [...projects].sort((a, b) => {
    const aIndex = orderIndex.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderIndex.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });

  const projectIndex = orderedProjects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    return (
      <section className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            {locale === "fr" ? "Projet introuvable" : "Project not found"}
          </h1>
          <Link href="/#projects" className="text-primary hover:underline">
            {t("projectPage.backToProjects")}
          </Link>
        </div>
      </section>
    );
  }

  const project = orderedProjects[projectIndex];
  const previousProject = projectIndex > 0 ? orderedProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < orderedProjects.length - 1
      ? orderedProjects[projectIndex + 1]
      : null;

  return (
    <>
      <ProjectHero project={project} />
      <div className="section-divider" />
      <ProjectContent project={project} />
      <ProjectNavigation previous={previousProject} next={nextProject} />
    </>
  );
}
