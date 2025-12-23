'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [officesExpanded, setOfficesExpanded] = useState(false);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((v) => !v);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleOffices = () => {
    setOfficesExpanded((v) => !v);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Desktop Header */}
      <header
        className="hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4"
        onMouseLeave={closeDropdowns}
      >
        <div className="flex items-center justify-between min-w-[900px]">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="СГП Связьгазпроект"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-black">СГП</div>
                <div className="text-xs text-[#0B1B2B]/80">Связьгазпроект</div>
              </div>
            </Link>
          </div>

          <nav className="flex items-center space-x-2">
            {/* Компания dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => toggleDropdown('company')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Компания</span>
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    activeDropdown === 'company' ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>

              {/* ВСПЛЫВАЮЩЕЕ МЕНЮ НЕ ТРОГАЕМ */}
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[200px] shadow-2xl">
                  <Link
                    href="/about"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    О нас
                  </Link>
                  <Link
                    href="/clients"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Наши заказчики
                  </Link>
                  <Link
                    href="/documents"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Документы
                  </Link>
                  <Link
                    href="/news"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Новости
                  </Link>
                </div>
              )}
            </div>

            {/* Деятельность dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    activeDropdown === 'activity' ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>

              {/* ВСПЛЫВАЮЩЕЕ МЕНЮ НЕ ТРОГАЕМ */}
              {activeDropdown === 'activity' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[320px] shadow-2xl">
                  <Link
                    href="/data-collection"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Выполнение землеустроительных работ
                  </Link>
                  <Link
                    href="/engineering-surveys"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Выполнение комплексных инженерных изысканий
                  </Link>
                  <Link
                    href="/security-systems"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link
                    href="/author-supervision"
                    onClick={closeDropdowns}
                    className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
                  >
                    Осуществление авторского надзора за строительством
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className="px-4 py-2 text-[#0B1B2B]/70 hover:text-[#0B1B2B] transition-colors cursor-pointer whitespace-nowrap"
            >
              Проекты
            </Link>
            <Link
              href="/contacts"
              className="px-4 py-2 text-[#0B1B2B]/70 hover:text-[#0B1B2B] transition-colors cursor-pointer whitespace-nowrap"
            >
              Контакты
            </Link>
          </nav>

          <button
            className="bg-gradient-to-r from-[#84CC16] to-[#A3E635] px-6 py-3 rounded-full text-black font-semibold hover:shadow-xl hover:shadow-lime-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Связаться
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-[#0B1B2B]/30">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="СГП Связьгазпроект" className="w-12 h-12 object-contain" />
            <div>
              <div className="text-base font-bold text-black">СГП</div>
              <div className="text-[10px] text-[#0B1B2B]/80">Связьгазпроект</div>
            </div>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#0B1B2B]"
            aria-label="Меню"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#0B1B2B]/30">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={() => toggleMobileDropdown('company')}
                  className="w-full flex items-center justify-between py-3 text-[#0B1B2B] font-medium"
                >
                  <span>Компания</span>
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                      mobileDropdown === 'company' ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>

                {/* ВСПЛЫВАЮЩЕЕ МЕНЮ НЕ ТРОГАЕМ (но это не dropdown-ховер, это mobile список; белого текста тут не было обязательного) */}
                {mobileDropdown === 'company' && (
                  <div className="pl-4 space-y-3 pb-3">
                    <Link href="/about" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      О нас
                    </Link>
                    <Link href="/clients" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Наши заказчики
                    </Link>
                    <Link href="/documents" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Документы
                    </Link>
                    <Link href="/news" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Новости
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleMobileDropdown('activity')}
                  className="w-full flex items-center justify-between py-3 text-[#0B1B2B] font-medium"
                >
                  <span>Деятельность</span>
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                      mobileDropdown === 'activity' ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>

                {mobileDropdown === 'activity' && (
                  <div className="pl-4 space-y-3 pb-3">
                    <Link href="/data-collection" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Выполнение землеустроительных работ
                    </Link>
                    <Link href="/engineering-surveys" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Выполнение комплексных инженерных изысканий
                    </Link>
                    <Link href="/security-systems" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Проектирование комплексов инженерно-технических средств охраны
                    </Link>
                    <Link href="/author-supervision" onClick={toggleMobileMenu} className="block text-[#0B1B2B]/70">
                      Осуществление авторского надзора за строительством
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/projects" onClick={toggleMobileMenu} className="block py-3 text-[#0B1B2B] font-medium">
                Проекты
              </Link>
              <Link href="/contacts" onClick={toggleMobileMenu} className="block py-3 text-[#0B1B2B] font-medium">
                Контакты
              </Link>

              <button
                onClick={() => {
                  toggleMobileMenu();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block bg-gradient-to-r from-[#84CC16] to-[#A3E635] w-full px-6 py-3 rounded-full text-center text-black font-semibold cursor-pointer"
              >
                Связаться
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/projects_fon.png" alt="Фон" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#7aa8cf] via-transparent to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="space-y-4 lg:space-y-8 mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block text-[#0B1B2B]">ПРОЕКТНО-ИЗЫСКАТЕЛЬСКИЕ</span>
              <span className="block text-[#0B1B2B] transform -skew-x-6">РАБОТЫ</span>
            </h1>

            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl lg:text-3xl text-[#0B1B2B]/80 font-light leading-relaxed">
                Комплексные инженерные изыскания, проектирование и авторский надзор
              </p>

              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-[#0B1B2B]/30 rounded-2xl px-4 lg:px-8 py-4 lg:py-6">
                <p className="text-base sm:text-lg lg:text-2xl text-[#0B1B2B] font-light leading-relaxed">
                  ООО «Связьгазпроект» выполняет полный комплекс проектно-изыскательских работ по объектам
                  магистрального и распределительного газопровода, автомобильным дорогам, площадным объектам,
                  а также проектирование и оснащение комплексами инженерных средств охраны различных объектов
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 justify-center items-center mb-12 lg:mb-20">
            <a
              href="tel:+78172239695"
              className="w-full lg:w-auto relative group bg-gradient-to-r from-[#84CC16] to-[#A3E635] px-8 py-4 rounded-2xl font-bold text-black text-lg hover:shadow-2xl hover:shadow-lime-500/25 cursor-pointer whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10">Связаться с нами</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>

            <Link
              href="/projects"
              className="w-full lg:w-auto relative group border-2 border-[#0B1B2B]/30 text-[#0B1B2B] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:shadow-2xl cursor-pointer whitespace-nowrap backdrop-blur-sm overflow-hidden"
            >
              <span className="relative z-10">Портфолио проектов</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black text-[#0B1B2B] mb-2">15+</div>
              <div className="text-sm lg:text-base text-[#0B1B2B]/80 font-medium">лет опыта</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black text-[#0B1B2B] mb-2">500+</div>
              <div className="text-sm lg:text-base text-[#0B1B2B]/80 font-medium">проектов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl lg:text-6xl font-black text-[#0B1B2B] mb-2">24/7</div>
              <div className="text-sm lg:text-base text-[#0B1B2B]/80 font-medium">поддержка</div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Contact Section - Cyberpunk */}
      <section id="контакты" className="py-16 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url('/app_down_fon.png')`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: '0.8'
             }}>
        </div>
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#719cc1] via-transparent to-transparent"></div>
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
                  label: 'Юридический адрес',
                  value: '160012, Вологодская обл., г. Вологда, ул. Козленская, д. 119а, оф. 308/9',
                  link: 'https://yandex.ru/maps/21/vologda/house/kozlyonskaya_ulitsa_119a/Z0AYfwVhSUwCQFtjfX14eHprbQ==/?ll=39.925602%2C59.199689&source=serp_navig&z=16',
                  gradient: 'from-green-400 to-cyan-400'
                },
                {
                  icon: 'ri-phone-line',
                  label: 'Телефон',
                  value: '+7 (817) 223-96-95',
                  link: 'tel:+78172289695',
                  gradient: 'from-blue-500 to-cyan-400'
                },
                {
                  icon: 'ri-mail-line',
                  label: 'Адрес электронной почты',
                  value: 'post@issgp.ru',
                  link: 'mailto:post@issgp.ru?subject=&body=',
                  gradient: 'from-purple-500 to-pink-400'
                }
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  <a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 lg:space-x-6 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${contact.gradient} bg-opacity-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <i className={`${contact.icon} text-xl lg:text-2xl text-gray-600`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/70 uppercase tracking-widest mb-3 font-light">{contact.label}</div>
                      <div className="text-lg lg:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors block leading-relaxed break-words">
                        {contact.value}
                      </div>
                    </div>
                    <i className="ri-arrow-right-line text-cyan-400 text-xl group-hover:translate-x-2 transition-transform duration-300 hidden lg:block"></i>
                  </a>
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
                    <div className="text-lg lg:text-xl font-semibold text-white">Центральный офис и обособленные подразделения</div>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-white/20 mb-6">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A5266c7a3390faf2a2084190b476b8d868496880856d137e2d785ef6e280974b9&amp;source=constructor" 
                    width="100%" 
                    height="300" 
                    frameBorder="0"
                    className="w-full lg:h-[400px]"
                    title="Яндекс Карта - Региональные офисы Связьгазпроект"
                  ></iframe>
                </div>

                {/* Offices Contact Info */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  {/* General Phone Number */}
                  <div className="p-4 lg:p-6 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                          <i className="ri-phone-line text-xl lg:text-2xl text-gray-600"></i>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 uppercase tracking-widest mb-1">ТЕЛЕФОН</div>
                          <a href="tel:+78172239695" className="text-lg lg:text-xl font-semibold text-white hover:text-cyan-400 transition-colors">
                            +7 (817) 223-96-95
                          </a>
                        </div>
                      </div>
                      <a href="tel:+78172239695" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                        Позвонить
                      </a>
                    </div>
                  </div>

                  {/* Offices List Toggle */}
                  <div className="p-4 border-b border-white/10">
                    <button 
                      onClick={toggleOffices}
                      className="w-full flex items-center justify-between text-left hover:bg-white/5 rounded-lg p-2 transition-colors cursor-pointer"
                    >
                      <h3 className="text-lg font-semibold text-white">Адреса офисов</h3>
                      <i className={`ri-arrow-down-s-line text-xl text-white/70 transition-transform duration-300 ${officesExpanded ? 'rotate-180' : ''}`}></i>
                    </button>
                  </div>

                  {/* Collapsible Offices List */}
                  {officesExpanded && (
                    <div className="overflow-hidden">
                      <div className="space-y-1 p-4">
                        {[
                          { city: 'Вологда', address: 'ул. Козленская, д. 119а, оф. 308/9', isMain: true },
                          { city: 'Воронеж', address: 'ул. Урицкого, д. 151', isMain: false },
                          { city: 'Ставрополь', address: 'пр-кт Кулакова, д. 7Г, пом. 33', isMain: false },
                          { city: 'Томск', address: 'ул. Дзержинского, д. 8', isMain: false },
                          { city: 'Санкт-Петербург', address: 'Пулковское шоссе, д. 28А оф. 805', isMain: false },
                          { city: 'Нижний Новгород', address: 'ул. Новая, д. 10, пом. П10', isMain: false },
                          { city: 'Рязань', address: 'Касимовское шоссе, д. 8 к. 1', isMain: false },
                          { city: 'Казань', address: 'пр-кт Победы, д. 173, оф. 114', isMain: false }
                        ].map((office, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 hover:bg-white/5 rounded-lg transition-colors">
                            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${office.isMain ? 'bg-red-400' : 'bg-blue-400'}`}></div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                                <span className="text-white font-medium text-sm lg:text-base mb-1 lg:mb-0 lg:min-w-[140px]">
                                  {office.city}
                                </span>
                                <span className="text-white/70 text-xs lg:text-sm leading-relaxed lg:flex-1">
                                  {office.address}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* End of Offices Table */}
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
