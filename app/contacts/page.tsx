'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

export default function ContactsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState('central');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAddressList, setShowAddressList] = useState(true);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const offices = [
    {
      id: 'central',
      name: 'Центральный офис',
      city: 'Вологда',
      address: 'ул. Козленская, д. 119А, оф. 308/9',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [59.2239, 39.8839],
      description: 'Главный офис компании'
    },
    {
      id: 'voronezh',
      name: 'Офис в г. Воронеже',
      city: 'Воронеж',
      address: 'ул. Урицкого, д. 151',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [51.6754, 39.2088],
      description: 'Региональное представительство'
    },
    {
      id: 'stavropol',
      name: 'Офис в г. Ставрополе',
      city: 'Ставрополь',
      address: 'пр-кт Кулакова, д. 7Г, пом. 33',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [45.0428, 41.9734],
      description: 'Региональное представительство'
    },
    {
      id: 'tomsk',
      name: 'Офис в г. Томске',
      city: 'Томск',
      address: 'ул. Дзержинского, д. 8',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [56.4977, 84.9744],
      description: 'Региональное представительство'
    },
    {
      id: 'spb',
      name: 'Офис в г. Санкт-Петербурге',
      city: 'Санкт-Петербург',
      address: 'Пулковское шоссе, д. 28А оф. 805',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [59.9311, 30.3609],
      description: 'Региональное представительство'
    },
    {
      id: 'nn',
      name: 'Офис в г. Нижнем Новгороде',
      city: 'Нижний Новгород',
      address: 'ул. Новая, д. 10, пом. П10',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [56.2965, 43.9361],
      description: 'Региональное представительство'
    },
    {
      id: 'kazan',
      name: 'Офис в г. Казани',
      city: 'Казань',
      address: 'пр-кт Победы, д. 173, оф. 114',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [55.8304, 49.0661],
      description: 'Региональное представительство'
    },
    {
      id: 'ryazan',
      name: 'Офис в г. Рязани',
      city: 'Рязань',
      address: 'Касимовское шоссе, д. 8 к. 1',
      phone: '+7 (817) 223-96-95',
      email: 'post@issgp.ru',
      coords: [54.6269, 39.6916],
      description: 'Региональное представительство'
    }
  ];

  // Memoize the generated point string for the map to avoid re‑calculations on every render.
  const mapPoints = useMemo(() => {
    return offices
      .map((office) => {
        // Центральный офис (Вологда) - большой красный маркер
        // Остальные офисы - синие маркеры
        if (office.id === 'central') {
          return `${office.coords[1]},${office.coords[0]},pm2rdl`; // Большой красный маркер
        } else {
          return `${office.coords[1]},${office.coords[0]},pm2bl`; // Синий маркер
        }
      })
      .join('~');
  }, [offices]);

  const currentOffice = offices.find((office) => office.id === selectedOffice) || offices[0];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
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
                className="flex items-center space-x-1 px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
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
                  <Link href="/about" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    О нас
                  </Link>
                  <Link href="/clients" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Наши заказчики
                  </Link>
                  <Link href="/documents" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Документы
                  </Link>
                </div>
              )}
            </div>

            {/* Деятельность dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('activity')}
                className="flex items-center space-x-1 px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span>Деятельность</span>
                <i
                  className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${
                    activeDropdown === 'activity' ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>
              {activeDropdown === 'activity' && (
                <div className="absolute top-full left-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/30 rounded-2xl py-3 min-w-[320px] shadow-2xl">
                  <Link href="/engineering-surveys" onClick={closeDropdowns} className="block px-5 py-3 text-base text-white hover:text-cyan-400 hover:bg-white/10 transition-colors">
                    Выполнение  инженерных изысканий
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

            {/* Regular links */}
            <Link href="/projects" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Реализованные проекты
            </Link>
            <Link href="/contacts" className="px-4 py-2 text-base text-cyan-400 bg-white/10 rounded-full cursor-pointer whitespace-nowrap">
              Контакты
            </Link>
          </nav>

          <a
            href="tel:+78172239695"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Связаться
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-4 w-[calc(100%-3rem)]">
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
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl py-4 mx-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Главная
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                О нас
              </Link>
              <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Наши заказчики
              </Link>
              <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Документы
              </Link>
              <Link href="/engineering-surveys" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Инженерные изыскания
              </Link>
              <Link href="/security-systems" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Системы безопасности
              </Link>
              <Link href="/author-supervision" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Авторский надзор
              </Link>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                Реализованные проекты
              </Link>
              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-cyan-400 bg-white/10 transition-colors">
                Контакты
              </Link>
              <div className="px-6 pt-4 border-t border-white/20">
                <a href="tel:+78172239695"
                   className="block text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-3 rounded-full font-semibold cursor-pointer">
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
      <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 lg:pt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20background%20with%20glowing%20blue%20and%20cyan%20neon%20lights%20digital%20network%20connections%20and%20geometric%20patterns%20modern%20minimalist%20tech%20design%20with%20flowing%20energy%20lines%20and%20particles%20dark%20background%20with%20luminous%20technological%20elements&width=1920&height=800&seq=contacts-hero-tech-bg-v2&orientation=landscape)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.3'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-2 mb-8">
            <span className="text-cyan-300 text-sm font-light tracking-widest">КОНТАКТЫ</span>
          </div>
          <h1 className="text-3xl lg:text-6xl font-black leading-tight mb-6">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
              СВЯЗАТЬСЯ С НАМИ
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            Наши офисы работают по всей России для вашего удобства
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Office Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Выберите офис
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {offices.map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office.id)}
                    className={`w-full text-left p-3 lg:p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedOffice === office.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border-cyan-400/50 text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${selectedOffice === office.id ? 'bg-cyan-400' : 'bg-white/30'}`}></div>
                      <div>
                        <div className="font-semibold text-sm lg:text-base">{office.name}</div>
                        <div className="text-xs lg:text-sm opacity-70">{office.city}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Map and Details */}
            <div className="lg:col-span-2">
              {/* Yandex Map */}
              <div className="mb-6 lg:mb-8">
                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
                  <div className="p-3 lg:p-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                        <i className="ri-map-2-line text-white text-xs lg:text-sm"></i>
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-white">Наши офисы на карте</h3>
                    </div>
                  </div>
                  <iframe
                    src={`https://yandex.ru/map-widget/v1/?pt=${mapPoints}&z=4&l=map&theme=dark`}
                    width="100%"
                    height="300"
                    className="w-full lg:h-[400px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="Карта офисов Связьгазпроект"
                  ></iframe>
                </div>
              </div>

              {/* General Phone Number */}
              <div className="p-4 lg:p-6 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                      <i className="ri-phone-line text-lg lg:text-xl text-gray-700"></i>
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

              {/* Collapsible Address List */}
              <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden mb-6 lg:mb-8">
                <button
                  onClick={() => setShowAddressList(!showAddressList)}
                  className="w-full p-4 lg:p-6 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-white text-sm lg:text-base"></i>
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold text-white">Адреса офисов</h3>
                  </div>
                  <i className={`ri-arrow-down-s-line text-xl text-white/70 transition-transform duration-300 ${showAddressList ? 'rotate-180' : ''}`}></i>
                </button>

                {showAddressList && (
                  <div className="border-t border-white/10">
                    {offices.map((office, index) => (
                      <div
                        key={office.id}
                        className={`p-4 lg:p-6 ${index !== offices.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors cursor-pointer ${
                          selectedOffice === office.id ? 'bg-cyan-400/10' : ''
                        }`}
                        onClick={() => setSelectedOffice(office.id)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${office.id === 'central' ? 'bg-red-400' : 'bg-blue-400'}`}></div>
                          <div className="min-w-0">
                            <div className="font-semibold text-white text-sm lg:text-base mb-1">{office.name}</div>
                            <div className="text-xs lg:text-sm text-white/70 leading-relaxed">{office.address}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Office Details */}
              <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <i className="ri-building-line text-lg lg:text-xl text-white"></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{currentOffice.name}</h3>
                    <p className="text-sm lg:text-base text-white/70">{currentOffice.description}</p>
                  </div>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-500 to-cyan-400 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-green-400 text-sm lg:text-base"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs lg:text-sm text-white/70 uppercase tracking-widest mb-1">Адрес</div>
                      <div className="text-sm lg:text-base text-white font-semibold leading-relaxed">{currentOffice.address}</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-blue-400 text-sm lg:text-base"></i>
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm text-white/70 uppercase tracking-widest mb-1">Телефон</div>
                      <a
                        href={`tel:${currentOffice.phone.replace(/\s/g, '')}`}
                        className="text-sm lg:text-base text-white font-semibold hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        {currentOffice.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 to-pink-400 bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-purple-400 text-sm lg:text-base"></i>
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm text-white/70 uppercase tracking-widest mb-1">Email</div>
                      <a
                        href={`mailto:${currentOffice.email}`}
                        className="text-sm lg:text-base text-white font-semibold hover:text-cyan-400 transition-colors cursor-pointer break-all"
                      >
                        {currentOffice.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8">
                  <a
                    href={`tel:${currentOffice.phone.replace(/\s/g, '')}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-4 lg:px-6 py-3 rounded-full text-center text-sm lg:text-base font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    Позвонить
                  </a>
                  <a
                    href={`mailto:${currentOffice.email}`}
                    className="flex-1 border-2 border-white/30 text-white px-4 lg:px-6 py-3 rounded-full text-center text-sm lg:text-base font-semibold hover:bg-white/5 transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm"
                  >
                    Написать
                  </a>
                </div>
              </div>

              {/* Offices Table - Mobile Optimized */}
              <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-base lg:text-lg font-semibold text-white">Все офисы</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-3 text-xs lg:text-sm font-medium text-white/70">Город</th>
                        <th className="text-left p-3 text-xs lg:text-sm font-medium text-white/70 hidden lg:table-cell">Адрес</th>
                        <th className="text-left p-3 text-xs lg:text-sm font-medium text-white/70">Телефон</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offices.map((office, index) => (
                        <tr 
                          key={office.id} 
                          className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                            selectedOffice === office.id ? 'bg-cyan-400/10' : ''
                          }`}
                          onClick={() => setSelectedOffice(office.id)}
                        >
                          <td className="p-3">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                              <div className="flex items-center space-x-2 mb-1 lg:mb-0">
                                <div className={`w-2 h-2 rounded-full ${office.id === 'central' ? 'bg-red-400' : 'bg-blue-400'}`}></div>
                                <span className="text-white text-xs lg:text-sm font-medium">{office.city}</span>
                              </div>
                              <div className="text-xs text-white/70 lg:hidden leading-tight">
                                {office.address}
                              </div>
                            </div>
                          </td>
                          <td className="p-3 text-white/70 text-xs lg:text-sm hidden lg:table-cell">{office.address}</td>
                          <td className="p-3">
                            <a 
                              href={`tel:${office.phone.replace(/\s/g, '')}`}
                              className="text-cyan-400 hover:text-cyan-300 text-xs lg:text-sm transition-colors whitespace-nowrap"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {office.phone}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-4">
              Время работы
            </h2>
            <p className="text-white/70">Мы готовы ответить на ваши вопросы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-cyan-400 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <i className="ri-time-line text-green-400 text-lg lg:text-xl"></i>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">Рабочие дни</h3>
              </div>
              <div className="text-white/70">
                <div className="flex justify-between mb-2">
                  <span className="text-sm lg:text-base">Понедельник - Пятница</span>
                  <span className="text-white font-semibold text-sm lg:text-base">9:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-500 to-red-40 bg-opacity-20 rounded-xl flex items-center justify-center">
                  <i className="ri-calendar-line text-orange-400 text-lg lg:text-xl"></i>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-white">Выходные</h3>
              </div>
              <div className="text-white/70">
                <div className="flex justify-between mb-2">
                  <span className="text-sm lg:text-base">Суббота - Воскресенье</span>
                  <span className="text-white font-semibold text-sm lg:text-base">Выходной</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 lg:py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
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
