'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EngineeringSurveys() {
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
                  <Link href="/engineering-surveys" onClick={closeDropdowns} className="block px-5 py-3 text-base text-cyan-400 bg-white/10 transition-colors">
                    Выполнение комплексных инженерных изысканий
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

          {/* Mobile Menu Button*/}
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
                  <Link href="/engineering-surveys" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-3 text-base text-cyan-400 bg-white/10 transition-colors">
                    Выполнение комплексных инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
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

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeDropdowns}
        ></div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url(https://readdy.ai/api/search-image?query=professional%20engineering%20survey%20equipment%20including%20theodolites%2C%20GPS%20stations%2C%20geological%20drilling%20tools%2C%20environmental%20monitoring%20devices%2C%20topographic%20mapping%20instruments%2C%20modern%20surveying%20technology%20in%20industrial%20setting%20with%20clean%20white%20background%20and%20professional%20lighting%2C%20technical%20precision%20instruments%20for%20infrastructure%20projects&width=1920&height=800&seq=engineering-surveys-hero&orientation=landscape)`,
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
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight mb-6 md:mb-8 text-gray-900">
              Выполнение комплексных<br />
              <span className="text-blue-600">инженерных изысканий</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-compass-3-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Комплексный подход к инженерным изысканиям
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                  ООО «Связьгазпроект» выполняет все основные виды инженерных изысканий, необходимых для выполнения проектных работ, в том числе:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex items-center space-x-3 bg-white rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-line text-blue-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-base md:text-base font-medium text-gray-800">инженерно-геодезические</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-earth-line text-green-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-base md:text-base font-medium text-gray-800">инженерно-геологические</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-cloudy-line text-cyan-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-base md:text-base font-medium text-gray-800">инженерно-гидрометеорологический</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-white rounded-xl p-3 md:p-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-leaf-line text-emerald-600 text-sm md:text-lg"></i>
                    </div>
                    <span className="text-base md:text-base font-medium text-gray-800">инженерно-экологические</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Types Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            
            {/* Инженерно-геодезические изыскания */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-range-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Инженерно-геодезические изыскания
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Инженерно-геодезические изыскания выполняются для получения топографо-геодезических данных о рельефе, объектах и коммуникациях в объёмах, необходимых для подготовки проектной и рабочей документации в соответствии с требованиями законодательства и нормативно-технической базы.
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-list-check text-blue-600 mr-2"></i>
                        Состав работ:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Создание и развитие опорных планово-высотных геодезических сетей.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Топографическая съёмка любой сложности, включая подземные коммуникации, обновление и подготовка топопланов.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Согласование нанесённых коммуникаций с эксплуатирующими организациями.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Крупномасштабная съёмка для ландшафтных работ.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Вынос осей и точек проектируемых объектов и земельных участков.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Исполнительная съёмка.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-blue-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Подготовка технического отчёта в соответствии с действующими нормами.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-tools-line text-blue-600 mr-2"></i>
                        Оборудование и ПО:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Для работ применяется высокоточное спутниковое и электронно-оптическое оборудование Trimble, трассопоисковые приборы RIDGID, дальномеры DISTO. Обработка результатов выполняется в Trimble Business Center, подготовка топопланов — в NanoCad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Инженерно-геологические изыскания */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-earth-fill text-2xl md:text-3xl text-green-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Инженерно-геологические изыскания
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Инженерно-геологические изыскания обеспечивают исходные данные для расчёта фундаментов и безопасной эксплуатации сооружений. В рамках работ выполняется комплекс полевых, лабораторных и камеральных исследований, позволяющий оценить геологическое строение площадки, гидрогеологические условия, физико-механические свойства грунтов, их агрессивность к конструкциям, наличие специфических грунтов и опасных процессов. По результатам даются рекомендации по инженерной защите территории.
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-tools-line text-green-600 mr-2"></i>
                        Оборудование и техника:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-green-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Буровая установка УБГМ-1М на базе автомобиля Садко NEXT — бурение скважин с продувкой и промывкой в грунтах до 10 категории буримости, глубина до 60 м.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-green-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Буровые установки УБШМ-1-13 на базе Mitsubishi L200 и Great Wall Poer King Kong — бурение в труднодоступных и стеснённых условиях, грунты до 8 категории буримости, глубина до 35 м.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-green-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Электроразведочный комплекс РУТИЛ-1М для определения удельного электрического сопротивления.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-green-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">Комплект для статического зондирования "ТЕСТ" с прибором автоматической регистрации ТЕСТ-К2М и тензометрическими зондами (тип II) А2/350.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Инженерно-гидрометеорологические изыскания */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-water-flash-line text-2xl md:text-3xl text-cyan-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Инженерно-гидрометеорологические изыскания
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Инженерно-гидрометеорологические изыскания представляют собой комплекс исследований, направленных на изучение климатических, гидрологических, метеорологических и морфометрических условий на участке строительства. В ходе работ осуществляется прогноз их возможных изменений под влиянием проектируемого объекта, что позволяет принимать обоснованные проектные решения.
                    </p>

                    <div className="bg-cyan-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-search-line text-cyan-600 mr-2"></i>
                        В ходе изысканий изучаются:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">гидрологический режим рек, озёр, водохранилищ, морей, болот и временных водотоков;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">климатические условия и ключевые метеорологические характеристики;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">опасные гидрометеорологические процессы и явления;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">изменения гидрологических и климатических параметров под воздействием техногенных факторов.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-list-check text-cyan-600 mr-2"></i>
                        Состав работ включает:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">сбор, анализ и обобщение гидрометеорологических и картографических материалов;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">рекогносцировочное обследование территории;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">наблюдения за гидрологическими и климатическими характеристиками;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">изучение опасных процессов и явлений;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-cyan-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">камеральную обработку данных и определение расчётных гидрологических и/или метеорологических параметров.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-cyan-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="ri-file-text-line text-cyan-600 mr-2"></i>
                        Результат работ:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Технический отчёт об инженерно-гидрометеорологических изысканиях, подготовленный в соответствии с действующими нормативными документами.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Инженерно-экологические изыскания */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-plant-line text-2xl md:text-3xl text-emerald-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Инженерно-экологические изыскания
                  </h3>
                  <div className="space-y-6">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Инженерно-экологические изыскания обеспечивают оценку экологических условий территории и прогноз их изменений для подготовки градостроительной и проектной документации.
                    </p>

                    <div className="bg-emerald-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i className="ri-list-check text-emerald-600 mr-2"></i>
                        Основные работы:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">сбор и анализ данных прошлых изысканий, фондовых и опубликованных материалов, информации о состоянии среды и экологических ограничениях;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">маршрутные наблюдения, эколого-ландшафтные исследования, изучение флоры и фауны, заложение почвенных разрезов;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">отбор проб и оценка загрязнения воздуха, почв, вод и донных отложений, исследование факторов физического воздействия;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">изучение влияния опасных природных и природно-антропогенных процессов;</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-checkbox-circle-fill text-emerald-600 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">камеральная обработка и подготовка технического отчёта.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border-l-4 border-emerald-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="ri-flask-line text-emerald-600 mr-2"></i>
                        Лабораторные исследования
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Лабораторные исследования выполняются в аккредитованных центрах.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-emerald-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="ri-file-text-line text-emerald-600 mr-2"></i>
                        Применение результатов
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Результаты изысканий используются при разработке ОВОС, ПМООС, МООС, проектов рекультивации и консервации земель.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Нужны инженерные изыскания?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto">
            Свяжитесь с нами для консультации и разработки индивидуального решения для вашего объекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="tel:+78172239695" className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
              Позвонить сейчас
            </a>
            <a href="mailto:post@issgp.ru?subject=&body=" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
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
