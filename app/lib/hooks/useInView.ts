"use client";

import { useInView as useInViewLib } from "react-intersection-observer";

/**
 * Wrapper around react-intersection-observer for scroll-triggered animations
 * Returns a ref and inView boolean to trigger animations when element enters viewport
 */
export function useInView(options?: {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}) {
  const { ref, inView } = useInViewLib({
    threshold: options?.threshold ?? 0.3,
    triggerOnce: options?.triggerOnce ?? true,
    rootMargin: options?.rootMargin ?? "-100px",
  });

  return { ref, inView };
}
