"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  Rocket,
  Wrench,
} from "lucide-react";
import type { Experience } from "@/types/experience";

const typeLabels: Record<string, string> = {
  stage: "Stage",
  alternance: "Alternance",
  freelance: "Freelance",
  projet: "Projet",
  emploi: "Emploi",
};

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={experience.role} size="lg">
      <div className="space-y-6">
        {/* Header info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <Badge variant="secondary" size="md">
            {typeLabels[experience.type] || experience.type}
          </Badge>
          <span className="flex items-center gap-1.5">
            <Briefcase size={16} className="text-primary" />
            {experience.company}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary" />
            {experience.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={16} className="text-primary" />
            {experience.startDate} — {experience.endDate}
          </span>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Contexte
          </h3>
          <p className="text-muted leading-relaxed">{experience.description}</p>
        </div>

        {/* Missions */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
            <Rocket size={18} className="text-primary" />
            Missions
          </h3>
          <ul className="space-y-2">
            {experience.missions.map((mission, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                {mission}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
            <Wrench size={18} className="text-accent" />
            Technologies utilisées
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="primary" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
            <CheckCircle size={18} className="text-green-400" />
            Résultats & Apprentissages
          </h3>
          <ul className="space-y-2">
            {experience.results.map((result, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <CheckCircle
                  size={14}
                  className="text-green-400 mt-0.5 shrink-0"
                />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
