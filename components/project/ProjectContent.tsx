"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import {
  Target,
  Lightbulb,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Clock,
  List,
  FileText,
} from "lucide-react";
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

        {/* Contexte */}
        {project.context && (
          <ContentBlock
            title="Contexte"
            icon={<Lightbulb size={20} className="text-accent" />}
            delay={0.1}
          >
            <p className="text-muted leading-relaxed">{project.context}</p>
          </ContentBlock>
        )}

        {/* Objectifs */}
        {project.objectives && project.objectives.length > 0 && (
          <ContentBlock
            title="Objectifs"
            icon={<Target size={20} className="text-secondary" />}
            delay={0.1}
          >
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-muted">
                  <Target size={14} className="text-secondary mt-1 shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </ContentBlock>
        )}

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

        {/* Fonctionnalités */}
        {project.features && project.features.length > 0 && (
          <ContentBlock
            title="Fonctionnalités principales"
            icon={<List size={20} className="text-accent" />}
            delay={0.1}
          >
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-muted">
                  <CheckCircle
                    size={14}
                    className="text-green-400 mt-1 shrink-0"
                  />
                  {feat}
                </li>
              ))}
            </ul>
          </ContentBlock>
        )}

        {/* Missions */}
        {project.missions.length > 0 && (
          <ContentBlock
            title="Missions réalisées"
            icon={<Sparkles size={20} className="text-primary" />}
            delay={0.1}
          >
            <ul className="space-y-2">
              {project.missions.map((mission, i) => (
                <li key={i} className="flex items-start gap-2 text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {mission}
                </li>
              ))}
            </ul>
          </ContentBlock>
        )}

        {/* Timeline */}
        {project.timeline.length > 0 && (
          <ContentBlock
            title="Étapes de réalisation"
            icon={<Clock size={20} className="text-accent" />}
            delay={0.1}
          >
            <div className="relative pl-6 border-l-2 border-border space-y-6">
              {project.timeline.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(1.5rem+5px)] top-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {step.title}
                      </h4>
                      {step.date && (
                        <span className="text-xs text-muted">
                          — {step.date}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>
        )}

        {/* Difficultés & Solutions (side by side) */}
        {((project.difficulties && project.difficulties.length > 0) ||
          (project.solutions && project.solutions.length > 0) ||
          project.challenges.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Difficultés / Challenges */}
            <ContentBlock
              title="Difficultés rencontrées"
              icon={<AlertTriangle size={20} className="text-amber-400" />}
              delay={0.1}
            >
              <ul className="space-y-2">
                {(project.difficulties || project.challenges).map((item, i) => (
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

            {/* Solutions */}
            {project.solutions && project.solutions.length > 0 && (
              <ContentBlock
                title="Solutions apportées"
                icon={<Lightbulb size={20} className="text-green-400" />}
                delay={0.15}
              >
                <ul className="space-y-2">
                  {project.solutions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
                      <Lightbulb
                        size={14}
                        className="text-green-400 mt-1 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentBlock>
            )}
          </div>
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
