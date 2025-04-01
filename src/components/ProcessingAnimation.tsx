
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
      "Creating final artwork..."
    ];
    
    let currentIndex = 0;
    // Reduce the interval time to speed up the process
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 - prevProgress) * 0.15; // Increased speed
        
        // Update status message based on progress
        if (newProgress > 15 && currentIndex < messages.length - 1) {
          currentIndex++;
          setStatusText(messages[currentIndex]);
        }
        
        // Complete when close to 100%
        if (newProgress > 95) {
          clearInterval(intervalId);
          setTimeout(() => {
            setProgress(100);
            setTimeout(onComplete, 300); // Reduced wait time
          }, 300); // Reduced delay
        }
        
        return newProgress;
      });
    }, 500); // Reduced interval from 800ms to 500ms
    
    return () => clearInterval(intervalId);
  }, [onComplete]);
  
  return (
    <Card className="sketchy w-full max-w-md mx-auto bg-white/90 relative overflow-visible">
      <CardContent className="pt-6 p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2563EB] mb-2">Creating Your Ghibli Artwork</h2>
            <p className="text-gray-600">Our AI is working its magic. This may take a moment...</p>
          </div>
          
          <div className="space-y-4">
            <div className="h-32 w-full bg-blue-50 rounded-lg flex items-center justify-center overflow-hidden relative">
              <div className="flex flex-col items-center justify-center space-y-3 z-10">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-3 h-3 rounded-full bg-[#2563EB] animate-bounce" 
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 animate-pulse-slow">{statusText}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Progress value={progress} className="h-3 bg-gray-200">
                <div 
                  className="h-full rounded-full bg-[#2563EB]" 
                  style={{ width: `${progress}%` }}
                />
              </Progress>
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
