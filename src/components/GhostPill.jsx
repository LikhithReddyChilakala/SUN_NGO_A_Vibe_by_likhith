import React, { useState, useEffect } from 'react';

const GhostPill = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute('data-theme');
            if (newTheme) {
              setTheme(newTheme);
            }
          }
        });
      },
      {
        rootMargin: "-24px 0px -90% 0px",
      }
    );

    const sections = document.querySelectorAll('.observe-theme');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Notice the links are now <a> tags pointing to #ids
  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 transition-colors duration-300 shadow-2xl ${theme === 'dark' ? 'text-white' : 'text-indigo-950 font-semibold border-indigo-950/20'}`}>
      <a href="#hero" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Home</a>
      <a href="#about" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Story</a>
      <a href="#gallery" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Gallery</a>
      <a href="#contact" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Contact</a>
    </nav>
  );
};

export default GhostPill;
