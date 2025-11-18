import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Protect Your Practice.
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Get Your 24-Hour HIPAA Snapshot.
          </h3>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-10 shadow-strong"
            asChild
          >
            <a href="mailto:support@pulseopsit.com?subject=HIPAA%20Snapshot%20Request">
              Start Your Snapshot
            </a>
          </Button>
          <p className="mt-6 text-base text-white/90">
            No obligations. Written findings delivered in 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
