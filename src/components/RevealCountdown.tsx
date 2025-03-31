
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
    <Card className="w-full max-w-md mx-auto border-ghibli-blue/30">
      <CardContent className="pt-6">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Ghibli Art is Ready!</h2>
          
          {!isReady ? (
            <div className="space-y-4">
              <p className="text-xl text-gray-700">Are you ready to see your masterpiece?</p>
              <Button 
                onClick={() => setIsReady(true)}
                className="bg-gradient-to-r from-ghibli-pink to-ghibli-blue hover:opacity-90 transition-opacity px-6 py-2 text-lg"
              >
                Yes, show me!
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-xl text-gray-700">Get ready! Revealing in...</p>
              <div className="flex items-center justify-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-ghibli-orange to-ghibli-pink bg-clip-text text-transparent animate-bounce-subtle">
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
