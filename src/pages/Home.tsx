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
                Will Cost You. I Prevent Both — Guaranteed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              HIPAA-compliant IT & real-time EHR performance monitoring for 1–8 provider Manhattan medical practices.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Full BAA signed. No hourly billing. Zero ghosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
                <a href="#cta-section">Get My 24-Hour HIPAA Snapshot</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#pricing">View Device-Based Plans</a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/30">
              <span className="font-semibold">eClinicalWorks</span>
              <span>•</span>
              <span className="font-semibold">Athenahealth</span>
              <span>•</span>
              <span className="font-semibold">DrChrono</span>
              <span>•</span>
              <span className="font-semibold">Practice Fusion</span>
              <span>•</span>
              <span className="font-semibold">TherapyNotes</span>
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
                    Staff lose hours. Patients wait. Revenue slips with every minute of downtime.
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
                    OCR deadlines approaching. Compliance gaps growing. Risk rising.
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
                    Slow replies, vague excuses, unanswered tickets. Healthcare cannot operate on "maybe they'll respond."
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
              The Truth: Healthcare IT Isn't Like Any Other Industry
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p className="text-base leading-relaxed">
                Healthcare is regulated, audited, and unforgiving. One unsecured laptop, one misconfigured backup, or one sloppy IT provider can result in:
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
                Most IT companies avoid signing real BAAs — or offer watered-down versions that collapse under audit.
              </p>
              <p className="text-base leading-relaxed">
                I sign a <strong className="text-foreground">full, detailed, enforceable BAA with clearly defined responsibilities and documented safeguards.</strong>
              </p>
              <p className="text-base leading-relaxed">
                Because your clinic isn't a "small business."
              </p>
              <p className="text-base leading-relaxed font-semibold text-foreground">
                Your clinic is a regulated medical environment with patient safety and legal requirements.
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
              EHR Expertise Built for Small Manhattan Practices
            </h3>
            <p className="text-center text-muted-foreground mb-6 leading-relaxed">
              Optimized for the platforms your team relies on every day:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
              <span className="font-semibold text-lg">eClinicalWorks</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-semibold text-lg">Athenahealth</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-semibold text-lg">DrChrono</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-semibold text-lg">TherapyNotes</span>
              <span className="text-muted-foreground">•</span>
              <span className="font-semibold text-lg">Practice Fusion</span>
            </div>
            <p className="text-center text-muted-foreground text-sm leading-relaxed max-w-3xl mx-auto">
              Not just troubleshooting.<br />
              Workflow optimization, performance tuning, vendor coordination, and staff support for medical specialties including <strong className="text-foreground">Internal Medicine, Cardiology, Dermatology, Primary Care, and Mental Health</strong>.
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
                After years supporting Manhattan clinics, one pattern kept repeating:<br />
                General IT companies treating healthcare like any other business.
              </p>
              <p className="text-base leading-relaxed">
                That's how preventable mistakes turn into breaches.<br />
                That's how misconfigurations become audit failures.<br />
                That's how clinics lose entire days because their EHR refuses to load.
              </p>
              <p className="text-base leading-relaxed">
                PulseOpsIT was created to deliver proactive compliance management, real-time monitoring, and specialist-level EHR support — the standard Manhattan practices actually require.
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
                    The Office for Civil Rights has pursued litigation for serious HIPAA violations — including criminal cases in extreme instances. Their mandate is simple: "When voluntary compliance fails, enforcement follows."
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Device-Based Pricing — Predictable, HIPAA-Aligned, and Built for Scaling
              </h2>
              <p className="text-muted-foreground text-base">
                Most 1–8 provider Manhattan practices fall between 30–50 managed devices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Starter Plan */}
              <Card className="border-primary/20 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">⭐ STARTER</CardTitle>
                  <CardDescription className="text-sm mb-4">Ideal for 1–2 Providers<br />1–20 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$100<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance Program: $5,500</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Includes</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full HIPAA Compliance Program & Detailed BAA</li>
                    <li>• EHR Performance Monitoring</li>
                    <li>• Proactive Security & Cloud Backup</li>
                    <li>• Unlimited Support (Slack, Zoom, Email)</li>
                  </ul>
                  <p className="text-sm font-semibold text-foreground mt-3">
                    No hourly billing. No ticket limits.
                  </p>
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
                  <CardTitle className="text-xl mb-2">⭐⭐⭐ GROWTH</CardTitle>
                  <CardDescription className="text-sm mb-4">Most Popular (3–5 Providers)<br />21–50 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$90<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance Program: $7,000</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Everything in Starter, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vendor liaison for EHR</li>
                    <li>• Risk analysis & staff training</li>
                    <li>• Proactive device & network management</li>
                    <li>• Policy documentation & review</li>
                  </ul>
                  <p className="text-sm font-semibold text-foreground mt-3">
                    No hourly billing. No ticket limits.
                  </p>
                  <Button className="w-full mt-4" asChild>
                    <a href="#cta-section">Schedule Your Snapshot</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-primary/20 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">⭐⭐ PREMIUM</CardTitle>
                  <CardDescription className="text-sm mb-4">Ideal for 6–8 Providers Scaling Fast<br />51–100 Devices</CardDescription>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-foreground">$80<span className="text-base font-normal text-muted-foreground">/device/mo</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Setup & Compliance Program: $9,000</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-semibold text-sm mb-2">Everything in Growth, plus:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-time EHR uptime dashboards</li>
                    <li>• Immutable ransomware-protected backups</li>
                    <li>• Workflow optimization for clinical operations</li>
                    <li>• Full HIPAA audit preparation</li>
                  </ul>
                  <p className="text-sm font-semibold text-foreground mt-3">
                    No hourly billing. No ticket limits.
                  </p>
                  <Button className="w-full mt-4" asChild>
                    <a href="#cta-section">Schedule Your Snapshot</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg border border-border text-center">
              <h3 className="font-semibold text-lg mb-3">ADD-ONS (OPTIONAL)</h3>
              <p className="text-sm text-muted-foreground mb-3">$50–$500/mo per service</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="bg-background px-3 py-1 rounded-md border border-border">Cybersecurity training</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Additional devices</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Additional backup capacity</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">EHR customization</span>
                <span className="bg-background px-3 py-1 rounded-md border border-border">Advanced compliance reporting</span>
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
                  <li>• Full BAA</li>
                  <li>• Risk Analysis</li>
                  <li>• Safeguards</li>
                  <li>• Documentation</li>
                  <li>• Staff Training</li>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
              PulseOpsIT vs. Typical IT Provider
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Most IT companies don't sign real BAAs. I do — because healthcare isn't optional-risk.
            </p>
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
