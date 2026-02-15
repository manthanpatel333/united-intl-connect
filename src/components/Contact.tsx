import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const divisions = [
  "Hospitality & Restaurant Supply",
  "API & Pharmaceutical Representation",
  "Import & Export",
  "IT & Automation Solutions",
  "General Inquiry",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Inquiry submitted! We'll be in touch shortly.");
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-6 text-center">
          <CheckCircle className="h-16 w-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-4">
            Thank You!
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-md mx-auto">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
              Start a Conversation
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-primary-foreground/70 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full bg-navy-light/50 border border-navy-light text-primary-foreground rounded-md px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-primary-foreground/70 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  className="w-full bg-navy-light/50 border border-navy-light text-primary-foreground rounded-md px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-primary-foreground/70 text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                maxLength={100}
                className="w-full bg-navy-light/50 border border-navy-light text-primary-foreground rounded-md px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="block text-primary-foreground/70 text-sm font-medium mb-2">
                Division of Interest
              </label>
              <select className="w-full bg-navy-light/50 border border-navy-light text-primary-foreground rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50">
                {divisions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-primary-foreground/70 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                className="w-full bg-navy-light/50 border border-navy-light text-primary-foreground rounded-md px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-shimmer text-accent-foreground py-3.5 rounded-md font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Inquiry"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
