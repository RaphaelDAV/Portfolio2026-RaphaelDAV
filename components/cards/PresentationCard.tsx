"use client";

import { User } from "lucide-react";
import { ReactNode } from "react";

interface PresentationCardProps {
    text: ReactNode;
}

export function PresentationCard({ text }: PresentationCardProps) {
    return (
        <div className="relative h-full p-6 ">
            <div className="relative z-10 flex flex-col h-full gap-1">
                <h3 className="text-xl font-bold text-gradient">
                    Je me présente:
                </h3>

                {/* Text content */}
                <div className="flex-1 flex items-center">
                    <p className="text-justify leading-relaxed">{text}</p>
                </div>
            </div>
        </div>
    );
}
