"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";
import type { Education } from "@/types/education";

interface EducationModalProps {
  education: Education | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EducationModal({
  education,
  isOpen,
  onClose,
}: EducationModalProps) {
  if (!education) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={education.diploma} size="lg">
      <div className="space-y-6">
        {/* Header info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <GraduationCap size={16} className="text-primary" />
            {education.school}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary" />
            {education.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={16} className="text-primary" />
            {education.startDate} — {education.endDate}
          </span>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Description
          </h3>
          <p className="text-muted leading-relaxed">{education.description}</p>
        </div>

        {/* Context */}
        {education.context && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Contexte
            </h3>
            <p className="text-muted leading-relaxed">{education.context}</p>
          </div>
        )}

        {/* Compétences acquises */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
            <Award size={18} className="text-primary" />
            Compétences acquises
          </h3>
          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill) => (
              <Badge key={skill} variant="primary" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Matières */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
            <BookOpen size={18} className="text-secondary" />
            Matières principales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {education.subjects.map((subject) => (
              <div
                key={subject}
                className="flex items-center gap-2 p-2 rounded-lg bg-surface text-sm text-muted"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                {subject}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
