import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, footerLinks } from "@/data/site";
import { logoMark } from "@/assets/images";

export default function Footer() {
  return (
    // The footer keeps a deliberately dark, branded treatment in both site
    // themes (a common premium-corporate pattern) — wrapping it in the
    // `dark` class scopes the dark token values to this subtree only, so
    // every bg-base/text-fg/text-accent/etc. utility below resolves to its
    // dark value no matter which theme the rest of the page is in.
    <footer className="dark relative border-t border-border bg-base">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img src={logoMark} alt="" className="h-9 w-9 object-contain" />
            <span className="font-display text-lg text-fg">ElecMech Engineering Solutions</span>
          </Link>
          <p className="text-sm text-muted max-w-xs leading-relaxed">{site.tagline}</p>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Solutions" links={footerLinks.solutions} />
        <FooterColumn title="Industries" links={footerLinks.industries} />

        <div className="lg:col-span-2">
          <h3 className="spec-tag mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <a href={site.phoneHref} className="hover:text-fg">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <a href={site.emailHref} className="hover:text-fg break-all">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.line3}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-fg">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-fg">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  return (
    <div>
      <h3 className="spec-tag mb-4">{title}</h3>
      <ul className="space-y-2.5 text-sm text-muted">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.path} className="hover:text-fg transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
