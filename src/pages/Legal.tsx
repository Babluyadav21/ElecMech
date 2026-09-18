import { Link, useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import { site } from "@/data/site";

const privacyBody = [
  {
    heading: "Information we collect",
    text: `When you submit an enquiry through our website, we collect the details you provide — such as your name, company, email address, phone number and project requirement — solely to respond to your enquiry.`,
  },
  {
    heading: "How we use your information",
    text: `Information submitted through the enquiry form is used only to evaluate and respond to your requirement. We do not sell or share your information with third parties for marketing purposes.`,
  },
  {
    heading: "Contact",
    text: `If you have questions about this policy, please contact us at ${site.email}.`,
  },
];

const termsBody = [
  {
    heading: "Use of this website",
    text: `This website is provided to share information about ${site.name}'s products and services and to allow prospective clients to request quotes. Content on this site should not be treated as a binding technical specification unless confirmed in writing.`,
  },
  {
    heading: "Enquiries and quotes",
    text: `Submitting an enquiry does not constitute a binding order. All quotes and project terms are confirmed separately in writing between ${site.name} and the client.`,
  },
  {
    heading: "Contact",
    text: `For questions about these terms, please contact us at ${site.email}.`,
  },
];

export function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" path="/privacy-policy" sections={privacyBody} />;
}

export function Terms() {
  return <LegalPage title="Terms & Conditions" path="/terms" sections={termsBody} />;
}

function LegalPage({
  title,
  path,
  sections,
}: {
  title: string;
  path: string;
  sections: { heading: string; text: string }[];
}) {
  const { pathname } = useLocation();
  return (
    <>
      <Seo title={title} path={path} description={`${title} for ${site.name}.`} />
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <span className="spec-tag">{pathname === "/terms" ? "Legal" : "Legal"}</span>
          <h1 className="mt-4 text-4xl text-fg">{title}</h1>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl text-fg">{s.heading}</h2>
                <p className="mt-2 text-muted leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <Link to="/" className="mt-10 inline-block text-sm font-semibold text-accent">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
