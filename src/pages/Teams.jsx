import React from 'react';
import content from '../data/content.json';

const Teams = () => {
  return (
    <div className="observe-theme relative z-10 bg-slate-50 min-h-screen py-32 px-8 flex flex-col items-center" data-theme="light">
      <h2 className="text-6xl font-light text-indigo-950 mb-16 tracking-tight">Our Core Team.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {content.founders.map((founder, idx) => (
          <div key={idx} className="group flex flex-col items-center text-center cursor-default">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-slate-200 group-hover:border-orange-500 transition-colors duration-500 shadow-xl bg-indigo-900 flex items-center justify-center text-5xl font-light text-white/50">
              {founder.charAt(0)}
            </div>
            <h3 className="text-3xl text-indigo-950 font-medium mb-2">{founder}</h3>
            <p className="text-orange-500 uppercase tracking-widest text-sm font-bold">Co-Founder</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
