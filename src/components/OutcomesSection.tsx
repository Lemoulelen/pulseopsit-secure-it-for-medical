import { Shield, Zap, Clock, DollarSign, CheckCircle2, Eye } from "lucide-react";

const OutcomesSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Manhattan Practices Get With PulseOpsIT
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">A real, enforceable BAA</h3>
              <p className="text-sm text-muted-foreground">with documented safeguards</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">Faster EHR performance</h3>
              <p className="text-sm text-muted-foreground">no more loading wheels</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">Zero ghosting</h3>
              <p className="text-sm text-muted-foreground">immediate responses</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">HIPAA tasks off your plate</h3>
              <p className="text-sm text-muted-foreground">policies, training, audits</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">Real-time device monitoring</h3>
              <p className="text-sm text-muted-foreground">security that doesn't sleep</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">Predictable monthly pricing</h3>
              <p className="text-sm text-muted-foreground">no surprise invoices</p>
            </div>
            <div className="bg-background p-5 rounded-lg border border-border shadow-soft">
              <h3 className="font-semibold mb-2 text-foreground">Unlimited support</h3>
              <p className="text-sm text-muted-foreground">no hourly billing, ever</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-foreground max-w-2xl mx-auto">
              Your practice should never be one mistake away from disaster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
