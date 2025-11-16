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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Guaranteed Uptime for Your EHR,{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Zero Tolerance for Compliance Risk
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Dedicated IT expertise focused solely on protecting your patient data and ensuring your
              1-8 provider practice runs without interruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 shadow-medium" asChild>
                <a href="#cta-section">Get Your Free Assessment</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Hidden Costs of IT Neglect in Healthcare
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-destructive/20 shadow-medium">
                <CardHeader>
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
                <CardHeader>
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

      {/* Solution Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Pillars of Practice Protection
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize exclusively in Manhattan medical practices, delivering enterprise-grade IT
              security and reliability without the enterprise complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">HIPAA Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full Business Associate Agreement</li>
                  <li>• Administrative, Technical & Physical Safeguards</li>
                  <li>• Risk Analysis & Management</li>
                  <li>• Ongoing Staff Training</li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <a href="/hipaa-compliance">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <Server className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">EHR & Uptime Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Vendor Liaison Management</li>
                  <li>• Proactive Performance Tuning</li>
                  <li>• Secure Remote Access</li>
                  <li>• eClinicalWorks, Athenahealth & More</li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <a href="/ehr-uptime">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-strong transition-all">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <HardDrive className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">Data Security & Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Business Continuity Planning</li>
                  <li>• Immutable Backup & Encryption</li>
                  <li>• Security Awareness Training</li>
                  <li>• Ransomware Protection</li>
                </ul>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <a href="/data-security">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Manhattan Practices Choose PulseOpsIT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">HIPAA-Focused Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Led by a Certified HIPAA Security Expert (CHSE) who understands the unique
                    compliance requirements of medical practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Server className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">EHR Specialist</h3>
                  <p className="text-sm text-muted-foreground">
                    We speak fluent eClinicalWorks, Athenahealth, TherapyNotes, and more. No more
                    translating between IT and your EHR vendor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Predictable Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Fixed monthly fees with no surprises. Initial project fee ranges from $5,500 -
                    $9,000, followed by tailored monthly support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Proactive, Not Reactive</h3>
                  <p className="text-sm text-muted-foreground">
                    We monitor, maintain, and prevent issues before they become emergencies. Your IT
                    should be invisible, not a source of daily stress.
                  </p>
                </div>
              </div>
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
