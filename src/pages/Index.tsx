import { Navbar, Hero } from "@/components/Hero";
import Divisions from "@/components/Divisions";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Divisions />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
