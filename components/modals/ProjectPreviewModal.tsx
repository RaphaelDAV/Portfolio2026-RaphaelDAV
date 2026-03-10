"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectPreviewModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectPreviewModal({
  project,
  isOpen,
  onClose,
}: ProjectPreviewModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="lg">
      <div className="space-y-6">
        {/* Cover placeholder */}
        <div className="relative h-48 rounded-xl bg-surface overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-primary/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="primary" size="md">
            {project.category}
          </Badge>
          <Badge variant="accent" size="md">
            {project.year}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed">{project.shortDescription}</p>

        {/* Stack */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
            Stack technique
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-2">
          <GlowButton
            href={`/projets/${project.slug}`}
            variant="primary"
            size="md"
          >
            <ArrowRight size={16} />
            Voir le projet
          </GlowButton>
          {project.githubUrl && (
            <GlowButton
              href={project.githubUrl}
              variant="outline"
              size="md"
              external
            >
              <Github size={16} />
              GitHub
            </GlowButton>
          )}
          {project.liveUrl && (
            <GlowButton
              href={project.liveUrl}
              variant="outline"
              size="md"
              external
            >
              <ExternalLink size={16} />
              Démo
            </GlowButton>
          )}
        </div>
      </div>
    </Modal>
  );
}
