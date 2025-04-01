
import React from 'react';

const ExampleGallery = () => {
  // Using the provided Ghibli-style images
  const examples = [
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/ghibli-style-memes-are-what-the-internet-is-obsessing-over-today-photo-wearenearyoux-273522555-16x9_0.png',
    'https://economictimes.indiatimes.com/thumb/msid-119638556,width-1200,height-900,resizemode-4,imgsize-2105314/ghibli-art.jpg',
    'https://images.hindustantimes.com/tech/img/2025/03/28/1600x900/ChatGPT_Ghibli_style_images_1743161814450_1743161814596.jpg',
    'https://arynews.tv/wp-content/uploads/2025/03/Ghibli-1-696x342.png'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mb-16">
      <div className="flex justify-center items-center gap-3 md:gap-8 -rotate-2">
        {examples.map((image, index) => (
          <div 
            key={index}
            className={`
              relative rounded-xl overflow-hidden transform 
              ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} 
              hover:scale-105 transition-transform duration-300
            `}
            style={{
              width: 'calc(25% - 1rem)',
              maxWidth: '300px',
              height: '180px',
              zIndex: 10 - index,
              border: '3px solid #000',
              boxShadow: '3px 3px 0 #000',
              backgroundClip: 'padding-box'
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
