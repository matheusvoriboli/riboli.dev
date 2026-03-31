"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experiência", href: "#experience" },
  { label: "Formação", href: "#education" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="flex items-center justify-between h-16 transition-all duration-300 px-6 md:px-12"
          style={{
            borderBottom: scrolled
              ? "1px solid var(--nav-scrolled-border)"
              : "1px solid transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            backgroundColor: scrolled ? "var(--nav-scrolled-bg)" : "transparent",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-base tracking-widest text-ink uppercase"
          >
            MR
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-sans text-dust hover:text-ink transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <ThemeToggle />

            {personal.available && (
              <span
                className="flex items-center gap-1.5 text-xs font-mono text-dust rounded-full px-3 py-1"
                style={{ border: "1px solid var(--border-strong)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível
              </span>
            )}
          </nav>

          {/* Mobile: toggle + burger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col gap-1.5 p-1"
              aria-label="Menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-ink origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px bg-ink"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-ink origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 bg-deep"
            style={{ backdropFilter: "blur(20px)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                onClick={() => scrollTo(link.href)}
                className="font-display font-bold text-4xl text-ink hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
