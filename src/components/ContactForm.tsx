"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { social } from "@/data/profile";

/**
 * Static-hosting-friendly contact form.
 * Configure a provider endpoint (e.g. Formspree) via
 * NEXT_PUBLIC_FORMSPREE_ENDPOINT. When unset, a graceful email
 * fallback is rendered instead of a fake form.
 * Includes client validation, honeypot spam protection, and
 * accessible error/success states. No secrets are exposed.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!ENDPOINT) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-line bg-surface p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl tracking-tight">Prefer email? Perfect.</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          The quickest way to reach me is a direct email — I read everything and reply to
          genuine professional messages.
        </p>
        <a
          href={`${social.email.url}?subject=Hello%20Kanwal`}
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          <Send size={15} strokeWidth={2} aria-hidden="true" />
          Email {social.email.handle}
        </a>
      </div>
    );
  }

  const validate = (data: FormData) => {
    const next: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!subject) next.subject = "Please add a short subject.";
    if (message.length < 10) next.message = "Please write at least a sentence or two.";
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently succeed for bots
    if (String(data.get("company") ?? "")) {
      setStatus("success");
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-surface p-10 text-center"
      >
        <CheckCircle2 size={36} strokeWidth={1.5} className="text-teal" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl tracking-tight">Message sent.</h3>
        <p className="mt-2 text-sm text-muted">Thank you — I&apos;ll reply as soon as I can.</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={field}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required className={field}
          aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} />
        {errors.subject && <p id="subject-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.subject}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`${field} resize-y`}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle size={15} aria-hidden="true" />
          Something went wrong. Please email me directly at {social.email.handle}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} strokeWidth={2} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
