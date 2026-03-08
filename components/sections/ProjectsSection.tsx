"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectPreviewModal } from "@/components/modals/ProjectPreviewModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function ProjectsSection() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mes Projets"
          subtitle="Découvrez les projets sur lesquels j'ai travaillé"
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreview={setPreviewProject}
              index={index}
            />
          ))}
        </div>

        {/* Preview modal */}
        <ProjectPreviewModal
          project={previewProject}
          isOpen={!!previewProject}
          onClose={() => setPreviewProject(null)}
        />
      </div>
    </AnimatedSection>
  );
}
