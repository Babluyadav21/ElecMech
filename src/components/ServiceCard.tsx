import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import IconFill from "@/components/IconFill";

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
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group relative overflow-hidden p-6 card-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-lg"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      <IconFill icon={Icon} className="h-12 w-12" iconClassName="h-7 w-7" />
      <h3 className="mt-4 font-display text-lg text-fg">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-fg/80">{description}</p>
    </motion.div>
  );
}
