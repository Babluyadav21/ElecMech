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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="p-6 card-surface hover:border-muted/60 transition-colors"
    >
      <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
      <h3 className="mt-4 font-display text-lg text-fg">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
