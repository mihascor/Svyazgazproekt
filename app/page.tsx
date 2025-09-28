'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
        <div className="flex items-center justify-between min-w-[900px]">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
                alt="СГП Связьгазпроект"
                className="h-16 w-auto"
                style={{ transform: 'scaleX(1.2)' }}
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
            {/* Компания dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Компания</span>
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[200px] shadow-2xl">
                  <Link href="/about" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    О нас
                  </Link>
                  <Link href="/clients" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Наши заказчики
                  </Link>
                  <Link href="/documents" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Документы
                  </Link>
                </div>
              )}
            </div>

            {/* Деятельность dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${activeDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'activity' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[320px] shadow-2xl">
                  <Link href="/engineering-surveys" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                </div>
              )}
            </div>

            {/* Regular links */}
            <Link href="/projects" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Реализованные проекты
            </Link>
            <a href="#контакты" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Контакты
            </a>
          </nav>
          
          <a href="tel:+74951234567" 
             className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Связаться
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <div className="relative">
            <img 
              src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
              alt="СГП Связьгазпроект"
              className="h-12 w-auto"
              style={{ transform: 'scaleX(1.2)' }}
            />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
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
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors">
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

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors">
                Реализованные проекты
              </Link>
              <a href="#контакты" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors">
                Контакты
              </a>
              <div className="pt-4 border-t border-white/20">
                <a href="tel:+78172239695" 
                   className="block bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full text-center font-semibold cursor-pointer">
                  Связаться
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeDropdowns}
        ></div>
      )}

      {/* Hero Section - Futuristic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url(https://readdy.ai/api/search-image?query=futuristic%20engineering%20holographic%20interface%20with%20floating%20digital%20blueprints%2C%203D%20technical%20projections%20and%20data%20visualizations%2C%20advanced%20AI-powered%20construction%20planning%2C%20holographic%20building%20models%20with%20neon%20blue%20and%20cyan%20lighting%2C%20next-generation%20smart%20city%20infrastructure%20visualization%2C%20quantum%20computing%20engineering%20workspace%2C%20ultra-modern%20transparent%20displays&width=1920&height=1080&seq=hero-future-2030&orientation=landscape)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.3'
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          {/* Main Title */}
          <div className="space-y-4 lg:space-y-8 mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                ПРОЕКТНО-
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-500 bg-clip-text text-transparent transform -skew-x-6">
                ИЗЫСКАТЕЛЬСКИЕ
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-300 to-white bg-clip-text text-transparent">
                РАБОТЫ
              </span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-4 lg:px-8 py-4 lg:py-6">
                <p className="text-base sm:text-lg lg:text-2xl text-white font-light leading-relaxed">
                  Выполняем весь цикл проектно-изыскательских работ для систем охраны объектов
                  <span className="text-cyan-400"> топливно-энергетического комплекса</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 justify-center items-center mb-12 lg:mb-20">
            <a href="tel:+78172239695" className="w-full lg:w-auto group relative bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap">
              <span className="relative z-10">Связаться с нами</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <Link href="/projects" className="w-full lg:w-auto relative group border-2 border-white/30 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/5 transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Портфолио проектов</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 max-w-4xl mx-auto">
            {[ 
              { value: 'регалия №1', label: '', icon: 'ri-time-line', desc: '' }, 
              { value: 'регалия №2', label: '', icon: 'ri-infinity-line', desc: '' }, 
              { value: 'регалия №3', label: '', icon: 'ri-cpu-line', desc: '' }, 
              { value: 'регалия №4', label: '', icon: 'ri-global-line', desc: '' }
            ].map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 lg:p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 flex items-center justify-center">
                    <i className={`${stat.icon} text-cyan-400 text-lg lg:text-xl`}></i>
                  </div>
                  <div className="text-xs sm:text-sm lg:text-lg font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-400/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Cyberpunk */}
      <section id="контакты" className="py-16 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-900"></div>
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url(https://readdy.ai/api/search-image?query=cyberpunk%20contact%20interface%20with%20holographic%20communication%20systems%2C%20futuristic%20office%20building%20with%20neon%20lighting%2C%20advanced%20digital%20communication%20center%20with%20purple%20and%20cyan%20glows%2C%20next-generation%20corporate%20headquarters%20with%20floating%20displays%2C%20quantum%20communication%20facility&width=1920&height=1080&seq=contact-cyberpunk&orientation=landscape)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: '0.2'
             }}>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-8">
              <span className="text-cyan-300 text-sm font-light tracking-widest">КОНТАКТЫ</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                СВЯЗЬГАЗПРОЕКТ
              </span>
            </h2>
          </div>
          
          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 lg:gap-8">
              {[ 
                {
                  icon: 'ri-map-pin-line',
                  label: 'Юристический адрес',
                  value: '160012, Вологодская обл., г. Вологда, ул. Козленская, д. 119а, оф. 308/9',
                  link: '#',
                  gradient: 'from-green-400 to-cyan-400'
                },
                {
                  icon: 'ri-phone-line',
                  label: 'Телефон центрального офиса',
                  value: '+7 (817) 223-96-95',
                  link: 'tel:+78172289695',
                  gradient: 'from-blue-500 to-cyan-400'
                },
                {
                  icon: 'ri-mail-line',
                  label: 'Адрес электронной почты',
                  value: 'post@issgp.ru',
                  link: 'mailto:post@issgp.ru',
                  gradient: 'from-purple-500 to-pink-400'
                }
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  <div className="flex items-start space-x-4 lg:space-x-6 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer">
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${contact.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <i className={`${contact.icon} text-xl lg:text-2xl text-gray-600`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/70 uppercase tracking-widest mb-3 font-light">{contact.label}</div>
                      <a href={contact.link} className="text-lg lg:text-xl font-semibold text-white hover:text-cyan-400 transition-colors block leading-relaxed break-words">
                        {contact.value}
                      </a>
                    </div>
                    <i className="ri-arrow-right-line text-cyan-400 text-xl group-hover:translate-x-2 transition-transform duration-300 hidden lg:block"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Yandex Map */}
            <div className="mt-8 lg:mt-12">
              <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-8 hover:border-cyan-400/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-cyan-400 bg-opacity-20 rounded-2xl flex items-center justify-center">
                    <i className="ri-map-2-line text-xl lg:text-2xl text-gray-600"></i>
                  </div>
                  <div>
                    <div className="text-sm text-white/70 uppercase tracking-widest mb-2 font-light">Местоположение</div>
                    <div className="text-lg lg:text-xl font-semibold text-white">Региональные офисы</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/20 mb-6">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?pt=39.8839,59.2239,pm2rdm~39.2088,51.6754,pm2blm~41.9734,45.0428,pm2blm~84.9744,56.4977,pm2blm~30.3609,59.9311,pm2blm~43.9361,56.2965,pm2blm~49.0661,55.8304,pm2blm&z=4&l=map"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    className="w-full lg:h-[400px]"
                    title="Яндекс Карта - Региональные офисы Связьгазпроект"
                  ></iframe>
                </div>
                
                {/* Offices Table */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white">Адреса офисов</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-3 text-white/70 font-medium">Город</th>
                          <th className="text-left p-3 text-white/70 font-medium hidden lg:table-cell">Адрес</th>
                          <th className="text-left p-3 text-white/70 font-medium">Телефон</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <span className="text-white font-medium">Вологда</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                160012, Вологодская обл., г. Вологда, ул. Козленская, д. 119а, оф. 308/9
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">160012, Вологодская обл., г. Вологда, ул. Козленская, д. 119а, оф. 308/9</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Воронеж</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                ул. Урицкого, д. 151
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">ул. Урицкого, д. 151</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Ставрополь</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                пр-кт Кулакова, д. 7Г, пом. 33
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">пр-кт Кулакова, д. 7Г, пом. 33</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Томск</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                ул. Дзержинского, д. 8
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">ул. Дзержинского, д. 8</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Санкт-Петербург</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                Пулковское шоссе, д. 28А оф. 805
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">Пулковское шоссе, д. 28А оф. 805</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Нижний Новгород</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                ул. Новая, д. 10, пом. П10
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">ул. Новая, д. 10, пом. П10</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95</a>
                          </td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <span className="text-white font-medium">Казань</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden break-words">
                                пр-кт Победы, д. 173, оф. 114
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 hidden lg:table-cell">пр-кт Победы, д. 173, оф. 114</td>
                          <td className="p-3">
                            <a href="tel:+78172239695" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                              +7 (817) 223-96-95
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer - Minimalist Future */}
      <footer className="relative py-8 lg:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Bottom */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col lg:flex-row items-center justify-between text-base text-white/50 space-y-4 lg:space-y-0">
              <div className="text-center lg:text-left">© 2025 ООО «Связьгазпроект».</div>
              <div className="hover:text-cyan-400 transition-colors cursor-pointer text-center lg:text-right">Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
