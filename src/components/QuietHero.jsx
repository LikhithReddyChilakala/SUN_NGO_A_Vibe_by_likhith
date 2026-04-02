import React from 'react';

const QuietHero = () => {
  const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
  ];

  return (
    <div className="observe-theme sticky top-0 h-screen z-0 overflow-hidden bg-indigo-950" data-theme="dark">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${src})`,
            animation: `hero-fade 18s infinite ${index * 6}s`,
            opacity: 0, 
          }}
        />
      ))}
      <div className="absolute inset-0 bg-indigo-950/40" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 p-4">
        <h1 className="text-[clamp(3rem,8vw,8rem)] italic font-light text-white tracking-wide mix-blend-overlay">
          SUN Foundation
        </h1>
        <p className="text-white/80 mt-4 text-xl tracking-[0.3em] uppercase">
          Empowering Communities
        </p>
      </div>
    </div>
  );
};

export default QuietHero;
