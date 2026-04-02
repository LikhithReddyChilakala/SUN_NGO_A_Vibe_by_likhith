import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import GhostPill from '../components/GhostPill';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-indigo-950 font-sans">
      <GhostPill />
      
      {/* Curtain Reveal */}
      <main className="relative z-10 bg-slate-50 mb-[80vh] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 w-full h-[80vh] z-0 bg-indigo-950 flex flex-col justify-center items-center text-white">
        <h2 
          onClick={() => navigate('/contact')}
          className="text-[clamp(4rem,10vw,10rem)] font-extrabold tracking-tighter hover:text-orange-500 transition-colors duration-500 cursor-pointer"
        >
          Your Turn.
        </h2>
        <div className="absolute bottom-12 text-white/50 tracking-widest uppercase text-sm">
          SUN Foundation © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
