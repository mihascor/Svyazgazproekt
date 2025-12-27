'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DataCollectionPage() {
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


  return (
    <div className="min-h-screen bg-white text-gray-900">
{/* ================= HEADER (DESKTOP + MOBILE) ================= */}

      {/* DESKTOP HEADER */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4">
        <div className="flex items-center justify-between min-w-[900px]">
          
          {/* LEFT */}
          <div className="flex items-center space-x-6">
            {/* LOGO */}
            <Link href="/" className="text-[#0B1B2B] font-bold text-lg">
              LOGO
            </Link>

            {/* NAV */}
            <nav className="flex items-center space-x-1">
              <Link href="/" className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src="/logo_sgp.svg"
                    alt="СГП Связьгазпроект"
                    className="h-16 w-auto rounded-sm"
                  />
                </div>
              </Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('activity')}
                  className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-1"
                >
                  Деятельность
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </button>

                {activeDropdown === 'activity' && (
                  <div className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-2 w-56 z-50">
                    <Link href="/data-collection" className="block px-4 py-2 text-white/80 hover:bg-white/10">
                      Data Collection
                    </Link>
                    <Link href="/analytics" className="block px-4 py-2 text-white/80 hover:bg-white/10">
                      Analytics
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* RIGHT */}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#7d9ab2] to-[#7d9ab2] text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap"
          >
            Связаться
          </Link>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[#0B1B2B] font-bold text-lg">
            LOGO
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 flex items-center justify-center text-[#0B1B2B] hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="px-4 py-3 text-white hover:bg-white/10 rounded-xl">
                Главная
              </Link>

              <button
                onClick={() => toggleMobileDropdown('activity')}
                className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 rounded-xl"
              >
                <span>Деятельность</span>
                <i className={`ri-arrow-down-s-line transition-transform ${mobileDropdown === 'activity' ? 'rotate-180' : ''}`}></i>
              </button>

              {mobileDropdown === 'activity' && (
                <div className="ml-4 space-y-1">
                  <Link href="/data-collection" className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg">
                    Data Collection
                  </Link>
                  <Link href="/analytics" className="block px-4 py-2 text-white/80 hover:bg-white/10 rounded-lg">
                    Analytics
                  </Link>
                </div>
              )}

              <Link
                href="/contact"
                className="mt-2 mx-4 bg-gradient-to-r from-[#7d9ab2] to-[#7d9ab2] text-black px-6 py-2 rounded-full text-center font-semibold"
              >
                Связаться
              </Link>
            </nav>
          </div>
        )}
      </header>

      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>
      )}

      {/* ================= END HEADER ================= */}


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
               backgroundImage: `url(https://readdy.ai/api/search-image?query=professional%20land%20surveying%20and%20data%20collection%20office%20with%20modern%20GIS%20mapping%20systems%2C%20geodetic%20equipment%20and%20digital%20cadastral%20documentation%2C%20technical%20specialists%20analyzing%20topographic%20maps%20and%20satellite%20imagery%2C%20advanced%20surveying%20instruments%20and%20computer%20workstations%20with%20geographic%20information%20systems&width=1920&height=800&seq=data-collection-hero&orientation=landscape)`,
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
              Выполнение землеустроительных работ<br />
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  ООО «Связьгазпроект» выполняет комплексное сопровождение проектов, связанных с оформлением имущественных прав, землеустроительной и градостроительной деятельностью
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Directions Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Основные направления деятельности
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Direction 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-text-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. Проектно-документационное обеспечение</h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка разделов проектно-сметной документации и исходно-разрешительных материалов.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Получение, анализ и систематизация исходных данных в органах власти и ведомствах.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Работа со сведениями ЕГРН.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка отчётов о возможности реализации проектов и оценка земельных отводов.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direction 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-check-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. Согласовательная деятельность</h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Согласование проектных материалов с ведомствами, органами власти и землепользователями.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Обеспечение внесения сведений в документы территориального планирования.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка материалов для ГПЗУ и документации по планировке территории.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direction 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-search-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. Техническая экспертиза</h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Определение методов и средств проведения землеустроительных работ.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Анализ исходных данных, местоположения объектов, градостроительных документов.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Оценка возможности реализации проектов и подготовка обоснований по техническим решениям.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direction 4 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-folder-settings-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">4. Документационное обеспечение и специальные работы</h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка материалов для установления ЗОУИТ.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Согласование размещения объектов в зонах с особыми условиями использования территории.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Оформление прав на земельные участки, анализ правоустанавливающих документов.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка материалов о несоответствии границ земельных участков.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direction 5 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-white"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">5. Кадастровые работы</h3>
                  <ul className="space-y-3 text-base md:text-lg text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Разработка схем расположения земельных участков.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Подготовка материалов для разрешений на размещение объектов и использование земель.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Проекты публичных сервитутов.</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-cyan-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>Горнопромышленная деятельность: сбор и подготовка материалов для согласования размещения объектов в границах недр, взаимодействие с недропользователями.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ключевые компетенции Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ключевые компетенции отдела
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-team-line text-xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Комплексный подход</h3>
                  <p className="text-base text-gray-700">Профессиональное взаимодействие с органами власти</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Соблюдение требований</h3>
                  <p className="text-base text-gray-700">Строгое соблюдение нормативно-правовых требований</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-file-check-line text-xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Высокое качество</h3>
                  <p className="text-base text-gray-700">Качественная документация и выполнение работ в срок</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Актуализация</h3>
                  <p className="text-base text-gray-700">Актуализация документов до момента их утверждения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Преимущества
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Опытные специалисты</h3>
              <p className="text-base text-gray-700">Штат опытных специалистов и действующих кадастровых инженеров</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-graduation-cap-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Повышение квалификации</h3>
              <p className="text-base text-gray-700">Регулярное повышение квалификации сотрудников</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Методология работы</h3>
              <p className="text-base text-gray-700">Совершенная методология работы и система контроля</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-file-list-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Стандарты качества</h3>
              <p className="text-base text-gray-700">Применение чек-листов, актуальных шаблонов и стандартов</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-user-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Индивидуальный подход</h3>
              <p className="text-base text-gray-700">Индивидуальный подход к каждому проекту</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
                <i className="ri-robot-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Инновации</h3>
              <p className="text-base text-gray-700">Перспективное внедрение нейросетей для оптимизации процессов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Итог Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-shield-check-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Полный цикл работ</h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    ООО «Связьгазпроект» обеспечивает полный цикл работ — от сбора и анализа исходных данных до получения всех необходимых согласований и утверждения документации. Это гарантирует своевременную и успешную реализацию инвестиционных проектов в сфере землеустройства, градостроительства и оформления имущественных прав.
                  </p>
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
            Нужна консультация по сбору исходных данных?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto">
            Свяжитесь с нашими специалистами для обсуждения вашего проекта
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
