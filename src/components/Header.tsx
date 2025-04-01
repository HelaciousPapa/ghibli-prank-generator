
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showVideo: boolean;
}

const Header: React.FC<HeaderProps> = ({ showVideo }) => {
  return (
    <header className="w-full py-6 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://undrads.com/static/images/general/main_logo.svg" 
            alt="UndrAds Logo" 
            className="h-8 md:h-10" 
          />
        </div>
        
        {showVideo && (
          <div className="hidden md:block">
            <Button 
              className="text-sm rounded-full font-medium bg-[#2563EB] hover:bg-[#1E40AF] text-white border-2 border-blue-700 shadow-md transform hover:-translate-y-1 transition-all" 
              onClick={() => window.open("https://undrads.com", "_blank")}
            >
              Generate Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
