import NavbarOption1 from "./components/NavbarOption1";
import Hero from "./components/Hero";
import ServicesGridOption1 from "./components/ServicesGridOption1";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOption1 />
      <main className="flex-grow">
        <Hero />
        <ServicesGridOption1 />
      </main>
      <Footer />
    </div>
  );
}
