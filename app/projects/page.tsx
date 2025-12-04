'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
        <div className="flex items-center justify-between md:min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/39805c45713a625f1f7e23a032648890.png"
                alt="СГП Связьгазпроект"
                className="h-12 md:h-16 w-auto rounded-lg"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/projects" className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Реализованные проекты
            </Link>
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Главная
              </Link>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-cyan-400 bg-white/10 transition-colors">
                Реализованные проекты
              </Link>
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
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0"
             style={{
               backgroundImage: `url(https://readdy.ai/api/search-image?query=futuristic%20industrial%20infrastructure%20portfolio%20showcasing%20major%20energy%20facilities%20including%20gas%20processing%20plants%2C%20oil%20refineries%2C%20pipeline%20systems%2C%20compressor%20stations%2C%20and%20energy%20distribution%20networks%20with%20holographic%20digital%20blueprints%20and%20neon%20lighting%20effects%20in%20cyberpunk%20style&width=1920&height=800&seq=projects-portfolio-hero-dark&orientation=landscape)`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               opacity: '0.3'
             }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                Реализованные
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                проекты
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-cyan-400/30">
                  <i className="ri-trophy-line text-2xl md:text-3xl text-cyan-400"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-4 md:mb-6">
                  Опыт работы
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  ООО «Связьгазпроект» обладает большим опытом разработки проектов по оснащению объектов комплексами инженерно-технических средств охраны
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
              Наш опыт в цифрах
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {[
              {
                icon: 'ri-trophy-line',
                value: '10+',
                label: 'лет опыта',
                color: 'blue-400'
              },
              {
                icon: 'ri-building-4-line',
                value: '1000+',
                label: 'реализованных проектов',
                color: 'green-400'
              }
            ].map((stat, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-default">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${stat.color}/20 to-${stat.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-${stat.color}/30`}>
                  <i className={`${stat.icon} text-2xl md:text-3xl text-${stat.color}`}></i>
                </div>
                <div className={`text-2xl sm:text-3xl md:text-4xl font-black text-${stat.color} mb-2 group-hover:text-cyan-300 transition-colors`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Object Types Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-green-400/30">
              <i className="ri-building-4-line text-xl md:text-2xl text-green-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent mb-4">
              Объекты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              {
                icon: 'ri-fire-line',
                title: 'Газоперерабатывающие заводы',
                color: 'orange-400'
              },
              {
                icon: 'ri-oil-line',
                title: 'Нефтеперерабатывающие заводы',
                color: 'amber-400'
              },
              {
                icon: 'ri-road-map-line',
                title: 'Магистральные газо- и нефтепроводы',
                color: 'blue-400'
              },
              {
                icon: 'ri-settings-3-line',
                title: 'Газораспределительные станции',
                color: 'cyan-400'
              },
              {
                icon: 'ri-compasses-line',
                title: 'Компрессорные и насосные станции',
                color: 'green-400'
              },
              {
                icon: 'ri-database-line',
                title: 'Подземные хранилища газа',
                color: 'purple-400'
              },
              {
                icon: 'ri-route-line',
                title: 'Линейные объекты системы газоснабжения',
                color: 'pink-400'
              },
              {
                icon: 'ri-building-line',
                title: 'Объекты спорта',
                color: 'indigo-400'
              }
            ].map((type, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 text-center cursor-default">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-${type.color}/20 to-${type.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-${type.color}/30`}>
                  <i className={`${type.icon} text-xl md:text-2xl text-${type.color}`}></i>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-white/90 leading-tight group-hover:text-cyan-300 transition-colors">
                  {type.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Overview_ Section */}
      <section className="py-0 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-cyan-400/30">
                  <i className="ri-trophy-line text-2xl md:text-3xl text-cyan-400"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-4 md:mb-6">
                  Примеры реализованных проектов
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                  Газопровод «Сила Сибири»
                  Ковыктинское газоконденсатное месторождения
                  Амурский газоперерабатывающий завод
                  Московский нефтеперерабатывающий завод
                  Омский нефтеперерабатывающий завод 
                  Система магистральных газопроводов «Восточная система газоснабжения» и другие
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Готовы реализовать ваш проект?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта по комплексу инженерно-технических средств охраны
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="tel:+78172239695" className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap">
              <span className="flex items-center justify-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>Позвонить сейчас</span>
              </span>
            </a>
            <a href="mailto:post@issgp.ru?subject=&body=" className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap">
              <span className="flex items-center justify-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>Написать письмо</span>
              </span>
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
