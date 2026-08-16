"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navItems, contactHref } from "@/data/navigation";
import { profile, social } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + Escape to close + focus management
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-bg/85 shadow-[0_1px_12px_rgba(11,18,32,0.05)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
            scrolled ? "h-14" : "h-[72px]"
          }`}
        >
          <Link
            href="/"
            aria-label="Kanwal Sohail — home"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <Logo size={32} />
            <span className="hidden font-display text-lg tracking-tight sm:block">
              Kanwal Sohail
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mx-2 h-5 w-px bg-line" aria-hidden="true" />
            <ThemeToggle />
            <Link
              href={contactHref}
              className="ml-2 inline-flex h-10 items-center rounded-full bg-ink px-5 text-[13.5px] font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[70] flex flex-col bg-bg"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex h-[72px] items-center justify-between px-5">
              <Link href="/" aria-label="Kanwal Sohail — home" onClick={() => setOpen(false)}>
                <Logo size={32} />
              </Link>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {[{ label: "Home", href: "/" }, ...navItems].map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? {} : { opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-display text-4xl tracking-tight text-ink transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href={contactHref}
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-bg"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center justify-between border-t border-line px-8 py-6">
              <p className="text-xs text-muted">{profile.location}</p>
              <div className="flex items-center gap-4">
                <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent">
                  <LinkedInIcon size={18} />
                </a>
                <a href={social.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-accent">
                  <GitHubIcon size={18} />
                </a>
                <a href={social.email.url} aria-label="Email" className="text-muted hover:text-accent">
                  <Mail size={18} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
