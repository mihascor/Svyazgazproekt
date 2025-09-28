
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ClientsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
        <div className="flex items-center justify-between md:min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
                alt="СГП Связьгазпроект"
                className="h-12 md:h-16 w-auto"
                style={{ transform: 'scaleX(1.2)' }}
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/about" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Документы
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
          
          <a href="tel:+78172239695" 
             className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Связаться
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Главная
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                О нас
              </Link>
              <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-cyan-400 bg-white/10 transition-colors">
                Заказчики
              </Link>
              <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Документы
              </Link>
              <div className="px-6 pt-4 border-t border-white/20">
                <a href="tel:+78172239695" 
                   className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold">
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Clients Section */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-16">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `url(https://readdy.ai/api/search-image?query=modern%20corporate%20office%20buildings%20and%20industrial%20facilities%20representing%20major%20Russian%20energy%20companies%2C%20professional%20business%20environment%20with%20glass%20facades%20and%20steel%20structures%2C%20corporate%20headquarters%20complex%20in%20evening%20lighting&width=1920&height=1080&seq=clients-corporate&orientation=landscape)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.2'
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <span className="text-cyan-300 text-xs md:text-sm font-light tracking-widest">НАШИ ЗАКАЗЧИКИ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                32 ВЕДУЩИЕ КОМПАНИИ
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto px-4">
              топливно-энергетического комплекса России доверяют нам свои проекты
            </p>
          </div>

          {/* Clients Grid - 32 companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 32 }, (_, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-4 md:p-6 hover:border-cyan-400/30 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-sm md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      ООО «ГАЗПРОМ ИНВЕСТ»
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <a href="tel:+78172239695" 
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
              <span>Стать нашим партнером</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Future */}
      <footer className="bg-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base text-white/50 space-y-4 md:space-y-0">
              <div>© 2025 ООО «Связьгазпроект». Все права защищены.</div>
              <div className="hover:text-cyan-400 transition-colors cursor-pointer">Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
