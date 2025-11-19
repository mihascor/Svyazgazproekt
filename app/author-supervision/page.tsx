'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AuthorSupervision() {
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
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-xl border border-gray-800 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
        <div className="flex items-center justify-between md:min-w-[900px]">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/39805c45713a625f1f7e23a032648890.png"
                alt="СГП Связьгазпроект"
                className="h-16 w-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
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
                  <Link href="/engineering-surveys" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={closeDropdowns} className="block px-5 py-3 text-base text-cyan-400 bg-white/10 transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                  <Link href="/data-collection" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Сбор исходных данных
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
          
          <a href="tel:+78172289695" 
             className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
            Связаться
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Главная
              </Link>
              <div className="px-6 py-3">
                <div className="text-cyan-400 font-medium mb-2">Деятельность</div>
                <div className="pl-4 space-y-2">
                  <Link href="/engineering-surveys" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Выполнение инженерных изысканий
                  </Link>
                  <Link href="/security-systems" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Проектирование комплексов инженерно-технических средств охраны
                  </Link>
                  <Link href="/author-supervision" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-cyan-400 bg-white/10 px-3 rounded transition-colors">
                    Осуществление авторского надзора за строительством
                  </Link>
                  <Link href="/data-collection" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-cyan-400 hover:bg-white/10 px-3 rounded transition-colors">
                    Сбор исходных данных
                  </Link>
                </div>
              </div>
              <div className="px-6 pt-4 border-t border-white/20">
                <a href="tel:+78172289695" 
                   className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold">
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
               backgroundImage: `url(https://readdy.ai/api/search-image?query=construction%20supervision%20and%20quality%20control%20with%20engineers%20reviewing%20architectural%20blueprints%20and%20monitoring%20building%20progress%2C%20professional%20construction%20oversight%20team%20with%20hard%20hats%20examining%20structural%20elements%2C%20quality%20assurance%20specialists%20inspecting%20infrastructure%20projects%20with%20modern%20measuring%20equipment%20and%20documentation%20tools%20in%20industrial%20construction%20environment&width=1920&height=800&seq=author-supervision-hero&orientation=landscape)`,
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
              Осуществление<br />
              <span className="text-blue-600">авторского надзора</span><br />
              <span className="text-blue-600">за строительством</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-shield-check-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Профессиональный контроль качества
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  ООО «Связьгазпроект» осуществляется авторский надзор за ходом строительства комплексов инженерно-технических средства охраны в соответствии с требованиями действующей нормативной документации
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <i className="ri-tools-line text-xl md:text-2xl text-orange-600"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Функционал авторского надзора
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8">
            
            {/* Организация работ */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-organization-chart text-2xl md:text-3xl text-green-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                    Организация выполнения работ
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-file-text-line text-green-600 text-sm md:text-lg"></i>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-800">оформление договоров</span>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-shield-check-line text-green-600 text-sm md:text-lg"></i>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-800">подготовка разрешительной документации</span>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-clipboard-line text-green-600 text-sm md:text-lg"></i>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-800">рассмотрение и подписание актов освидетельствования скрытых работ</span>
                    </div>
                    
                    <div className="flex items-start space-x-3 bg-gray-50 rounded-xl p-3 md:p-4">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-double-line text-green-600 text-sm md:text-lg"></i>
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-800">акты промежуточной приёмки ответственных конструкций, участков сетей инженерно-технического обеспечения</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Контроль соответствия */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-search-eye-line text-2xl md:text-3xl text-blue-600"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Контроль соответствия работ
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4 md:p-6">
                    Контроль соответствия выполняемых строительно-монтажных работ разработанной рабочей документации, с соблюдением технологии производства работ
                  </p>
                </div>
              </div>
            </div>

            {/* Документооборот и контроль */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-book-line text-xl md:text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Ведение документации
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Ведение отчетной документации по авторскому надзору (журналы)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-2020">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-error-warning-line text-xl md:text-2xl text-red-600"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Контроль устранения замечаний
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Контроль своевременного устранения замечаний
                </p>
              </div>

            </div>

            {/* Решение вопросов */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-question-answer-line text-lg md:text-xl text-orange-600"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                  Решение технических вопросов
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Оперативное решение технических вопросов, возникающих в процессе реализации стройки
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-settings-3-line text-lg md:text-xl text-cyan-600"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                  Согласование изменений
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Согласование изменение технических решений
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <i className="ri-notification-4-line text-lg md:text-xl text-yellow-600"></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                  Информирование заказчика
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Информирование заказчика о некачественном выполнении работ и о срывах сроков устранения замечений подрядчиком
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Преимущества авторского надзора
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Наш авторский надзор гарантирует соответствие строительства проектной документации и нормативным требованиям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'Качество',
                desc: 'Контроль соблюдения всех технических требований',
                color: 'green'
              },
              {
                icon: 'ri-time-line',
                title: 'Сроки',
                desc: 'Соблюдение графика строительных работ',
                color: 'blue'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Экономия',
                desc: 'Предотвращение переделок и дополнительных затрат',
                color: 'purple'
              },
              {
                icon: 'ri-file-shield-line',
                title: 'Документооборот',
                desc: 'Полное ведение отчетной документации',
                color: 'orange'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-${benefit.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-2xl md:text-3xl text-${benefit.color}-600`}></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Нужен профессиональный авторский надзор?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto">
            Обеспечим качественный контроль строительства в соответствии с проектной документацией и нормативными требованиями
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="tel:+78172239695" className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
              Позвонить сейчас
            </a>
            <a href="mailto:post@issgp.ru" className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
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
