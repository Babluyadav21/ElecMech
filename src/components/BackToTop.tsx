import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      initial={false}
      animate={
        prefersReducedMotion
          ? { opacity: visible ? 1 : 0 }
          : { opacity: visible ? 1 : 0, y: visible ? 0 : 12, scale: visible ? 1 : 0.8 }
      }
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.08 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-9 w-9 items-center justify-center border border-accent bg-accent text-on-accent shadow-lg transition-[opacity,transform,background-color] duration-300 hover:bg-accent-strong focus-visible:scale-105 sm:bottom-8 sm:right-8 sm:h-11 sm:w-11 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </motion.button>
  );
}
