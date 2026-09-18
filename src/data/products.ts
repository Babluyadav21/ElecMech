export type ProductCategory = "electrical" | "automation";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string[];
}

export const productCategories: { id: ProductCategory; label: string }[] = [
  { id: "electrical", label: "Electrical Panels" },
  { id: "automation", label: "Automation Panels" },
];

export const products: Product[] = [
  {
    slug: "lt-panel",
    name: "LT Panel",
    category: "electrical",
    shortDescription: "Low-tension distribution panels built for dependable power handling.",
    description: [
      "Our LT (Low Tension) Panels are engineered to receive and distribute low-voltage power reliably across industrial and commercial installations.",
      "Each panel is designed, assembled and tested in-house by our engineering team before dispatch, with configurations customized to the client's load and layout requirements.",
    ],
  },
  {
    slug: "motor-control-centre",
    name: "Motor Control Centre (MCC)",
    category: "electrical",
    shortDescription: "Centralized control assemblies for managing multiple motor loads.",
    description: [
      "Motor Control Centres bring together motor starters, protection devices and control circuitry into a single, organized enclosure.",
      "Built for plants running multiple motor-driven processes, our MCC panels are designed for safe operation, ease of maintenance and long service life.",
    ],
  },
  {
    slug: "power-control-centre",
    name: "Power Control Centre (PCC)",
    category: "electrical",
    shortDescription: "Primary power distribution and control for industrial installations.",
    description: [
      "Power Control Centres serve as the main distribution point for incoming power, feeding downstream panels and equipment.",
      "Designed with accurate engineering practices and premium-grade components for consistent, reliable performance.",
    ],
  },
  {
    slug: "capacitor-apfct-panel",
    name: "Capacitor (APFCT) Panel",
    category: "electrical",
    shortDescription: "Automatic power factor correction for efficient power usage.",
    description: [
      "Our APFCT panels help industrial facilities correct power factor automatically, improving electrical efficiency and reducing penalty charges.",
      "Custom-built to match your facility's load profile and switching requirements.",
    ],
  },
  {
    slug: "lighting-panel",
    name: "Lighting Panel",
    category: "electrical",
    shortDescription: "Dedicated distribution boards for lighting circuits.",
    description: [
      "Lighting panels distribute and protect lighting circuits across a facility, sized and configured to the building's layout and load.",
      "Built with quality-focused manufacturing for dependable everyday performance.",
    ],
  },
  {
    slug: "amf-dg-synchronizing-panel",
    name: "AMF & DG Synchronizing Panel",
    category: "electrical",
    shortDescription: "Automatic mains failure and generator synchronizing control.",
    description: [
      "AMF panels automatically transfer load to a standby generator on mains failure, while DG synchronizing panels allow multiple generator sets to run in parallel.",
      "Engineered for facilities where continuous power supply is critical.",
    ],
  },
  {
    slug: "distribution-boards",
    name: "Distribution Boards",
    category: "electrical",
    shortDescription: "Reliable power distribution boards for varied installations.",
    description: [
      "Our distribution boards are manufactured to distribute electrical supply safely and efficiently across circuits.",
      "Available in configurations tailored to commercial, residential and industrial requirements.",
    ],
  },
  {
    slug: "hvac-panel",
    name: "HVAC Panel",
    category: "electrical",
    shortDescription: "Control panels built for HVAC systems and equipment.",
    description: [
      "HVAC panels are designed to control and protect heating, ventilation and air-conditioning equipment across commercial and industrial buildings.",
      "Customized panel design to suit the specific HVAC system architecture.",
    ],
  },
  {
    slug: "changeover-panel",
    name: "Changeover Panel",
    category: "electrical",
    shortDescription: "Manual or automatic source transfer for power continuity.",
    description: [
      "Changeover panels allow facilities to switch between power sources — such as mains and DG supply — safely and reliably.",
      "Built with quality components for dependable long-term operation.",
    ],
  },
  {
    slug: "isolator-panel",
    name: "Isolator Panel",
    category: "electrical",
    shortDescription: "Safe isolation of circuits for maintenance and protection.",
    description: [
      "Isolator panels provide a safe means of disconnecting circuits from the power supply during maintenance or emergencies.",
      "Manufactured to relevant safety standards with reliable mechanical construction.",
    ],
  },
  {
    slug: "bus-bar-ducts-trunks",
    name: "Bus Bar Ducts & Trunks",
    category: "electrical",
    shortDescription: "Efficient power transmission through enclosed bus bar systems.",
    description: [
      "Bus bar ducts and trunking systems provide a compact, efficient way to carry power across a facility compared to conventional cabling.",
      "Copper tin-coated bus bars are used where required by the client's specification.",
    ],
  },
  {
    slug: "feeder-pillar-panel",
    name: "Feeder Pillar Panel",
    category: "electrical",
    shortDescription: "Outdoor-rated distribution for utility and infrastructure use.",
    description: [
      "Feeder pillar panels distribute power at intermediate points across a site and are commonly used in utility and infrastructure applications.",
      "Constructed for durability in outdoor and semi-outdoor environments.",
    ],
  },
  {
    slug: "relay-control-panel",
    name: "Relay & Control Panel",
    category: "electrical",
    shortDescription: "Protection and control relay assemblies for critical circuits.",
    description: [
      "Relay and control panels house protection relays and control circuitry that safeguard electrical systems from faults.",
      "Our team also provides relay testing and commissioning services for these panels.",
    ],
  },
  {
    slug: "control-desk",
    name: "Control Desk",
    category: "electrical",
    shortDescription: "Centralized operator control stations for plant environments.",
    description: [
      "Control desks bring switches, indicators and controls together into a single operator station for plant monitoring and control.",
      "Designed and manufactured to match the specific layout and operational needs of the facility.",
    ],
  },
  {
    slug: "ac-dc-drive-panel",
    name: "AC/DC Drive Panel",
    category: "automation",
    shortDescription: "Motor speed and torque control through drive automation.",
    description: [
      "AC/DC drive panels house variable frequency and DC drives that control motor speed and torque for industrial processes.",
      "Panel design and integration is carried out by our automation engineering team.",
    ],
  },
  {
    slug: "plc-control-panel",
    name: "PLC Control Panel",
    category: "automation",
    shortDescription: "Programmable logic control for automated industrial processes.",
    description: [
      "PLC control panels form the backbone of many automated industrial processes, housing programmable logic controllers along with associated I/O and control gear.",
      "We provide panel design, manufacturing, testing and commissioning for PLC-based automation systems.",
    ],
  },
  {
    slug: "soft-starter-panel",
    name: "Soft Starter Panel",
    category: "automation",
    shortDescription: "Controlled motor starting to reduce mechanical and electrical stress.",
    description: [
      "Soft starter panels reduce the inrush current and mechanical stress associated with direct motor starting.",
      "Built for industrial applications where smooth motor start-up is required.",
    ],
  },
  {
    slug: "servo-drives-panel",
    name: "Servo Drives Panel",
    category: "automation",
    shortDescription: "Precision motion control for demanding automation applications.",
    description: [
      "Servo drive panels support precision motion control applications where accurate positioning and speed control are required.",
      "Integrated and tested by our automation solutions team as part of a complete control system.",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
