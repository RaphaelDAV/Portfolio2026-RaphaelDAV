"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Wrench, AlertTriangle, Sparkles, FileText } from "lucide-react";
import type { Project } from "@/types/project";
import { TechMarquee } from "./TechMarquee";

interface ProjectContentProps {
  project: Project;
}

function ContentBlock({
  title,
  icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full flex flex-col p-6 rounded-2xl bg-card border border-border"
    >
      <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
        {icon}
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Ligne 1 : Description (2/3) et Stack technique (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ContentBlock
              title="Description"
              icon={<FileText size={20} className="text-primary" />}
            >
              <div className="text-muted leading-relaxed space-y-4">
                {project.fullDescription.split("\n").map((paragraph, index) => (
                  paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                ))}
              </div>
            </ContentBlock>
          </div>

          <div className="lg:col-span-1">
            <ContentBlock
              title="Stack technique"
              icon={<Wrench size={20} className="text-primary" />}
              delay={0.1}
            >
              <div className="flex flex-col h-full">
                <p className="text-muted text-md pb-1  mb-0">
                  Vue d'ensemble de l'écosystème technique et des outils utilisés pour réaliser ce projet :
                </p>
                <div className="w-full flex-grow flex items-center justify-center">
                  <TechMarquee technologies={project.technologies} />
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>

        {/* Ligne 2 : Difficultés rencontrées et Ce que j'ai appris (50/50) */}
        {((project.difficulties && project.difficulties.length > 0) || project.learnings.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {project.difficulties && project.difficulties.length > 0 && (
              <ContentBlock
                title="Difficultés rencontrées"
                icon={<AlertTriangle size={20} className="text-amber-400" />}
                delay={0.1}
              >
                <ul className="space-y-2">
                  {project.difficulties.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
                      <AlertTriangle
                        size={14}
                        className="text-amber-400 mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            )}

            {project.learnings.length > 0 && (
              <ContentBlock
                title="Ce que j'ai appris"
                icon={<Sparkles size={20} className="text-secondary" />}
                delay={0.1}
              >
                <ul className="space-y-2">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
                      <Sparkles
                        size={14}
                        className="text-secondary mt-1 shrink-0"
                      />
                      {learning}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
