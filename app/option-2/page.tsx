import NavbarOption2 from "../components/NavbarOption2";
import HeroAnimated from "../components/HeroAnimated";
import ServicesGridOption2 from "../components/ServicesGridOption2";
import Footer from "../components/Footer";

export default function Option2() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption2 />
      <main className="flex-grow">
        <HeroAnimated />
        <ServicesGridOption2 />
      </main>
      <Footer />
    </div>
  );
}

