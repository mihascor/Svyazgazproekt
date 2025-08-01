
'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Main Content */}
      <main className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              О компании
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Компания ООО «Связьгазпроект» образована в 2015 году в г. Вологде.
              <br />
              <br />
              Коллектив ООО «Связьгазпроект» специализируется на выполнении полного комплекса проектно-изыскательских работ.
            </p>
          </div>

          {/* White Block - Activities */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center gap-8">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                      Виды деятельности
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-lg">1</span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed text-left">
                          Выполнение сбора исходных данных, комплексных инженерных изысканий.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-lg">2</span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed text-left">
                          Проектирование комплексов инженерно-технических средств охраны.
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-lg">3</span>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed text-left">
                          Осуществление авторского надзора <br />за строительством.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Schematic%20engineering%20design%20illustration%20showing%20architectural%20plans%2C%20blueprints%2C%20technical%20drawings%20with%20clean%20lines%2C%20geometric%20shapes%2C%20building%20layouts%2C%20construction%20diagrams%2C%20engineering%20symbols%2C%20measurement%20tools%2C%20ruler%2C%20compass%2C%20simple%20minimalist%20style%2C%20white%20background%2C%20blue%20and%20gray%20color%20scheme%2C%20professional%20technical%20documentation&width=400&height=300&seq=engineering-design-schema&orientation=landscape"
                    alt="Схема projetirovaniya"
                    className="w-full h-auto max-w-md rounded-lg object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* White Block - Our Team */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center justify-center gap-8">
                <div className="flex-1 flex justify-center items-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Seven%20dark%20silhouettes%20of%20standing%20professional%20people%20in%20business%20attire%2C%20arranged%20in%20a%20row%2C%20no%20faces%20visible%2C%20only%20dark%20shadows%20and%20outlines%20against%20white%20background%2C%20corporate%20team%20representation%20showing%20anonymous%20worker%20figures%2C%20minimalist%20illustration%20style%20with%20clean%20blue-gray%20dark%20shadows%2C%20professional%20workforce%20silhouettes%20standing%20upright%2C%20geometric%20human%20shapes%20without%20facial%20features%2C%20simple%20corporate%20design&width=400&height=300&seq=team-dark-silhouettes-seven&orientation=landscape"
                    alt="Схема komandy"
                    className="w-full h-auto max-w-md rounded-lg object-top"
                  />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-gray-900 text-center">
                    <p className="font-bold mb-6 text-2xl">Наша команда</p>
                    <p className="text-lg leading-relaxed mb-6">
                      ООО «Связьгазпроект» – это коллектив опытных профессионалов, готовый качественно и в установленные сроки решить любую поставленную задачу.
                    </p>
                    <p className="text-lg leading-relaxed">
                      В компании работает <strong>более 400</strong> высококвалифицированных специалистов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* White Block - Our Geography */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Наша география
              </h3>
              <div className="flex items-center justify-center gap-8">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Главный офис расположен <strong>в Вологде</strong>.
                      <br /><br />
                      Обособленные подразделения расположены <strong>в шести субъектах</strong> Российской Федерации — 
                      Санкт-Петербурге, Воронеже, Ставрополе, Томске, Казани, Нижнем Новгороде.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Simple%20schematic%20outline%20map%20of%20Russia%20showing%20Russian%20Federation%20territory%20with%20clean%20minimal%20design%2C%20basic%20country%20borders%2C%20geographic%20outline%20illustration%2C%20neutral%20colors%20with%20blue%20accents%2C%20professional%20cartographic%20style%2C%20flat%20design%20map%20without%20detailed%20features%2C%20just%20basic%20country%20shape%20and%20boundaries&width=400&height=260&seq=russia-simple-map&orientation=landscape"
                    alt="Карта России"
                    className="w-full max-w-md h-auto rounded-xl shadow-lg object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Саморегулируемые организации */}
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ООО «Связьгазпроект» является членом саморегулируемых организаций
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ассоциация «Объединение проектировщиков «УниверсалПроект» (СРО-П-179-12122012) на право осуществления подготовки проектной документации.<br />
                  Регистрационный номер члена саморегулируемой организации П-179-003525341140-0598.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ассоциация «Национальный Альянс изыскателей «ГеоЦентр» (СРО-И-037-18122012) на право осуществления подготовки инженерных изысканий.<br />
                  Регистрационный номер члена саморегулируемой организации И-037-003525341140-1247.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Региональное объединение работодателей строительного комплекса «СОЮЗ СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ».<br />
                  Регистрационный номер члена некоммерической корпоративной организации 195.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
