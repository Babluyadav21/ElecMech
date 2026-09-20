import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cpu,
  Gauge,
  PanelsTopLeft,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { industryGroups } from "@/data/industries";
import { site } from "@/data/site";
import {
  panelRoomRow,
  panelWallFront,
  panelChecklist,
  wiringDetail,
  wiringCabinet,
  automationOpenPanel,
  automationOrangeBackplate,
  transformer,
  controlPanelFreestanding,
} from "@/assets/images";

const heroSlides = [
  { src: panelRoomRow, alt: "Row of electrical control panels installed on ElecMech's manufacturing floor" },
  { src: panelWallFront, alt: "Front view of a completed electrical panel installation" },
  { src: automationOpenPanel, alt: "Open industrial automation panel with internal components" },
  { src: wiringCabinet, alt: "Custom wiring cabinet with organized electrical connections" },
  { src: transformer, alt: "Electrical transformer installation in an industrial setting" },
  { src: controlPanelFreestanding, alt: "Freestanding control panel in a production facility" },
  { src: wiringDetail, alt: "Close-up of wiring detail in an electrical control assembly" },
  { src: automationOrangeBackplate, alt: "Orange backplate automation hardware in an engineering environment" },
];

const capabilities = [
  { icon: PanelsTopLeft, label: "Electrical Panel Solutions" },
  { icon: Cpu, label: "Industrial Automation" },
  { icon: Settings2, label: "Customized Engineering" },
  { icon: ShieldCheck, label: "Testing & Commissioning" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <Seo
        title="Electrical Panel Manufacturer & Industrial Automation Solutions"
        description="ElecMech Engineering Solutions manufactures control panels, automation systems, electrical panels and LT distribution boards for industrial clients across India."
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <BlueprintBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="spec-tag">Electrical &middot; Mechanical &middot; Engineering</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-fg">
              {site.tagline}
            </h1>
            <p className="mt-6 text-lg text-muted max-w-lg leading-relaxed">
              Reliable electrical panels, industrial automation and engineering solutions designed
              for performance, safety and long-term reliability.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-[#FCA20B] text-on-accent px-7 py-3.5 font-semibold transition-[background-color,transform,box-shadow] duration-200 hover:bg-[#fca20c] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
              >
                Request a Quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 border border-border px-7 py-3.5 font-semibold text-white transition-[background-color,border-color,transform,box-shadow] duration-200 hover:border-muted hover:bg-[#12608e] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98] bg-[#0E5079]"
              >
                Explore Our Solutions
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/4] border border-border overflow-hidden">
              <div
                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div key={slide.src} className="h-full min-w-full">
                    <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 px-4">
                {heroSlides.map((slide, index) => (
                  <button
                    key={`${slide.src}-dot`}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 hover:scale-125 active:scale-95 ${
                      index === activeSlide ? "w-2 bg-[#FCA20B]" : "w-1.5 bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-surface border border-border px-5 py-4 shadow-lg">
              <p className="spec-tag">Electrical &amp; Mechanical</p>
              <p className="mt-1 font-display text-lg text-fg">Engineering Services</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capability strip */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <c.icon className="h-7 w-7 text-[#0E5079] shrink-0" strokeWidth={1.5} />
              <span className="text-sm  font-display text-lg text-fg">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] w-full border border-border overflow-hidden">
            <img
              src={panelChecklist}
              alt="ElecMech quality control check on an open electrical panel"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionTitle
              tag="About ElecMech"
              heading="Engineering excellence built on precision and reliability."
            />
            <p className="mt-6 text-muted leading-relaxed">{site.description}</p>
            <p className="mt-4 text-muted leading-relaxed">
              From panel design and manufacturing to testing and commissioning, our skilled
              engineers and technicians manage every stage in-house — giving industrial clients a
              single, accountable partner for their electrical and automation needs.
            </p>
            <Link to="/about" className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
              More About Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionTitle
              tag="Our Products"
              heading="Electrical & automation panels engineered to spec."
              description="A comprehensive range of panels manufactured for industrial, commercial and infrastructure applications."
            />
            <Link to="/products" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0">
              View All Products
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-24 border-t border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            tag="Engineering Services"
            heading="Support across the full project lifecycle."
            align="center"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} icon={[Settings2, Cpu, Gauge, ShieldCheck][i]} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
              View All Services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries preview */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            tag="Industries We Serve"
            heading="Trusted across manufacturing, infrastructure and power."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {industryGroups.map((g, i) => (
              <IndustryCard key={g.id} group={g} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
