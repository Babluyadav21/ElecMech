export interface IndustryGroup {
  id: string;
  title: string;
  items: string[];
}

export const industryGroups: IndustryGroup[] = [
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    items: [
      "Textile",
      "Cement",
      "Automobiles",
      "OEM",
      "Petrochemical",
      "HVAC",
      "Pharmaceutical",
      "Refineries",
      "Steel",
      "Paper",
      "Food & Beverages",
      "Spinning Garments",
      "Printing",
      "Footwear",
      "Sugar Plant",
      "Chemicals",
      "Telecommunication",
      "Railways",
    ],
  },
  {
    id: "commercial-residential",
    title: "Commercial & Residential",
    items: [
      "Real Estate",
      "Hotels",
      "IT Buildings",
      "Shopping Malls",
      "Hospitals",
      "Business Centers",
      "Multiplexes",
      "Adventure Parks",
      "R&D Centers",
      "Green Buildings",
      "Resorts",
    ],
  },
  {
    id: "power-sector",
    title: "Power Sector",
    items: [
      "Hydro",
      "Thermal",
      "Co-generation",
      "DG Set Stations",
      "Solar Plant",
      "Transformer Dehydration",
      "Service",
      "Testing & Commissioning",
    ],
  },
  {
    id: "ht-sector",
    title: "HT Sector",
    items: [
      "11KV/33KV Panel Service",
      "Testing & Commissioning",
      "Relay Testing & Commissioning",
    ],
  },
];
