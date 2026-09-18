import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { logoMark } from "@/assets/images";

const MIN_DISPLAY_MS = 2200;
const HOLD_AT_FULL_MS = 500;

/**
 * A brand moment shown once while the page's assets finish loading, styled
 * like the rest of the site (blueprint grid, copper accent, mono spec-tag
 * type) rather than a generic spinner. Progress is a real approximation:
 * it eases toward 92% while waiting on `window.load`, then completes once
 * both the page has actually loaded AND the minimum display time has
 * passed — so it never flashes on a fast connection, and never lies about
 * being done on a slow one.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (prefersReducedMotion) {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }

    let pageLoaded = document.readyState === "complete";
    const onLoad = () => {
      pageLoaded = true;
    };
    window.addEventListener("load", onLoad);

    const start = performance.now();
    let rafId: number;
    let holdTimeout: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const elapsed = now - start;
      const minElapsedRatio = Math.min(elapsed / MIN_DISPLAY_MS, 1);
      const readyToComplete = pageLoaded && elapsed >= MIN_DISPLAY_MS;

      setProgress(readyToComplete ? 1 : Math.min(minElapsedRatio * 0.92, 0.92));

      if (!readyToComplete) {
        rafId = requestAnimationFrame(tick);
      } else {
        holdTimeout = setTimeout(() => setVisible(false), HOLD_AT_FULL_MS);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(holdTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          role="status"
          aria-live="polite"
          aria-label="Loading ElecMech Engineering Solutions"
          initial={false}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-base"
        >
          <div aria-hidden="true" className="absolute inset-0 blueprint-grid opacity-40" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-base/30 to-base" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.img
              src={logoMark}
              alt=""
              className="h-16 w-16 object-contain"
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={prefersReducedMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: "linear" }}
            />

            <div className="text-center">
              <p className="font-display text-xl tracking-wide text-fg">ElecMech</p>
              <p className="mt-1 text-[10px] font-mono tracking-[0.3em] text-muted">
                ENGINEERING SOLUTIONS
              </p>
            </div>

            <div className="w-48 h-[3px] bg-border overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
              {Math.round(progress * 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}