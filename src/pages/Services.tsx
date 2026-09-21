import {
  BadgeCheck,
  ClipboardList,
  Cpu,
  Gauge,
  PanelsTopLeft,
  Radio,
  Settings2,
  ShieldCheck,
  Wrench,
  Zap,
  ZapOff,
} from "lucide-react";
import Seo from "@/components/Seo";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";
import { services } from "@/data/services";
import { terminalWiring } from "@/assets/images";

const icons = [
  Settings2,
  Wrench,
  Cpu,
  Radio,
  ClipboardList,
  Gauge,
  ShieldCheck,
  PanelsTopLeft,
  Zap,
  BadgeCheck,
  ZapOff,
];

export default function Services() {
  return (
    <>
      <Seo
        title="Engineering Services"
        path="/services"
        description="Panel design, manufacturing, industrial automation, project planning, testing and commissioning — engineering services from ElecMech."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <PhotoBackdrop src={terminalWiring} />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Engineering Services</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Support across the full project lifecycle.
          </h1>
          <p className="mt-5 text-muted max-w-xl">
            From initial panel design through to on-site testing and commissioning, our engineering
            team stays involved at every stage of your project.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} icon={icons[i % icons.length]} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Planning a new panel or automation project?"
        description="Talk to our engineering team about design, manufacturing, testing and commissioning support."
      />
    </>
  );
}
