
'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
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
          className="fixed bottom-8 right-8 z-50 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          style={{ backgroundColor: '#005F8A' }}
          aria-label="Прокрутить наверх"
        >
          <div className="w-6 h-6 flex items-center justify-center mx-auto">
            <i className="ri-arrow-up-line text-xl font-bold"></i>
          </div>
        </button>
      )}
    </>
  );
}
