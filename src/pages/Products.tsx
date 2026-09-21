import { useState } from "react";
import Seo from "@/components/Seo";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import PhotoBackdrop from "@/components/graphics/PhotoBackdrop";
import { products, productCategories, type ProductCategory } from "@/data/products";
import { wiringDetail } from "@/assets/images";

export default function Products() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <Seo
        title="Electrical & Automation Panels"
        path="/products"
        description="Browse ElecMech's range of LT panels, MCC, PCC, APFCT, PLC control panels, drive panels and more — electrical and automation panels engineered to spec."
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <PhotoBackdrop src={wiringDetail} />
        <div data-aos="fade-up" className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <span className="spec-tag">Products &amp; Solutions</span>
          <h1 className="mt-4 text-4xl sm:text-5xl max-w-2xl text-fg leading-tight">
            Electrical panels and automation panels, built to spec.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div data-aos="fade-down" className="flex flex-wrap gap-2 mb-10">
            <FilterButton active={active === "all"} onClick={() => setActive("all")} label="All Products" />
            {productCategories.map((c) => (
              <FilterButton
                key={c.id}
                id={c.id}
                active={active === c.id}
                onClick={() => setActive(c.id)}
                label={c.label}
              />
            ))}
          </div>

          <div id="electrical" className="scroll-mt-28" />
          <div id="automation" className="scroll-mt-28" />

          <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need a panel built to a custom spec?"
        description="Share your requirement and drawings — our engineering team will get back with a tailored proposal."
      />
    </>
  );
}

function FilterButton({
  active,
  onClick,
  label,
  id,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  id?: string;
}) {
  return (
    <button
      id={id ? `filter-${id}` : undefined}
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium border transition-colors ${
        active ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:text-fg"
      }`}
    >
      {label}
    </button>
  );
}
