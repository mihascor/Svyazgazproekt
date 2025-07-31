
'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function Company() {
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

Коллектив ООО «Связьгазпроект» специализируется на выполнении полного комплекса проектно-изыскательских работ. В команде более 400 специалистов, офисы в 6 регионах России, компания является членом нескольких СРО.
            </p>
          </div>

          {/* Block 1 - История компании */}
          <div className="mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20office%20building%20at%20sunset%20with%20professional%20corporate%20architecture%2C%20glass%20facade%20reflecting%20golden%20light%2C%20contemporary%20business%20center%20with%20clean%20geometric%20design%2C%20urban%20skyline%20background%2C%20warm%20lighting%20creating%20welcoming%20atmosphere%2C%20high-quality%20architectural%20photography%20with%20professional%20composition&width=600&height=400&seq=company_history&orientation=landscape"
                    alt="История компании"
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    О нас
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Компания ООО «Связьгазпроект» образована в 2015 году в г. Вологде.
Коллектив ООО «Связьгазпроект» специализируется на выполнении полного комплекса проектно-изыскательских работ.
Виды деятельности, осуществляемые компанией:
- выполнение сбора исходных данных, комплексных инженерных изысканий
- проектирование комплексов инженерно-технических средств охраны
- осуществление авторского надзора за строительством
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    ООО «Связьгазпроект» – это коллектив опытных профессионалов, готовый качественно и в установленные сроки решить любую поставленную задачу.
В компании работает более 400 высококвалифицированных специалистов.
Главный офис расположен в Вологде, обособленные подразделения ООО «Связьгазпроект» расположены в шести субъектах Российской Федерации — Санкт-Петербурге, Воронеже, Ставрополе, Томске, Казани, Нижнем Новгороде.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    ООО «Связьгазпроект» является членом саморегулируемых организаций:
- Ассоциация «Объединение проектировщиков «УниверсалПроект» (СРО-П-179-12122012) на право осуществления подготовки проектной документации. Регистрационный номер члена саморегулируемой организации П-179-003525341140-0598.
- Ассоциация «Национальный Альянс изыскателей «ГеоЦентр» (СРО-И-037-18122012) на право осуществления подготовки инженерных изысканий. Регистрационный номер члена саморегулируемой организации И-037-003525341140-1247.
- Региональное объединение работодателей строительного комплекса «СОЮЗ СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ». Регистрационный номер члена некоммерческой корпоративной организации 195.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 - Наши заказчики */}
          <div className="mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20engineering%20team%20working%20with%20blueprints%20and%20technical%20drawings%20on%20large%20table%2C%20modern%20office%20environment%20with%20computers%20and%20monitors%2C%20gas%20pipeline%20schematics%20and%20technical%20documentation%2C%20collaborative%20workspace%20with%20professional%20lighting%2C%20engineers%20analyzing%20complex%20infrastructure%20projects&width=600&height=400&seq=company_expertise&orientation=landscape"
                    alt="Экспертиза компании"
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Наши заказчики
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    ООО «ГАЗПРОМ ИНВЕСТ»
ООО «АЧИМ ДЕВЕЛОПМЕНТ»
ООО «ГЛ ИНЖИНИРИНГ»
ООО «ГАЗПРОМ ГАЗИФИКАЦИЯ»
ООО «ГАЗПРОМ ЭНЕРГО» 
ООО «ГАЗПРОМ ДОБЫЧА КРАСНОДАР»
ООО «ГАЗПРОМ ДОБЫЧА НАДЫМ»
ООО «ГАЗПРОМ ДОБЫЧА НОЯБРЬСК»
ООО «ГАЗПРОМ ДОБЫЧА УРЕНГОЙ»
ООО «ГАЗПРОМ ДОБЫЧА ЯМБУРГ»
ООО «ГАЗПРОМ ДОБЫЧА АСТРАХАНЬ»
ООО «ГАЗПРОМ ДОБЫЧА ИРКУТСК» 
ООО «ГАЗПРОМ ДОБЫЧА ОРЕНБУРГ» 
ПАО «ГАЗПРОМ НЕФТЬ»
ООО «ГАЗПРОМНЕФТЬ-ЗАПОЛЯРЬЕ»
ООО «ГАЗПРОМ ПЕРЕРАБОТКА»
ООО «ГАЗПРОМ ПРОЕКТИРОВАНИЕ»
ООО «ГАЗПРОМ ПХГ»
ООО «ГАЗПРОМ ТРАНСГАЗ ВОЛГОГРАД»
ООО «ГАЗПРОМ ТРАНСГАЗ ЕКАТЕРИНБУРГ»
ООО «ГАЗПРОМ ТРАНСГАЗ КАЗАНЬ»
ООО «ГАЗПРОМ ТРАНСГАЗ КРАСНОДАР»
ООО «ГАЗПРОМ ТРАНСГАЗ МОСКВА»
ООО «ГАЗПРОМ ТРАНСГАЗ СУРГУТ»
ООО «ГАЗПРОМ ТРАНСГАЗ ТОМСК»
ООО «ГАЗПРОМ ТРАНСГАЗ УХТА»
ООО «ГАЗПРОМ ТРАНСГАЗ ЧАЙКОВСКИЙ»
ООО «ГАЗПРОМ ТРАНСГАЗ ЮГОРСК»
ООО «ГАЗПРОМ ТРАНСГАЗ НИЖНИЙ НОВГОРОД» 
ООО «ГАЗПРОМ ТРАНСГАЗ САНКТ-ПЕТЕРБУРГ» 
ООО «ГАЗПРОМ ТРАНСГАЗ САМАРА» 
ООО «ГАЗПРОМ ТРАНСГАЗ СТАВРОПОЛЬ» 
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Наши специалисты имеют лицензии и допуски для работы с объектами всех категорий сложности, включая особо опасные производственные объекты. В штате института работают эксперты промышленной безопасности и главные специалисты с многолетним опытом.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Мы используем самые современные программные комплексы для 3D-проектирования, гидравлических расчетов и моделирования технологических процессов, что позволяет создавать оптимальные проектные решения.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 - Документы */}
          <div className="mb-16">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="https://readdy.ai/api/search-image?query=Large%20industrial%20gas%20pipeline%20construction%20site%20with%20modern%20equipment%20and%20machinery%2C%20workers%20in%20safety%20gear%20overseeing%20pipeline%20installation%2C%20vast%20landscape%20with%20completed%20pipeline%20sections%20stretching%20into%20distance%2C%20professional%20construction%20photography%20with%20dramatic%20sky%20and%20industrial%20scale%20infrastructure%20project&width=600&height=400&seq=company_achievements&orientation=landscape"
                    alt="Достижения компании"
                    className="w-full h-80 object-cover object-top rounded-xl"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Документы
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    За годы работы институт спроектировал более 15 000 км магистральных газопроводов и свыше 50 000 км распределительных сетей. Наши проекты реализованы в 65 регионах России, а также в странах СНГ и дальнего зарубежья.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Среди наших крупнейших проектов - участие в проектировании газопроводов "Северный поток", "Турецкий поток", "Сила Сибири", а также множество региональных газотранспортных систем. Мы гордимся тем, что наши решения обеспечивают надежное газоснабжение миллионов потребителей.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Сегодня институт активно развивает направления цифровизации, внедряет технологии искусственного интеллекта и работает над проектами водородной энергетики. Мы готовы к вызовам будущего и продолжаем укреплять энергетическую безопасность России.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
              <div className="text-gray-300">лет опыта</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">специалистов</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15 000</div>
              <div className="text-gray-300">км газопроводов</div>
            </div>
            <div className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">65</div>
              <div className="text-gray-300">регионов</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
