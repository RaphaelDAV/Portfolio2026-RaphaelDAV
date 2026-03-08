"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  MapPin,
  Calendar,
  Target,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { experiences } from "@/data/experiences";

interface AllExperiencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AllExperiencesModal({
  isOpen,
  onClose,
}: AllExperiencesModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Mes Expériences"
      size="full"
    >
      <div className="p-6 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative p-6 rounded-xl bg-surface border border-border ${
              index !== 0 ? "mt-8" : ""
            }`}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  {exp.type && (
                    <Badge variant="primary" size="sm">
                      {exp.type}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={16} className="text-primary" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-primary" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-primary" />
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Description
                </h4>
                <p className="text-muted leading-relaxed">{exp.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Missions */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                    <Target size={18} className="text-secondary" />
                    Missions
                  </h4>
                  <ul className="space-y-2">
                    {exp.missions.map((mission, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-secondary mt-1.5">•</span>
                        <span>{mission}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies + Résultats */}
                <div className="space-y-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                      <Wrench size={18} className="text-accent" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="accent" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {exp.results && exp.results.length > 0 && (
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                        <TrendingUp size={18} className="text-primary" />
                        Résultats
                      </h4>
                      <ul className="space-y-2">
                        {exp.results.map((result, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
