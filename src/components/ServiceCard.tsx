import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group relative overflow-hidden p-6 card-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-lg"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex h-12 w-12 items-center justify-center border border-border bg-surface-alt text-accent transition-[background-color,border-color,transform] duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:rotate-3 group-hover:scale-105">
        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      </div>
      <h3 className="mt-4 font-display text-lg text-fg">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-fg/80">{description}</p>
    </motion.div>
  );
}
