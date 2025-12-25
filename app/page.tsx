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
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4">
        <div className="flex items-center justify-between min-w-[900px]">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src="/logo_sgp.svg"
                  alt="СГП Связьгазпроект"
                  className="h-16 w-auto rounded-sm"
                />
              </div>
            </Link>
          </div>

          <nav className="flex items-center space-x-1">
            {/* Компания dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Компания</span>
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    activeDropdown === 'company' ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
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
                </div>
              )}
            </div>

            {/* Деятельность dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i
                  className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${
                    activeDropdown === 'activity' ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
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

            {/* Regular links */}
            <Link
              href="/projects"
              className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Реализованные проекты
            </Link>
            <a
              href="#контакты"
              className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Контакты
            </a>
          </nav>

          <a
            href="tel:+78172239695"
            className="bg-gradient-to-r from-[#919eb1] to-[#919eb1] text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Связаться
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative">
            <img
              src="/logo_sgp.svg"
              alt="СГП Связьгазпроект"
              className="h-12 w-auto rounded-sm"
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center text-[#0B1B2B] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
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
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                      mobileDropdown === 'company' ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {mobileDropdown === 'company' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      О нас
                    </Link>
                    <Link
                      href="/clients"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Наши заказчики
                    </Link>
                    <Link
                      href="/documents"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
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
                  <i
                    className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                      mobileDropdown === 'activity' ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {mobileDropdown === 'activity' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/data-collection"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Выполнение землеустроительных работ
                    </Link>
                    <Link
                      href="/engineering-surveys"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Инженерные изыскания
                    </Link>
                    <Link
                      href="/security-systems"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Системы безопасности
                    </Link>
                    <Link
                      href="/author-supervision"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Авторский надзор
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                Реализованные проекты
              </Link>
              <a
                href="#контакты"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                Контакты
              </a>
              <div className="pt-4 border-t border-white/20">
                <a
                  href="tel:+78172239695"
                  className="block bg-gradient-to-r from-[#919eb1] to-[#919eb1] text-black px-6 py-3 rounded-full text-center font-semibold cursor-pointer"
                >
                  Связаться
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>
      )}

      {/* Hero Section - Futuristic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/*<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>*/}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/app_fon.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.8'
            }}
          ></div>
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#719cc1] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          {/* Main Title */}
          <div className="space-y-4 lg:space-y-8 mb-8 lg:mb-12">
            <div className="mx-auto max-w-full lg:max-w-[900px]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                <span className="block text-[#3b6a97]">ПРОЕКТНО-ИЗЫСКАТЕЛЬСКИЕ РАБОТЫ</span>
              </h1>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-2xl px-4 lg:px-8 py-4 lg:py-6">
                <p className="text-base sm:text-lg lg:text-2xl text-[#0B1B2B] font-light leading-relaxed">
                  ООО «Связьгазпроект» выполняет полный комплекс проектно-изыскательных работ по оснащению комплексами
                  инженерных средств охраны различных объектов
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 justify-center items-center mb-12 lg:mb-20">
            <a
              href="tel:+78172239695"
              className="w-full lg:w-auto group relative bg-gradient-to-r from-[#919eb1] to-[#919eb1] text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
            >
              <span className="relative z-10">Связаться с нами</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            <Link
              href="/projects"
              className="w-full lg:w-auto relative group border-2 border-[#0B1B2B]/30 text-[#0B1B2B] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/5 transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Портфолио проектов</span>
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
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
