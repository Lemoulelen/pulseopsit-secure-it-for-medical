import { Shield, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PulseOpsIT
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              HIPAA-Compliant IT Services for Manhattan Medical Practices
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>HIPAA Compliance</li>
              <li>EHR & Uptime Management</li>
              <li>Data Security & Recovery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <a
                href="mailto:support@pulseopsit.com"
                className="hover:text-foreground transition-colors"
              >
                support@pulseopsit.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground font-medium mt-3">
              Manhattan, New York
            </p>
            <p className="text-sm text-muted-foreground">
              Serving Manhattan Medical Practices Exclusively
            </p>
          </div>

          {/* Trust */}
          <div>
            <h3 className="font-semibold mb-4">Trust</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Full BAA Provided</li>
              <li>Healthcare-Focused IT</li>
              <li>Not affiliated with any EHR vendors</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PulseOpsIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
