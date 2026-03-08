"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Zap, Wrench, Code2 } from "lucide-react";
import type { Skill } from "@/types/skill";
import { skillLevelLabels, skillCategoryLabels } from "@/types/skill";

interface SkillModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}

export function SkillModal({ skill, isOpen, onClose }: SkillModalProps) {
  if (!skill) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={skill.name} size="md">
      <div className="space-y-6">
        {/* Header badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" size="md">
            {skillCategoryLabels[skill.category]}
          </Badge>
          <Badge variant="accent" size="md">
            {skillLevelLabels[skill.level]}
          </Badge>
        </div>

        {/* Description */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
            <Zap size={18} className="text-primary" />
            Description
          </h3>
          <p className="text-muted leading-relaxed">{skill.description}</p>
        </div>

        {/* Outils */}
        {skill.tools && skill.tools.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Wrench size={18} className="text-accent" />
              Outils & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.tools.map((tool) => (
                <Badge key={tool} variant="default" size="md">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Exemples d'utilisation */}
        {skill.examples && skill.examples.length > 0 && (
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
              <Code2 size={18} className="text-secondary" />
              Exemples d&apos;utilisation
            </h3>
            <ul className="space-y-2">
              {skill.examples.map((example, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {example}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  );
}
