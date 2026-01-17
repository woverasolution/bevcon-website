"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroVideoProps {
  videoSrc?: string;
  fallbackImage?: string;
  className?: string;
}

/**
 * Hero video background component with fallback to static image
 * Shows a looping video or gradient if video not provided
 */
export default function HeroVideo({
  videoSrc,
  fallbackImage = "/hero-bg.jpg",
  className = "",
}: HeroVideoProps) {
  const [videoError, setVideoError] = useState(false);

  // If video source is provided and no error, show video
  const showVideo = videoSrc && !videoError;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <>
          {/* Fallback: Try to show image, otherwise show gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Image
              src={fallbackImage}
              alt="BevCon Industrial Background"
              fill
              className="object-cover opacity-60"
              priority
              onError={(e) => {
                // Hide image if it fails to load
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </>
      )}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)",
        }}
      />
    </div>
  );
}
