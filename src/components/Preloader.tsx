import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoMark } from "@/assets/images";

type PreloaderProps = {
  onComplete?: () => void;
};

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setShow(false);

            setTimeout(() => {
              onComplete?.();
            }, 700);
          }, 250);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white text-slate-900"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* BACKGROUND GRID */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(#111827 1px, transparent 1px),
                linear-gradient(90deg, #111827 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* AMBIENT GLOW */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* SCAN LINE */}
          <motion.div
            className="absolute left-0 top-0 h-[1px] w-full bg-red-500/20"
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6">

            {/* ACTUAL LOGO */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col items-center"
            >
              {/* Logo glow */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-slate-200/80 blur-3xl"
                animate={{
                  scale: [0.8, 1.15, 0.8],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Your actual logo */}
              <motion.img
                src={logoMark}
                alt="ElecMech Engineering Solutions"
                className="h-auto w-[110px] origin-center object-contain md:w-[150px]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{
                  duration: 12,
                  delay: 0.5,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ filter: "none" }}
              />

              {/* Tagline */}
              <motion.p
                initial={{
                  opacity: 1,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.6,
                }}
                className="mt-4 text-center text-[9px] uppercase tracking-[0.35em] text-slate-500 md:text-xs"
              >
                ElecMech Engineering Solutions
              </motion.p>
            </motion.div>

            {/* LOADING SECTION */}
            <div className="mt-14 w-full max-w-md">

              {/* Loading information */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Initializing Systems...
                </span>

                <span className="font-mono text-xs text-slate-700">
                  {Math.round(progress)
                    .toString()
                    .padStart(3, "")}
                  %
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-[2px] w-full overflow-hidden bg-slate-200">

                {/* Main progress */}
                <motion.div
                  className="absolute left-0 top-0 h-full bg-red-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

                {/* Moving light */}
                <motion.div
                  className="absolute top-0 h-full w-20 bg-slate-300/80 blur-sm"
                  animate={{
                    left: ["-20%", "120%"],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* BOTTOM TEXT */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-8 flex items-center gap-3 text-center text-[9px] uppercase tracking-[0.3em] text-slate-500"
            >
              <motion.span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />

              Powering Industries with Smart Engineering Solutions..
            </motion.div>
          </div>

          {/* TECHNICAL DETAILS */}
          <div className="absolute left-6 top-6 font-mono text-[9px] text-slate-400">
            SYS // 001
          </div>

          <div className="absolute right-6 top-6 font-mono text-[9px] text-slate-400">
            ENG // 2026
          </div>

          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-slate-400">
            POWER // ON
          </div>

          <div className="absolute bottom-6 right-6 font-mono text-[9px] text-slate-400">
            ELEC // MECH
          </div>

          {/* CORNER LINES */}

          {/* Top Left */}
          <div className="absolute left-6 top-14 h-8 w-[1px] bg-slate-200" />
          <div className="absolute left-6 top-14 h-[1px] w-8 bg-slate-200" />

          {/* Top Right */}
          <div className="absolute right-6 top-14 h-8 w-[1px] bg-slate-200" />
          <div className="absolute right-6 top-14 h-[1px] w-8 bg-slate-200" />

          {/* Bottom Left */}
          <div className="absolute bottom-14 left-6 h-8 w-[1px] bg-slate-200" />
          <div className="absolute bottom-14 left-6 h-[1px] w-8 bg-slate-200" />

          {/* Bottom Right */}
          <div className="absolute bottom-14 right-6 h-8 w-[1px] bg-slate-200" />
          <div className="absolute bottom-14 right-6 h-[1px] w-8 bg-slate-200" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;