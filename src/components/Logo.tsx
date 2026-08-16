/**
 * K monogram — geometric, minimal, works from 16px to 512px.
 * The stem and diagonals are built on a strict grid; the small blue
 * node marks the joint, a quiet nod to data and molecular structure.
 */
export default function Logo({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="1.5" y="1.5" width="61" height="61" rx="14" className="fill-ink" />
      <path d="M20 16v32h6.5V16H20Z" fill="var(--bg)" />
      <path d="M44.8 16h-7.6L26.5 30.4v3.2L37.2 48h7.6L32.6 32 44.8 16Z" fill="var(--bg)" />
      <circle cx="30" cy="32" r="3.4" fill="var(--accent)" />
    </svg>
  );
}
