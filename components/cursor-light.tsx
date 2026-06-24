"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorLight() {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const smoothX = useSpring(x, { stiffness: 70, damping: 28, mass: 0.8 });
  const smoothY = useSpring(y, { stiffness: 70, damping: 28, mass: 0.8 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      x.set(event.clientX - 220);
      y.set(event.clientY - 220);
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [shouldReduceMotion, x, y]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(178,122,99,0.14),rgba(135,144,131,0.08)_36%,transparent_70%)] blur-2xl"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
