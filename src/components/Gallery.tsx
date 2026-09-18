import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  /** Real photo import. Falls back to a styled placeholder tile when omitted. */
  image?: string;
}

export default function Gallery({ items, categories }: { items: GalleryItem[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm font-medium border transition-colors ${
              active === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted hover:text-fg"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 8) * 0.05 }}
            className="group text-left"
          >
            {item.image ? (
              <div className="relative aspect-square w-full overflow-hidden border border-border group-hover:border-accent/50 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <ImagePlaceholder label={item.title} className="aspect-square w-full group-hover:border-accent/50" />
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl"
            >
              {lightbox.image ? (
                <div className="relative aspect-video w-full overflow-hidden border border-border">
                  <img src={lightbox.image} alt={lightbox.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <p className="text-sm font-medium text-white">{lightbox.title}</p>
                  </div>
                </div>
              ) : (
                <ImagePlaceholder label={lightbox.title} className="aspect-video w-full" />
              )}
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-4 -right-4 h-9 w-9 flex items-center justify-center bg-accent text-on-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
