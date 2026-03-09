"use client";

import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/skills";
import { skillCategoryLabels, type SkillCategory } from "@/types/skill";
import { Code2, Zap } from "lucide-react";
import { useEffect } from "react";

interface AllSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSkillId?: string; // Optional ID to scroll to when modal opens
}

export function AllSkillsModal({ isOpen, onClose, initialSkillId }: AllSkillsModalProps) {
  const categories: SkillCategory[] = [
    "frontend",
    "backend",
    "database",
    "devops",
    "other",
  ];

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter((skill) => skill.category === category);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "expert":
        return "text-purple-400";
      case "avance":
        return "text-blue-400";
      case "intermediaire":
        return "text-green-400";
      default:
        return "text-yellow-400";
    }
  };

  useEffect(() => {
    if (isOpen && initialSkillId) {
      // Add a slight delay to allow modal to finish mounting/opening
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(`skill-${initialSkillId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, initialSkillId]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Toutes mes compétences techniques"
      size="full"
    >
      <div className="p-4 md:p-6 lg:p-8 space-y-12">
        <div className="text-center mb-8">
          <p className="text-sm md:text-base text-muted max-w-3xl mx-auto">
            Découvrez l&apos;ensemble de mes compétences techniques acquises durant ma formation en BUT Informatique
            et consolidées à travers divers projets personnels et académiques.
          </p>
        </div>

        {categories.map((category) => {
          const categorySkills = getSkillsByCategory(category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category}>
              {/* Category header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
                  <Code2 size={24} className="text-primary" />
                  {skillCategoryLabels[category]}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </div>

              {/* Skills grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    id={`skill-${skill.id}`}
                    className={`group relative p-4 md:p-5 rounded-xl bg-surface border transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 ${
                      initialSkillId === skill.id 
                        ? 'border-primary ring-2 ring-primary/20 shadow-primary/20' 
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-300 ${initialSkillId === skill.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                    <div className="relative space-y-3">
                      {/* Skill name & level */}
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <Zap
                          size={16}
                          className={`flex-shrink-0 ${getLevelColor(
                            skill.level
                          )}`}
                        />
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Tools */}
                      {skill.tools && skill.tools.length > 0 && (
                        <div className="pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {skill.tools.map((tool) => (
                              <Badge key={tool} variant="default" size="sm">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <div className="mt-12 pt-6 border-t border-border">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Niveau de maîtrise
          </h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-purple-400" />
              <span className="text-muted">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-blue-400" />
              <span className="text-muted">Avancé</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-green-400" />
              <span className="text-muted">Intermédiaire</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-muted">Débutant</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
