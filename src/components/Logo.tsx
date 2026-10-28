/** A quiet typographic monogram used as a compact wordmark. */
export default function Logo({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center border border-ink/20 font-display font-semibold tracking-[-0.08em] text-ink ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.38, borderRadius: Math.max(3, size * 0.12) }}
    >
      KS
    </span>
  );
}
