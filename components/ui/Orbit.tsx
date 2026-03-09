"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface OrbitItem {
  id: string;
  icon?: ReactNode; // Can be an emoji, inline SVG, or existing image tag
  src?: string;     // Or simply provide a URL to an image/logo
  label?: string;
}

export interface OrbitSystemProps {
  header?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  button?: ReactNode;
  items: OrbitItem[];
  orbitCount?: number;
  size?: "sm" | "md";
  onItemClick?: (item: OrbitItem) => void;
}

export function OrbitSystem({
  header,
  title,
  description,
  button,
  items,
  orbitCount = 3,
  size = "md",
  onItemClick,
}: OrbitSystemProps) {
  // Distribute the items across the orbits (outer orbits ideally hold more)
  const orbits = distributeItems(items, orbitCount);

  // State to handle pausing on hover
  const [isHovered, setIsHovered] = useState(false);

  const containerSizeClasses = {
    sm: "min-h-[400px] md:min-h-[500px]",
    md: "min-h-[600px] md:min-h-[800px]",
  };

  const orbitSizeClasses = {
    // Make the base size slightly larger on mobile so it doesn't get squezeed too hard
    sm: "min-w-[450px] max-w-[550px] md:min-w-[500px] md:max-w-[700px]",
    md: "min-w-[700px] max-w-[800px] md:min-w-[800px] md:max-w-[1400px]",
  };

  const titleSizeClasses = {
    sm: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold",
    md: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold",
  };

  const descriptionSizeClasses = {
    sm: "mt-3 md:mt-4 w-full max-w-[300px] md:max-w-[400px] text-sm leading-relaxed text-muted",
    md: "mt-4 md:mt-6 sm:mt-8 w-full max-w-[340px] md:max-w-[480px] text-sm sm:text-base leading-relaxed text-muted md:text-lg",
  };

  const headerSizeClasses = {
    sm: "mb-2 md:mb-3 text-sm font-bold uppercase text-gradient",
    md: "mb-4 md:mb-6 text-md font-bold uppercase text-gradient",
  };

  return (
    <div
      className={`relative flex w-full ${containerSizeClasses[size]} items-center justify-center overflow-hidden`}
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_60%)]" />

      {/* Top and Bottom Fade Overlays */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 md:h-48 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

      {/* Orbits Container */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ${orbitSizeClasses[size]} aspect-square pointer-events-none flex items-center justify-center`}>

        {orbits.map((orbitItems, idx) => {
          // Calculate spacing based on size
          const baseRatio = orbitCount > 1 ? idx / (orbitCount - 1) : 1;
          
          // Outer orbit is always 100% of container.
          // Inner orbit minSize determines how far the innermost circle is from the center.
          // In "sm" we increase to 65% so it doesn't collide with text, in "md" 60%. 
          const minSize = size === "sm" ? 65 : 60;
          const range = 100 - minSize;
          const sizePercent = minSize + range * baseRatio;

          const reverse = idx % 2 === 1;
          const duration = 40 + idx * 20; // 40s inner, up to 80s outer

          return (
            <motion.div
              key={`orbit-${idx}`}
              className={`absolute rounded-full border border-white/20 ${isHovered ? 'pause-animation' : ''}`}
              style={{ width: `${sizePercent}%`, height: `${sizePercent}%` }}
              animate={{ rotate: reverse ? -360 : 360 }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {orbitItems.map((item, itemIdx) => {
                const angle = (itemIdx / orbitItems.length) * 360;
                return (
                  <div
                    key={item.id}
                    className="absolute left-0 top-0 w-full h-full"
                    style={{
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    {/* The counter-rotation is moved outside of motion to ensure alignment */}
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto ${onItemClick ? 'cursor-pointer' : ''}`}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => onItemClick?.(item)}
                      style={{
                        transform: `rotate(${-angle}deg)`, // Keep item perfectly vertical regardless of initial spawn angle
                      }}
                    >
                      <motion.div
                        animate={{ rotate: reverse ? 360 : -360 }} // Reverse of orbit rotation
                        transition={{ duration, repeat: Infinity, ease: "linear" }}
                        className="relative h-12 w-12 md:h-16 md:w-16 group flex items-center justify-center"
                      >
                        {item.src ? (
                          <Image
                            src={item.src}
                            alt={item.label || item.id}
                            width={48}
                            height={48}
                            className={`object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-110 ${
                              item.id === "github" || item.id === "nextjs" || item.id === "vba"
                                ? "invert opacity-90"
                                : ""
                            }`}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-3xl md:text-4xl transition-transform group-hover:scale-110">
                            {item.icon}
                          </div>
                        )}
                        {item.label && (
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                            <span className="text-xs font-medium text-foreground whitespace-nowrap bg-surface/90 backdrop-blur-sm px-2 py-1 rounded border border-border shadow-md">
                              {item.label}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>

      {/* Central Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative z-20 flex flex-col items-center px-4 text-center pointer-events-auto ${size === "sm" ? "max-w-[280px]" : "max-w-[380px] md:max-w-xl lg:max-w-2xl"}`}
      >
        {header && (
          <span className={headerSizeClasses[size]}>
            {header}
          </span>
        )}

        {title && (
          <h2 className={titleSizeClasses[size]}>
            {title}
          </h2>
        )}

        {description && (
          <p className={descriptionSizeClasses[size]}>
            {description}
          </p>
        )}

        {button && (
          <div className="mt-8 md:mt-10">
            {button}
          </div>
        )}
      </motion.div>
    </div>
  );
}

function distributeItems(items: OrbitItem[], count: number) {
  const distributed = Array.from({ length: count }, () => [] as OrbitItem[]);
  if (items.length === 0 || count === 0) return distributed;

  // Gives weight to outer orbits so they contain more items naturally
  const weights = Array.from({ length: count }, (_, i) => i + 1);
  const totalWeight = weights.reduce((a, b) => a + b, 0);

  let remaining = [...items];

  weights.forEach((w, index) => {
    if (index === count - 1) {
      distributed[index] = remaining;
    } else {
      const takeCount = Math.round((w / totalWeight) * items.length);
      distributed[index] = remaining.splice(0, takeCount);
    }
  });

  return distributed;
}
