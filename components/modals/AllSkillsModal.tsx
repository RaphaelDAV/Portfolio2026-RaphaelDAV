"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { skillCategoryLabels, type SkillCategory, type Skill } from "@/types/skill";
import type { Project } from "@/types/project";

interface AllSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSkillId?: string;
}

export function AllSkillsModal({ isOpen, onClose, initialSkillId }: AllSkillsModalProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

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

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "expert":
        return "Expert";
      case "avance":
        return "Avancé";
      case "intermediaire":
        return "Intermédiaire";
      default:
        return "Débutant";
    }
  };

  // Trouver les projets reliés à une compétence
  const getRelatedProjects = (skill: Skill): Project[] => {
    return projects.filter((project) =>
      project.technologies.some(
        (tech) => tech.toLowerCase() === skill.name.toLowerCase()
      )
    );
  };

  useEffect(() => {
    if (isOpen && initialSkillId) {
      const skill = skills.find((s) => s.id === initialSkillId);
      if (skill) {
        setSelectedSkill(skill);
      }
    } else if (isOpen && !selectedSkill) {
      // Sélectionner la première compétence par défaut
      setSelectedSkill(skills[0]);
    }
  }, [isOpen, initialSkillId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    // Reset après l'animation de fermeture
    setTimeout(() => setSelectedSkill(null), 300);
  };

  const relatedProjects = selectedSkill ? getRelatedProjects(selectedSkill) : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] mx-4 bg-background rounded-2xl border border-border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Toutes mes compétences</h2>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex">
              {/* Left sidebar - Skills grid */}
              <div className="w-20 sm:w-40 md:w-64 lg:w-96 border-r border-border overflow-y-auto p-2 sm:p-3 md:p-4">
                {categories.map((category) => {
                  const categorySkills = getSkillsByCategory(category);
                  if (categorySkills.length === 0) return null;

                  return (
                    <div key={category} className="mb-6 md:mb-8">
                      <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-muted mb-2 sm:mb-3 md:mb-4 px-1">
                        {skillCategoryLabels[category]}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                        {categorySkills.map((skill) => (
                          <button
                            key={skill.id}
                            onClick={() => setSelectedSkill(skill)}
                            className={`flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg transition-all ${
                              selectedSkill?.id === skill.id
                                ? "bg-primary/20 border-2 border-primary scale-105"
                                : "hover:bg-white/5 border-2 border-transparent hover:border-white/10"
                            }`}
                          >
                            {skill.logo && (
                              <Image
                                src={skill.logo}
                                alt={skill.name}
                                width={48}
                                height={48}
                                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                              />
                            )}
                            <span className="text-[10px] sm:text-xs font-medium text-foreground text-center leading-tight line-clamp-2">
                              {skill.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right content - Skill details */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                <AnimatePresence mode="wait">
                  {selectedSkill && (
                    <motion.div
                      key={selectedSkill.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 md:space-y-6"
                    >
                      {/* Skill header */}
                      <div className="flex items-center gap-3 md:gap-4">
                        {selectedSkill.logo && (
                          <Image
                            src={selectedSkill.logo}
                            alt={selectedSkill.name}
                            width={64}
                            height={64}
                            className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                            {selectedSkill.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-sm md:text-base text-muted leading-relaxed">
                          {selectedSkill.description}
                        </p>
                      </div>

                      {/* Tools */}
                      {selectedSkill.tools && selectedSkill.tools.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 md:mb-3">Outils utilisés</h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {selectedSkill.tools.map((tool) => (
                              <Badge key={tool} variant="default" size="sm">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Related projects */}
                      {relatedProjects.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-2 md:mb-3">
                            Projets reliés ({relatedProjects.length})
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {relatedProjects.map((project) => (
                              <div key={project.id} onClick={handleClose}>
                                <ProjectCard project={project} compact />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {relatedProjects.length === 0 && (
                        <div className="text-center py-6 md:py-8">
                          <p className="text-muted text-xs sm:text-sm">Aucun projet utilisant cette compétence pour le moment</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
