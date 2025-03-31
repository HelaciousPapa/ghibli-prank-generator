
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Copy, Share } from 'lucide-react';
import { toast } from 'sonner';

interface ShareDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ShareDialog: React.FC<ShareDialogProps> = ({ isOpen, onOpenChange }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success("Link copied to clipboard!");
  };
  
  const shareOnSocialMedia = (platform: string) => {
    let url = '';
    const text = encodeURIComponent("Check out this amazing Ghibli art generator! 🎨 #AprilFools");
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${text} ${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank');
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share This Prank</DialogTitle>
          <DialogDescription>
            Send this to your friends and see if they fall for it too!
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center space-x-2 mt-4">
          <div className="grid flex-1 gap-2">
            <Input
              readOnly
              value={shareUrl}
              className="text-sm"
            />
          </div>
          <Button size="sm" onClick={copyToClipboard} className="px-3">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button 
            onClick={() => shareOnSocialMedia('twitter')}
            className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white"
          >
            <Share className="mr-2 h-4 w-4" /> Twitter
          </Button>
          <Button 
            onClick={() => shareOnSocialMedia('facebook')}
            className="bg-[#4267B2] hover:bg-[#375695] text-white"
          >
            <Share className="mr-2 h-4 w-4" /> Facebook
          </Button>
          <Button 
            onClick={() => shareOnSocialMedia('whatsapp')}
            className="bg-[#25D366] hover:bg-[#1eb959] text-white"
          >
            <Share className="mr-2 h-4 w-4" /> WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
