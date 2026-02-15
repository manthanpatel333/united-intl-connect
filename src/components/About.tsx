import { Shield, TrendingUp, Users } from "lucide-react";
import { Globe2 } from "lucide-react";

const stats = [
  { icon: Globe2, label: "Countries Served", value: "25+" },
  { icon: Users, label: "Active Partners", value: "200+" },
  { icon: TrendingUp, label: "Years of Experience", value: "15+" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-brand-teal font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Building Global <span className="text-gradient-brand">Partnerships</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            United Intl operates across multiple strategic industries, delivering excellence in supply chain, pharmaceuticals, and technology. We bridge markets across continents with integrity, compliance, and innovation at our core.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="h-8 w-8 text-brand-blue mx-auto mb-3" />
              <p className="text-3xl font-display font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
