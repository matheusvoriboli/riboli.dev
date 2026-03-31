"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { EASE } from "@/lib/animations";

export default function LangToggle() {
  const { locale, toggle } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stable placeholder matching button dimensions
  if (!mounted) {
    return (
      <div
        className="w-11 h-8 rounded-lg border flex-shrink-0"
        style={{ borderColor: "var(--border-strong)" }}
      />
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
      className="relative w-11 h-8 flex items-center justify-center rounded-lg flex-shrink-0 text-dust hover:text-ink transition-colors duration-300 overflow-hidden"
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
          key={locale}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.18, ease: EASE }}
          className="absolute font-mono text-xs tracking-widest"
        >
          {locale === "pt" ? "PT" : "EN"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
