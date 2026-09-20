import { ClipboardList, Cog, Factory, FlaskConical, Users2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Gallery, { type GalleryItem } from "@/components/Gallery";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";
import {
  panelWallFront,
  wiringCabinet,
  terminalWiring,
  automationOpenPanel,
  automationSoftstarter,
  panelRoomRow,
  panelChecklist,
  wiringDetail,
  controlPanelFreestanding,
  automationOrangeBackplate,
  transformer,
  toolsFlatlay,
} from "@/assets/images";

const capabilities = [
  { icon: Cog, title: "Modern Machinery", text: "High-tech machinery supporting precise panel fabrication and assembly." },
  { icon: Factory, title: "Manufacturing Facilities", text: "Dedicated panel manufacturing facilities equipped for volume and custom orders." },
  { icon: Users2, title: "Engineering Team", text: "Qualified personnel with expertise across panel design, development and production." },
  { icon: ClipboardList, title: "Project Planning", text: "Structured planning that keeps manufacturing aligned with project timelines." },
  { icon: FlaskConical, title: "Quality Control", text: "Quality control checks applied through every stage of production." },
  { icon: Zap, title: "Captive Power Backup", text: "A captive power generation facility protects manufacturing from supply disruption and fluctuations." },
];

const galleryCategories = ["Electrical Panels", "Automation", "Manufacturing", "Testing & Commissioning"];

const galleryItems: GalleryItem[] = [
  { id: "g1", title: "LT panel assembly", category: "Electrical Panels", image: panelWallFront },
  { id: "g2", title: "MCC panel wiring", category: "Electrical Panels", image: wiringCabinet },
  { id: "g3", title: "Bus bar fabrication", category: "Electrical Panels", image: terminalWiring },
  { id: "g4", title: "PLC control panel build", category: "Automation", image: automationOpenPanel },
  { id: "g5", title: "Drive panel integration", category: "Automation", image: automationSoftstarter },
  { id: "g6", title: "Panel manufacturing floor", category: "Manufacturing", image: panelRoomRow },
  { id: "g7", title: "Quality control inspection", category: "Manufacturing", image: panelChecklist },
  { id: "g8", title: "Component fabrication", category: "Manufacturing", image: wiringDetail },
  { id: "g9", title: "On-site commissioning", category: "Testing & Commissioning", image: controlPanelFreestanding },
  { id: "g10", title: "Relay testing", category: "Testing & Commissioning", image: automationOrangeBackplate },
  { id: "g11", title: "HT panel & transformer service", category: "Testing & Commissioning", image: transformer },
  { id: "g12", title: "Final inspection", category: "Manufacturing", image: toolsFlatlay },
];

export default function Infrastructure() {
  return (
    <>
      <Seo
        title="Infrastructure"
        path="/infrastructure"
        description="ElecMech is equipped with high-tech machinery and a qualified engineering team spanning panel design, manufacturing, testing and commissioning."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <PhotoBackdrop src={panelRoomRow} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Infrastructure</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Built to manufacture, test and deliver at industrial scale.
          </h1>
          <p className="mt-5 text-muted max-w-xl">
            We're equipped with high-tech machinery and qualified personnel with expertise in
            control panel design, panel manufacturing, development, project planning, testing and
            commissioning of all types of electrical panels — including copper tin-coated bus bars
            where required by the client. Our facility is also equipped with the latest
            manufacturing and fabrication machinery, backed by a captive power generation setup
            that protects production from supply disruption and fluctuations.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: i % 3 === 0 ? -6 : 0,
                scale: i % 3 === 1 ? 1.02 : 1,
                rotate: i % 3 === 2 ? 0.35 : 0,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group relative cursor-pointer overflow-hidden p-6 card-surface transition-[border-color,box-shadow] duration-300 hover:border-accent/60 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-surface-alt text-accent transition-[background-color,border-color,transform] duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                <c.icon
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
              <h3 className="mt-4 font-display text-base text-fg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed transition-colors duration-300 group-hover:text-fg/80">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle tag="Facility Gallery" heading="Inside our manufacturing and testing floor." />
          <div className="mt-10">
            <Gallery items={galleryItems} categories={galleryCategories} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
