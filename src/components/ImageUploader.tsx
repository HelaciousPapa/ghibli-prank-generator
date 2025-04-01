
import React, { useState, useRef } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      processSelectedFile(file);
    }
  };
  
  const processSelectedFile = (file: File) => {
    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleSubmit = () => {
    if (selectedFile) {
      onImageSelect(selectedFile);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processSelectedFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleClickDropzone = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className="max-w-md mx-auto">
      <Card className="border-4 border-dashed border-black bg-white/90 relative overflow-visible" style={{
        borderRadius: '8px',
        boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.75)'
      }}>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Your Photo</h2>
              <p className="text-gray-600">Drag & drop or click to select a photo to transform</p>
            </div>
            
            <div 
              className={`
                border-2 border-dashed ${isDragging ? 'border-undrads-blue' : 'border-gray-300'} 
                rounded-lg p-6 text-center h-48 flex flex-col items-center justify-center 
                bg-gray-50 cursor-pointer transition-all duration-200 
                ${isDragging ? 'bg-undrads-blue/10' : 'hover:bg-gray-100'}
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleClickDropzone}
            >
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
                  <ImageIcon className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to browse or drag and drop your image here</p>
                </>
              )}
              <Input
                id="image-upload"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            
            <Button 
              onClick={handleSubmit}
              disabled={!selectedFile}
              className="w-full py-6 rounded-full font-medium bg-gradient-to-r from-undrads-lightBlue to-undrads-blue text-white border-2 border-blue-700 shadow-md transform hover:-translate-y-1 transition-all"
            >
              <Upload className="mr-2 h-5 w-5" /> Upload Photo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploader;
