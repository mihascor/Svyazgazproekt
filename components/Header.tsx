'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isActivitiesDropdownOpen, setIsActivitiesDropdownOpen] = useState(false);
  const [contactMode, setContactMode] = useState<'phone' | 'email'>('phone');
  const companyRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyRef.current &&
        !companyRef.current.contains(event.target as Node)
      ) {
        setIsCompanyDropdownOpen(false);
      }

      if (
        activitiesRef.current &&
        !activitiesRef.current.contains(event.target as Node)
      ) {
        setIsActivitiesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const navigationItems = [
    { name: 'Главная', href: '/' },
    { name: 'Реализованные проекты', href: '/projects' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const companyDropdownItems = [
    { name: 'О нас', href: '/company/about' },
    { name: 'Наши заказчики', href: '/company/clients' },
    { name: 'Документы', href: '/company/documents' },
  ];

  const activitiesDropdownItems = [
    { name: 'Выполнение инженерных изысканий', href: '/activities/engineering-surveys' },
    { name: 'Проектирование комплексов инженерно-технических средств охраны', href: '/activities/security-design' },
    { name: 'Осуществление авторского надзора за строительством', href: '/activities/construction-supervision' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-slate-900/95 p-1 rounded-lg">
              <img 
                src="/images/logo.svg"
                alt="СвязьГазПроект"
                className="h-16 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Главная */}
            <Link
              href="/"
              className="text-gray-100 px-6 py-2 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
            >
              Главная
            </Link>
            
            {/* Company Dropdown */}
            <div className="relative" ref={companyRef}>
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className="text-gray-100 px-6 py-2 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
              >
                Компания
                <div className="w-4 h-4 ml-2 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              
              {isCompanyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-600/50 overflow-hidden">
                  {companyDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-100 hover:text-white hover:bg-slate-700/80 transition-all duration-200 cursor-pointer border-b border-slate-700/50 last:border-b-0"
                      onClick={() => setIsCompanyDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Activities Dropdown */}
            <div className="relative" ref={activitiesRef}>
              <button
                onClick={() => setIsActivitiesDropdownOpen(!isActivitiesDropdownOpen)}
                className="text-gray-100 px-6 py-2 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
              >
                Деятельность
                <div className="w-4 h-4 ml-2 flex items-center justify-center">
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${isActivitiesDropdownOpen ? 'rotate-180' : ''}`}></i>
                </div>
              </button>
              
              {isActivitiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-600/50 overflow-hidden">
                  {activitiesDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-100 hover:text-white hover:bg-slate-700/80 transition-all duration-200 cursor-pointer border-b border-slate-700/50 last:border-b-0"
                      onClick={() => setIsActivitiesDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Реализованные проекты */}
            <Link
              href="/projects"
              className="text-gray-100 px-6 py-2 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
            >
              Реализованные проекты
            </Link>

            {/* Контакты */}
            <Link
              href="/contacts"
              className="text-gray-100 px-6 py-2 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
            >
              Контакты
            </Link>
          </nav>

          {/* Combined Contact Button */}
          <div className="hidden md:flex items-center">
            <div className="flex rounded-lg overflow-hidden shadow-lg border border-slate-600/50 w-64" style={{ backgroundColor: 'rgba(39, 158, 204, 0.3)' }}>
              <button
                onClick={() => setContactMode('phone')}
                className={`px-3 py-2 font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  contactMode === 'phone' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-blue-600/50'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-fill"></i>
                </div>
              </button>
              <a
                href={contactMode === 'phone' ? 'tel:+78172239695' : 'mailto:post@issgp.ru'}
                className="px-4 py-2 text-white font-medium hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center flex-1"
              >
                {contactMode === 'phone' ? '+7 (817) 223-96-95' : 'post@issgp.ru'}
              </a>
              <button
                onClick={() => setContactMode('email')}
                className={`px-3 py-2 font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  contactMode === 'email' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-blue-600/50'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-fill"></i>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-slate-800/50 shadow-lg border border-slate-700/50 hover:bg-slate-700/70 hover:shadow-xl hover:border-slate-600 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            ) : (
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-menu-line text-xl"></i>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-800 max-h-[calc(100vh-100px)] overflow-y-auto">
            <nav className="flex flex-col space-y-3 mt-4">
              {/* Главная */}
              <Link
                href="/"
                className="text-gray-100 px-4 py-3 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              
              {/* Mobile Company Menu */}
              <div className="space-y-2">
                <div className="text-white font-medium px-4 py-2 text-center border-b border-slate-700/50">
                  Компания
                </div>
                {companyDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-100 px-6 py-3 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Activities Menu */}
              <div className="space-y-2">
                <div className="text-white font-medium px-4 py-2 text-center border-b border-slate-700/50">
                  Деятельность
                </div>
                {activitiesDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-100 px-6 py-3 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Реализованные проекты */}
              <Link
                href="/projects"
                className="text-gray-100 px-4 py-3 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Реализованные проекты
              </Link>

              {/* Контакты */}
              <Link
                href="/contacts"
                className="text-gray-100 px-4 py-3 rounded-lg bg-slate-700/70 shadow-lg border border-slate-600/50 hover:text-white hover:bg-slate-600/80 hover:shadow-xl hover:border-slate-500 hover:scale-105 hover:animate-pulse transition-all duration-200 cursor-pointer flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              
              {/* Mobile Combined Contact */}
              <div className="border-t border-slate-800 mt-4 pt-4 space-y-3">
                <div className="flex rounded-lg overflow-hidden shadow-lg border border-slate-600/50 w-full" style={{ backgroundColor: 'rgba(39, 158, 204, 0.3)' }}>
                  <button
                    onClick={() => setContactMode('phone')}
                    className={`px-3 py-2 font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                      contactMode === 'phone' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-blue-600/50'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-fill"></i>
                    </div>
                  </button>
                  <a
                    href={contactMode === 'phone' ? 'tel:+78172239695' : 'mailto:post@issgp.ru'}
                    className="px-4 py-2 text-white font-medium hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center flex-1"
                  >
                    {contactMode === 'phone' ? '+7 (817) 223-96-95' : 'post@issgp.ru'}
                  </a>
                  <button
                    onClick={() => setContactMode('email')}
                    className={`px-3 py-2 font-medium transition-all duration-200 cursor-pointer flex items-center justify-center ${
                      contactMode === 'email' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-blue-600/50'
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-mail-fill"></i>
                    </div>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
