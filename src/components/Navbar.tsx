import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import { logoMark } from "@/assets/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstMobileLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showSolid = scrolled || location.pathname !== "/" || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-6 sm:px-6 sm:pt-5"
    >
      <div
        className={`mx-auto max-w-[1204px] overflow-hidden rounded-2xl border border-border/70 backdrop-blur-md transition-colors duration-300 ${
          showSolid ? "bg-base/90" : "bg-base/80"
        } shadow-[0_12px_36px_-24px_rgba(18,24,31,0.45)]`}
      >
        <div className="flex h-[60px] items-center justify-between px-5 sm:h-[75px] sm:px-9 min-[1200px]:h-[86px] min-[1200px]:px-[5%]">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5" aria-label={`${site.name} home`}>
            <motion.img
              src={logoMark}
              alt=""
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12 min-[1200px]:h-14 min-[1200px]:w-14"
              animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                    }
              }
            />
            <span className="whitespace-nowrap font-display text-xl leading-none tracking-wide text-fg sm:text-[27px] min-[1200px]:text-[21px]">
              ElecMech
              <span className="mt-1 block text-[8px] font-mono font-normal tracking-[0.18em] text-muted sm:text-[11px] sm:tracking-[0.2em]">
                ENGINEERING SOLUTIONS
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 min-[1200px]:flex min-[1400px]:gap-10" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-fg/80 hover:text-fg"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 min-[1200px]:flex">
            <ThemeToggle className="h-[40px] w-[40px] rounded-full" />
            {/* <Link
            to="/contact"
            className="inline-flex items-center border border-accent bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-on-accent"
          >
            Request a Quote
          </Link> */}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 min-[1200px]:hidden">
            <ThemeToggle className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]!rounded-full" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-[52px] w-10 items-center justify-center text-fg sm:h-[60px] sm:w-[44px]"
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-border bg-base/95 min-[1200px]:hidden"
            >
              <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
                {navItems.map((item, i) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    ref={i === 0 ? firstMobileLinkRef : undefined}
                    className={({ isActive }) =>
                      `py-3 font-medium border-b border-border/60 last:border-none ${
                        isActive ? "text-accent" : "text-fg/85"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center border border-accent bg-accent/10 px-5 py-3 text-sm font-semibold text-accent"
                >
                  Request a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
