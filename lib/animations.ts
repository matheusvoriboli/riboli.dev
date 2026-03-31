import type { Variants } from "framer-motion";

/** Custom cubic bezier — smooth deceleration */
export const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

export const fadeUp = (delay = 0): Variants => ({
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.65, ease: EASE },
  },
});

export const letterVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.7,
      ease: EASE,
    },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

export const tagVariant: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};
