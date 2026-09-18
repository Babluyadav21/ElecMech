import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  className?: string;
}

export default function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`group relative flex h-10 w-10 items-center justify-center overflow-hidden border border-border text-fg hover:border-accent/60 transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.28, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="h-[18px] w-[18px] text-accent" strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Decorative tooltip — aria-label above already covers screen readers */}
      <span
        role="presentation"
        className="pointer-events-none absolute top-full mt-2 whitespace-nowrap bg-surface border border-border px-2.5 py-1 text-xs text-fg opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {label}
      </span>
    </button>
  );
}
