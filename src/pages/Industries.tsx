import Seo from "@/components/Seo";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";
import { industryGroups } from "@/data/industries";
import { transmissionTower } from "@/assets/images";

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        path="/industries"
        description="ElecMech serves industrial, commercial, power sector and HT sector clients across textile, cement, pharmaceutical, real estate, hospitality and more."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <PhotoBackdrop src={transmissionTower} />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Industries We Serve</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Trusted across sectors that demand reliability.
          </h1>
          <p className="mt-5 text-muted max-w-xl">
            Select a sector to see the range of industries we've delivered electrical and
            automation solutions to.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div data-aos="fade-up" className="mx-auto max-w-5xl px-6 lg:px-10 grid sm:grid-cols-2 gap-4">
          {industryGroups.map((g, i) => (
            <IndustryCard key={g.id} group={g} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
