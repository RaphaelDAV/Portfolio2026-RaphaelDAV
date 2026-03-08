import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  default: "bg-surface-light text-muted border border-border",
  primary: "bg-primary/10 text-primary-light border border-primary/20",
  secondary: "bg-secondary/10 text-secondary border border-secondary/20",
  accent: "bg-accent/10 text-accent border border-accent/20",
  outline: "bg-transparent text-muted border border-border",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
