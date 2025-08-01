
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
              О нас
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
                <div className="w-full sm:flex-1 flex justify-center items-center">
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
                    src="/images/239353a834de296f55a9137c893f9245.jpg"
                    alt="Схема projetirovaniya"
                    className="hidden sm:block w-full max-w-md h-auto rounded-xl shadow-lg object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* White Block - Our Team */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl mx-auto hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
                <div className="w-full sm:flex-1 flex justify-center items-center">
                  <img 
                    src="/images/0c3bf666ed7b3f72b2883e0649e5d7c3.jpg"
                    alt="Схема komandy"
                    className="hidden sm:block w-full max-w-md h-auto rounded-xl shadow-lg object-top"
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
                <div className="w-full sm:flex-1 flex justify-center items-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                      Наша география
                    </h3>
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
                    src="/images/f286cbd305d2ff080311b2d8fb9f4530.jpg" 
                    alt="Карта России"
                    className="hidden sm:block w-full max-w-md h-auto rounded-xl shadow-lg object-top"
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
