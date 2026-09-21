import { Mail, MapPin, Phone } from "lucide-react";
import Seo from "@/components/Seo";
import EnquiryForm from "@/components/EnquiryForm";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";
import { site } from "@/data/site";
import { toolsFlatlay, transmissionTower, terminalWiring } from "@/assets/images";

export default function Contact() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      <Seo
        title="Contact & Request a Quote"
        path="/contact"
        description="Get in touch with ElecMech Engineering Solutions for electrical panels, automation solutions and engineering services. Request a quote today."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <BlueprintBackdrop />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Get In Touch</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Request a quote for your next project.
          </h1>
          <p className="mt-5 text-muted max-w-xl">
            Share a few details about your requirement and our engineering team will respond with
            next steps.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-14">
          <div data-aos="fade-right" className="lg:col-span-3 card-surface p-6 sm:p-8">
            <EnquiryForm />
          </div>

          <div data-aos="fade-left" className="lg:col-span-2 space-y-8">
            <div className="card-surface p-6 sm:p-8 space-y-6">
              <ContactRow icon={Phone} label="Call Us" value={site.phone} href={site.phoneHref} />
              <ContactRow icon={Mail} label="Email Us" value={site.email} href={site.emailHref} />
              <ContactRow
                icon={MapPin}
                label="Visit Us"
                value={`${site.address.line1}, ${site.address.line2}, ${site.address.line3}`}
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 text-sm font-semibold hover:bg-accent hover:text-on-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2 border border-border text-fg px-5 py-2.5 text-sm font-semibold hover:border-muted transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="border border-border overflow-hidden h-72">
              <iframe
                title="ElecMech Engineering Solutions location"
                src={mapsEmbedSrc}
                className="w-full h-full dark:grayscale-[0.4] dark:contrast-[1.1] dark:invert-[0.92]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div data-aos="fade-up" className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { src: toolsFlatlay, alt: "Electrician's tools and test equipment" },
            { src: transmissionTower, alt: "High-voltage transmission tower" },
            { src: terminalWiring, alt: "Close-up of terminal block wiring" },
          ].map((img) => (
            <div key={img.alt} className="relative aspect-square sm:aspect-[4/3] overflow-hidden border border-border">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 mt-0.5 text-accent shrink-0" />
      <div>
        <p className="text-xs uppercase tracking-[0.14em] font-mono text-muted">{label}</p>
        <p className="mt-1 text-fg">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-90 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
