"use client";

import React, { useState } from "react";
import { cn } from "@/app/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  href?: string;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
  href,
}: FlippingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (href && window.innerWidth < 768) {
      // On mobile (md breakpoint), navigate directly
      window.location.href = href;
    }
  };

  return (
    <div
      className="group/flipping-card [perspective:1000px]"
      style={
        {
          "--height": `${height}px`,
          "--width": `${width}px`,
        } as React.CSSProperties
      }
      onClick={handleClick}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative rounded-xl border border-neutral-200 bg-white shadow-lg transition-all duration-700 [transform-style:preserve-3d] dark:border-neutral-800 dark:bg-neutral-950",
          "h-[var(--height)] w-[var(--width)]",
          isFlipped && "[transform:rotateY(180deg)]",
          href && "md:cursor-default cursor-pointer",
          className
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)] dark:bg-zinc-950 dark:text-neutral-50">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white text-neutral-950 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-zinc-950 dark:text-neutral-50">
          <div className="[transform:translateZ(70px)_scale(.93)] h-full w-full">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
