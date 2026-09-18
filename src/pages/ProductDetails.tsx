import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import CTASection from "@/components/CTASection";
import { getProductBySlug, products, type ProductCategory } from "@/data/products";
import { wiringCabinet, automationOpenPanel } from "@/assets/images";

const categoryImage: Record<ProductCategory, string> = {
  electrical: wiringCabinet,
  automation: automationOpenPanel,
};

export default function ProductDetails() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={product.name}
        path={`/products/${product.slug}`}
        description={product.shortDescription}
      />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="mt-8 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-square border border-border overflow-hidden">
                <img
                  src={categoryImage[product.category]}
                  alt={`Representative ${product.category === "electrical" ? "electrical" : "automation"} panel photo`}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-muted">Representative photo — actual configuration may vary by specification.</p>
            </div>
            <div className="lg:col-span-3">
              <span className="spec-tag">{product.category === "electrical" ? "Electrical Panel" : "Automation Panel"}</span>
              <h1 className="mt-4 text-3xl sm:text-4xl text-fg leading-tight">{product.name}</h1>
              <p className="mt-4 text-lg text-muted">{product.shortDescription}</p>
              <div className="mt-6 space-y-4">
                {product.description.map((para, i) => (
                  <p key={i} className="text-muted leading-relaxed">{para}</p>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#0E5079] text-on-accent px-7 py-3.5 font-semibold hover:bg-accent-strong transition-colors"
              >
                Request a Quote for This Product
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="text-2xl text-fg mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} className="group p-6 card-surface hover:border-accent/50 transition-colors">
                  <h3 className="font-display text-lg text-fg">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted">{p.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
