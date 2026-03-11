"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FlipCard, type FlipCardData } from "@/components/cards/FlipCard";
import { education as allEducation } from "@/data/education";

const levelLabels = ["BAC", "BAC+3", "BAC+5"];
const ordered = [...allEducation].reverse();
type EduItem = (typeof ordered)[0];

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
                  const cardData: FlipCardData = {
                    id: edu.id,
                    image: edu.image,
                    imageAlt: edu.diploma,
                    bottomTag: edu.school,
                    dateRange: `${edu.startDate} — ${edu.endDate}`,
                    title: edu.diploma,
                    description: edu.description,
                    isUpcoming,
                    skills: edu.skills,
                    subjects: edu.subjects,
                  };
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
                      <FlipCard data={cardData} index={index} fits={fits} />
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
