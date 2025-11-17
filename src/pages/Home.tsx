import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { Shield, Server, HardDrive, AlertTriangle, Clock, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Next HIPAA Breach or EHR Outage{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Will Cost You. I Prevent Both — Guaranteed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Specialized IT support for 1–8 provider Manhattan medical practices with full compliance oversight and real-time operational monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
                <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Full BAA Signed • Manhattan Practices Only • Healthcare-Focused IT
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Problems Checklist */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Most Manhattan Practices Call Me for One of Three Issues:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">EHR Freezing or Crashing</CardTitle>
                  <CardDescription className="text-sm">
                    Your staff is losing hours because the system hangs or refuses to load.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">HIPAA Audit Failure or Warning</CardTitle>
                  <CardDescription className="text-sm">
                    You're scrambling to fix compliance findings before the deadline.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">IT Provider Ghosted You</CardTitle>
                  <CardDescription className="text-sm">
                    Slow responses, unanswered tickets, or disappearing support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BAA Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              A Real Business Associate Agreement — No Wiggle Room
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                Most general IT companies avoid BAAs or provide vague versions that fail under scrutiny.
              </p>
              <p className="text-base leading-relaxed">
                I sign a <strong className="text-foreground">full, detailed Business Associate Agreement</strong> with clear responsibilities and documented safeguards — the way medical practices actually need it.
              </p>
              <p className="text-base leading-relaxed font-semibold text-foreground">
                You're not hiring "tech help." You're hiring a partner accountable for protecting patient data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EHR & Credentials Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">
              Certified Expertise with the EHR Systems Manhattan Practices Use
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <p className="font-semibold text-lg">eClinicalWorks</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Athenahealth</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">DrChrono</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">TherapyNotes</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Practice Fusion</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mb-2">
              Trained in configuring, optimizing, and supporting EHR workflows for small practices — not just basic troubleshooting.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Experience with: <strong className="text-foreground">Cardiology • Internal Medicine • Mental Health • Dermatology • Primary Care</strong>
            </p>
          </div>
        </div>
      </section>

      {/* About/Credibility Story Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Why I Built PulseOpsIT
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                After years supporting Manhattan medical practices, one pattern never changed: general IT providers treating healthcare like any other business. That's how simple mistakes turn into HIPAA violations, EHR downtime, and five-figure fines.
              </p>
              <p className="text-base leading-relaxed">
                Healthcare IT requires specialization. Your patient data isn't "business data" — it's regulated information with serious legal consequences.
              </p>
              <p className="text-base leading-relaxed">
                I've seen practices fined $175,000 for preventable breaches. I've watched physicians lose entire clinic days from EHR outages. PulseOpsIT exists to prevent those failures — with proactive compliance management and real-time EHR stability monitoring built specifically for Manhattan practices.
              </p>
              <p className="text-base leading-relaxed font-semibold text-foreground">
                I don't treat your practice like a generic business. I treat it like a regulated medical environment.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              The Hidden Costs of IT Neglect in Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20 shadow-medium">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                    <CardTitle className="text-destructive">HIPAA Violations</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    A single HIPAA breach can cost your practice{" "}
                    <span className="font-bold text-foreground">$175,000 in fines</span>, plus legal
                    fees, reputation damage, and potential practice closure.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-warning/20 shadow-medium">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-8 w-8 text-warning" />
                    <CardTitle className="text-warning">EHR Downtime</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Every hour of EHR downtime costs your practice{" "}
                    <span className="font-bold text-foreground">$1,000+ in lost revenue</span>, plus
                    frustrated staff and delayed patient care.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Anchoring Section */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Predictable Pricing for Peace of Mind
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most 1–8 provider Manhattan practices typically invest <strong className="text-foreground">$1,000–$2,500/month</strong> for HIPAA-aligned IT management, EHR performance support, and full data protection.
            </p>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Flat monthly pricing</strong> — no surprise invoices</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Unlimited support</strong> — no billable hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Initial onboarding and compliance project fee: $5,500–$9,000</strong></span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Month-to-month plans available upon request.
              </p>
            </div>
            <div className="mt-6">
              <Button size="lg" asChild>
                <a href="#cta-section">Chat About Your EHR Issues</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Three Pillars of Practice Protection
            </h2>
            <p className="text-base text-muted-foreground">
              We specialize exclusively in Manhattan medical practices, delivering enterprise-grade IT
              security and reliability without the enterprise complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">HIPAA Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Full Business Associate Agreement</li>
                  <li>• Administrative, Technical & Physical Safeguards</li>
                  <li>• Risk Analysis & Management</li>
                  <li>• Ongoing Staff Training</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/hipaa-compliance">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Server className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">EHR & Uptime Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Vendor Liaison Management</li>
                  <li>• Proactive Performance Tuning</li>
                  <li>• Secure Remote Access</li>
                  <li>• eClinicalWorks, Athenahealth & More</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/ehr-uptime">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <HardDrive className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-center text-lg">Data Security & Recovery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Business Continuity Planning</li>
                  <li>• Immutable Backup & Encryption</li>
                  <li>• Security Awareness Training</li>
                  <li>• Ransomware Protection</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/data-security">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Chart Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              PulseOpsIT vs. Typical IT Provider
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-semibold">What You Need</th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">PulseOpsIT</th>
                    <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Generic IT Provider</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Healthcare Specialization</td>
                    <td className="py-3 px-4 text-primary">Healthcare-only focus</td>
                    <td className="py-3 px-4 text-muted-foreground">Generalist, no vertical expertise</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="py-3 px-4 font-medium">Business Associate Agreement (BAA)</td>
                    <td className="py-3 px-4 text-primary">Full, detailed BAA</td>
                    <td className="py-3 px-4 text-muted-foreground">Often refused or vague</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">EHR Expertise</td>
                    <td className="py-3 px-4 text-primary">Workflow optimization & vendor coordination</td>
                    <td className="py-3 px-4 text-muted-foreground">Basic troubleshooting only</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="py-3 px-4 font-medium">Pricing Model</td>
                    <td className="py-3 px-4 text-primary">Flat monthly, predictable</td>
                    <td className="py-3 px-4 text-muted-foreground">Billable hours, hidden fees</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Location Focus</td>
                    <td className="py-3 px-4 text-primary">Manhattan practices only</td>
                    <td className="py-3 px-4 text-muted-foreground">Serves everyone</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="py-3 px-4 font-medium">Proactive Protection</td>
                    <td className="py-3 px-4 text-primary">Real-time monitoring + risk scans</td>
                    <td className="py-3 px-4 text-muted-foreground">Reactive, ticket-based support</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">HIPAA Documentation</td>
                    <td className="py-3 px-4 text-primary">Complete safeguard programs</td>
                    <td className="py-3 px-4 text-muted-foreground">Minimal or none</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
