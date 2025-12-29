'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ClientsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Массив заказчиков (32 компании)
  const companies = [
    'ООО «ГАЗПРОМ ИНВЕСТ»',
    'ООО «АЧИМ ДЕВЕЛОПМЕНТ»',
    'ООО «ГЛ ИНЖИНИРИНГ»',
    'ООО «ГАЗПРОМ ГАЗИФИКАЦИЯ»',
    'ООО «ГАЗПРОМ ЭНЕРГО»',
    'ООО «ГАЗПРОМ ДОБЫЧА КРАСНОДАР»',
    'ООО «ГАЗПРОМ ДОБЫЧА НАДЫМ»',
    'ООО «ГАЗПРОМ ДОБЫЧА НОЯБРЬСК»',
    'ООО «ГАЗПРОМ ДОБЫЧА УРЕНГОЙ»',
    'ООО «ГАЗПРОМ ДОБЫЧА ЯМБУРГ»',
    'ООО «ГАЗПРОМ ДОБЫЧА АСТРАХАНЬ»',
    'ООО «ГАЗПРОМ ДОБЫЧА ИРКУТСК»',
    'ООО «ГАЗПРОМ ДОБЫЧА ОРЕНБУРГ»',
    'ПАО «ГАЗПРОМ НЕФТЬ»',
    'ООО «ГАЗПРОМНЕФТЬ-ЗАПОЛЯРЬЕ»',
    'ООО «ГАЗПРОМ ПЕРЕРАБОТКА»',
    'ООО «ГАЗПРОМ ПРОЕКТИРОВАНИЕ»',
    'ООО «ГАЗПРОМ ПХГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ВОЛГОГРАД»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЕКАТЕРИНБУРГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ КАЗАНЬ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ КРАСНОДАР»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ МОСКВА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ СУРГУТ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ТОМСК»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ УХТА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЧАЙКОВСКИЙ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЮГОРСК»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ НИЖНИЙ НОВГОРОД»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ САНКТ-ПЕТЕРБУРГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ САМАРА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ СТАВРОПОЛЬ»',
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
        <div className="flex items-center justify-between md:min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="/logo_sgp.svg"
                alt="СГП Связьгазпроект"
                className="h-12 md:h-16 w-auto rounded-sm"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/about" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-[#0485c1] bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Документы
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#0B1B2B] hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
          
          <a href="tel:+78172239695" 
             className="hidden md:inline-block bg-[#7d9ab2] text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
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
                   className="block text-center bg-[#7d9ab2] text-black px-6 py-3 rounded-full font-semibold">
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Clients Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div> */}
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `url('/clients_fon.webp')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.8'
               }}>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
              <div className="inline-block bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-6 py-2 mb-8 text-[#0B1B2B]">
                <span className="text-sm font-light tracking-widest">
                  НАШИ ЗАКАЗЧИКИ
                </span>
              </div>
              <div className="mx-auto max-w-full lg:max-w-[1000px]">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-none tracking-tight">
                  <span className="block text-[#3b6a97]">ВЕДУЩИЕ КОМПАНИИ</span>
                </h1>
              </div>
            <p className="text-lg md:text-2xl text-[#0B1B2B]/70 max-w-3xl mx-auto px-4">
              топливно-энергетического комплекса России доверяют нам свои проекты
            </p>
          </div>

          {/* Clients Grid - 32 companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {companies.map((company, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-xl p-4 md:p-6 hover:border-cyan-400/30 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-sm md:text-lg font-semibold text-[#0B1B2B] group-hover:text-[#0B1B2B]/30 transition-colors duration-300">
                      {company}
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
              <span>Связаться с нами</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Future */}
      <footer className="relative py-8 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Bottom */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-white/50 space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">© 2025 ООО «Связьгазпроект»</div>
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors cursor-pointer text-center lg:text-right">Политика обработки персональных данных</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
