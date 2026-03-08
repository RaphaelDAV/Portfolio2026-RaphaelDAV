"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "ACCUEIL", href: "/#hero" },
    { label: "A PROPOS", href: "/#about" },
    { label: "MES PROJETS", href: "/#projects" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    const handleNavClick = (href: string) => {
        setIsMobileOpen(false);
        if (href.startsWith("/#") && pathname === "/") {
            const el = document.querySelector(href.replace("/", ""));
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: isScrolled 
                        ? 'linear-gradient(180deg, rgba(10, 10, 11, 0.95) 0%, rgba(10, 10, 11, 0) 100%)'
                        : 'transparent'
                }}
            >
                <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-25">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-lg md:text-xl font-bold text-foreground hover:opacity-80 transition-opacity z-50"
                        >
                            Raphaël{" "}
                            <span className="text-gradient">DAVIOT</span>
                        </Link>

                        {/* Desktop nav - centered */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 px-6  rounded-full bg-white/5 backdrop-blur-md border border-[#606060]">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="px-4 py-2 text-sm font-medium text-white hover:text-muted transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact button - right */}
                        <Link
                            href="/#contact"
                            onClick={() => handleNavClick("/#contact")}
                            className="hidden md:block relative px-6 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300 z-50 overflow-hidden group"
                            style={{
                                background: 'transparent',
                            }}
                        >
                            <span className="absolute inset-0 rounded-full border-2 border-transparent bg-origin-border transition-opacity duration-300 group-hover:opacity-100 opacity-70" style={{
                                background: 'linear-gradient(#0a0a0b, #0a0a0b) padding-box, linear-gradient(135deg, #8759DE, #CA367A, #EF622A) border-box',
                            }}></span>
                            <span className="relative z-10 group-hover:text-gradient transition-all duration-300">CONTACT</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="md:hidden p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface-light transition-colors z-50"
                            aria-label="Menu"
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 pt-20 bg-background/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 p-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => handleNavClick(link.href)}
                                        className="text-xl font-medium text-muted hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
