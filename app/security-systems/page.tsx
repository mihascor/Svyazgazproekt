'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SecuritySystems() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4">
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

            {/* Деятельность dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${activeDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
              </button>
              {activeDropdown === 'activity' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[320px] shadow-2xl">
                  <Link href="/data-collection" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение землеустроительных работ
                  </Link>
                  <Link href="/engineering-surveys" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение комплексных инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={closeDropdowns} className="block px-5 py-3 text-base text-cyan-400 bg-white/10 transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                </div>
              )}
            </div>
          </nav>
          
          <a href="tel:+78172239695" 
             className="hidden md:inline-block  bg-[#7d9ab2] text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Связаться
          </a>
        </div>
      </header>

      {/* Header (Mobile) */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/logo_sgp.svg"
                alt="СГП Связьгазпроект"
                className="h-12 w-auto rounded-sm"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#0B1B2B] hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu (оставлено как было, те же цвета) */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Главная
              </Link>
              <div className="px-6 py-3">
                <div className="text-cyan-400 font-medium mb-2">Деятельность</div>
                <div className="pl-4 space-y-2">
                  <Link href="/data-collection" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Выполнение землеустроительных работ
                  </Link>
                  <Link href="/engineering-surveys" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Выполнение комплексных инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-cyan-400 bg-white/10 px-3 rounded transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                </div>
              </div>
              <div className="px-6 pt-4 border-t border-white/20">
                <a href="tel:+78172239695" 
                   className="block text-center  bg-[#7d9ab2] text-black px-6 py-3 rounded-full font-semibold">
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url(https://readdy.ai/api/search-image?query=modern%20security%20systems%20design%20and%20installation%20including%20surveillance%20cameras%2C%20access%20control%20systems%2C%20perimeter%20protection%2C%20security%20barriers%2C%20control%20panels%2C%20monitoring%20stations%2C%20technical%20security%20equipment%20for%20industrial%20facilities%20with%20clean%20professional%20background%20and%20modern%20technology%20aesthetic&width=1920&height=800&seq=security-systems-hero&orientation=landscape)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: '0.15'
             }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <span className="text-gray-700 text-xs md:text-sm font-light tracking-widest">ДЕЯТЕЛЬНОСТЬ</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black leading-tight mb-6 md:mb-8 text-gray-900">
              Проектирование комплексов<br />
              <span className="text-blue-600">инженерно-технических</span><br />
              <span className="text-blue-600">средств охраны</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-12 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-shield-check-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Комплексные решения по безопасности
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  ООО «Связьгазпроект» осуществляет проектирование комплексов инженерно-технических средств охраны для различных объектов, которое включает в себя предпроектное обследование, разработку проектных решений и сопровождение объектов в процессе строительства в рамках авторского надзора
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Предпроектное обследование */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <i className="ri-search-eye-line text-xl md:text-2xl text-orange-600"></i>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Предпроектное обследование объектов
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-shield-check-line text-lg md:text-xl text-orange-600"></i>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                  Анализ текущей оснащенности
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Уточнение текущей ситуации по оснащенности объекта системами безопасности
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-file-list-3-line text-lg md:text-xl text-orange-600"></i>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                  Проверка соответствия нормам
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Анализ соответствия оснащенности требованиям федерального законодательства и отраслевых нормативных документов
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-lightbulb-line text-lg md:text-xl text-orange-600"></i>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                  Оптимальные решения
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Определение оптимальных решений по доведению уровня защищенности объекта до нормативных требований
                </p>
              </div>
            </div>
          </div>

          {/* Разработка проектных решений */}
          <div className="text-center mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-draft-line text-xl md:text-2xl text-blue-600"></i>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Разработка проектных решений
            </h2>
          </div>

          {/* Инженерно-технические средства защиты */}
          <div className="bg-white rounded-3xl p-6 md:p-8 mb-8 md:mb-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-tools-line text-2xl md:text-3xl text-green-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Инженерно-технические средства защиты
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-roadster-line text-green-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs sm:text-sm md:text-lg font-medium text-gray-800">Инженерные заграждения</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-building-line text-green-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs sm:text-sm md:text-lg font-medium text-gray-800">Инженерные средства и сооружения</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-door-open-line text-green-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs sm:text-sm md:text-lg font-medium text-gray-800">Контрольно-пропускные пункты</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Технические средства охраны */}
          <div className="bg-white rounded-3xl p-6 md:p-8 mb-8 md:mb-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-shield-keyhole-line text-2xl md:text-3xl text-blue-600"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Технические средства охраны</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-alarm-warning-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система охранной сигнализации зданий</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-radio-button-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система охранной сигнализации периметра объекта</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-notification-4-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система тревожной сигнализации</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-shield-user-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система контроля и управления доступом</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-camera-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система охранная телевизионная</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-database-2-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Система сбора и обработки информации</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-search-2-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800 leading-tight">Технические средства осмотра</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-flashlight-line text-purple-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800">Система охранного освещения</span>
                  </div>

                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-battery-charge-line text-purple-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-800">Система электропитания</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
              Нужны комплексные решения по безопасности?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto">
              Свяжитесь с нами для разработки индивидуального проекта системы безопасности для вашего объекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a 
                href="tel:+78172239695" 
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Позвонить сейчас
              </a>
              <a 
                href="mailto:post@issgp.ru?subject=&body=" 
                className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Написать письмо
              </a>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/50 space-y-4 md:space-y-0">
              <div>© 2025 ООО «Связьгазпроект»</div>
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors cursor-pointer">Политика обработки персональных данных</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
