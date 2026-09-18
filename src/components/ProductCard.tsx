import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, PanelsTopLeft } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group card-surface hover:border-accent/50 transition-colors"
    >
      <div className="relative h-40 border-b border-border flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <PanelsTopLeft className="relative h-10 w-10 text-muted group-hover:text-accent transition-colors" strokeWidth={1.5} />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg text-fg">{product.name}</h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{product.shortDescription}</p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          View Details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
