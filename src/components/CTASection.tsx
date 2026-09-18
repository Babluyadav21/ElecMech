import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  heading?: string;
  description?: string;
}

export default function CTASection({
  heading = "Have a requirement to discuss?",
  description = "Tell us about your project and our engineering team will get back to you with a tailored solution.",
}: Props) {
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
          className="shrink-0 inline-flex items-center gap-2 bg-[#0E5079] text-on-accent px-7 py-3.5 font-semibold hover:bg-accent-strong transition-colors"
        >
          Send Enquiry
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
