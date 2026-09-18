import { Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Infrastructure from "@/pages/Infrastructure";
import Clients from "@/pages/Clients";
import Contact from "@/pages/Contact";
import { PrivacyPolicy, Terms } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import Preloader from "@/components/Preloader";

export default function App() {
  return (
    <>
    <Preloader />

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}
