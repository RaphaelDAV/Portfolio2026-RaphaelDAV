"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import type { Education } from "@/types/education";

interface EducationCardProps {
  education: Education;
  onClick: (education: Education) => void;
  index?: number;
}

export function EducationCard({
  education,
  onClick,
  index = 0,
}: EducationCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(education)}
      className="w-full text-left p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <GraduationCap size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {education.diploma}
          </h3>
          <p className="text-sm text-primary-light mt-1">{education.school}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              {education.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {education.startDate} — {education.endDate}
            </span>
          </div>
          <p className="text-sm text-muted mt-3 line-clamp-2">
            {education.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
