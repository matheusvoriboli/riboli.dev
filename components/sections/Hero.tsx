"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { personal } from "@/lib/data";
import { EASE, letterVariants, fadeUp } from "@/lib/animations";
import { ArrowDownRight } from "lucide-react";

const firstName = "MATHEUS";
const lastName = "RIBOLI.";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  const scrollDown = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-16"
      style={{ overflowX: "clip" }}
    >
      {/* Blobs — clipped via clipPath so they don't affect descendant layout */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <motion.div
          className="absolute"
          style={{
            top: "-10%",
            right: "-5%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute"
          style={{
            bottom: "5%",
            left: "-8%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll-parallax content */}
      <motion.div
        style={{ opacity, y }}
        className="relative flex flex-col justify-between flex-1 px-6 md:px-12 pb-10 pt-16 md:pt-20"
      >
        {/* Top meta row */}
        <motion.div
          variants={fadeUp(0.8)}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between"
        >
          <span className="font-mono text-xs text-dust tracking-widest uppercase">
            ©{new Date().getFullYear()} — Portfolio
          </span>
          <span className="font-mono text-xs text-dust tracking-widest uppercase flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: "0 0 6px rgba(52,211,153,0.7)" }}
            />
            {personal.location}
          </span>
        </motion.div>

        {/* Name */}
        <div className="flex-1 flex flex-col justify-center -mt-4">
          {/*
            Each word is wrapped in overflow:hidden to mask the letter slide-in animation.
            "MATHEUS" and "RIBOLI." are all-caps — no descenders — so overflow:hidden is safe here.
          */}
          <div style={{ lineHeight: 0.92 }}>
            {/*
              clip-path: inset(0) masks the letter slide-in animation (same as overflow:hidden)
              but does NOT create a BFC — so whitespace-nowrap can stretch the element to full
              text width without being clipped by the container's right padding.
            */}
            <div className="whitespace-nowrap" style={{ clipPath: "inset(0)" }}>
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={`f-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display font-extrabold text-ink select-none inline-block"
                  style={{ fontSize: "clamp(3rem, 11vw, 11rem)", letterSpacing: "-0.03em" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="whitespace-nowrap" style={{ clipPath: "inset(0)" }}>
              {lastName.split("").map((char, i) => (
                <motion.span
                  key={`l-${i}`}
                  custom={firstName.length + i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display font-extrabold select-none inline-block"
                  style={{
                    fontSize: "clamp(3rem, 11vw, 11rem)",
                    letterSpacing: "-0.03em",
                    color: char === "." ? "#6366F1" : "var(--color-ink)",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp(1.2)}
            initial="hidden"
            animate="visible"
            className="font-sans text-dust text-base md:text-lg font-light max-w-sm md:max-w-md mt-6 md:mt-8"
            style={{ letterSpacing: "0.01em" }}
          >
            {personal.tagline}
          </motion.p>
        </div>

        {/* Bottom row */}
        <motion.div
          variants={fadeUp(1.4)}
          initial="hidden"
          animate="visible"
          className="flex items-end justify-between"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-dust/50 tracking-widest uppercase">
              Role
            </span>
            <span className="font-sans text-sm text-ink font-medium">
              {personal.role}
            </span>
          </div>

          <button
            onClick={scrollDown}
            className="group flex items-center gap-2 border border-[var(--border-strong)] rounded-full px-5 py-2.5 text-sm font-sans text-dust hover:text-ink hover:border-accent transition-all duration-300"
          >
            Scroll
            <ArrowDownRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom border */}
      <div className="w-full h-px bg-[var(--border-subtle)]" />
    </section>
  );
}
