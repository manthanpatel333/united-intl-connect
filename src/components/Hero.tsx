import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/90 backdrop-blur-md border-b border-navy-light/30">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="United Intl" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-primary-foreground/80">
          <a href="#divisions" className="hover:text-gold transition-colors">Divisions</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-gold-shimmer text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get in Touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy-gradient opacity-70" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up">
          Global Business Excellence
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Powering Industries.<br />
          <span className="text-gradient-gold">Connecting Markets.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg md:text-xl mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Strategic operations across hospitality, pharmaceuticals, global trade, and technology — delivering integrated solutions for modern enterprises.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a href="#divisions" className="bg-gold-shimmer text-accent-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity">
            Our Divisions
          </a>
          <a href="#contact" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export { Navbar, Hero };
