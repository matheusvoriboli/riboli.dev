"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeUp, stagger, tagVariant } from "@/lib/animations";
import { useI18n } from "@/lib/i18n";
import { translations } from "@/lib/translations";

function SkillColumn({
  title,
  items,
  inView,
}: {
  title: string;
  items: string[];
  inView: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      <motion.span
        variants={fadeUp(0.1)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "#6366F1" }}
      >
        {title}
      </motion.span>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-wrap gap-2"
      >
        {items.map((skill) => (
          <motion.span
            key={skill}
            variants={tagVariant}
            className="font-sans text-sm text-dust border border-[var(--border-medium)] rounded-full px-4 py-1.5 transition-all duration-300 hover:text-ink hover:border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.06)] cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const { locale } = useI18n();
  const t = translations[locale];

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="px-6 md:px-12 py-14 md:py-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 md:mb-14">
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-dust/40 tracking-widest uppercase"
        >
          01
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
            {t.skills.title}
          </h2>
        </motion.div>
      </div>

      {/* About blurb */}
      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="font-sans text-dust text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10 md:mb-14"
      >
        {t.skills.about}
      </motion.p>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-subtle)] mb-16 md:mb-20" />

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <SkillColumn
          title={t.skills.col1}
          items={skills.frontend}
          inView={inView}
        />
        <SkillColumn
          title={t.skills.col2}
          items={skills.growing}
          inView={inView}
        />
        <SkillColumn
          title={t.skills.col3}
          items={skills.tools}
          inView={inView}
        />
      </div>
    </section>
  );
}
