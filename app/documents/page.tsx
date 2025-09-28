
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DocumentsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
        <div className="flex items-center justify-between md:min-w-[900px]">
          <Link href="/" className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="https://static.readdy.ai/image/5eff5abc1e92443076ad1ffc97651ac8/5283d2c85053ececa5ec8cfd9a0fba78.png"
                alt="СГП Связьгазпроект"
                className="h-12 md:h-16 w-auto"
                style={{ transform: 'scaleX(1.2)' }}
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Главная
            </Link>
            <Link href="/about" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Документы
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
          
          <a href="tel:+78172239695" 
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
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                О нас
              </Link>
              <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Заказчики
              </Link>
              <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-cyan-400 bg-white/10 transition-colors">
                Документы
              </Link>
              <div className="px-6 pt-4 border-t border-white/20">
                <a href="tel:+78172239695" 
                   className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold">
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Documents Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0"
               style={{
                 backgroundImage: `url(https://readdy.ai/api/search-image?query=professional%20legal%20documents%20and%20certificates%20with%20official%20seals%20and%20stamps%2C%20corporate%20licensing%20paperwork%20with%20modern%20digital%20archive%20system%2C%20professional%20documentation%20management%20with%20holographic%20security%20features%2C%20official%20business%20permits%20and%20certifications&width=1920&height=1080&seq=documents-legal&orientation=landscape)`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 opacity: '0.3'
               }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <span className="text-cyan-300 text-xs md:text-sm font-light tracking-widest">ДОКУМЕНТООБОРОТ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                ДОКУМЕНТЫ И ЛИЦЕНЗИИ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Все необходимые разрешения и сертификаты для осуществления деятельности
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: 'ri-shield-user-line',
                title: 'Политика в отношении обработки персональных данных',
                description: 'Документ, регламентирующий принципы и порядок обработки персональных данных в организации',
                status: 'Актуально'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Лицензия ФСТЭК России',
                description: 'Лицензия от 30.01.2023 по технической защите конфиденциальной информации',
                number: 'Рег. № Л024-00107-77/00639358',
                status: 'Действует'
              },
              {
                icon: 'ri-award-line',
                title: 'Сертификат качества ГОСТ Р ИСО 9001-2015',
                description: 'Система менеджмента качества соответствует международным стандартам',
                status: 'Сертифицировано'
              },
              {
                icon: 'ri-hashtag',
                title: 'Свидетельство ИНН',
                description: 'Свидетельство о постановке на учет российской организации в налоговом органе',
                status: 'Действует'
              },
              {
                icon: 'ri-building-line',
                title: 'Свидетельство о ГРЮЛ',
                description: 'Свидетельство о государственной регистрации юридического лица',
                status: 'Действует'
              },
              {
                icon: 'ri-gas-station-line',
                title: 'Сертификат соответствия ИНТЕРГАЗСЕРТ',
                description: 'Проектирование инженерно-технических средств охраны на объектах Группы Газпром',
                status: 'Сертифицировано'
              },
              {
                icon: 'ri-community-line',
                title: 'Свидетельство члена СОЮЗА СТРОИТЕЛЕЙ',
                description: 'Членство в СОЮЗЕ СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ',
                status: 'Активно'
              }
            ].map((doc, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <i className={`${doc.icon} text-xl md:text-2xl text-cyan-400`}></i>
                    </div>
                    <div className="flex items-center space-x-2 text-green-400 text-xs md:text-sm">
                      <i className="ri-checkbox-circle-line"></i>
                      <span>{doc.status}</span>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">{doc.title}</h3>
                  <p className="text-sm md:text-base text-white/70 mb-4 leading-relaxed">{doc.description}</p>
                  {doc.number && (
                    <div className="mb-4 md:mb-6">
                      <div className="text-xs md:text-sm text-white/60 mb-1">Регистрационный номер:</div>
                      <div className="text-white font-mono text-xs md:text-sm">{doc.number}</div>
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-auto">
                    <button className="flex-1 flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/5 text-white px-4 py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
                      <i className="ri-eye-line"></i>
                      <span>Просмотреть</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-black px-4 py-3 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap">
                      <i className="ri-download-line"></i>
                      <span>Скачать PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Правовая информация</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start space-x-3">
                    <i className="ri-building-line text-cyan-400 mt-1"></i>
                    <div>
                      <div className="font-semibold text-sm md:text-base">ООО «Связьгазпроект»</div>
                      <div className="text-xs md:text-sm text-white/60">Директор: Макарова Анна Николаевна</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-hashtag text-cyan-400 mt-1"></i>
                    <div>
                      <div className="font-semibold text-sm md:text-base">ИНН: 3525341140</div>
                      <div className="text-xs md:text-sm text-white/60">КПП: 352501001</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-bank-line text-cyan-400 mt-1"></i>
                    <div>
                      <div className="font-semibold text-sm md:text-base">ОГРН: 1153525002113</div>
                      <div className="text-xs md:text-sm text-white/60">Общество с ограниченной ответственностью</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-verified-badge-line text-3xl md:text-4xl text-cyan-400"></i>
                </div>
                <div className="text-base md:text-lg font-semibold text-white mb-2">Сертифицированная организация</div>
                <div className="text-sm md:text-base text-white/70">Все документы актуальны и соответствуют требованиям законодательства РФ</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="tel:+78172239695" 
               className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
              <span>Запросить документы</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Future */}
      <footer className="bg-black py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base text-white/50 space-y-4 md:space-y-0">
              <div>© 2025 ООО «Связьгазпроект». Все права защищены.</div>
              <div className="hover:text-cyan-400 transition-colors cursor-pointer">Политика конфиденциальности</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
