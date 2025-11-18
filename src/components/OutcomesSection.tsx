import { Shield, Zap, Clock, DollarSign, CheckCircle2, Eye } from "lucide-react";

const OutcomesSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            What Manhattan Practices Get With PulseOpsIT
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">A real, enforceable BAA</h3>
                <p className="text-sm text-muted-foreground">Full legal accountability for patient data protection</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Faster EHR performance</h3>
                <p className="text-sm text-muted-foreground">Proactive monitoring and optimization</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Zero ghosting, zero excuses</h3>
                <p className="text-sm text-muted-foreground">Responsive support when you need it</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Staff freed from IT busywork</h3>
                <p className="text-sm text-muted-foreground">Focus on patient care, not tech issues</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">HIPAA tasks off your plate</h3>
                <p className="text-sm text-muted-foreground">Compliance management handled for you</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Real-time device & access monitoring</h3>
                <p className="text-sm text-muted-foreground">Continuous security oversight</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Predictable monthly pricing</h3>
                <p className="text-sm text-muted-foreground">No surprise invoices or hidden fees</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base mb-1">Unlimited support</h3>
                <p className="text-sm text-muted-foreground">No hourly billing, no ticket limits</p>
              </div>
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
