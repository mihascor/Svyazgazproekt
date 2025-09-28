
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
        <div className="flex items-center justify-between min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
                alt="СГП Связьгазпроект"
                className="h-16 w-auto"
                style={{ transform: 'scaleX(1.2)' }}
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/about" className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Документы
            </Link>
          </nav>
          
          <a href="tel:+78172239695" 
             className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Связаться
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative">
            <img 
              src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
              alt="СГП Связьгазпроект"
              className="h-12 w-auto"
              style={{ transform: 'scaleX(1.2)' }}
            />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <nav className="px-4 py-2 space-y-1">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                Главная
              </Link>

              {/* Компания dropdown */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('company')}
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <span>Компания</span>
                  <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${mobileDropdown === 'company' ? 'rotate-180' : ''}`}></i>
                </button>
                {mobileDropdown === 'company' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-cyan-400 bg-white/10 rounded-lg transition-colors">
                      О нас
                    </Link>
                    <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      Наши заказчики
                    </Link>
                    <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      Документы
                    </Link>
                  </div>
                )}
              </div>

              {/* Деятельность dropdown */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('activity')}
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <span>Деятельность</span>
                  <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${mobileDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
                </button>
                {mobileDropdown === 'activity' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link href="/engineering-surveys" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      Инженерные изыскания
                    </Link>
                    <Link href="/security-systems" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      Системы безопасности
                    </Link>
                    <Link href="/author-supervision" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
                      Авторский надзор
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                Реализованные проекты
              </Link>
              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                Контакты
              </Link>
              <div className="pt-4 border-t border-white/20">
                <a href="tel:+78172239695" 
                   className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold cursor-pointer">
                  Связаться
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* About Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `url(https://readdy.ai/api/search-image?query=modern%20engineering%20office%20with%20professional%20team%20working%20on%20technical%20blueprints%20and%20digital%20displays%2C%20corporate%20workspace%20with%20advanced%20CAD%20systems%20and%20holographic%20project%20visualizations%2C%20experienced%20engineers%20analyzing%20complex%20infrastructure%20plans%2C%20professional%20consulting%20environment%20with%20cutting-edge%20technology&width=1920&height=1080&seq=about-company&orientation=landscape)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.3'
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-8">
              <span className="text-cyan-300 text-sm font-light tracking-widest">О КОМПАНИИ</span>
            </div>
            <h1 className="text-3xl lg:text-6xl font-black leading-tight mb-8">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                СВЯЗЬГАЗПРОЕКТ
              </span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-4">Наш опыт</h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                  Текст
                </p>
              </div>

              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-4">Виды деятельности</h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                  Текст
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {[
                { icon: 'ri-team-line', title: 'Наша команда', desc: 'Текст' },
                { icon: 'ri-global-line', title: 'Наша география', desc: 'Текст' },
                { icon: 'ri-building-line', title: 'Членство в саморегулируемых организациях', desc: 'Текст' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 lg:p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-lg lg:text-xl text-cyan-400`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 lg:mt-16">
            <a href="tel:+78172239695" 
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
              <span>Обсудить проект</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
