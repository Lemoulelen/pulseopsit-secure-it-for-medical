import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { Shield, Server, HardDrive, AlertTriangle, Clock, DollarSign } from "lucide-react";
import OutcomesSection from "@/components/OutcomesSection";

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
                Will Cost You — I Prevent Both. Guaranteed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              HIPAA-Compliant IT for 1–8 provider Manhattan medical practices.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Full BAA signed. Real-time EHR performance monitoring. Zero guesswork.
              <br />
              <strong className="text-foreground">When your practice relies on uptime and compliance, "general IT" isn't enough.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
                <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#pricing">View Device-Based Plans</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Problems Checklist */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Manhattan Practices Call PulseOpsIT
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">EHR Freezing or Crashing</CardTitle>
                  <CardDescription className="text-sm">
                    Staff losing hours. Patients delayed. Revenue slipping with every minute of downtime.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your Free 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">HIPAA Audit Warnings or Failures</CardTitle>
                  <CardDescription className="text-sm">
                    Deadlines approaching. OCR letters piling up. Risk increasing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your Free 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base mb-2">Your IT Provider Ghosted You</CardTitle>
                  <CardDescription className="text-sm">
                    Slow responses. Unanswered tickets. Excuses. Healthcare can't run on "hopefully they reply."
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full" asChild>
                    <a href="#cta-section">Start Your Free 7-Point Risk Scan</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why I'm Different Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              General IT Providers Treat Healthcare Like Any Other Business — I Don't.
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                Healthcare IT is regulated, audited, and unforgiving.
                One misconfigured backup or unsecured device can lead to:
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                  <span>A $175,000 HIPAA fine</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                  <span>OCR investigations</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                  <span>Lost clinic days</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                  <span>Breached patient trust</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 mr-2 flex-shrink-0" />
                  <span>Permanent reputation damage</span>
                </li>
              </ul>
              <p className="text-base leading-relaxed mt-6">
                Most IT companies avoid signing real BAAs or provide watered-down versions that don't hold up under scrutiny.
              </p>
              <p className="text-base leading-relaxed">
                I sign a <strong className="text-foreground">full, detailed BAA with clearly defined responsibilities and documented safeguards</strong>—exactly what Manhattan practices require.
              </p>
              <p className="text-base leading-relaxed font-semibold text-foreground">
                Your patient data isn't "business data." It's regulated information with legal consequences, and that demands a specialist.
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
              Expertise With the EHR Systems Manhattan Practices Use
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Why I Built PulseOpsIT
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                After years supporting Manhattan medical practices, one pattern never changed: General IT providers treating healthcare like any other business.
              </p>
              <p className="text-base leading-relaxed">
                That's how preventable mistakes become breaches.<br />
                That's how a simple misconfiguration becomes a $175,000 fine.<br />
                That's how practices lose entire clinic days because their EHR refuses to load.
              </p>
              <p className="text-base leading-relaxed">
                PulseOpsIT exists to eliminate those failures with proactive compliance management, real-time monitoring, and specialist-level understanding of the EHR systems Manhattan practices use.
              </p>
              <p className="text-base leading-relaxed font-semibold text-foreground">
                I don't treat your clinic like a generic small business.<br />
                I treat it like a regulated medical environment—because that's exactly what it is.
              </p>
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

              <div className="col-span-full mt-4 mb-2">
                <div className="bg-muted/50 border border-border rounded-lg p-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Regulatory Note:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Office for Civil Rights (OCR) has pursued litigation for serious HIPAA violations, and in several cases has even filed criminal charges. As Director Jocelyn Samuels stated in 2016, "While voluntary compliance is preferred, OCR will pursue litigation when necessary to enforce HIPAA."
                  </p>
                </div>
              </div>

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

      {/* Device-Based Pricing Section */}
      <section id="pricing" className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Predictable HIPAA-Aligned IT — Priced by Device for Maximum Flexibility
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Starter Plan */}
              <Card className="border-primary/20 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">STARTER</CardTitle>
                  <CardDescription className="text-sm mb-4">1–20 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$100<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance: $5,500</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Includes:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full HIPAA Compliance & Detailed BAA</li>
                    <li>• EHR Performance Monitoring</li>
                    <li>• Proactive Security & Cloud Backup</li>
                    <li>• Unlimited Support via Slack/Zoom/Email</li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <a href="#cta-section">Schedule Your Snapshot</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Growth Plan */}
              <Card className="border-primary shadow-strong relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">GROWTH</CardTitle>
                  <CardDescription className="text-sm mb-4">21–50 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$90<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance: $7,000</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Everything in Starter, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vendor liaison for EHR</li>
                    <li>• Risk analysis & staff training</li>
                    <li>• Proactive device & network management</li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <a href="#cta-section">Schedule Your Snapshot</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-primary/20 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">PREMIUM</CardTitle>
                  <CardDescription className="text-sm mb-4">51–100 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$80<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance: $9,000</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Everything in Growth, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Advanced workflow optimization</li>
                    <li>• Real-time EHR uptime dashboards</li>
                    <li>• Ransomware protection & immutable backups</li>
                    <li>• HIPAA audit preparation & documentation</li>
                  </ul>
                  <Button className="w-full mt-4" asChild>
                    <a href="#cta-section">Schedule Your Snapshot</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <h3 className="font-semibold text-lg mb-3">Add-Ons (All Plans)</h3>
              <p className="text-sm text-muted-foreground mb-3">$50–$500/month per service</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-background px-3 py-1 rounded-md border border-border">Cybersecurity training</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Additional device support</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">EHR customization</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Extra backup capacity</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Compliance reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="services" className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              The Three Pillars of Practice Protection
            </h2>
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
                  <li>• Risk Analysis & Ongoing Management</li>
                  <li>• Administrative, Technical & Physical Safeguards</li>
                  <li>• Staff Training & Documentation</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/hipaa-compliance">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Start Your Risk Scan</a>
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
                  <li>• Real-time monitoring</li>
                  <li>• Performance tuning</li>
                  <li>• Vendor coordination</li>
                  <li>• Secure remote access</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/ehr-uptime">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Start Your Risk Scan</a>
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
                  <li>• Immutable backups</li>
                  <li>• Business continuity</li>
                  <li>• Ransomware protection</li>
                  <li>• Disaster recovery planning</li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/data-security">Learn More</a>
                </Button>
                <Button className="w-full" asChild>
                  <a href="#cta-section">Start Your Risk Scan</a>
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

      <OutcomesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
