'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#7d9ab2] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 cursor-pointer flex items-center justify-center"
          aria-label="Наверх"
        >
          <i className="ri-arrow-up-line text-xl font-bold"></i>
        </button>
      )}
    </>
  );
}