"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import { GlareHover } from "@/components/ui/GlareHover";
import { education as allEducation } from "@/data/education";

const levelLabels = ["BAC", "BAC+3", "BAC+5"];
const ordered = [...allEducation].reverse();
type EduItem = (typeof ordered)[0];

function FlipCard({ edu, index, isUpcoming, fits }: { edu: EduItem; index: number; isUpcoming: boolean; fits: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: 0.15 + index * 0.12, ease: "easeOut" }}
      className={`flex-shrink-0 cursor-pointer ${fits ? "flex-1 max-w-[340px]" : "w-full max-w-[400px]"}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <GlareHover
        borderRadius="1rem"
        glareOpacity={0.13}
        glareSize={55}
        tiltMaxAngle={flipped ? 0 : 10}
        transitionDuration={400}
      >
        {/* Flip container — CSS transition, preserve-3d pour les faces */}
        <div
          style={{
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 550ms cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
        {/* FACE AVANT */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="w-full flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
        >
          <div className="relative w-full aspect-square bg-white/5 border-b border-white/10 overflow-hidden">
            {edu.image && (
              <Image
                src={edu.image}
                alt={edu.diploma}
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 400px, 340px"
              />
            )}
            {isUpcoming && (
              <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                À venir
              </span>
            )}
            <div className="absolute bottom-3 left-3">
              <Tag size="sm">{edu.school}</Tag>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-primary">
              {edu.startDate} — {edu.endDate}
            </span>
            <h3 className="text-base font-bold text-white leading-snug">{edu.diploma}</h3>
            <p className="text-xs text-white/40 leading-relaxed line-clamp-3">{edu.description}</p>
            <div className="pt-1 flex items-center justify-center gap-1.5 text-white/25 text-[10px] font-medium tracking-wide">
              Cliquer pour voir plus
            </div>
          </div>
        </div>

        {/* FACE ARRIÈRE */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col rounded-2xl overflow-auto bg-[rgba(255,255,255,0.07)] border border-primary/25 backdrop-blur-md p-5 gap-4"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-primary">
                {edu.startDate} — {edu.endDate}
              </span>
              <h3 className="mt-1 text-base font-bold text-white leading-snug">{edu.diploma}</h3>
            </div>
            <div className="flex-shrink-0 flex items-center gap-1 mt-1 text-white/30 text-[10px]">
              <RotateCcw size={10} />
              retourner
            </div>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">{edu.description}</p>
          {edu.skills.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/30">Compétences</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.skills.slice(0, 5).map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {edu.subjects.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/30">Matières</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.subjects.slice(0, 5).map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>{/* end back face */}
        </div>{/* end flip container */}
      </GlareHover>
    </motion.div>
  );
}

interface AllEducationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AllEducationsModal({ isOpen, onClose }: AllEducationsModalProps) {
  const [active, setActive] = useState(0);
  const [fits, setFits] = useState(true);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );

  useEffect(() => {
    const check = () => setFits(window.innerWidth >= ordered.length * 270 + 80);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(ordered.length - 1, a + 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
          {/* Fond assombri */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Bouton fermer */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fermer"
          >
            <X size={22} />
          </motion.button>

          {/* Titre */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="relative z-10 mb-8 text-mds font-semibold tracking-[0.25em] uppercase text-gradient"
          >
            Parcours scolaire
          </motion.p>

          {/* Zone cartes */}
          <div className="relative z-10 w-full max-w-5xl px-16">
            {/* Flèche gauche */}
            {!fits && (
              <button
                onClick={prev}
                disabled={active === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-white/15 active:scale-95 border border-white/10 hover:border-white/40 text-white transition-all duration-200 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black/60"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Cartes */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-5"
                animate={fits ? {} : { x: `calc(-${active} * (100% + 20px))` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {ordered.map((edu, index) => {
                  const isUpcoming = parseInt(edu.startDate.split(" ")[1] ?? "0") > new Date().getFullYear();
                  return (
                    <div
                      key={edu.id}
                      className={`flex flex-col items-center flex-shrink-0 ${fits ? "flex-1 max-w-[340px]" : "w-full"}`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.1 + index * 0.12 }}
                        className="mb-3 text-xs font-bold tracking-[0.2em] uppercase text-white/40"
                      >
                        {levelLabels[index]}
                      </motion.span>
                      <FlipCard edu={edu} index={index} isUpcoming={isUpcoming} fits={fits} />
                    </div>
                  );
                })}
              </motion.div>
            </div>

          {/* Flèche droite */}
          {!fits && (
            <button
              onClick={next}
              disabled={active === ordered.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 hover:bg-white/15 active:scale-95 border border-white/10 hover:border-white/40 text-white transition-all duration-200 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black/60"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>

          {/* Indicateur de position */}
          {!fits && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 mt-6 flex gap-2"
            >
              {ordered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === active ? "w-5 bg-primary" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
