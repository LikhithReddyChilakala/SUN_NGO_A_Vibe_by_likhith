import React from 'react';
import content from '../data/content.json';

const Gallery = () => {
  const images = content.gallery;
  const row1 = images.slice(0, 4);
  const row2 = images.slice(4, 8);

  // Helper to render continuous marquee items
  const renderMarqueeItems = (items) => (
    <>
      {items.map((src, idx) => (
        <div key={`a-${idx}`} className="gallery-card w-[400px] h-[500px] flex-shrink-0 mx-4 overflow-hidden rounded-xl">
          <img src={src} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
        </div>
      ))}
      {/* Duplicate for seamless infinite scroll */}
      {items.map((src, idx) => (
        <div key={`b-${idx}`} className="gallery-card w-[400px] h-[500px] flex-shrink-0 mx-4 overflow-hidden rounded-xl">
          <img src={src} alt={`Gallery duplicate ${idx}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </>
  );

  return (
    <div className="observe-theme gallery-wrapper overflow-hidden bg-indigo-950 min-h-screen py-32 flex flex-col justify-center gap-8 relative z-10 w-full px-0" data-theme="dark">
      <h2 className="text-6xl font-light text-slate-50 mb-8 tracking-tight px-8 md:px-16">Impact in Motion.</h2>
      
      <div className="animate-marquee-left">
        {renderMarqueeItems(row1)}
        {renderMarqueeItems(row1)}
      </div>

      <div className="animate-marquee-right">
        {renderMarqueeItems(row2)}
        {renderMarqueeItems(row2)}
      </div>
    </div>
  );
};

export default Gallery;
