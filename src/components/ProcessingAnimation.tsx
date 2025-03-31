
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProcessingAnimationProps {
  onComplete: () => void;
}

const ProcessingAnimation: React.FC<ProcessingAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Analyzing image...");
  
  useEffect(() => {
    const messages = [
      "Analyzing image...",
      "Extracting color palette...",
      "Applying Ghibli style transfer...",
      "Adding magical elements...",
      "Enhancing details...",
      "Creating final artwork...",
      "Almost there..."
    ];
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 - prevProgress) * 0.1;
        
        // Update status message based on progress
        if (newProgress > 15 && currentIndex < messages.length - 1) {
          currentIndex++;
          setStatusText(messages[currentIndex]);
        }
        
        // Complete when close to 100%
        if (newProgress > 98) {
          clearInterval(intervalId);
          setTimeout(() => {
            setProgress(100);
            setTimeout(onComplete, 500);
          }, 500);
        }
        
        return newProgress;
      });
    }, 800);
    
    return () => clearInterval(intervalId);
  }, [onComplete]);
  
  return (
    <Card className="w-full max-w-md mx-auto border-ghibli-blue/30">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Creating Your Ghibli Artwork</h2>
            <p className="text-gray-600">Our AI is working its magic. This may take a moment...</p>
          </div>
          
          <div className="space-y-4">
            <div className="h-32 w-full bg-ghibli-blue/10 rounded-lg flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 ghibli-bg opacity-10"></div>
              <div className="flex flex-col items-center justify-center space-y-3 z-10">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-ghibli-blue animate-bounce" 
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 animate-pulse-slow">{statusText}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Progress value={progress} className="progress-bar from-ghibli-blue via-ghibli-green to-ghibli-pink" />
              <p className="text-xs text-gray-500 text-right">{Math.round(progress)}% complete</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 italic">
              "The magic is in the waiting." — Studio Ghibli
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingAnimation;
