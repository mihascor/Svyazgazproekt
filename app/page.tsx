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
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleOffices = () => {
    setOfficesExpanded(!officesExpanded);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 t...backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4">
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
                <div className="text-lg font-bold text-[#0B1B2B]">СГП</div>
                <div className="text-xs text-[#0B1B2B]/80">Связьгазпроект</div>
              </div>
            </Link>
          </div>

          <nav className="flex items-center space-x-2">
            <div className="relative">
              <button
                onMouseEnter={() => toggleDropdown('company')}
                className="flex items-center space-x-1 px-4 py-2...ll transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Компания</span>
                <i className={`ri-arrow-down-s-line text-sm tran...n-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 bg...rder border-white/30 rounded-2xl py-3 min-w-[200px] shadow-2xl">
                  <Link href="/about" onClick={closeDropdowns} c...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    О нас
                  </Link>
                  <Link href="/clients" onClick={closeDropdowns}...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Наши заказчики
                  </Link>
                  <Link href="/documents" onClick={closeDropdown...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Документы
                  </Link>
                  <Link href="/news" onClick={closeDropdowns} cl...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Новости
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2...ll transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i className={`ri-arrow-down-s-line text-xs tran...-200 ${activeDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'activity' && (
                <div className="absolute top-full left-0 mt-2 bg...rder border-white/30 rounded-2xl py-3 min-w-[320px] shadow-2xl">
                  <Link href="/data-collection" onClick={closeDr...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение землеустроительных работ
                  </Link>
                  <Link href="/engineering-surveys" onClick={clo...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение комплексных инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={closeD...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={clos...-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                </div>
              )}
            </div>

            <Link href="/projects" className="px-4 py-2 text-[#0B1B2B]/80 hover:text-[#0B1B2B] transition-colors cursor-pointer whitespace-nowrap">
              Проекты
            </Link>
            <Link href="/contacts" className="px-4 py-2 text-[#0B1B2B]/80 hover:text-[#0B1B2B] transition-colors cursor-pointer whitespace-nowrap">
              Контакты
            </Link>
          </nav>

          <button
            className="bg-gradient-to-r from-[#84CC16] to-[#A3E635] px-6 py-3...5 transition-all duration-300 cursor-pointer whitespace-nowrap"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Связаться
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z...ckdrop-blur-xl border-b border-[#0B1B2B]/30">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="СГП Связьгазпроект"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-base font-bold text-[#0B1B2B]">СГП</div>
              <div className="text-[10px] text-[#0B1B2B]/80">Связьгазпроект</div>
            </div>
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-[#0B1B2B]"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#0B1B2B]/30">
            <div className="px-4 py-6 space-y-4">
              {/* Company Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('company')}
                  className="w-full flex items-center justify-between py-3 text-[#0B1B2B] font-medium"
                >
                  <span>Компания</span>
                  <i className={`ri-arrow-down-s-line text-sm transition-trans...n-200 ${mobileDropdown === 'company' ? 'rotate-180' : ''}`}></i>
                </button>
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

              {/* Activity Dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('activity')}
                  className="w-full flex items-center justify-between py-3 text-[#0B1B2B] font-medium"
                >
                  <span>Деятельность</span>
                  <i className={`ri-arrow-down-s-line text-sm transition-trans...-200 ${mobileDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
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
                className="block bg-gradient-to-r from-[#84CC16] to-[#A3E635] w-full px-6 py-3 rounded-full text-center font-semibold cursor-pointer"
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
          <img
            src="/projects_fon.png"
            alt="Фон"
            className="w-full h-full object-cover"
          />
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
          {/* Main Title */}
          <div className="space-y-4 lg:space-y-8 mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black leading-none tracking-tight">
              <span className="block text-[#0B1B2B]">
                ПРОЕКТНО-ИЗЫСКАТЕЛЬСКИЕ
              </span>
              <span className="block text-[#0B1B2B] transform -skew-x-6">
                РАБОТЫ
              </span>
            </h1>

            <div className="max-w-5xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl lg:text-3xl text-[#0B1B2B]/80 font-light leading-relaxed">
                Комплексные инженерные изыскания, проектирование и авторский надзор
              </p>

              <div className="bg-gradient-to-r from-white/10 to-...l border border-[#0B1B2B]/30 rounded-2xl px-4 lg:px-8 py-4 lg:py-6">
                <p className="text-base sm:text-lg lg:text-2xl text-[#0B1B2B] font-light leading-relaxed">
                  ООО «Связьгазпроект» выполняет полный комплекс...нащению комплексами инженерных средств охраны различных объектов
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 justify-center items-center mb-12 lg:mb-20">
            <a href="tel:+78172239695" className="w-full lg:w-au...-2xl hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap">
              <span className="relative z-10">Связаться с нами</span>
              <div className="absolute inset-0 bg-white/20 trans...cale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <Link href="/projects" className="w-full lg:w-auto r...sor-pointer whitespace-nowrap backdrop-blur-sm overflow-hidden">
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
      {/* Contact Section (оставляем как есть) */}
      <section
        id="contact"
        className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#0a0f1c]"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Floating Neon Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-lime-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Связь с нами</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              Готовы начать
              <span className="block bg-gradient-to-r from-green-400 to-lime-300 bg-clip-text text-transparent">
                сотрудничество?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Свяжитесь с нами любым удобным способом. Мы ответим в течение 30 минут и обсудим ваш проект
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-lime-500/10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-phone-line text-green-400"></i>
                    </div>
                    Контактная информация
                  </h3>

                  <div className="space-y-6">
                    {/* Phone */}
                    <a
                      href="tel:+78172239695"
                      className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-phone-fill text-green-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
                          +7 (8172) 23-96-95
                        </div>
                        <div className="text-white/60 text-sm">Основной телефон</div>
                      </div>
                      <i className="ri-arrow-right-line text-white/40 group-hover:text-green-400 ml-auto transition-colors"></i>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@sgozproekt.ru"
                      className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                        <i className="ri-mail-fill text-green-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg group-hover:text-green-400 transition-colors">
                          info@sgozproekt.ru
                        </div>
                        <div className="text-white/60 text-sm">Электронная почта</div>
                      </div>
                      <i className="ri-arrow-right-line text-white/40 group-hover:text-green-400 ml-auto transition-colors"></i>
                    </a>

                    {/* Address */}
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-fill text-green-400 text-xl"></i>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg mb-1">
                          г. Вологда
                        </div>
                        <div className="text-white/60 text-sm leading-relaxed">
                          ул. Северная, д. 27, офис 423<br />
                          160034
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-lime-500/5 border border-green-500/20">
                    <h4 className="text-white font-semibold mb-4 flex items-center">
                      <i className="ri-time-line text-green-400 mr-2"></i>
                      Режим работы
                    </h4>
                    <div className="space-y-2 text-white/70">
                      <div className="flex justify-between">
                        <span>Понедельник - Пятница</span>
                        <span className="text-green-400 font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Суббота - Воскресенье</span>
                        <span className="text-white/50">выходной</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Offices */}
              <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
                
                <div className="relative z-10">
                  <button
                    onClick={toggleOffices}
                    className="w-full flex items-center justify-between text-white font-semibold text-xl mb-4 hover:text-green-400 transition-colors"
                  >
                    <span className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                        <i className="ri-building-line text-blue-400"></i>
                      </div>
                      Другие офисы
                    </span>
                    <i className={`ri-arrow-down-s-line transition-transform duration-300 ${officesExpanded ? 'rotate-180' : ''}`}></i>
                  </button>

                  {officesExpanded && (
                    <div className="space-y-4 mt-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-white font-semibold mb-1">Москва</div>
                        <div className="text-white/60 text-sm">
                          ул. Примерная, д. 1<br />
                          +7 (495) 123-45-67
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-white font-semibold mb-1">Санкт-Петербург</div>
                        <div className="text-white/60 text-sm">
                          пр. Образцовый, д. 2<br />
                          +7 (812) 987-65-43
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-lime-500/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-message-3-line text-green-400"></i>
                  </div>
                  Отправить сообщение
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all resize-none"
                      placeholder="Расскажите о вашем проекте..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-lime-400 text-black font-bold py-4 px-8 rounded-2xl hover:from-green-400 hover:to-lime-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/25 cursor-pointer relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Отправить сообщение
                      <i className="ri-send-plane-fill ml-2"></i>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  </button>

                  <p className="text-white/40 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="СГП" className="w-10 h-10 object-contain" />
                <div>
                  <div className="font-bold">СГП</div>
                  <div className="text-sm text-white/60">Связьгазпроект</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Комплексные инженерные изыскания и проектирование с 2008 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-white/60 hover:text-white transition-colors">
                  О компании
                </Link>
                <Link href="/projects" className="block text-white/60 hover:text-white transition-colors">
                  Проекты
                </Link>
                <Link href="/contacts" className="block text-white/60 hover:text-white transition-colors">
                  Контакты
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/60">
                <div>+7 (8172) 23-96-95</div>
                <div>info@sgozproekt.ru</div>
                <div>г. Вологда, ул. Северная, 27</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            © 2025 ООО «Связьгазпроект». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}