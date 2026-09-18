import { motion } from "framer-motion";

interface Props {
  tag: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ tag, heading, description, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="spec-tag">{tag}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl leading-tight text-fg">{heading}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
