'use client';

import Link from 'next/link';
import { useState } from 'react';

type StatItem = {
  icon: string;
  value: string;
  label: string;
  theme: 'blue' | 'green';
};

type ObjectItem = {
  icon: string;
  title: string;
  theme:
    | 'orange'
    | 'amber'
    | 'blue'
    | 'cyan'
    | 'green'
    | 'purple'
    | 'pink'
    | 'indigo';
};

const STAT_THEME = {
  blue: {
    iconWrap: 'from-blue-500/15 to-cyan-400/10 border-cyan-500/25',
    icon: 'text-cyan-600',
    value: 'text-blue-700',
    hoverBorder: 'hover:border-cyan-400/40',
  },
  green: {
    iconWrap: 'from-green-500/15 to-emerald-400/10 border-emerald-500/25',
    icon: 'text-emerald-600',
    value: 'text-green-700',
    hoverBorder: 'hover:border-emerald-400/40',
  },
} as const;

const OBJECT_THEME = {
  orange: {
    iconWrap: 'from-orange-500/15 to-amber-400/10 border-orange-500/25',
    icon: 'text-orange-600',
  },
  amber: {
    iconWrap: 'from-amber-500/15 to-yellow-400/10 border-amber-500/25',
    icon: 'text-amber-600',
  },
  blue: {
    iconWrap: 'from-blue-500/15 to-sky-400/10 border-blue-500/25',
    icon: 'text-blue-600',
  },
  cyan: {
    iconWrap: 'from-cyan-500/15 to-sky-400/10 border-cyan-500/25',
    icon: 'text-cyan-600',
  },
  green: {
    iconWrap: 'from-green-500/15 to-emerald-400/10 border-green-500/25',
    icon: 'text-green-600',
  },
  purple: {
    iconWrap: 'from-purple-500/15 to-fuchsia-400/10 border-purple-500/25',
    icon: 'text-purple-600',
  },
  pink: {
    iconWrap: 'from-pink-500/15 to-rose-400/10 border-pink-500/25',
    icon: 'text-pink-600',
  },
  indigo: {
    iconWrap: 'from-indigo-500/15 to-violet-400/10 border-indigo-500/25',
    icon: 'text-indigo-600',
  },
} as const;

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

  const stats: StatItem[] = [
    {
      icon: 'ri-trophy-line',
      value: '10+',
      label: 'лет опыта',
      theme: 'blue',
    },
    {
      icon: 'ri-building-4-line',
      value: '1000+',
      label: 'реализованных проектов',
      theme: 'green',
    },
  ];

  const objects: ObjectItem[] = [
    { icon: 'ri-fire-line', title: 'Газоперерабатывающие заводы', theme: 'orange' },
    { icon: 'ri-oil-line', title: 'Нефтеперерабатывающие заводы', theme: 'amber' },
    { icon: 'ri-road-map-line', title: 'Магистральные газо- и нефтепроводы', theme: 'blue' },
    { icon: 'ri-settings-3-line', title: 'Газораспределительные станции', theme: 'cyan' },
    { icon: 'ri-compasses-line', title: 'Компрессорные и насосные станции', theme: 'green' },
    { icon: 'ri-database-line', title: 'Подземные хранилища газа', theme: 'purple' },
    { icon: 'ri-route-line', title: 'Линейные объекты системы газоснабжения', theme: 'pink' },
    { icon: 'ri-building-line', title: 'Объекты спорта', theme: 'indigo' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Background (AboutPage-like structure) */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/projects_fon.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* light veil for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
        {/* subtle vignette similar to AboutPage bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-black/60" />
      </div>

      {/* Header (оставлен без изменений) */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-4 w-[calc(100%-3rem)] md:w-auto">
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
            <Link
              href="/"
              className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Главная
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
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

          <a
            href="tel:+78172289695"
            className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Связаться
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                Главная
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-cyan-400 bg-white/10 transition-colors"
              >
                Реализованные проекты
              </Link>
              <div className="px-6 pt-4 border-t border-white/20">
                <a
                  href="tel:+78172289695"
                  className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold"
                >
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdowns}></div>}

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-10 md:pb-14">
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-tight mb-4 md:mb-6">
              <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Реализованные
              </span>
              <span className="block bg-gradient-to-r from-cyan-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                проекты
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/55 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 mb-12 md:mb-16 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-cyan-500/25">
                  <i className="ri-trophy-line text-2xl md:text-3xl text-cyan-700"></i>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 md:mb-6">
                  Опыт работы
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                  ООО «Связьгазпроект» обладает большим опытом разработки проектов по оснащению объектов комплексами инженерно-технических средств охраны
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Наш опыт в цифрах
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const t = STAT_THEME[stat.theme];
              return (
                <div
                  key={index}
                  className={[
                    'group text-center bg-white/55 backdrop-blur-xl border border-white/60 rounded-2xl p-6 md:p-8',
                    'shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]',
                    t.hoverBorder,
                    'hover:shadow-[0_30px_80px_-40px_rgba(2,132,199,0.35)] transition-all duration-300 cursor-default',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6',
                      'group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border',
                      t.iconWrap,
                    ].join(' ')}
                  >
                    <i className={`${stat.icon} text-2xl md:text-3xl ${t.icon}`}></i>
                  </div>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-black ${t.value} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-lg font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Object Types Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500/15 to-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-emerald-500/25">
              <i className="ri-building-4-line text-xl md:text-2xl text-emerald-700"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Объекты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {objects.map((type, index) => {
              const t = OBJECT_THEME[type.theme];
              return (
                <div
                  key={index}
                  className={[
                    'group bg-white/55 backdrop-blur-xl border border-white/60 rounded-2xl p-4 md:p-6',
                    'shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]',
                    'hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-40px_rgba(2,132,199,0.35)] transition-all duration-300 text-center cursor-default',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4',
                      'group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border',
                      t.iconWrap,
                    ].join(' ')}
                  >
                    <i className={`${type.icon} text-xl md:text-2xl ${t.icon}`}></i>
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-slate-800 leading-tight group-hover:text-slate-950 transition-colors">
                    {type.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview_ Section */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/55 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-12 mb-12 md:mb-16 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-sm border border-cyan-500/25">
                  <i className="ri-trophy-line text-2xl md:text-3xl text-cyan-700"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 md:mb-6">
                  Примеры реализованных проектов
                </h3>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <ul className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed list-none space-y-2">
                  <li>Газопровод «Сила Сибири»</li>
                  <li>Ковыктинское газоконденсатное месторождение</li>
                  <li>Амурский газоперерабатывающий завод</li>
                  <li>Московский нефтеперерабатывающий завод</li>
                  <li>Омский нефтеперерабатывающий завод</li>
                  <li>Система магистральных газопроводов «Восточная система газоснабжения» и другие</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (голубую секцию оставляем как есть) */}
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
            <a
              href="tel:+78172239695"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center justify-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>Позвонить сейчас</span>
              </span>
            </a>
            <a
              href="mailto:post@issgp.ru?subject=&body="
              className="group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center justify-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>Написать письмо</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer (осветлён) */}
      <footer className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="border-t border-white/60 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-600 space-y-4 md:space-y-0">
              <div>© 2025 ООО «Связьгазпроект»</div>
              <Link href="/privacy-policy" className="hover:text-cyan-700 transition-colors cursor-pointer">
                Политика обработки персональных данных
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* (Не используется сейчас, но оставлено без удаления, если ты подключишь галерею) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Просмотр"
              className="w-full h-auto rounded-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
}