import { motion } from "framer-motion";

export default function ClientWall({ clients }: { clients: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
      {clients.map((client, i) => (
        <motion.div
          key={client}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: (i % 12) * 0.03 }}
          className="bg-base px-6 py-6 flex items-center hover:bg-surface transition-colors"
        >
          <span className="text-sm font-display text-lg text-fg">{client}</span>
        </motion.div>
      ))}
    </div>
  );
}
