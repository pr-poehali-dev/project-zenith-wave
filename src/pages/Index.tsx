import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Catalog from "@/components/Catalog";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Featured />
      <Catalog />
      <Promo />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
