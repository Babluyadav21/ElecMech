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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        showSolid ? "bg-base/90 backdrop-blur-md border-b border-border" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label={`${site.name} home`}>
          <motion.img
            src={logoMark}
            alt=""
            className="h-10 w-10 object-contain"
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
          <span className="font-display text-lg leading-none tracking-wide text-fg">
            ElecMech
            <span className="block text-[10px] font-mono font-normal tracking-[0.2em] text-muted mt-0.5">
              ENGINEERING SOLUTIONS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-accent" : "text-fg/80 hover:text-fg"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center border border-accent bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-on-accent"
          >
            Request a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center text-fg"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="lg:hidden overflow-hidden bg-base border-b border-border"
          >
            <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
              {navItems.map((item, i) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  className={({ isActive }) =>
                    `py-3  font-medium border-b border-border/60 last:border-none ${
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
    </header>
  );
}
