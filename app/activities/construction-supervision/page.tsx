
'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';

export default function ConstructionSupervision() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок страницы */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Осуществление авторского надзора за строительством
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              ООО «Связьгазпроект» осуществляет авторский надзор за ходом строительства комплексов инженерно-технических средств охраны в соответствии с требованиями действующей нормативной документации.
            </p>
          </div>

          {/* Функционал */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Реализуется следующий функционал:
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    организация выполнения работ по авторскому надзору на объектах строительства совместно с представителями заказчика (оформление договоров, подготовка разрешительной документации, рассмотрение и подписание актов освидетельствования скрытых работ, актов промежуточной приёмки ответственных конструкций, участков сетей инженерно-технического обеспечения)
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    контроль соответствия выполняемых строительно-монтажных работ разработанной рабочей документации, с соблюдением технологии производства работ
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    ведение отчетной документации по авторскому надзору (журналы)
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    контроль своевременного устранения замечаний
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    оперативное решение технических вопросов, возникающих в процессе реализации стройки
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    согласование изменения технических решений
                  </span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                    <i className="ri-checkbox-circle-line text-blue-500"></i>
                  </div>
                  <span className="text-base leading-relaxed">
                    информирование заказчика о некачественном выполнении работ и о срывах сроков устранения замечаний подрядчиком
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Контактная информация */}
          <div className="bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Заказать авторский надзор
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
