import NavbarOption3 from "../components/NavbarOption3";
import HeroOption3 from "../components/HeroOption3";
import ServicesGridOption3 from "../components/ServicesGridOption3";
import Footer from "../components/Footer";

export default function Option3() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption3 />
      <main className="flex-grow">
        <HeroOption3 />
        <ServicesGridOption3 />
      </main>
      <Footer />
    </div>
  );
}

