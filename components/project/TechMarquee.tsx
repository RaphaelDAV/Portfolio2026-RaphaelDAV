"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Image from "next/image";

interface TechMarqueeProps {
    technologies: string[];
}

function MarqueeRow({ 
    items, 
    direction, 
    offsetClass = "", 
    idPrefix 
}: { 
    items: any[]; 
    direction: "left" | "right"; 
    offsetClass?: string;
    idPrefix: string;
}) {
    const animateParams = direction === "left" ? { x: [0, "-50%"] } : { x: ["-50%", 0] };
    
    return (
        <div className={`flex w-max ${offsetClass}`}>
            <motion.div
                className="flex gap-4 pr-4"
                animate={animateParams}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {items.map((tech, i) => (
                    <div
                        key={`${idPrefix}-${tech.name}-${i}`}
                        className="flex items-center gap-3 px-6 py-2 rounded-full bg-card/50 border border-border shrink-0 hover:bg-card/80 transition-colors"
                    >
                        {tech.logo && (
                            <div className="relative w-6 h-6">
                                <Image
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    fill
                                    className="object-contain"
                                    sizes="24px"
                                />
                            </div>
                        )}
                        <span className="font-medium text-foreground whitespace-nowrap">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export function TechMarquee({ technologies }: TechMarqueeProps) {
    // Try to find matching skills for the provided technologies
    const matchedTechs = technologies.map(techName => {
        const techNameLower = techName.toLowerCase();
        const foundSkill = skills.find(
            s => s.name.toLowerCase() === techNameLower || s.id === techNameLower
        );
        return {
            name: techName,
            logo: foundSkill?.logo || null,
        };
    });

    if (matchedTechs.length === 0) return null;

    // Ensure we have enough items to fill the screen (duplicate if necessary)
    const MIN_ITEMS = 6; // To ensure the screen is filled
    const itemsNeededCount = Math.max(0, MIN_ITEMS - matchedTechs.length);

    // Create a duplicated array for seamless infinite scrolling
    const firstRow = [...matchedTechs];
    // If we have very few items, duplicate them a bit to ensure smooth scroll
    while (firstRow.length < MIN_ITEMS) {
        firstRow.push(...matchedTechs);
    }
    // Double it for seamless scrolling trick
    const doubleRow = [...firstRow, ...firstRow];

    // For the reverse row, we can just reverse the order or keep the same
    const secondRow = [...firstRow].reverse();
    const doubleSecondRow = [...secondRow, ...secondRow];

    // Third row - shifted midway
    const midIndex = Math.floor(firstRow.length / 2);
    const thirdRow = [...firstRow.slice(midIndex), ...firstRow.slice(0, midIndex)];
    const doubleThirdRow = [...thirdRow, ...thirdRow];

    // Fourth row - mapped/reversed
    const fourthRow = [...thirdRow].reverse();
    const doubleFourthRow = [...fourthRow, ...fourthRow];

    return (
        <div className="relative flex flex-col gap-4 overflow-hidden py-4 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeRow items={doubleRow} direction="left" idPrefix="row1" />
            <MarqueeRow items={doubleSecondRow} direction="right" offsetClass="-ml-24" idPrefix="row2" />
            <MarqueeRow items={doubleThirdRow} direction="left" offsetClass="-ml-12" idPrefix="row3" />
            <MarqueeRow items={doubleFourthRow} direction="right" offsetClass="-ml-32" idPrefix="row4" />
        </div>
    );
}
    