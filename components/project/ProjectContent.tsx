"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Wrench, AlertTriangle, Sparkles, FileText } from "lucide-react";
import type { Project } from "@/types/project";

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
      className="p-6 rounded-2xl bg-card border border-border"
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Description complète */}
        <ContentBlock
          title="Description"
          icon={<FileText size={20} className="text-primary" />}
        >
          <p className="text-muted leading-relaxed">{project.fullDescription}</p>
        </ContentBlock>

        {/* Stack technique */}
        <ContentBlock
          title="Stack technique"
          icon={<Wrench size={20} className="text-primary" />}
          delay={0.1}
        >
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </ContentBlock>

        {/* Difficultés rencontrées */}
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

        {/* Ce que j'ai appris */}
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
    </section>
  );
}
