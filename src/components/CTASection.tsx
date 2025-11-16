import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Protect Your Practice?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Schedule your free HIPAA Risk Assessment today. We'll identify vulnerabilities and provide
          a clear roadmap to compliance.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 shadow-strong hover:scale-105 transition-transform"
          asChild
        >
          <a
            href="https://calendly.com/pulseopsit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule Your Free HIPAA Risk Assessment</span>
          </a>
        </Button>
        <p className="mt-4 text-sm text-primary-foreground/80">
          No obligation • 30-minute consultation • Immediate insights
        </p>
      </div>
    </section>
  );
};

export default CTASection;
