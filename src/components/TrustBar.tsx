import { Shield, FileCheck, MapPin } from "lucide-react";

const TrustBar = () => {
  return (
    <div className="bg-muted border-y border-border py-4">
      <div className="container mx-auto px-4">
        {/* Top Row - Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm mb-4">
          <div className="flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-primary" />
            <span className="font-medium">Full BAA Provided</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-medium">Healthcare-Focused IT</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Manhattan Practices Only</span>
          </div>
        </div>
        
        {/* Bottom Row - EHR Systems */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground border-t border-border pt-3">
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
  );
};

export default TrustBar;
