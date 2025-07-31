
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2025 ООО «Связьгазпроект».
Все права защищены.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <Link 
              href="/privacy-policy" 
              className="text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}