"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Experience } from "@/types/experience";

const typeLabels: Record<string, string> = {
  stage: "Stage",
  alternance: "Alternance",
  freelance: "Freelance",
  projet: "Projet",
  emploi: "Emploi",
};

interface ExperienceCardProps {
  experience: Experience;
  onClick: (experience: Experience) => void;
  index?: number;
}

export function ExperienceCard({
  experience,
  onClick,
  index = 0,
}: ExperienceCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(experience)}
      className="w-full text-left p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
          <Briefcase size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {experience.role}
            </h3>
            <Badge variant="secondary" size="sm">
              {typeLabels[experience.type] || experience.type}
            </Badge>
          </div>
          <p className="text-sm text-primary-light mt-1">
            {experience.company}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {experience.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {experience.startDate} — {experience.endDate}
            </span>
          </div>
          <p className="text-sm text-muted mt-3 line-clamp-2">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {experience.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
