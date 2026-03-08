"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-[95vw]",
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
  className,
}: ModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 overlay-blur"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "relative w-full rounded-2xl bg-card border border-border",
              "max-h-[85vh] overflow-y-auto",
              "glow-sm",
              sizeClasses[size],
              className
            )}
          >
            {/* Header */}
            {title && (
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4 bg-card/95 backdrop-blur-sm border-b border-border rounded-t-2xl">
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-surface hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            {/* Close button if no title */}
            {!title && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-surface hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            )}

            {/* Body */}
            <div className={cn("p-6", title && "pt-4")}>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
