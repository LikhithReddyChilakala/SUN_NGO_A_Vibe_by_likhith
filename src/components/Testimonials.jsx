import React from 'react';
import content from '../data/content.json';

const Testimonials = () => {
  return (
    <div className="observe-theme py-32 px-8 bg-indigo-950" data-theme="dark">
      {content.testimonials.map((test, idx) => (
        <div key={idx} className="group relative cursor-default max-w-4xl mx-auto mb-32">
          <div className="absolute -left-16 -top-16 text-[15rem] font-serif leading-none text-orange-500/0 group-hover:text-orange-500/10 group-hover:-translate-y-8 transition-all duration-1000 select-none">
            "
          </div>
          <p className="text-4xl font-light text-white/30 group-hover:text-white transition-colors duration-700 leading-tight relative z-10">
            {test.quote}
          </p>
          <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-700 relative z-10 text-orange-500 font-bold text-xl">
            — {test.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
