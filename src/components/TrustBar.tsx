import { Shield, FileCheck, MapPin } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-muted border-y border-border py-4">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-medium">Healthcare-Focused IT</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-primary" />
            <span className="font-medium">Full BAA Provided</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Serving Manhattan Practices Only</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
