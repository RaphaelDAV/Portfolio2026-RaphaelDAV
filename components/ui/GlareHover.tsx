"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

export interface GlareHoverProps {
    width?: string;
    height?: string;
    background?: string;
    borderRadius?: string;
    borderColor?: string;
    children?: ReactNode;
    glareColor?: string;
    glareOpacity?: number;
    glareAngle?: number;
    glareSize?: number;
    transitionDuration?: number;
    playOnce?: boolean;
    className?: string;
    style?: CSSProperties;
    /** Max tilt angle in degrees (0 to disable tilt) */
    tiltMaxAngle?: number;
}

export function GlareHover({
    width = "100%",
    height = "auto",
    background = "transparent",
    borderRadius = "0",
    borderColor = "transparent",
    children,
    glareColor = "#ffffff",
    glareOpacity = 0.15,
    glareAngle = -45,
    glareSize = 60,
    transitionDuration = 650,
    playOnce = false,
    className = "",
    style = {},
    tiltMaxAngle = 10,
}: GlareHoverProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);

    // Convert glare color hex → rgba
    const hex = glareColor.replace("#", "");
    let rgba = glareColor;
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = containerRef.current;
        const inner = innerRef.current;
        const glare = glareRef.current;
        if (!el || !inner || !glare) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        // Normalize [-1, 1]
        const nx = (x - cx) / cx;
        const ny = (y - cy) / cy;

        if (tiltMaxAngle > 0) {
            const rotateY = nx * tiltMaxAngle;
            const rotateX = -ny * tiltMaxAngle;
            inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        // Glare radial gradient follows cursor
        const gx = (x / rect.width) * 100;
        const gy = (y / rect.height) * 100;
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, ${rgba} 0%, transparent ${glareSize}%)`;
    };

    const handleMouseLeave = () => {
        const inner = innerRef.current;
        const glare = glareRef.current;
        if (!inner || !glare) return;
        inner.style.transform = "rotateX(0deg) rotateY(0deg)";
        glare.style.opacity = "0";
    };

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: "relative",
                width,
                height,
                perspective: "900px",
                ...style,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={innerRef}
                style={{
                    width: "100%",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: `transform ${transitionDuration}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
                    willChange: "transform",
                    borderRadius,
                    background,
                }}
            >
                {children}
            </div>
            {/* Glare overlay */}
            <div
                ref={glareRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius,
                    pointerEvents: "none",
                    opacity: 0,
                    zIndex: 20,
                    transition: "opacity 350ms ease",
                }}
            />
        </div>
    );
}
