
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = () => {
    if (selectedFile) {
      onImageSelect(selectedFile);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto border-ghibli-blue/30">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Transform Your Image</h2>
            <p className="text-gray-600">Upload an image and we'll convert it to a beautiful Ghibli-style artwork</p>
          </div>
          
          <div className="space-y-4">
            <div className="border-2 border-dashed border-ghibli-blue/50 rounded-lg p-4 text-center h-48 flex flex-col items-center justify-center bg-ghibli-blue/5">
              {previewUrl ? (
                <div className="relative w-full h-full">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="max-h-full max-w-full mx-auto object-contain" 
                  />
                </div>
              ) : (
                <>
                  <ImageIcon className="h-10 w-10 text-ghibli-blue mb-2" />
                  <p className="text-sm text-gray-500">Drag and drop your image here or click to browse</p>
                </>
              )}
            </div>
            
            <div>
              <Label htmlFor="image-upload" className="text-gray-700">Select Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
            </div>
            
            <Button 
              onClick={handleSubmit}
              disabled={!selectedFile}
              className="w-full bg-gradient-to-r from-ghibli-blue to-ghibli-green hover:opacity-90 transition-opacity"
            >
              <Upload className="mr-2 h-4 w-4" /> Transform to Ghibli Art
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
