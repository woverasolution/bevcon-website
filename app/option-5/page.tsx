import NavbarOption5 from "../components/NavbarOption5";
import HeroOption5 from "../components/HeroOption5";
import ServicesGridOption5 from "../components/ServicesGridOption5";
import Footer from "../components/Footer";

export default function Option5() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavbarOption5 />
      <main className="flex-grow">
        <HeroOption5 />
        <ServicesGridOption5 />
      </main>
      <Footer />
    </div>
  );
}
