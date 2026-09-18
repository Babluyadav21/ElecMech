interface Props {
  className?: string;
}

/** Subtle technical grid used as a section backdrop. Purely decorative. */
export default function BlueprintBackdrop({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 blueprint-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)] ${className}`}
    />
  );
}
