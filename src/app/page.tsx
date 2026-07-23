import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GrowthServices from "./components/GrowthServices";
import Method from "./components/Method";
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <GrowthServices />
        <Method />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
