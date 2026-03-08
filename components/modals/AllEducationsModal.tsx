"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";
import { education } from "@/data/education";

interface AllEducationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AllEducationsModal({
  isOpen,
  onClose,
}: AllEducationsModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Mes Diplômes"
      size="full"
    >
      <div className="p-6 space-y-8">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative p-6 rounded-xl bg-surface border border-border ${
              index !== 0 ? "mt-8" : ""
            }`}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {edu.diploma}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-primary" />
                    {edu.school}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-primary" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-primary" />
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Description
                </h4>
                <p className="text-muted leading-relaxed">{edu.description}</p>
              </div>

              {/* Context */}
              {edu.context && (
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Contexte
                  </h4>
                  <p className="text-muted leading-relaxed">{edu.context}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* Compétences acquises */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                    <Award size={18} className="text-primary" />
                    Compétences acquises
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <Badge key={skill} variant="primary" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Matières */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                    <BookOpen size={18} className="text-secondary" />
                    Matières principales
                  </h4>
                  <ul className="space-y-1.5">
                    {edu.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
