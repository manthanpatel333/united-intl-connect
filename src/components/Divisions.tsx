import { Hotel, Pill, Globe2, Monitor } from "lucide-react";

const divisions = [
  {
    icon: Hotel,
    emoji: "🏨",
    title: "Hospitality & Restaurant Supply",
    description:
      "Complete packaging and operational supply solutions for restaurants, hotels, grocery, and convenience stores.",
    highlights: ["Packaging Solutions", "Operational Supplies", "Multi-channel Distribution"],
  },
  {
    icon: Pill,
    emoji: "💊",
    title: "API & Pharmaceutical Representation",
    description:
      "Official representatives of USFDA-compliant API manufacturing facilities, supporting regulated market distribution and documentation.",
    highlights: ["USFDA Compliance", "API Manufacturing", "Regulated Markets"],
  },
  {
    icon: Globe2,
    emoji: "🌍",
    title: "Import & Export",
    description:
      "Global sourcing and trade facilitation across Asia, USA, and regulated markets.",
    highlights: ["Global Sourcing", "Trade Facilitation", "Cross-border Logistics"],
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "IT & Automation Solutions",
    description:
      "Custom automation systems, procurement digitization, and AI-driven operational tools for modern businesses.",
    highlights: ["Process Automation", "AI-Driven Tools", "Procurement Digitization"],
  },
];

const Divisions = () => {
  return (
    <section id="divisions" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Business Divisions
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Strategic Industries,{" "}
            <span className="text-gradient-gold">Unified Vision</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {divisions.map((div, i) => (
            <div
              key={div.title}
              className="group relative bg-card rounded-lg border border-border p-8 hover:shadow-xl hover:border-gold/40 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-navy-deep text-gold shrink-0">
                  <div.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-card-foreground group-hover:text-gold transition-colors">
                    {div.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {div.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {div.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
