
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RevealCountdownProps {
  onReveal: () => void;
}

const RevealCountdown: React.FC<RevealCountdownProps> = ({ onReveal }) => {
  const [countdown, setCountdown] = useState(3);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    if (!isReady) return;
    
    if (countdown <= 0) {
      onReveal();
      return;
    }
    
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [countdown, isReady, onReveal]);
  
  return (
    <Card className="sketchy w-full max-w-md mx-auto bg-white/90 relative overflow-visible">
      <CardContent className="pt-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-[#2563EB] mb-2">Your Ghibli Art is Ready!</h2>
          
          {!isReady ? (
            <div className="space-y-4">
              <p className="text-xl text-gray-700">Are you ready to see your masterpiece?</p>
              <Button 
                onClick={() => setIsReady(true)}
                className="w-full py-6 rounded-full font-medium bg-[#2563EB] text-white border-2 border-blue-700 shadow-md transform hover:-translate-y-1 transition-all"
              >
                Yes, show me!
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-xl text-gray-700">Get ready! Revealing in...</p>
              <div className="flex items-center justify-center">
                <div className="text-6xl font-bold text-[#2563EB] animate-bounce-subtle">
                  {countdown === 0 ? "🎨" : countdown}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevealCountdown;
