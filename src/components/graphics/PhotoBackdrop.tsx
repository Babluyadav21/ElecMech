interface Props {
  src: string;
  className?: string;
}

/**
 * A real photograph used as a subtle, theme-aware hero backdrop: faded
 * under a gradient wash (so heading text stays readable in both light and
 * dark mode) with the blueprint grid layered on top for texture continuity
 * with the rest of the site.
 */
export default function PhotoBackdrop({ src, className = "" }: Props) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover opacity-[0.7] dark:opacity-[0.7]" />
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/85 to-base" />
      <div className="absolute inset-0 blueprint-grid opacity-40" />
    </div>
  );
}
