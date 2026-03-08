"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import type { Skill } from "@/types/skill";
import { skillLevelLabels } from "@/types/skill";

interface SkillCardProps {
  skill: Skill;
  onClick?: (skill: Skill) => void;
  index?: number;
}

const levelColors: Record<string, string> = {
  debutant: "bg-muted/20 text-muted",
  intermediaire: "bg-accent/10 text-accent",
  avance: "bg-primary/10 text-primary",
  expert: "bg-secondary/10 text-secondary",
};

export function SkillCard({ skill, onClick, index = 0 }: SkillCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick?.(skill)}
      className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm cursor-pointer text-left group"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
          {skill.name}
        </h4>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            levelColors[skill.level]
          }`}
        >
          {skillLevelLabels[skill.level]}
        </span>
      </div>
      <p className="text-xs text-muted line-clamp-2">{skill.description}</p>
      {skill.tools && (
        <div className="flex flex-wrap gap-1 mt-2">
          {skill.tools.slice(0, 3).map((tool) => (
            <Badge key={tool} variant="default" size="sm">
              {tool}
            </Badge>
          ))}
        </div>
      )}
    </motion.button>
  );
}
