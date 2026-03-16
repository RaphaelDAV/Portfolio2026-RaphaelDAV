"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Search } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { Tag } from "@/components/ui/Tag";
import Squares from "@/components/ui/Squares";
import { useI18n } from "@/components/providers/I18nProvider";
import { profile } from "@/data/profile";

export function HeroSection() {
    const { t } = useI18n();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
            </div>

            {/* Animated moving grid */}
            <Squares
                direction="diagonal"
                speed={0.2}
                squareSize={48}
                borderColor="rgba(255, 255, 255, 0.03)"
                hoverFillColor="rgba(135, 89, 222, 0.12)"
                className="absolute inset-0"
            />

            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen flex flex-col justify-center lg:justify-start py-20 pb-[52vh] lg:py-0 lg:pb-0">
                {/* Photo collée en bas (Mobile) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                    className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[50vh] w-full max-w-[800px] flex justify-center items-end pointer-events-none select-none z-0"
                >
                    <img
                        src="/assets/profile.png"
                        alt={profile.fullName}
                        className="h-full w-auto object-contain object-bottom"
                    />
                </motion.div>

                {/* Photo de fond collée en bas (Desktop) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="hidden lg:flex absolute bottom-0 right-0 h-[90vh] w-1/2 justify-center items-end pointer-events-none select-none"
                >
                    <img
                        src="/assets/profile.png"
                        alt={profile.fullName}
                        className="h-full w-auto object-contain object-bottom"
                    />
                </motion.div>

                {/* Contenu central - Portfolio */}
                <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 flex justify-center">
                        {/* Bloc relié */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block"
                        >
                            {/* Année */}
                            <div className="mb-0">
                                <Tag size="sm">2025-2026</Tag>
                            </div>

                            {/* Portfolio */}
                            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold whitespace-nowrap">
                                <span className="text-white">Port</span>
                                <span className="text-gradient">folio</span>
                            </h1>

                            {/* Barre blanche */}
                            <div className="w-full h-[3px] bg-white/80 mb-2" />

                            {/* Tags + Nom */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    <Tag size="sm" showArrow>
                                        {t("hero.student")}
                                    </Tag>
                                    <Tag size="sm" showArrow>
                                        {t("hero.but")}
                                    </Tag>
                                </div>
                                <p className="text-md sm:text-xl font-semibold text-gradient whitespace-nowrap">
                                    {profile.fullName}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Espace réservé colonne visuelle sur desktop */}
                    <div className="order-1 lg:order-2 hidden lg:block" />
                </div>

                {/* Contenu en bas - dans le flow sur petit écran, positionné aux 3/4 sur grand écran */}
                <div className="relative z-20 mt-12 lg:mt-0 lg:absolute lg:top-[75vh] lg:left-1/2 lg:-translate-x-1/2 w-full max-w-[1500px]">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center gap-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex justify-center"
                            >
                                <a
                                    href={profile.cvUrl}
                                    download
                                    className="group inline-flex items-center gap-4 pl-10 rounded-full bg-white/5 backdrop-blur-md transition-all duration-300"
                                >
                                    <span className="text-white uppercase font-bold text-sm">
                                        {t("hero.downloadCv")}
                                    </span>
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Download size={20} className="text-background" />
                                    </div>
                                </a>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.55 }}
                                className="text-center text-sm sm:text-base text-white max-w-sm px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
                            >
                                {t("hero.lookingForPrefix")}
                                <span className="text-gradient font-semibold">
                                    {t("hero.lookingForRole")}
                                </span>
                                {t("hero.lookingForMiddle")}
                                <span className="text-gradient font-semibold">
                                    {t("hero.lookingForDate")}
                                </span>
                            </motion.p>

                            {/* Scroll indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="hidden lg:flex flex-col items-center text-muted mt-8"
                            >
                                <span className="text-xs uppercase tracking-wider">{t("hero.scroll")}</span>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowDown size={16} />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
