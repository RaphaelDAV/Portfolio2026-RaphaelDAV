"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillCard } from "@/components/cards/SkillCard";
import { SkillModal } from "@/components/modals/SkillModal";
import { skills } from "@/data/skills";
import { skillCategoryLabels, type Skill, type SkillCategory } from "@/types/skill";

const categories: SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "devops",
  "other",
];

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <AnimatedSection id="skills" className="py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual title */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-primary mb-4"
          >
            Compétences techniques
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-gradient">Apprendre,</span>{" "}
            <span className="text-foreground">Expérimenter</span>
            <br />
            <span className="text-foreground">&</span>{" "}
            <span className="text-gradient">Consolider</span>
          </motion.h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-white glow-sm"
                : "bg-card border border-border text-muted hover:text-foreground hover:border-primary/30"
            }`}
          >
            Toutes
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white glow-sm"
                  : "bg-card border border-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {skillCategoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={setSelectedSkill}
              index={index}
            />
          ))}
        </motion.div>

        {/* Modal */}
        <SkillModal
          skill={selectedSkill}
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      </div>
    </AnimatedSection>
  );
}
