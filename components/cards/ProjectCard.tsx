"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onPreview?: (project: Project) => void;
  index?: number;
}

export function ProjectCard({ project, onPreview, index = 0 }: ProjectCardProps) {
  const isNew = project.year >= new Date().getFullYear(); 

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full min-h-[250px] md:min-h-[300px] w-full flex flex-col rounded-2xl bg-card border border-border hover:border-transparent overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      {/* Main Link Wrapper */}
      <Link
        href={`/projets/${project.slug}`}
        onClick={(e) => {
          if (onPreview) {
            e.preventDefault();
            onPreview(project);
          }
        }}
        className="absolute inset-0 z-20 flex flex-col justify-between p-5 md:p-6"
      >
        <span className="sr-only">Voir {project.title}</span>

        {/* Top row: tags & arrow */}
        <div className="flex items-start justify-between">
          {/* Tags */}
          <div className="flex flex-row flex-wrap items-start gap-2">
            {isNew && (
              <Tag size="sm" variant="gradient" className="tracking-wider text-[10px]">
                NOUVEAU
              </Tag>
            )}
            {project.technologies && project.technologies[0] && (
              <Tag size="sm" className="bg-black/40 border-white/20">
                {project.technologies[0]}
              </Tag>
            )}
          </div>

          {/* Arrow */}
          <motion.div 
            className="flex items-center justify-center text-white/70 group-hover:text-gradient transition-colors"
            animate={{ 
              x: [0, 4, 0], 
              y: [0, -4, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUpRight size={28} />
          </motion.div>
        </div>

        {/* Bottom row: Icon & Title/Desc */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden relative flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
            {project.icon ? (
              <Image
                src={project.icon}
                alt={`${project.title} logo`}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-2xl font-bold text-white drop-shadow-md">
                {project.title.charAt(0)}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center min-w-0 h-full transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="text-lg sm:text-xl uppercase font-bold text-white truncate drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-sm text-white/80 line-clamp-1 drop-shadow-md">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </Link>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-surface">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover brightness-[0.7] transition-all duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface group-hover:brightness-50 transition-all duration-700">
            <span className="text-6xl font-bold text-primary/5">{project.title.charAt(0)}</span>
          </div>
        )}
        
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/95 transition-opacity duration-300" />
        <div className="absolute inset-0 transition-colors duration-500" />
      </div>

      {/* Hover Gradient Border */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[3px] bg-gradient-main" 
        style={{ 
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", 
          WebkitMaskComposite: "xor", 
          maskComposite: "exclude" 
        }}
      />
    </motion.div>
  );
}
