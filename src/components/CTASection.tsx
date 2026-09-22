import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  heading?: string;
  description?: string;
}

export default function CTASection({
  heading = "Have a requirement to discuss?",
  description = "Tell us about your project and our engineering team will get back to you with a tailored solution.",
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative border-y border-border bg-surface overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl text-fg">{heading}</h2>
          <p className="mt-2 text-muted max-w-md">{description}</p>
        </motion.div>
        <Link
          to="/contact"
          className="group relative shrink-0 inline-flex items-center gap-2 overflow-hidden bg-[#0E5079] px-7 py-3.5 font-semibold text-on-accent transition-colors hover:bg-accent-strong"
        >
          <motion.svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <motion.rect
              x="1"
              y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              fill="none"
              stroke="#ffcc00"
              strokeWidth="2"
              pathLength="100"
              strokeDasharray="24 76"
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -100] }}
              transition={prefersReducedMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
          Send Enquiry
          <ArrowUpRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
