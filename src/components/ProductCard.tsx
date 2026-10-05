import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeftRight,
  ArrowUpRight,
  Cable,
  CircuitBoard,
  Cpu,
  Fan,
  Gauge,
  Lightbulb,
  PanelsTopLeft,
  Power,
  Radio,
  RefreshCw,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/data/products";
import IconFill from "@/components/IconFill";

const productIcons: Record<string, LucideIcon> = {
  "lt-panel": Zap,
  "motor-control-centre": Activity,
  "power-control-centre": CircuitBoard,
  "capacitor-apfct-panel": Gauge,
  "lighting-panel": Lightbulb,
  "amf-dg-synchronizing-panel": RefreshCw,
  "distribution-boards": PanelsTopLeft,
  "hvac-panel": Fan,
  "changeover-panel": ArrowLeftRight,
  "isolator-panel": Power,
  "bus-bar-ducts-trunks": Cable,
  "feeder-pillar-panel": ShieldCheck,
  "relay-control-panel": Radio,
  "control-desk": SlidersHorizontal,
  "ac-dc-drive-panel": Gauge,
  "plc-control-panel": Cpu,
  "soft-starter-panel": Activity,
  "servo-drives-panel": Settings2,
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const ProductIcon = productIcons[product.slug] ?? PanelsTopLeft;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="group card-surface hover:border-accent/50 transition-colors"
    >
      <div className="relative h-40 border-b border-border flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <IconFill icon={ProductIcon} className="h-14 w-14 rounded-full" iconClassName="h-8 w-8" />
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
