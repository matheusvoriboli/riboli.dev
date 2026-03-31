"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { EASE } from "@/lib/animations";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
    // Enable smooth transitions only after first paint
    requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
    });
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    if (next) {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  // Stable placeholder — same size as button to avoid layout shift
  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-lg border flex-shrink-0"
        style={{ borderColor: "var(--border-strong)" }}
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      className="relative w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 text-dust hover:text-ink transition-colors duration-300"
      style={{
        border: "1px solid var(--border-strong)",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "rgba(99,102,241,0.45)";
        (e.currentTarget as HTMLButtonElement).style.background =
          "rgba(99,102,241,0.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor =
          "var(--border-strong)";
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -20, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 20, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="absolute flex items-center justify-center"
        >
          {isDark ? (
            <Moon size={13} strokeWidth={1.75} />
          ) : (
            <Sun size={13} strokeWidth={1.75} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
