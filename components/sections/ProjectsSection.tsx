"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ProjectPreviewModal } from "@/components/modals/ProjectPreviewModal";
import { projects, projectOrder } from "@/data/projects";
import type { Project } from "@/types/project";

export function ProjectsSection() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <AnimatedSection id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Custom Hero Title */}
        <div className="relative mb-16 md:mb-24 flex justify-center w-full mt-4 md:mt-8">
          <div className="relative flex items-center justify-center">
            {/* Outline text (behind) */}
            <h2 className="text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none font-black uppercase tracking-normal text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)] select-none drop-shadow-md">
              Portfolio
            </h2>
            {/* Front text masking the inner strokes to match background */}
            <h2 aria-hidden="true" className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none font-black uppercase tracking-normal text-[#0f0f11] select-none pointer-events-none">
              Portfolio
            </h2>
            <span className="absolute -bottom-1 md:-bottom-2 right-10 z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ">
              Mes projets
            </span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...projects].sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)).map((project, index) => (
            <div
              key={project.id}
              className={`h-full ${
                project.size === "large" ? "sm:col-span-1 lg:col-span-2" : "col-span-1"
              }`}
            >
              <ProjectCard
                project={project}
                onPreview={setPreviewProject}
                index={index}
              />
            </div>
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
