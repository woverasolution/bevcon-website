import NavbarOption4 from "../components/NavbarOption4";
import HeroOption4 from "../components/HeroOption4";
import ServicesGridOption4 from "../components/ServicesGridOption4";
import Footer from "../components/Footer";

export default function Option4() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption4 />
      <main className="flex-grow">
        <HeroOption4 />
        <ServicesGridOption4 />
      </main>
      <Footer />
    </div>
  );
}
