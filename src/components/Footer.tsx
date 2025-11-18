import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PulseOpsIT
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              HIPAA-Compliant IT Services for Manhattan Medical Practices
            </p>
            <p className="text-sm font-medium text-foreground mb-3">
              Serving Manhattan Medical Practices Exclusively
            </p>
          </div>

          {/* Contact */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-2">
              <a
                href="mailto:support@pulseopsit.com"
                className="hover:text-foreground transition-colors"
              >
                support@pulseopsit.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Manhattan, New York
            </p>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground mb-6 pb-6 border-b border-border">
            <span className="font-semibold">Full BAA Provided</span>
            <span>•</span>
            <span className="font-semibold">Healthcare-Focused IT</span>
            <span>•</span>
            <span className="font-semibold">Not affiliated with any EHR vendors</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PulseOpsIT. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
