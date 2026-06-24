"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function MotionSection({
  children,
  className,
  delay = 0,
  id
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 58, filter: "blur(10px)" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
