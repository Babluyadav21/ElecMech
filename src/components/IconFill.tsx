import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export default function IconFill({ icon: Icon, className = "", iconClassName = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-border transition-[border-color,box-shadow] duration-300 group-hover:border-accent group-hover:shadow-[0_0_24px_rgba(180,83,9,0.28)] ${className}`}
    >
      <span className="absolute inset-0 scale-0 rounded-[inherit] bg-accent transition-transform duration-300 ease-out group-hover:scale-100" />
      <Icon
        className={`relative z-10 text-muted transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-on-accent ${iconClassName}`}
        strokeWidth={1.5}
      />
    </span>
  );
}
