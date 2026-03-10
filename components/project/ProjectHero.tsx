"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/types/project";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GlowButton href="/#projects" variant="ghost" size="sm">
            <ArrowLeft size={16} />
            Retour aux projets
          </GlowButton>
        </motion.div>

        {/* Cover image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-8 h-64 md:h-80 rounded-2xl bg-card border border-border overflow-hidden glow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-9xl font-bold text-primary/10">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Title & meta */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <Badge variant="primary" size="md">
              {project.category}
            </Badge>
            <Badge variant="accent" size="md">
              {project.year}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted max-w-3xl leading-relaxed mb-6"
          >
            {project.shortDescription}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {project.githubUrl && (
              <GlowButton
                href={project.githubUrl}
                variant="outline"
                size="md"
                external
              >
                <Github size={16} />
                Code source
              </GlowButton>
            )}
            {project.liveUrl && (
              <GlowButton
                href={project.liveUrl}
                variant="primary"
                size="md"
                external
              >
                <ExternalLink size={16} />
                Voir la démo
              </GlowButton>
            )}
            {project.docUrl && (
              <GlowButton
                href={project.docUrl}
                variant="outline"
                size="md"
                external
              >
                <FileText size={16} />
                Documentation
              </GlowButton>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
