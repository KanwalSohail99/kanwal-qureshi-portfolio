"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { profile, social } from "@/data/profile";

/**
 * Hero visual note: the original portfolio's portrait asset was not
 * available at sufficient quality, so the hero uses an original abstract
 * orbital composition built with lightweight CSS 3D (no heavy 3D library).
 * Owner action: drop a portrait at public/images/kanwal-profile.jpg and
 * this visual can be swapped for an editorial portrait frame.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pt-[72px]" aria-label="Introduction">
      {/* quiet background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,var(--accent-soft),transparent_70%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p {...fade(0)} className="eyebrow">
            {profile.name}
          </motion.p>
          <motion.h1
            {...fade(0.08)}
            className="mt-5 font-display text-[clamp(2.1rem,5.4vw,3.9rem)] leading-[1.08] tracking-tight"
          >
            Banking Professional with a Background in{" "}
            <span className="text-accent">Biochemistry</span> &{" "}
            <span className="text-teal">Technology</span>
          </motion.h1>
          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#experience"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View Experience
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link
              href="/#work"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line bg-surface px-7 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Explore My Work
            </Link>
          </motion.div>

          <motion.a
            {...fade(0.32)}
            href={social.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            Connect on LinkedIn
            <ArrowUpRight size={15} strokeWidth={2} />
          </motion.a>
        </div>

        {/* Abstract orbital composition — decorative only */}
        <motion.div
          {...fade(0.2)}
          aria-hidden="true"
          className="orbit-scene relative mx-auto hidden aspect-square w-full max-w-[380px] sm:block lg:max-w-[420px]"
        >
          <div className="orbit-ring orbit-ring--a">
            <span className="orbit-node" style={{ top: "-5px", left: "50%" }} />
          </div>
          <div className="orbit-ring orbit-ring--b" style={{ inset: "12%" }}>
            <span className="orbit-node orbit-node--teal" style={{ bottom: "-5px", left: "30%" }} />
          </div>
          <div className="orbit-ring orbit-ring--c" style={{ inset: "24%" }}>
            <span className="orbit-node" style={{ top: "20%", right: "-4px", width: "7px", height: "7px" }} />
          </div>
          <div className="float-slow absolute inset-0 flex items-center justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-[2rem] border border-line bg-surface/80 shadow-[0_24px_60px_rgba(11,18,32,0.12)] backdrop-blur-sm">
              <Logo size={72} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
