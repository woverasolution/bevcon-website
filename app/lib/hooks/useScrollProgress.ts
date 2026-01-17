"use client";

import { useEffect, useState } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Hook to track scroll progress through the page
 * Returns values from 0 to 1 representing scroll position
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}

/**
 * Hook to detect if user has scrolled past a certain threshold
 * Useful for showing/hiding sticky elements
 */
export function useScrollThreshold(threshold: number = 100) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasScrolled;
}

/**
 * Hook to get current scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

/**
 * Hook for parallax effects
 * Returns a transform value based on scroll position
 */
export function useParallax(distance: number = 100) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, distance]);

  return y;
}
