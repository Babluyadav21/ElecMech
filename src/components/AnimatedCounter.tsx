import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ value, suffix = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-4xl sm:text-5xl text-accent">
        {display}
        {suffix}
      </div>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </motion.div>
  );
}
