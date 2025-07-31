
'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';

export default function EngineeringSurveys() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const surveys = [
    {
      id: 'geodetic',
      title: 'Инженерно-геодезические изыскания',
      content: `Инженерно-геодезические изыскания включают в себя:

• Создание и развитие опорных геодезических сетей
• Топографическая съемка местности масштабов 1:500-1:5000
• Трассирование линейных сооружений
• Съемка подземных коммуникаций
• Исполнительная съемка построенных объектов
• Наблюдения за деформациями и осадками зданий и сооружений
• Вынос проектов в натуру зданий и сооружений

Все работы выполняются с использованием современного геодезического оборудования и GNSS-спутниковых технологий. Специалисты имеют соответствующую квалификацию и аттестацию для работы на объектах любой сложности.`,
    },
    {
      id: 'geological',
      title: 'Инженерно-геологические изыскания',
      content: `Инженерно-геологические изыскания включают в себя:

• Проходку разведочных скважин и шурфов
• Статическое и динамическое зондирование грунтов
• Лабораторные исследования физико-механических свойств грунтов
• Оценка коррозионной агрессивности грунтов и подземных вод
• Гидрогеологические исследования
• Оценка инженерно-геологических условий площадки строительства
• Прогноз изменения инженерно-геологических условий

Наша аккредитованная лаборатория позволяет проводить все виды испытаний грунтов и подземных вод в соответствии с требованиями ГОСТ и СП.`,
    },
    {
      id: 'hydrometeorological',
      title: 'Инженерно-гидрометеорологические изыскания',
      content: `Инженерно-гидрометеорологические изыскания включают в себя:

• Изучение климатических условий района
• Исследование поверхностных водоемов и водотоков
• Определение гидрологических характеристик водотоков
• Оценка опасных гидрометеорологических процессов
• Прогноз изменения гидрологического режима
• Расчеты максимальных расходов воды
• Оценка воздействия строительства на водные объекты

Работы выполняются с применением современного гидрометеорологического оборудования и методов математического моделирования гидрологических процессов.`,
    },
    {
      id: 'environmental',
      title: 'Инженерно-экологические изыскания',
      content: `Инженерно-экологические изыскания включают в себя:

• Исследование компонентов природной среды
• Оценка современного экологического состояния территории
• Прогноз изменения природной среды при строительстве
• Разработка рекомендаций по охране окружающей среды
• Исследование источников воздействия на окружающую среду
• Оценка воздействия на атмосферный воздух, поверхностные и подземные воды
• Исследование загрязнения почв и грунтов
• Исследование растительного и животного мира

Все изыскания выполняются в соответствии с требованиями природоохранного законодательства Российской Федерации.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Выполнение инженерных изысканий
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ООО «Связьгазпроект» выполняет все основные виды изысканий, необходимые для выполнения проектных работ.
            </p>
          </div>

          {/* Белые плашки с разделами */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {surveys.map((survey) => (
              <div key={survey.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(survey.id)}
                  className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {survey.title}
                  </h3>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`ri-arrow-${openSection === survey.id ? 'up' : 'down'}-s-line text-xl text-gray-600`}></i>
                  </div>
                </button>

                {openSection === survey.id && (
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
                    <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                      {survey.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Контактная информация */}
          <div className="mt-20 bg-slate-800/50 rounded-2xl p-8 shadow-xl border border-slate-700/50 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Заказать инженерные изыскания
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+78172239695"
                className="text-white font-medium px-6 py-3 rounded-lg shadow-lg border hover:scale-105 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(39, 158, 204, 0.3)',
                  borderColor: 'rgba(39, 158, 204, 0.5)',
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
                  borderColor: 'rgba(39, 158, 204, 0.5)',
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
