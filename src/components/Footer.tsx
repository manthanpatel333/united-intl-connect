import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-navy-light/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-gold" />
            <span className="font-display font-bold text-primary-foreground text-lg">
              United Intl
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#divisions" className="hover:text-gold transition-colors">
              Divisions
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} United Intl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
