import React from 'react';
import QuietHero from '../components/QuietHero';
import Testimonials from '../components/Testimonials';
import content from '../data/content.json';

const Home = () => {
  return (
    <div className="relative bg-indigo-950">
      <QuietHero />
      
      <div className="observe-theme relative z-10 bg-indigo-900 min-h-screen shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pt-32 px-8" data-theme="dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-light text-slate-50 mb-16 tracking-tight">Our Story.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div>
              <h3 className="text-orange-500 text-xl font-bold uppercase tracking-widest mb-6">Founders</h3>
              <ul className="space-y-4">
                {content.founders.map((founder, idx) => (
                  <li key={idx} className="text-3xl text-white font-light">{founder}</li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {content.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-orange-500 pl-6">
                  <div className="text-4xl md:text-5xl text-white font-bold mb-2">{metric.number || metric.year}</div>
                  <div className="text-slate-300 uppercase tracking-widest text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
