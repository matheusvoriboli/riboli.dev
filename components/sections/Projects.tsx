"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeUp, EASE } from "@/lib/animations";
import { useI18n } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { ArrowUpRight, GitFork } from "lucide-react";

function ProjectCard({
  project,
  index,
  repoLabel,
  liveLabel,
}: {
  project: (typeof projects)[number];
  index: number;
  repoLabel: string;
  liveLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay: (index % 2) * 0.12, duration: 0.7, ease: EASE }}
      className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border-subtle)] bg-elevated p-7 md:p-8"
      style={{
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "rgba(99,102,241,0.25)";
        el.style.boxShadow = "0 20px 60px rgba(99,102,241,0.07)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--border-subtle)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: "linear-gradient(90deg, transparent, #6366F1, transparent)" }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-dust/40 tracking-widest uppercase">
          {project.year}
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dust/40 hover:text-ink transition-colors duration-200"
              aria-label={repoLabel}
            >
              <GitFork size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dust/40 hover:text-ink transition-colors duration-200"
              aria-label={liveLabel}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <h3
          className="font-display font-bold text-xl md:text-2xl text-ink"
          style={{ letterSpacing: "-0.02em", lineHeight: 1.4, paddingBottom: "0.1em" }}
        >
          {project.name}
        </h3>
        <p className="font-sans text-dust text-sm leading-relaxed font-light">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-dust/50 border border-[var(--border-subtle)] rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { locale } = useI18n();
  const t = translations[locale];

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 py-14 md:py-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 md:mb-14">
        <motion.span
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-mono text-xs text-dust/40 tracking-widest uppercase"
        >
          04
        </motion.span>
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h2
            className="font-display font-bold text-4xl md:text-6xl text-ink"
            style={{
              letterSpacing: "-0.025em",
              lineHeight: 1.4,
              paddingBottom: "0.15em",
            }}
          >
            {t.projects.title}
          </h2>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-subtle)] mb-10 md:mb-14" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} repoLabel={t.repoLabel} liveLabel={t.liveLabel} />
        ))}
      </div>
    </section>
  );
}
