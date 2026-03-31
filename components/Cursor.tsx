"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 500, mass: 0.3 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 500, mass: 0.3 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(99, 102, 241, 0.6)";
        ringRef.current.style.backgroundColor = "rgba(99, 102, 241, 0.05)";
      }
      if (dotRef.current) {
        dotRef.current.style.backgroundColor = "#6366F1";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
      }
    };

    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(255, 255, 255, 0.2)";
        ringRef.current.style.backgroundColor = "transparent";
      }
      if (dotRef.current) {
        dotRef.current.style.backgroundColor = "#FAFAFA";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    window.addEventListener("mousemove", move);

    const interactives = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, [data-cursor='pointer']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const observer = new MutationObserver(() => {
      const fresh = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, [data-cursor='pointer']"
      );
      fresh.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: "36px",
          height: "36px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: "5px",
          height: "5px",
          backgroundColor: "#FAFAFA",
          transition: "background-color 0.2s ease, transform 0.2s ease",
        }}
      />
    </>
  );
}
