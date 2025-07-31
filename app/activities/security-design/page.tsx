
'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';

export default function SecurityDesign() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок страницы */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Проектирование инженерно-технических средств охраны
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              ООО «Связьгазпроект» осуществляет проектирование комплексов инженерно-технических средств охраны для объектов топливно-энергетического комплекса, которое включает в себя предпроектное обследование, разработку проектных решений и сопровождение объектов в процессе строительства в рамках авторского надзора.
            </p>
          </div>

          {/* Белые плашки */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Первая плашка */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Предпроектное обследование объектов включает в себя:
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>уточнение текущей ситуации по оснащенности объекта системами безопасности;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>анализ соответствия оснащенности требованиям федерального законодательства и отраслевых (ведомственных) нормативных документов;</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>определение оптимальных решений по доведению уровня защищенности объекта до нормативных требований.</span>
                </li>
              </ul>
            </div>

            {/* Вторая плашка */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Разработка проектных решений включает в себя:
              </h2>
              
              <div className="space-y-8">
                {/* Подзаголовок 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Инженерно-технические средства защиты:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>инженерные заграждения;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>инженерные средства и сооружения;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>контрольно-пропускные пункты.</span>
                    </li>
                  </ul>
                </div>

                {/* Подзаголовок 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Технические средства охраны:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система охранной сигнализации зданий;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система охранной сигнализации периметра объекта;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система тревожной сигнализации;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система контроля и управления доступом;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система охранная телевизионная;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система сбора, обработки и отображения информации;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>технические средства досмотра.</span>
                    </li>
                  </ul>
                </div>

                {/* Подзаголовок 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Вспомогательные системы и средства:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система охранного освещения;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>система электропитания;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>средства оповещения;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>средства постовой связи;</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span>средства контроля действий сотрудников подразделения охраны.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="mt-20 bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700/50 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Заказать проектирование
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+78172239695"
                className="text-white font-medium px-6 py-3 rounded-lg shadow-lg border hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(39, 158, 204, 0.3)',
                  borderColor: 'rgba(39, 158, 204, 0.5)'
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                +7 (817) 223-96-95
              </a>
              <a
                href="mailto:post@issgp.ru"
                className="text-white font-medium px-6 py-3 rounded-lg shadow-lg border hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(39, 158, 204, 0.3)',
                  borderColor: 'rgba(39, 158, 204, 0.5)'
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-line"></i>
                </div>
                post@issgp.ru
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
