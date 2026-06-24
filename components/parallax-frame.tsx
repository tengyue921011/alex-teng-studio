"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxFrameProps = {
  children?: ReactNode;
  className?: string;
  distance?: number;
};

export function ParallaxFrame({
  children,
  className,
  distance = 42
}: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} className={className} style={shouldReduceMotion ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
