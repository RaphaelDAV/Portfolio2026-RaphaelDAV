"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onPreview?: (project: Project) => void;
  index?: number;
}

export function ProjectCard({ project, onPreview, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-sm"
    >
      {/* Cover image */}
      <div className="relative h-48 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
        {/* Placeholder visuel */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Preview button */}
        {onPreview && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPreview(project);
            }}
            className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border text-muted hover:text-primary hover:border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Aperçu rapide"
          >
            <Eye size={16} />
          </button>
        )}

        {/* Status badge */}
        <div className="absolute top-3 left-3 z-20">
          <Badge
            variant={project.status === "completed" ? "primary" : "accent"}
            size="sm"
          >
            {project.status === "completed"
              ? "Terminé"
              : project.status === "in-progress"
              ? "En cours"
              : "Planifié"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted whitespace-nowrap">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-muted mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="default" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Link */}
        <Link
          href={`/projets/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors group/link"
        >
          Voir le projet
          <ArrowRight
            size={14}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}
