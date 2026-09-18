import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import BlueprintBackdrop from "@/components/graphics/BlueprintBackdrop";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        path="/404"
        description="The page you're looking for doesn't exist or has moved."
      />
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <BlueprintBackdrop />
        <div className="relative mx-auto max-w-2xl px-6 lg:px-10 text-center">
          <span className="spec-tag">Error 404</span>
          <h1 className="mt-4 text-4xl sm:text-5xl text-fg">This page isn't part of the circuit.</h1>
          <p className="mt-4 text-muted">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-on-accent px-7 py-3.5 font-semibold hover:bg-accent-strong transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
