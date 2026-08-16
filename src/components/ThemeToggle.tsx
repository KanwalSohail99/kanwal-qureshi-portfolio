"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_EVENT = "themechange";

/** Subscribes to a custom event fired whenever toggle() changes the theme,
 *  so React re-renders by reading fresh DOM state — no setState-in-effect. */
function subscribe(onStoreChange: () => void) {
  document.addEventListener(THEME_EVENT, onStoreChange);
  return () => document.removeEventListener(THEME_EVENT, onStoreChange);
}
function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}
function getServerSnapshot() {
  return null;
}

/** Class-based dark mode; persisted to localStorage, seeded from system
 *  preference by the inline script in layout.tsx (no flash of wrong theme). */
export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) as boolean | null;

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    document.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {dark === null ? (
        <span className="block h-4 w-4" />
      ) : dark ? (
        <Sun size={16} strokeWidth={1.75} />
      ) : (
        <Moon size={16} strokeWidth={1.75} />
      )}
    </button>
  );
}
