"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { useI18n } from "@/components/providers/I18nProvider";

interface ProjectNavigationProps {
  previous: Project | null;
  next: Project | null;
}

export function ProjectNavigation({
  previous,
  next,
}: ProjectNavigationProps) {
  const { t } = useI18n();

  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Previous */}
          {previous ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projets/${previous.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-card border border-transparent hover:border-border transition-all"
              >
                <ArrowLeft
                  size={20}
                  className="text-muted group-hover:text-primary transition-colors"
                />
                <div className="text-right">
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {t("projectPage.previousProject")}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {previous.title}
                  </p>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div />
          )}

          {/* Next */}
          {next ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/projets/${next.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-card border border-transparent hover:border-border transition-all"
              >
                <div className="text-left">
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {t("projectPage.nextProject")}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {next.title}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-muted group-hover:text-primary transition-colors"
                />
              </Link>
            </motion.div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
