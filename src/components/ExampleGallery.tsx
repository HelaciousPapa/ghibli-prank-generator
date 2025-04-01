
import React from 'react';

const ExampleGallery = () => {
  // These would be replaced with actual Ghibli-style images
  const examples = [
    '/lovable-uploads/8db93427-5c3d-4239-a0c3-05495b74a6d3.png',
    '/lovable-uploads/8db93427-5c3d-4239-a0c3-05495b74a6d3.png',
    '/lovable-uploads/8db93427-5c3d-4239-a0c3-05495b74a6d3.png',
    '/lovable-uploads/8db93427-5c3d-4239-a0c3-05495b74a6d3.png'
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="flex justify-center items-center gap-2 md:gap-6 -rotate-2">
        {examples.map((image, index) => (
          <div 
            key={index}
            className={`
              relative rounded-xl overflow-hidden border-4 border-white shadow-xl transform 
              ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} 
              hover:scale-105 transition-transform duration-300
            `}
            style={{
              width: 'calc(25% - 1rem)',
              maxWidth: '220px',
              zIndex: 10 - index
            }}
          >
            <img 
              src={image} 
              alt={`Ghibli art example ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleGallery;
