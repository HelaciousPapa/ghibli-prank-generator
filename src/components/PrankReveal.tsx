
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile } from 'lucide-react';

interface PrankRevealProps {
  onShareClick: () => void;
}

const PrankReveal: React.FC<PrankRevealProps> = ({ onShareClick }) => {
  return (
    <Card className="sketchy w-full max-w-md mx-auto bg-white/90 relative overflow-visible">
      <CardContent className="pt-6">
        <div className="space-y-6 text-center">
          <div className="mb-4">
            <Smile className="h-16 w-16 text-[#2563EB] mx-auto animate-bounce-subtle" />
          </div>
          
          <h2 className="text-3xl font-bold text-[#2563EB] mb-2">April Fools!</h2>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-700">
              You've been pranked! There is no Ghibli art generator.
            </p>
            
            <p className="text-gray-600">
              But while you're here, let us introduce UndrAds - the real magic behind optimizing publisher ads and maximizing revenue.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">
                UndrAds helps publishers earn more by optimizing ad placements with real AI technology (not fake like this prank).
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={onShareClick}
                className="bg-[#2563EB] text-white hover:opacity-90 transition-opacity"
              >
                Prank Your Friends
              </Button>
              
              <Button 
                variant="outline" 
                className="border-[#2563EB] text-[#2563EB] hover:bg-blue-50"
                onClick={() => window.open("https://undrads.com", "_blank")}
              >
                Learn About UndrAds
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrankReveal;
