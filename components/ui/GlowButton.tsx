"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "ghost";
  size?: "sm" | "md" | "lg";
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
  gradient:
    "bg-gradient-main hover:opacity-90 text-white border-none glow-sm hover:glow-md",
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

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  download,
  type = "button",
}: GlowButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold border transition-all duration-300 cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
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
