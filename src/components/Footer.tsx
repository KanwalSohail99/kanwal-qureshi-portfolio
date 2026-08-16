import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";
import { profile, social } from "@/data/profile";

export default function Footer() {
  const explore = navItems.filter((n) => n.label !== "CV");
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:py-16">
        <div>
          <Link href="/" aria-label="Kanwal Sohail — home" className="inline-flex items-center gap-3">
            <Logo size={36} />
            <span className="font-display text-lg tracking-tight">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Banking professional with a background in biochemistry &amp; technology.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Connect
          </h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-2 transition-colors hover:text-accent">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ink-2 transition-colors hover:text-accent">
                GitHub
              </a>
            </li>
            <li>
              <a href={social.email.url} className="text-sm text-ink-2 transition-colors hover:text-accent">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Kanwal Sohail. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy
            </Link>
            <p>Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
