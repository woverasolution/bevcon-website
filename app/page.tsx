import Navbar from "./components/Navbar";
import HeroLightAnimated from "./components/HeroLightAnimated"; // New Light Animated Hero
import WhatWeDo from "./components/WhatWeDo";
import BeverageConcept from "./components/BeverageConcept";
import BeverageConstruction from "./components/BeverageConstruction";
import BeverageContracts from "./components/BeverageContracts";
import BeverageConfidence from "./components/BeverageConfidence";
import BeverageConsulting from "./components/BeverageConsulting";
import BeverageControl from "./components/BeverageControl";
import BeverageConnect from "./components/BeverageConnect";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroLightAnimated />
        <WhatWeDo />
        <BeverageConcept />
        <BeverageConstruction />
        <BeverageContracts />
        <BeverageConfidence />
        <BeverageControl />
        <BeverageConsulting />
        <BeverageConnect />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
