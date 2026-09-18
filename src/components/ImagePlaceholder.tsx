import type { LucideIcon } from "lucide-react";
import { ImageOff } from "lucide-react";

interface Props {
  label: string;
  icon?: LucideIcon;
  className?: string;
}

/**
 * Renders in place of a real photograph. Swap this component for an <img>
 * tag once real facility/product photography is available — the label prop
 * documents what should go there.
 */
export default function ImagePlaceholder({ label, icon: Icon = ImageOff, className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-surface border border-border ${className}`}
    >
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-transparent" />
      <Icon className="relative w-8 h-8 text-muted" strokeWidth={1.5} />
      <span className="relative text-center text-xs font-mono uppercase tracking-[0.14em] text-muted px-4">
        {label}
      </span>
    </div>
  );
}
