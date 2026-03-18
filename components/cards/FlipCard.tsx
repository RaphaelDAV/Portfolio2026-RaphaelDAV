"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import { Tag } from "@/components/ui/Tag";
import { GlareHover } from "@/components/ui/GlareHover";
import { useI18n } from "@/components/providers/I18nProvider";

export interface FlipCardData {
    id: string;
    image?: string;
    imageAlt: string;
    topTag?: string;
    bottomTag: string;
    dateRange: string;
    title: string;
    description: string;
    isUpcoming?: boolean;
    skills?: string[];
    subjects?: string[];
    // Pour permettre d'autres champs personnalisés
    [key: string]: any;
}

interface FlipCardProps {
    data: FlipCardData;
    index: number;
    fits: boolean;
    frontClickHint?: string;
    backSections?: Array<{
        title: string;
        items: string[];
        variant?: "default" | "primary";
    }>;
}

export function FlipCard({
    data,
    index,
    fits,
    frontClickHint,
    backSections,
}: FlipCardProps) {
    const [flipped, setFlipped] = useState(false);

    const { t } = useI18n();

    // Par défaut, on utilise skills et subjects si fournis
    const defaultBackSections = [
        ...(data.skills && data.skills.length > 0
            ? [{ title: t("ui.skillsTitle"), items: data.skills.slice(0, 5), variant: "default" as const }]
            : []),
        ...(data.subjects && data.subjects.length > 0
            ? [{ title: t("ui.subjectsTitle"), items: data.subjects.slice(0, 5), variant: "primary" as const }]
            : []),
    ];

    const sections = backSections || defaultBackSections;

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
                            {data.image && (
                                <Image
                                    src={data.image}
                                    alt={data.imageAlt}
                                    fill
                                    className="object-cover opacity-60"
                                    sizes="(max-width: 768px) 400px, 340px"
                                />
                            )}
                            {data.isUpcoming && (
                                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                                    {t("ui.upcoming")}
                                </span>
                            )}
                            <div className="absolute bottom-3 left-3">
                                <Tag size="sm">{data.bottomTag}</Tag>
                            </div>
                        </div>
                        <div className="p-5 space-y-3">
                            <div className="overflow-hidden w-full">
                                <span className="text-[11px] font-semibold tracking-wide uppercase text-primary block truncate">
                                    {data.dateRange}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-white leading-snug">{data.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed line-clamp-3">{data.description}</p>
                            <div className="pt-1 flex items-center justify-center gap-1.5 text-white/25 text-[10px] font-medium tracking-wide">
                                {frontClickHint ?? t("ui.clickToReveal")}
                            </div>
                        </div>
                    </div>

                    {/* FACE ARRIÈRE */}
                    <div
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        className="absolute inset-0 flex flex-col rounded-2xl overflow-auto bg-[rgba(255,255,255,0.07)] border border-primary/25 backdrop-blur-md p-5 gap-4"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0 overflow-hidden">
                                <span className="text-[11px] font-semibold tracking-wide uppercase text-primary block truncate">
                                    {data.dateRange}
                                </span>
                                <h3 className="mt-1 text-base font-bold text-white leading-snug">{data.title}</h3>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-1 mt-1 text-white/30 text-[10px]">
                                <RotateCcw size={10} />
                                {t("ui.flipBack")}
                            </div>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed">{data.description}</p>
                        {sections.map((section, idx) => (
                            <div key={idx} className="space-y-2">
                                <p className="text-[10px] uppercase tracking-widest text-white/30">{section.title}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {section.items.map((item) => (
                                        <span
                                            key={item}
                                            className={`text-[10px] px-2 py-0.5 rounded-full border ${section.variant === "primary"
                                                    ? "bg-primary/10 text-primary/80 border-primary/20"
                                                    : "bg-white/10 text-white/60 border-white/10"
                                                }`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* end back face */}
                </div>
                {/* end flip container */}
            </GlareHover>
        </motion.div>
    );
}
