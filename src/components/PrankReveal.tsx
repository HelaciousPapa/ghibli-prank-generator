
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile } from 'lucide-react';

interface PrankRevealProps {
  onShareClick: () => void;
}

const PrankReveal: React.FC<PrankRevealProps> = ({ onShareClick }) => {
  return (
    <Card className="w-full max-w-md mx-auto border-ghibli-pink/30">
      <CardContent className="pt-6">
        <div className="space-y-6 text-center">
          <div className="mb-4">
            <Smile className="h-16 w-16 text-ghibli-pink mx-auto animate-bounce-subtle" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-2">April Fools!</h2>
          
          <div className="space-y-4">
            <p className="text-xl text-gray-700">
              You've been pranked! There is no Ghibli art generator.
            </p>
            
            <p className="text-gray-600">
              But while you're here, let us introduce UndrAds - the real magic behind optimizing publisher ads and maximizing revenue.
            </p>
            
            <div className="bg-ghibli-yellow/20 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">
                UndrAds helps publishers earn more by optimizing ad placements with real AI technology (not fake like this prank).
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={onShareClick}
                className="bg-gradient-to-r from-ghibli-orange to-ghibli-pink hover:opacity-90 transition-opacity"
              >
                Prank Your Friends
              </Button>
              
              <Button 
                variant="outline" 
                className="border-ghibli-blue text-ghibli-blue hover:bg-ghibli-blue/10"
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
