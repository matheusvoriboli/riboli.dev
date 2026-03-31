"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, languages } from "@/lib/data";
import { fadeUp, EASE } from "@/lib/animations";
import { useI18n, type Locale } from "@/lib/i18n";
import { translations } from "@/lib/translations";

function EducationItem({
  item,
  index,
  locale,
}: {
  item: (typeof education)[number];
  index: number;
  locale: Locale;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE }}
      className="group relative flex flex-col md:flex-row md:items-start gap-3 md:gap-16 py-10 md:py-12"
    >
      {/* Left accent bar on hover */}
      <div
        className="absolute left-0 top-10 bottom-10 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #6366F1 30%, #6366F1 70%, transparent)",
        }}
      />

      {/* Period + location — left column */}
      <div className="pl-6 shrink-0 md:w-52 flex flex-col gap-1">
        <span className="font-mono text-xs text-dust/40 tracking-widest uppercase">
          {item.period[locale]}
        </span>
        <span className="font-mono text-xs text-dust/25 tracking-wide">
          {item.location}
        </span>
      </div>

      {/* Content — right column */}
      <div className="flex-1 pl-6 md:pl-0">
        <h3
          className="font-display font-bold text-xl md:text-2xl text-ink group-hover:text-[var(--hover-strong)] transition-colors duration-300"
          style={{ letterSpacing: "-0.02em", lineHeight: 1.4, paddingBottom: "0.1em" }}
        >
          {item.school}
        </h3>
        <span
          className="font-mono text-xs tracking-widest uppercase font-medium mt-1.5 block"
          style={{ color: "#6366F1" }}
        >
          {item.degree[locale]}
        </span>
        {item.description[locale] && (
          <p className="font-sans text-dust text-sm leading-relaxed font-light mt-3 max-w-xl">
            {item.description[locale]}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  const { locale } = useI18n();
  const t = translations[locale];

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="education"
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
          03
        </motion.span>
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2
            className="font-display font-bold text-4xl md:text-6xl text-ink"
            style={{ letterSpacing: "-0.025em", lineHeight: 1.4, paddingBottom: "0.15em" }}
          >
            {t.education.title}
          </h2>
        </motion.div>
      </div>

      {/* Education list */}
      <div className="flex flex-col divide-y divide-[var(--border-subtle)]">
        {education.map((item, i) => (
          <EducationItem key={item.id} item={item} index={i} locale={locale} />
        ))}
      </div>

      {/* Languages */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-[var(--border-subtle)]"
      >
        <span className="font-mono text-xs text-dust/40 tracking-widest uppercase block mb-8">
          {t.education.languages}
        </span>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: EASE }}
              className="flex items-center gap-5"
            >
              {/* Level dots */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, dot) => (
                  <div
                    key={dot}
                    className="w-2 h-2 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        dot < lang.level
                          ? "#6366F1"
                          : "var(--border-medium)",
                    }}
                  />
                ))}
              </div>

              {/* Name + fluency */}
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm font-medium text-ink leading-none">
                  {lang.language}
                </span>
                <span className="font-mono text-xs text-dust/40 tracking-wide">
                  {lang.fluency[locale]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
