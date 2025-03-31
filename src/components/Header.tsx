
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showVideo: boolean;
}

const Header: React.FC<HeaderProps> = ({ showVideo }) => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-ghibli-blue rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">U</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-ghibli-blue to-ghibli-green bg-clip-text text-transparent">
            UndrAds Ghibli Generator
          </h1>
        </div>
        
        {showVideo && (
          <div className="hidden md:block">
            <Button variant="outline" className="text-sm" onClick={() => window.open("https://undrads.com", "_blank")}>
              Learn About UndrAds
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
