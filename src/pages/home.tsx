import Header from "../components/header";
import Hero from "../components/hero";
import EquipmentCategories from "../components/equipment-categories";
import Services from "../components/services";
import CoverageArea from "../components/coverage-area";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EquipmentCategories />
      <Services />
      <CoverageArea />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}