"use client";

import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { ReactNode } from "react";

interface ClickableAboutCardProps {
    title: string;
    icon: ReactNode;
    mainText: string;
    tags: string[];
    description: string;
    footerText: string;
    backgroundIcon?: ReactNode;
    onClick: () => void;
}

export function ClickableAboutCard({
    title,
    icon,
    mainText,
    tags,
    description,
    footerText,
    backgroundIcon,
    onClick,
}: ClickableAboutCardProps) {
    return (
        <div
            onClick={onClick}
            className="relative group h-full p-6 rounded-2xl bg-card border border-border transition-all duration-300 cursor-pointer overflow-hidden glow-sm hover:glow-md"
        >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                style={{
                    padding: '2px',
                    background: 'linear-gradient(135deg, #8759DE, #CA367A, #EF622A)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                }}
            />

            {/* Background icon - très grande et subtile en bas à droite */}
            {backgroundIcon && (
                <div className="absolute -bottom-10 -right-2 text-border transition-colors duration-300 pointer-events-none z-0">
                    {backgroundIcon}
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                {/* Header : Icône + Titre (gauche) et Flèche (droite) */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="shrink-0">
                            {icon}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{title}</h3>
                    </div>

                    {/* Arrow indicator */}
                    <ArrowUpRight size={25} className="text-white animate-diagonal-float" />

                </div>

                {/* Spacer pour pousser le contenu vers le bas */}
                <div className="flex-1" />

                {/* Contenu en bas à gauche */}
                <div className="max-w-[70%] mb-2">
                    {/* Intitulé avec tags alignés */}
                    <div className="mb-3 flex items-center gap-3 flex-wrap">
                        <p className="text-lg font-semibold text-foreground">{mainText}</p>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Tag key={index} size="sm">
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Footer text centré tout en bas */}
                <div className="text-center">
                    <p className="text-xs text-muted-foreground italic inline-flex items-center gap-2">
                        {footerText}
                        <ArrowUpRight size={14} className="inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </p>
                </div>
            </div>
        </div>
    );
}
