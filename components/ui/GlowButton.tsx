"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  responsive?: boolean;
  className?: string;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit";
}

const variantClasses = {
  primary:
    "bg-primary hover:bg-primary-dark text-white border-primary/50 glow-sm hover:glow-md",
  secondary:
    "bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/30",
  white:
    "bg-white hover:bg-swhite/20 text-black border-none",
  gradient:
    "bg-gradient-main hover:opacity-90 text-white border-none border-0 glow-sm hover:glow-md",
  outline:
    "bg-transparent hover:bg-surface-light text-foreground border-border hover:border-primary/50",
  ghost:
    "bg-transparent hover:bg-surface-light text-white hover:text-foreground border-transparent",
};

const sizeClasses = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-1.5 text-base",
  lg: "px-8 py-2 text-lg",
};

const responsiveSizeClasses = "px-4 py-1 text-sm md:px-6 md:py-1.5 md:text-base lg:px-8 lg:py-2 lg:text-lg";

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  responsive = false,
  className,
  external,
  download,
  type = "button",
}: GlowButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold border transition-colors cursor-pointer whitespace-nowrap",
    variantClasses[variant],
    responsive ? responsiveSizeClasses : sizeClasses[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    if (external || download) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
          className={classes}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        <motion.span
          className="inline-flex items-center gap-2"
          {...motionProps}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
