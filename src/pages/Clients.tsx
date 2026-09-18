import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import ClientWall from "@/components/ClientWall";
import CTASection from "@/components/CTASection";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <>
      <Seo
        title="Our Clients"
        path="/clients"
        description="ElecMech Engineering Solutions has delivered electrical panels and automation systems for leading names including Sun Pharma, DLF, NTPC and Indian Oil."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <BlueprintBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Trusted By</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Clients who rely on us project after project.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            tag="Our Clients"
            heading="A partial list of organizations we've worked with."
            description="Names are listed as provided by the company — logos will be added once available for display."
          />
          <div className="mt-10 ">
            <ClientWall clients={clients} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
