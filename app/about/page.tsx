'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-8 py-4">
        <div className="flex items-center justify-between min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="/logo_sgp.svg"
                alt="СГП Связьгазпроект"
                className="h-16 w-auto rounded-sm"
              />
            </div>
          </Link>
          
          <nav className="flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/about" className="px-4 py-2 text-base text-[#0485c1] bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-[#0B1B2B]/70 hover:text-[#0B1B2B] hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Документы
            </Link>
          </nav>
          
          <a href="tel:+78172239695" 
             className="bg-[#7d9ab2] text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
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
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-[#0B1B2B]/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-[#0B1B2B]/70 bg-white/10 transition-colors"
              >
                О нас
              </Link>
              <Link
                href="/clients"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-[#0B1B2B]/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Заказчики
              </Link>
              <Link
                href="/documents"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-[#0B1B2B]/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Документы
              </Link>
              <div className="px-6 pt-4 border-t border-white/20">
                <a
                  href="tel:+78172239695"
                  className="block text-center bg-[#7d9ab2] text-black px-6 py-3 rounded-full font-semibold"
                >
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* About Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div> */}
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `url('/about_fon.webp')`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.8'
               }}>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
              <div className="inline-block bg-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-full px-6 py-2 mb-8 text-[#0B1B2B]">
                <span className="text-sm font-light tracking-widest">
                  О КОМПАНИИ
                </span>
              </div>
              <div className="mx-auto max-w-full lg:max-w-[1000px]">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-none tracking-tight">
                  <span className="block text-[#3b6a97]">СВЯЗЬГАЗПРОЕКТ</span>
                </h1>
              </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-2xl p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0B1B2B]/70 mb-4">Наш опыт</h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#0B1B2B]/70 leading-relaxed">
                  Компания «Связьгазпроект» основана в 2015 году. Мы специализируемся на проектировании комплексов инженерно-технических средств охраны для крупных и стратегически важных объектов
                </p>
              </div>

              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-2xl p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-4">Виды деятельности</h2>
                <ul className="space-y-3 text-sm sm:text-base lg:text-lg text-[#0B1B2B]/70">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <span>выполнение комплексных инженерных изысканий</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <span>выполнение землеустроительных работ</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <span>проектирование комплексов инженерно-технических средств охраны</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <span>осуществление авторского надзора за строительством</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {[
                { icon: 'ri-team-line', title: 'Наша команда', desc: 'В компании работает более 400 высококвалифицированных специалистов — коллектив опытных профессионалов, способный качественно и в установленные сроки решить любую поставленную задачу' },
                { icon: 'ri-global-line', title: 'Наша география', desc: 'Центральный офис компании находится в Вологде. Обособленные подразделения работают в семи регионах России: Санкт-Петербурге, Воронеже, Ставрополе, Рязани, Томске, Казани и Нижнем Новгороде' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm border border-[#0B1B2B]/30 rounded-xl p-4 lg:p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-lg lg:text-xl text-[#0B1B2B]/70`}></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#0B1B2B]/70 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-[#0B1B2B]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SRO Membership Section */}
          <div className="mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-[#0B1B2B]/30 rounded-2xl p-6 lg:p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-building-line text-xl text-[#0B1B2B]/70"></i>
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-[#0B1B2B]/70 mb-2">Членство в саморегулируемых организациях</h2>
                  <p className="text-sm lg:text-base text-[#0B1B2B]/70">ООО «Связьгазпроект» входит в ряд профильных СРО, подтверждающих право на выполнение проектных и изыскательских работ:</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 border border-[#0B1B2B]/30 rounded-xl p-4 lg:p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold text-[#0B1B2B]/70 mb-2">Ассоциация «Объединение проектировщиков „УниверсалПроект"»</h3>
                      <p className="text-sm lg:text-base text-[#0B1B2B]/70 mb-2">Право подготовки проектной документации</p>
                      <div className="space-y-1 text-xs lg:text-sm">
                        <div className="text-white/60">СРО: <span className="text-cyan-400 font-mono">СРО-П-179-12122012</span></div>
                        <div className="text-white/60">Регистрационный номер: <span className="text-cyan-400 font-mono">П-179-003525341140-0598</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-[#0B1B2B]/30 rounded-xl p-4 lg:p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold text-[#0B1B2B]/70 mb-2">Ассоциация «Национальный Альянс изыскателей „ГеоЦентр"»</h3>
                      <p className="text-sm lg:text-base text-[#0B1B2B]/70 mb-2">Право выполнения инженерных изысканий</p>
                      <div className="space-y-1 text-xs lg:text-sm">
                        <div className="text-white/60">СРО: <span className="text-cyan-400 font-mono">СРО-И-037-18122012</span></div>
                        <div className="text-white/60">Регистрационный номер: <span className="text-cyan-400 font-mono">И-037-003525341140-1247</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-[#0B1B2B]/30 rounded-xl p-4 lg:p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <i className="ri-checkbox-circle-fill text-[#0B1B2B]/70 mt-1 flex-shrink-0"></i>
                    <div>
                      <h3 className="text-base lg:text-lg font-semibold text-[#0B1B2B]/70 mb-2">Региональное объединение работодателей строительного комплекса «Союз строителей Воронежской области»</h3>
                      <div className="text-xs lg:text-sm">
                        <div className="text-white/60">Регистрационный номер: <span className="text-cyan-400 font-mono">195</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#0B1B2B]/70/50 space-y-4 md:space-y-0">
              <div>© 2025 ООО «Связьгазпроект»</div>
              <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors cursor-pointer">Политика обработки персональных данных</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
