"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Wrench, AlertTriangle, Sparkles, FileText, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import type { Project } from "@/types/project";
import { TechMarquee } from "./TechMarquee";
import { useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

interface ProjectContentProps {
  project: Project;
}

function ContentBlock({
  title,
  icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full flex flex-col p-6 rounded-2xl bg-card border border-border"
    >
      <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
        {icon}
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export function ProjectContent({ project }: ProjectContentProps) {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImage((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const prevImage = () => {
    if (project.gallery && project.gallery.length > 0) {
      setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Ligne 1 : Description (2/3) et Stack technique (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <ContentBlock
              title={t("projectPage.descriptionTitle")}
              icon={<FileText size={20} className="text-primary" />}
            >
              <div className="text-muted leading-relaxed space-y-4 text-justify">
                {project.fullDescription.split("\n").map((paragraph, index) => (
                  paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                ))}
              </div>
            </ContentBlock>
          </div>

          <div className="lg:col-span-1">
            <ContentBlock
              title={t("projectPage.techStackTitle")}
              icon={<Wrench size={20} className="text-primary" />}
              delay={0.1}
            >
              <div className="flex flex-col h-full">
                <p className="text-muted text-md pb-1  mb-0">
                  {t("projectPage.techStackDescription")}
                </p>
                <div className="w-full flex-grow flex items-center justify-center">
                  <TechMarquee technologies={project.technologies} />
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>

        {/* Ligne 2 : Difficultés, Apprentissages et Galerie */}
        {((project.difficulties && project.difficulties.length > 0) || project.learnings.length > 0 || (project.gallery && project.gallery.length > 0)) && (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            
            {/* Colonne gauche : Difficultés et Ce que j'ai appris empilés */}
            {((project.difficulties && project.difficulties.length > 0) || project.learnings.length > 0) && (
              <div className="flex flex-col gap-4 lg:col-span-1 xl:col-span-1 h-full">
                {project.difficulties && project.difficulties.length > 0 && (
                  <ContentBlock
                    title={t("projectPage.difficultiesTitle")}
                    icon={<AlertTriangle size={20} className="text-amber-400" />}
                    delay={0.1}
                  >
                    <ul className="space-y-2">
                      {project.difficulties.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted">
                          <AlertTriangle
                            size={14}
                            className="text-amber-400 mt-1 shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ContentBlock>
                )}

                {project.learnings.length > 0 && (
                  <ContentBlock
                    title={t("projectPage.learningsTitle")}
                    icon={<Sparkles size={20} className="text-secondary" />}
                    delay={0.1}
                  >
                    <ul className="space-y-2">
                      {project.learnings.map((learning, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted">
                          <Sparkles
                            size={14}
                            className="text-secondary mt-1 shrink-0"
                          />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </ContentBlock>
                )}
              </div>
            )}

            {/* Colonne droite : Galerie très large */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="lg:col-span-2 xl:col-span-3 h-full">
                <ContentBlock
                  title={t("projectPage.galleryTitle")}
                  icon={<ImageIcon size={20} className="text-primary" />}
                  delay={0.1}
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20 mt-4 group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImage}
                        src={project.gallery[currentImage]}
                        alt={`${project.title} screenshot ${currentImage + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {project.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10 cursor-pointer"
                          aria-label={t("projectPage.previousImageAria")}
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background z-10 cursor-pointer"
                          aria-label={t("projectPage.nextImageAria")}
                        >
                          <ChevronRight size={24} />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                          {project.gallery.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImage(i)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                i === currentImage
                                  ? "bg-primary w-4"
                                  : "bg-white/50 hover:bg-white/80"
                              }`}
                              aria-label={`${t("projectPage.goToImageAriaPrefix")} ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </ContentBlock>
              </div>
            )}

          </div>
        )}
      </div>
    </section>
  );
}
