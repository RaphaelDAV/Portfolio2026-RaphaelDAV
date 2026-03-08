"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, Search } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export function HeroSection() {
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

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(135,89,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(135,89,222,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-screen flex items-center pb-20">
                {/* Contenu central - Portfolio (centré verticalement) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
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
                            <h1 className="text-7xl sm:text-9xl md:text-9xl font-bold whitespace-nowrap">
                                <span className="text-white">Port</span>
                                <span className="text-gradient">folio</span>
                            </h1>

                            {/* Barre blanche */}
                            <div className="w-full h-[3px] bg-white/80 mb-2" />

                            {/* Tags + Nom */}
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    <Tag size="sm" showArrow>
                                        Étudiant
                                    </Tag>
                                    <Tag size="sm" showArrow>
                                        BUT Informatique
                                    </Tag>
                                </div>
                                <p className="text-lg sm:text-xl font-semibold text-gradient whitespace-nowrap">
                                    {profile.fullName}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Photo / visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl animate-pulse-glow" />

                            {/* Photo frame */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-md">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20" />
                                {/* Avatar placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-7xl sm:text-8xl font-bold text-primary/30">
                                        RD
                                    </span>
                                </div>
                            </div>

                            {/* Orbiting elements */}
                            <div className="absolute -inset-8 sm:-inset-12">
                                <div
                                    className="animate-orbit absolute top-1/2 left-1/2"
                                    style={
                                        {
                                            "--orbit-radius": "160px",
                                            "--orbit-duration": "20s",
                                        } as React.CSSProperties
                                    }
                                >
                                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                                </div>
                                <div
                                    className="animate-orbit absolute top-1/2 left-1/2"
                                    style={
                                        {
                                            "--orbit-radius": "140px",
                                            "--orbit-duration": "25s",
                                        } as React.CSSProperties
                                    }
                                >
                                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                                </div>
                                <div
                                    className="animate-orbit absolute top-1/2 left-1/2"
                                    style={
                                        {
                                            "--orbit-radius": "180px",
                                            "--orbit-duration": "30s",
                                        } as React.CSSProperties
                                    }
                                >
                                    <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contenu en bas - positionné en absolu */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pb-30">
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
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
                                    Télécharger mon CV
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
                            className="text-center text-sm sm:text-base text-white max-w-sm px-4"
                        >
                            Je suis à la <span className="text-gradient font-semibold">recherche d'une alternance</span> à partir <span className="text-gradient font-semibold"> de Septembre 2026</span>
                        </motion.p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center  text-muted"
                >
                    <span className="text-xs uppercase tracking-wider">Défiler</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
