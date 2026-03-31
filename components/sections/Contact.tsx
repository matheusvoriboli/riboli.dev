"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";
import { fadeUp, EASE } from "@/lib/animations";
import { Mail, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: Mail,
    CustomIcon: null,
  },
  {
    label: "GitHub",
    value: "@matheusriboli",
    href: personal.github,
    Icon: null,
    CustomIcon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Matheus Riboli",
    href: personal.linkedin,
    Icon: null,
    CustomIcon: LinkedinIcon,
  },
] as const;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-surface px-6 md:px-12 py-14 md:py-20"
    >
      {/*
        Blob container uses clipPath instead of overflow:hidden.
        overflow:hidden creates a stacking/scroll context that can clip sibling text.
        clipPath clips visually without affecting layout or creating a scroll container.
      */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <motion.div
          style={{
            position: "absolute",
            top: "calc(50% - 400px)",
            left: "calc(50% - 400px)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-10 md:gap-14 max-w-5xl">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-mono text-xs text-dust/40 tracking-widest uppercase"
          >
            05
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
              Contato
            </h2>
          </motion.div>
        </div>

        {/* Big CTA — div instead of h3, flex column so each line is its own block */}
        <motion.div
          initial={{ y: 32, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          style={{ width: "100%" }}
        >
          <div
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              letterSpacing: "-0.035em",
              lineHeight: 1.45,
            }}
          >
            <div style={{ display: "block", paddingBottom: "0.1em" }}>
              Vamos construir
            </div>
            <div style={{ display: "block", paddingBottom: "0.35em" }}>
              <span style={{ color: "#6366F1" }}>algo juntos</span>
              <span className="text-ink">.</span>
            </div>
          </div>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="flex flex-col md:flex-row gap-4 md:gap-5 w-full"
        >
          {links.map(({ label, value, href, Icon, CustomIcon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border border-[var(--border-medium)] rounded-2xl px-6 py-5 flex-1 hover:border-[rgba(99,102,241,0.35)] hover:bg-[rgba(99,102,241,0.04)] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl border border-[var(--border-medium)] flex items-center justify-center text-dust group-hover:text-ink group-hover:border-[rgba(99,102,241,0.3)] transition-all duration-300 flex-shrink-0">
                  {Icon ? (
                    <Icon size={16} />
                  ) : CustomIcon ? (
                    <CustomIcon size={16} />
                  ) : null}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-xs text-dust/40 tracking-widest uppercase">
                    {label}
                  </span>
                  <span className="font-sans text-sm text-ink font-medium mt-0.5 truncate">
                    {value}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={15}
                className="text-dust/30 flex-shrink-0 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 flex items-center justify-between mt-10 md:mt-12 pt-6 border-t border-[var(--border-subtle)]"
      >
        <span className="font-mono text-xs text-dust/30 tracking-widest uppercase">
          {personal.name} © {new Date().getFullYear()}
        </span>
      </motion.div>
    </section>
  );
}
