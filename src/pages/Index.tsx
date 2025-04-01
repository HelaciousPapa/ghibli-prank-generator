
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import ProcessingAnimation from '@/components/ProcessingAnimation';
import RevealCountdown from '@/components/RevealCountdown';
import PrankReveal from '@/components/PrankReveal';
import ShareDialog from '@/components/ShareDialog';
import ExampleGallery from '@/components/ExampleGallery';
import { motion } from 'framer-motion'; // Note: Framer Motion would need to be installed

enum AppState {
  UPLOAD,
  PROCESSING,
  COUNTDOWN,
  REVEAL
}

const Index = () => {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { toast } = useToast();
  
  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setAppState(AppState.PROCESSING);
    
    // Optional: Log the selected image for debugging
    console.log("Selected image:", file.name);
  };
  
  const handleProcessingComplete = () => {
    setAppState(AppState.COUNTDOWN);
  };
  
  const handleReveal = () => {
    setAppState(AppState.REVEAL);
  };
  
  const handleShareClick = () => {
    setIsShareOpen(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-undrads-bg">
      <Header showVideo={appState === AppState.REVEAL} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {appState === AppState.REVEAL && (
          <div className="w-full mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="April Fools Prank"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md max-w-xl mx-auto"
            ></iframe>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          {appState === AppState.UPLOAD && (
            <div className="animate-fade-in space-y-8">
              <ExampleGallery />
              
              <div className="mb-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 font-comic" style={{
                  textShadow: '3px 3px 0 #000',
                  color: 'white'
                }}>
                  Ghibli Art Generator
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Transform your photos into magical Ghibli-style artwork with our advanced AI technology
                </p>
              </div>
              
              <ImageUploader onImageSelect={handleImageSelect} />
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Create beautiful, shareable Ghibli-style art in seconds</p>
                <p className="mt-1">Powered by UndrAds Technology</p>
              </div>
            </div>
          )}
          
          {appState === AppState.PROCESSING && (
            <div className="animate-fade-in mt-8">
              <ProcessingAnimation onComplete={handleProcessingComplete} />
            </div>
          )}
          
          {appState === AppState.COUNTDOWN && (
            <div className="animate-fade-in mt-8">
              <RevealCountdown onReveal={handleReveal} />
            </div>
          )}
          
          {appState === AppState.REVEAL && (
            <div className="animate-fade-in mt-8">
              <PrankReveal onShareClick={handleShareClick} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="py-4 text-center text-sm text-gray-500 bg-white border-t">
        <p>© 2023 UndrAds - Helping publishers earn more through optimized ad placements</p>
      </footer>
      
      <ShareDialog 
        isOpen={isShareOpen}
        onOpenChange={setIsShareOpen}
      />
    </div>
  );
};

export default Index;
