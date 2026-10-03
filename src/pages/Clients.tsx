import Seo from "@/components/Seo";
import SectionTitle from "@/components/SectionTitle";
import ClientWall from "@/components/ClientWall";
import CTASection from "@/components/CTASection";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";
import { client } from "@/assets/images";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <>
      <Seo
        title="Our Clients"
        path="/clients"
        description="ElecMech Engineering Solutions has delivered electrical panels and automation systems for leading names including Sun Pharma, DLF, NTPC and Indian Oil."
      />

      <section className="relative pt-34 pb-10  lg:pt-48 lg:pb-10 overflow-hidden">
        <BlueprintBackdrop />
        <PhotoBackdrop src={client} />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Trusted By</span>
          <h1 className="mt-4 text-2xl sm:text-5xl max-w-2xl text-fg leading-tight">
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
          <div data-aos="fade-up" className="mt-10 ">
            <ClientWall clients={clients} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
