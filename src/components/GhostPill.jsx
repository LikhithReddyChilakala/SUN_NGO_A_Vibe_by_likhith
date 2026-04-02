import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GhostPill = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // We observe any elements that have intersection observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element crosses into our root margin, update the theme
          if (entry.isIntersecting) {
            const newTheme = entry.target.getAttribute('data-theme');
            if (newTheme) {
              setTheme(newTheme);
            }
          }
        });
      },
      {
        // Triggers exactly when a section passes behind the pill at the top
        rootMargin: "-24px 0px -90% 0px",
      }
    );

    const sections = document.querySelectorAll('.observe-theme');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 transition-colors duration-300 shadow-2xl ${theme === 'dark' ? 'text-white' : 'text-indigo-950 font-semibold border-indigo-950/20'}`}>
      <Link to="/" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">About</Link>
      <Link to="/teams" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Teams</Link>
      <Link to="/gallery" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Gallery</Link>
      <Link to="/contact" className="hover:text-orange-500 transition-colors font-medium text-sm tracking-widest uppercase">Contact</Link>
    </nav>
  );
};

export default GhostPill;
