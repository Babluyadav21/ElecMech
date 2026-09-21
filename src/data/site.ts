export const site = {
  name: "ElecMech Engineering Solutions",
  shortName: "ElecMech",
  tagline: "Powering Industries with Smart Engineering Solutions.",
  description:
    "ElecMech Engineering Solutions is a manufacturer, supplier and exporter of control panels, automation solution systems, electrical panels and LT distribution boards, delivering industrial automation solutions and automation services.",
  phone: "+91-9000000000",
  phoneHref: "tel:+919000000000",
  email: "enquiry.elecmech@gmail.com",
  emailHref: "mailto:enquiry.elecmech@gmail.com",
  address: {
    line1: "Plot No - 81, Kh No - 9/8",
    line2: "Shaheed Harkesh Singh Marg",
    line3: "New Delhi",
  },
  mapsQuery: "Shaheed Harkesh Singh Marg, New Delhi",
};

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Industries", path: "/industries" },
  { label: "Infrastructure", path: "/infrastructure" },
  { label: "Clients", path: "/clients" },
  { label: "Contact", path: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Vision", path: "/about#vision" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Why Us", path: "/about#why-us" },
    { label: "Clients", path: "/clients" },
  ],
  solutions: [
    { label: "Electrical Panels", path: "/products#electrical" },
    { label: "Automation Panels", path: "/products#automation" },
    { label: "Engineering Services", path: "/services" },
    { label: "Testing & Commissioning", path: "/services" },
  ],
  industries: [
    { label: "Manufacturing", path: "/industries#industrial-manufacturing" },
    { label: "Commercial", path: "/industries#commercial-residential" },
    { label: "Power", path: "/industries#power-sector" },
    { label: "HT Sector", path: "/industries#ht-sector" },
  ],
};

// EmailJS configuration for the enquiry form.
// EmailJS's "public key" is designed to be used from the browser (it is not
// a secret) — create a free account at https://www.emailjs.com, set up an
// email service + template, and paste the three IDs below. No other
// credentials are ever placed in the frontend.
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
