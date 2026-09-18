import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { IndustryGroup } from "@/data/industries";

export default function IndustryCard({ group, index }: { group: IndustryGroup; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      id={group.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="card-surface scroll-mt-28"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-display text-lg text-fg">{group.title}</span>
        <ChevronDown className={`h-5 w-5 text-accent shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="text-xs font-medium px-3 py-1.5 border border-border text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
