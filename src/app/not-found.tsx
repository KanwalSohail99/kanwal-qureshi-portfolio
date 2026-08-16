import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 pt-[72px] text-center">
      <Logo size={56} />
      <p className="mt-10 font-display text-[clamp(4rem,14vw,7rem)] leading-none tracking-tight">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl tracking-tight">
        Looks like this page took a different route.
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist — but the rest of the portfolio does.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          Back Home
        </Link>
        <Link
          href="/#experience"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line px-7 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <Briefcase size={16} strokeWidth={1.75} aria-hidden="true" />
          View Experience
        </Link>
      </div>
    </div>
  );
}
