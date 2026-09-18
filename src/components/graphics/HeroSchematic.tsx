import { motion, type Variants } from "framer-motion";

/**
 * A blueprint-line illustration of a control panel cabinet with bus bars,
 * breakers and indicator lamps. On load, the circuit traces "draw" themselves
 * and the indicator lamps energize in sequence — one orchestrated moment
 * rather than scattered per-element motion.
 *
 * Every stroke/fill references a CSS custom property from the theme, so the
 * illustration re-colors itself automatically when light/dark mode switches.
 */
export default function HeroSchematic() {
  const traceVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.4, delay: 0.3 + i * 0.18, ease: [0.65, 0, 0.35, 1] as const },
        opacity: { duration: 0.2, delay: 0.3 + i * 0.18 },
      },
    }),
  };

  const lampVariants: Variants = {
    hidden: { opacity: 0.15, scale: 0.8 },
    visible: (i: number) => ({
      opacity: [0.15, 1, 0.7],
      scale: 1,
      transition: { duration: 0.6, delay: 1.1 + i * 0.15 },
    }),
  };

  const labelStyle = {
    font: "500 10px 'IBM Plex Mono', monospace",
    letterSpacing: "0.05em",
    fill: "var(--color-steel-2)",
  };

  return (
    <svg
      viewBox="0 0 560 620"
      className="w-full h-auto max-w-lg mx-auto dark:drop-shadow-[0_0_36px_rgba(232,163,61,0.16)]"
      role="img"
      aria-label="Schematic illustration of an industrial control panel with energized circuit traces"
    >
      <rect x="40" y="30" width="480" height="560" rx="6" fill="none" stroke="var(--color-border)" strokeWidth="2" />
      <rect x="64" y="56" width="432" height="130" rx="4" fill="none" stroke="var(--color-steel)" strokeWidth="1.5" />

      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`lamp-${i}`}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={lampVariants}
          cx={110 + i * 100}
          cy={100}
          r="9"
          fill="var(--color-accent)"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <text key={`lamp-label-${i}`} x={110 + i * 100} y={140} textAnchor="middle" style={labelStyle}>
          {["L1", "L2", "L3", "N"][i]}
        </text>
      ))}

      {[0, 1, 2].map((i) => (
        <g key={`meter-${i}`}>
          <circle cx={140 + i * 140} cy={162} r="14" fill="none" stroke="var(--color-steel)" strokeWidth="1.5" />
          <line x1={140 + i * 140} y1={162} x2={140 + i * 140 + 8} y2={154} stroke="var(--color-steel-2)" strokeWidth="1.5" />
        </g>
      ))}

      <rect x="64" y="210" width="432" height="180" rx="4" fill="none" stroke="var(--color-steel)" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={`breaker-${i}`} x={92 + i * 78} y={236} width="46" height="128" rx="3" fill="none" stroke="var(--color-border)" strokeWidth="1.5" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.rect
          key={`switch-${i}`}
          x={92 + i * 78 + 15}
          y={246}
          width="16"
          height="30"
          rx="2"
          fill="var(--color-surface)"
          stroke="var(--color-steel-2)"
          initial={{ y: 246 }}
          animate={{ y: [246, 300, 246] }}
          transition={{ duration: 0.4, delay: 1.6 + i * 0.12 }}
        />
      ))}

      <rect x="64" y="410" width="432" height="150" rx="4" fill="none" stroke="var(--color-steel)" strokeWidth="1.5" />
      <text x="80" y="436" style={labelStyle}>BUS BAR</text>
      {[0, 1, 2].map((i) => (
        <rect key={`bar-${i}`} x="80" y={452 + i * 22} width="400" height="8" rx="1" fill="var(--color-accent-strong)" opacity="0.55" />
      ))}

      {/* Energizing traces connecting the sections */}
      {[
        "M110,109 L110,236",
        "M210,109 L210,236",
        "M310,109 L310,236",
        "M410,109 L410,236",
        "M280,390 L280,410",
      ].map((d, i) => (
        <motion.path
          key={`trace-${i}`}
          d={d}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={traceVariants}
        />
      ))}
    </svg>
  );
}
