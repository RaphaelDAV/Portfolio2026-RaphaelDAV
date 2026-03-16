"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import { GlowButton } from "@/components/ui/GlowButton";
import { ArrowLeft, Github, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/types/project";
import { useI18n } from "@/components/providers/I18nProvider";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { t } = useI18n();

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Hero background image */}
      {project.coverImage ? (
        <div className="absolute inset-0">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-background" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-secondary/10" />
      )}

      {/* Ambient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <GlowButton href="/#projects" variant="ghost" size="sm">
            <ArrowLeft size={16} />
            {t("projectPage.backToProjects")}
          </GlowButton>
        </motion.div>

        {/* Title, Meta & Actions and Logo */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-4"
            >
            <Tag size="md" variant="default">
              {project.category}
            </Tag>
            <Tag size="md" variant="default">
              {project.year}
            </Tag>
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
                <Github size={16} className="text-white fill-white" />
                {t("projectPage.sourceCode")}
              </GlowButton>
            )}
            {project.liveUrl && (
              <GlowButton
                href={project.liveUrl}
                variant="gradient"
                size="md"
                external
              >
                <ExternalLink size={16} />
                {t("projectPage.viewDemo")}
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
                {t("projectPage.documentation")}
              </GlowButton>
            )}
          </motion.div>
          </div>

          {project.icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0] // Légère animation de flottement
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.4 },
                scale: { duration: 0.6, delay: 0.4 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 // Commence après l'apparition
                }
              }}
              className="flex-shrink-0 p-2 hidden md:block" // Caché sur petit écran, affiché à partir de md
            >
              <div className="relative md:w-30 md:h-30 lg:w-40 lg:h-40 overflow-hidden rounded-2xl">
                <Image
                  src={project.icon}
                  alt={`${project.title} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
