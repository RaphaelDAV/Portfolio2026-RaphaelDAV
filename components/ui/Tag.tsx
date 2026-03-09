import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagProps {
    children: React.ReactNode;
    showArrow?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "gradient";
    className?: string;
}

export function Tag({ children, showArrow = false, size = "md", variant = "default", className }: TagProps) {
    const sizeClasses = {
        sm: "px-5 py-1 text-xs gap-0.5",
        md: "px-5 py-1 text-sm gap-1",
        lg: "px-7.5 py-1 text-base gap-1.5",
    };

    const variantClasses = {
        default: "border-white/80 backdrop-blur-sm",
        gradient: "bg-gradient-main border-transparent shadow-lg text-white"
    };

    const iconSizes = {
        sm: 16,
        md: 18,
        lg: 20,
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border border-1.5 text-white font-medium transition-all shadow-sm",
                sizeClasses[size],
                variantClasses[variant],
                className
            )}
        >
            {showArrow && (
                <ArrowUpRight size={iconSizes[size]} className="text-white" />
            )}
            {children}
        </span>
    );
}
