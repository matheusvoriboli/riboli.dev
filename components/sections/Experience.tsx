"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { fadeUp, EASE } from "@/lib/animations";
import { useI18n, type Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";

function ExperienceItem({
  exp,
  index,
  locale,
}: {
  exp: (typeof experiences)[number];
  index: number;
  locale: Locale;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: EASE }}
      className="group relative py-10 md:py-14 overflow-hidden"
    >
      {/* Hover: left accent bar */}
      <div
        className="absolute left-0 top-10 bottom-10 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #6366F1 30%, #6366F1 70%, transparent)",
        }}
      />

      {/* Hover: radial glow from left */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(99,102,241,0.05) 0%, transparent 100%)",
        }}
      />

      {/* Ghost index number — background right */}
      <div
        aria-hidden
        className="absolute right-0 top-10 md:top-14 lg:top-28 font-display font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(5rem, 14vw, 10rem)",
          color: "var(--border-ghost)",
          letterSpacing: "-0.05em",
          transition: "color 0.5s ease",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div className="relative pl-6">
        {/* Top row: role + period */}
        <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1 lg:gap-8 mb-3">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3
              className="font-display font-bold text-2xl md:text-3xl text-ink group-hover:text-[var(--hover-strong)] transition-colors duration-300"
              style={{
                letterSpacing: "-0.025em",
                lineHeight: 1.4,
                paddingBottom: "0.1em",
              }}
            >
              {exp.role[locale]}
            </h3>
            {exp.badge && (
              <span
                className="font-mono text-sm tracking-widest px-2 py-0.5 rounded-sm border self-center"
                style={{
                  color: "rgba(99,102,241,0.65)",
                  borderColor: "rgba(99,102,241,0.2)",
                  background: "rgba(99,102,241,0.06)",
                  lineHeight: 1,
                }}
              >
                {exp.badge[locale]}
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-dust/40 tracking-widest uppercase whitespace-nowrap shrink-0">
            {exp.period[locale]}
          </span>
        </div>

        {/* Company */}
        <span
          className="font-mono text-xs tracking-widest uppercase font-medium"
          style={{ color: "#6366F1" }}
        >
          {exp.company}
        </span>

        {/* Description */}
        <p className="font-sans text-dust text-sm md:text-base leading-relaxed font-light mt-4 max-w-2xl">
          {exp.description[locale]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-dust/50 border border-[var(--border-subtle)] rounded-full px-3 py-1 group-hover:border-[rgba(99,102,241,0.2)] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { locale } = useI18n();
  const t = translations[locale];

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="bg-surface px-6 md:px-12 py-14 md:py-20"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-10 md:mb-16">
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-dust/40 tracking-widest uppercase"
        >
          02
        </motion.span>
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2
            className="font-display font-bold text-4xl md:text-6xl text-ink"
            style={{
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              paddingBottom: "0.15em",
            }}
          >
            {t.experience.title}
          </h2>
        </motion.div>
      </div>

      {/* List — no borders, spacing + ghost numbers do the visual work */}
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.id} exp={exp} index={i} locale={locale} />
        ))}
      </div>
    </section>
  );
}
