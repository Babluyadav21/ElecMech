import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircuitBoard,
  Handshake,
  Layers,
  LineChart,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";
import { panelWallFront, transmissionTower } from "@/assets/images";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";

const focusAreas = [
  "Electrical panel manufacturing",
  "Automation solutions",
  "Customized engineering",
  "Panel design",
  "Manufacturing",
  "Testing",
  "Commissioning",
];

const whyUs = [
  { icon: Handshake, title: "Technical support & service", text: "Superior technical support and customer service across every project stage." },
  { icon: Wrench, title: "Skilled technicians", text: "Experienced, skilled technicians with consummate knowledge in their respective areas of specialization." },
  { icon: Sparkles, title: "Innovative features", text: "Innovative engineering features that improve functionality and performance." },
  { icon: Layers, title: "Comprehensive range", text: "A comprehensive range of product sizes, styles and materials to match your specification." },
  { icon: ShieldCheck, title: "Premium raw materials", text: "Premium-grade raw materials used across manufacturing for long-term durability." },
  { icon: Ruler, title: "Accurate engineering", text: "Accurate engineering and design practices applied to every panel we build." },
  { icon: LineChart, title: "Long service life", text: "Panels built for long service life under real industrial operating conditions." },
  { icon: BadgeCheck, title: "Mutual trust", text: "A working relationship built on mutual trust with every client we serve." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        path="/about"
        description="ElecMech Engineering Solutions is a manufacturer, supplier and exporter of control panels and automation systems, backed by a skilled engineering team."
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <BlueprintBackdrop />
         <PhotoBackdrop src={transmissionTower} />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">About ElecMech</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            One accountable engineering partner, from design to commissioning.
          </h1>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div data-aos="fade-right">
            <p className="text-lg text-fg leading-relaxed">
              We are one of the leading manufacturers, suppliers and exporters of Control Panels
              and Automation Solution Systems, providing an excellent range of Industrial
              Automation Solutions and Automation Services.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              We are also a prominent manufacturer, exporter and supplier of a complete assortment
              of Electrical Panels and LT Distribution Boards — offering a broad range of options
              for demanding requirements and applications. Through innovative product systems and
              services, we help clients save valuable panel space, reduce disruption from
              electrical and mechanical noise, and build automation networks that stay reliable as
              they grow.
            </p>
            <p className="mt-5 text-muted leading-relaxed">
              Our professionals use advanced, sophisticated tools and equipment to complete every
              project within the promised time frame. Our strategy is to keep innovating panel
              designs — constantly improving our electrical panels and bringing new products to
              market that offer greater productivity and higher customer satisfaction.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {focusAreas.map((f) => (
                <li key={f} className="text-sm text-fg/90 border-l-2 border-accent pl-3">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-left" className="relative aspect-[4/3] w-full border border-border overflow-hidden">
            <img
              src={panelWallFront}
              alt="Row of ElecMech electrical panels on the manufacturing floor"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 border-t border-border bg-surface-alt scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <SectionTitle
            tag="Quality & Vision"
            heading="&ldquo;To produce high quality products and make value addition to customers.&rdquo;"
            description="Quality is a crucial concern in anything purchased today — we keep a close eye on it, whether it's the product we keep in market, the product we manufacture, or the services we provide."
            align="center"
          />
          <div data-aos="fade-up" className="mt-12 grid sm:grid-cols-3 gap-8 text-left">
            <VisionPoint
              index={0}
              icon={CircuitBoard}
              title="Engineering capability"
              text="With strong panel-design skills, we offer a wide variety of power control panels and electrical distribution boards — including LT, MCC, PCC, AMF, APFCT, PLC, machine panels, sub-distribution panels and synchronizing panels."
            />
            <VisionPoint
              index={1}
              icon={Lightbulb}
              title="Innovation, delivered"
              text="ElecMech has a track record of developing innovative products that deliver high quality at a competitive installed cost, reducing design and assembly time while easing installation and maintenance."
            />
            <VisionPoint
              index={2}
              icon={UsersRound}
              title="Customer satisfaction"
              text="Every product can be customized to the specifications our clients provide, backed by a network of distributors and responsive customer service."
            />
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 border-t border-border scroll-mt-24">
       
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle tag="Why Choose Us" heading="Trust that's earned project after project." align="center" />
          <div data-aos="fade-up" className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: i % 2 === 0 ? -7 : -4,
                  rotate: i % 2 === 0 ? 0.4 : -0.4,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden p-6 card-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-11 w-11 items-center justify-center border border-border bg-surface-alt text-accent transition-[background-color,border-color,transform] duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                  <w.icon
                    className={`h-6 w-6 transition-transform duration-300 ${
                      i % 3 === 0
                        ? "group-hover:rotate-12 group-hover:scale-110"
                        : i % 3 === 1
                          ? "group-hover:-rotate-12 group-hover:translate-x-0.5"
                          : "group-hover:scale-125 group-hover:-translate-y-0.5"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 font-display text-base text-fg">{w.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-fg/80">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function VisionPoint({
  index,
  icon: Icon,
  title,
  text,
}: {
  index: number;
  icon: typeof CircuitBoard;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative overflow-hidden border border-border bg-surface p-6 text-left shadow-[0_10px_30px_-24px_rgba(18,24,31,0.8)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-accent/60 hover:bg-base hover:shadow-[0_18px_38px_-24px_rgba(180,83,9,0.45)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-30 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10 text-accent transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs tracking-[0.18em] text-muted">0{index + 1}</span>
      </div>
      <h3 className="mt-7 font-display text-xl text-fg transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
      <div className="mt-6 h-px w-10 bg-border transition-[width,background-color] duration-300 group-hover:w-20 group-hover:bg-accent" />
    </motion.article>
  );
}
