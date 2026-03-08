"use client";

import { Sparkles } from "lucide-react";
import { Tag } from "@/components/ui/Tag";

interface CharacteristicsCardProps {
    characteristics: string[][];
}

export function CharacteristicsCard({
    characteristics,
}: CharacteristicsCardProps) {
    return (
        <div className="relative h-full p-6 rounded-2xl bg-card border border-border overflow-hidden glow-sm">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="mb-6">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="shrink-0">
                            <Sparkles size={24}  />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">
                                Caractéristiques
                            </h3>
                        </div>
                    </div>
                    <p className="text-md text-muted-foreground">Des compétences techniques et humaines construites au fil de mon parcours universitaire.</p>
                </div>

                {/* Spacer pour pousser les listes vers le bas */}
                <div className="flex-1" />

                {/* Scrolling rows */}
                <div className="relative z-0 space-y-2 -mx-6 px-6">
                    {characteristics.map((row, index) => (
                        <InfiniteScrollRow
                            key={index}
                            items={row}
                            direction={index % 2 === 0 ? "left" : "right"}
                            speed={15 + index * 5}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface InfiniteScrollRowProps {
    items: string[];
    direction: "left" | "right";
    speed: number;
}

function InfiniteScrollRow({ items, direction, speed }: InfiniteScrollRowProps) {
    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <div className="relative overflow-hidden">
            <div
                className={`flex gap-2 w-fit ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
                    }`}
                style={
                    {
                        "--scroll-speed": `${speed}s`,
                    } as React.CSSProperties
                }
            >
                {duplicatedItems.map((item, index) => (
                    <Tag
                        key={`${item}-${index}`}
                        size="md"
                        className="whitespace-nowrap"
                    >
                        {item}
                    </Tag>
                ))}
            </div>
        </div>
    );
}
