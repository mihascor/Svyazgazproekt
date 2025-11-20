'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/about" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              О нас
            </Link>
            <Link href="/clients" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
              Заказчики
            </Link>
            <Link href="/documents" className="px-4 py-2 text-base text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap">
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
              <Link href="/documents" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 text-white/70 hover:text-white hover:bg-white/10 transition-colors">
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

      {/* Privacy Policy Section */}
      <section className="relative min-h-screen pt-32 md:pt-40 pb-16">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" 
                 style={{
                   backgroundImage: 'repeating-linear-gradient(0deg, rgba(100, 200, 255, 0.03) 0px, transparent 1px, transparent 40px, rgba(100, 200, 255, 0.03) 41px), repeating-linear-gradient(90deg, rgba(100, 200, 255, 0.03) 0px, transparent 1px, transparent 40px, rgba(100, 200, 255, 0.03) 41px)',
                 }}>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <span className="text-cyan-300 text-xs md:text-sm font-light tracking-widest">КОНФИДЕНЦИАЛЬНОСТЬ</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                ПОЛИТИКА ОБРАБОТКИ
              </span>
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                ПЕРСОНАЛЬНЫХ ДАННЫХ
              </span>
            </h1>
          </div>

          {/* Document Content */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 lg:p-12 space-y-8">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">1. Общие положения</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.1.</h3>
                  <p>
                    Настоящая Политика общества с ограниченной ответственностью «Связьгазпроект» в отношении обработки персональных данных (далее - Политика) разработана во исполнение требований п. 2 ч. 1ст. 18.1 Федерального закона от 27 июля 2006 года No 152-ФЗ «О персональных данных» (далее - Закон о персональных данных) в целях обеспечения защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.2.</h3>
                  <p>
                    Политика действует в отношении всех персональных данных, которые обрабатывает общество с ограниченной ответственностью «Связьгазпроект» (далее - Оператор).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.3.</h3>
                  <p>
                    Политика распространяется на отношения в области обработки персональных данных, возникшие у Оператора как до, так и после утверждения настоящей Политики.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.4.</h3>
                  <p>
                    Во исполнение требований ч. 2 ст. 18.1 Закона о персональных данных настоящая Политика публикуется в свободном доступе в информационно-телекоммуникационной сети Интернет на сайте Оператора.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.5. Основные понятия, используемые в Политике:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-4">
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">персональные данные</h4>
                      <p className="text-sm text-white/70">
                        любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных);
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">оператор персональных данных (оператор)</h4>
                      <p className="text-sm text-white/70">
                        государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">обработка персональных данных</h4>
                      <p className="text-sm text-white/70 mb-3">
                        любое действие (операция) или совокупность действий (операций) с персональными данными, совершаемых с использованием средств автоматизации или без их использования. Обработка персональных данных включает в себя в том числе:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-white/60">
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сбор</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>запись</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>систематизацию</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>накопление</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>хранение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>уточнение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>извлечение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>использование</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>передачу</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>блокирование</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>удаление</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>уничтожение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>распространение</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">автоматизированная обработка персональных данных</h4>
                      <p className="text-sm text-white/70">
                        обработка персональных данных с помощью средств вычислительной техники;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">распространение персональных данных</h4>
                      <p className="text-sm text-white/70">
                        действия, направленные на раскрытие персональных данных неопределенному кругу лиц;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">предоставление персональных данных</h4>
                      <p className="text-sm text-white/70">
                        действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">блокирование персональных данных</h4>
                      <p className="text-sm text-white/70">
                        временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">уничтожение персональных данных</h4>
                      <p className="text-sm text-white/70">
                        действия, в результате которых становится невозможным восстановить содержание персональных данных в информационной системе персональных данных и (или) в результате которых уничтожаются материальные носители персональных данных;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">обезличивание персональных данных</h4>
                      <p className="text-sm text-white/70">
                        действия, в результате которых становится невозможным без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту персональных данных;
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">информационная система персональных данных</h4>
                      <p className="text-sm text-white/70">
                        совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.
                      </p>
                    </div>
                    
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.6. Основные права и обязанности Оператора</h3>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">1.6.1. Оператор имеет право:</h4>
                      <div className="space-y-3 text-sm text-white/70">
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">1)</span>
                          <p>самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами;</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">2)</span>
                          <p>поручить обработку персональных данных другому лицу с согласия субъекта персональных данных, если иное не предусмотрено федеральным законом, на основании заключаемого с этим лицом договора. Лицо, осуществляющее обработку персональных данных по поручению Оператора, обязано соблюдать принципы и правила обработки персональных данных, предусмотренные Законом о персональных данных, соблюдать конфиденциальность персональных данных, принимать необходимые меры, направленные на обеспечение выполнения обязанностей, предусмотренных Законом о персональных данных;</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">3)</span>
                          <p>в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">1.6.2. Оператор обязан:</h4>
                      <div className="space-y-3 text-sm text-white/70">
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">1)</span>
                          <p>организовывать обработку персональных данных в соответствии с требованиями Закона о персональных данных;</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">2)</span>
                          <p>отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">3)</span>
                          <p>сообщать в уполномоченный орган по защите прав субъектов персональных данных (Федеральную службу по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор)) по запросу этого органа необходимую информацию в течение 10 рабочих дней с даты получения такого запроса. Данный срок может быть продлен, но не более чем на пять рабочих дней. Для этого Оператору необходимо направить в Роскомнадзор мотивированное уведомление с указанием причин продления срока предоставления запрашиваемой информации;</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-cyan-400 font-semibold">4)</span>
                          <p>в порядке, определенном федеральным органом исполнительной власти, уполномоченным в области обеспечения безопасности, обеспечивать взаимодействие с государственной системой обнаружения, предупреждения и ликвидации последствий компьютерных атак на информационные ресурсы РФ, включая информирование его о компьютерных инцидентах, которые повлекли неправомерную передачу (предоставление, распространение, доступ) персональных данных.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.7. Основные права субъекта персональных данных</h3>
                  <p className="text-sm text-white/70 mb-3">Субъект персональных данных имеет право:</p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-2 text-sm text-white/70">
                      <span className="text-cyan-400 font-semibold">1)</span>
                      <p>получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами. Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных. Перечень информации и порядок её получения установлен Законом о персональных данных;</p>
                    </div>
                    <div className="flex items-start space-x-2 text-sm text-white/70">
                      <span className="text-cyan-400 font-semibold">2)</span>
                      <p>требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;</p>
                    </div>
                    <div className="flex items-start space-x-2 text-sm text-white/70">
                      <span className="text-cyan-400 font-semibold">3)</span>
                      <p>дать предварительное согласие на обработку персональных данных в целях продвижения на рынке товаров, работ и услуг;</p>
                    </div>
                    <div className="flex items-start space-x-2 text-sm text-white/70">
                      <span className="text-cyan-400 font-semibold">4)</span>
                      <p>обжаловать в Роскомнадзоре или в судебном порядке неправомерные действия или бездействие Оператора при обработке его персональных данных.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.8.</h3>
                  <p className="text-sm text-white/70">
                    Контроль за исполнением требований настоящей Политики осуществляется уполномоченным лицом, ответственным за организацию обработки персональных данных у Оператора.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1.9.</h3>
                  <p className="text-sm text-white/70">
                    Ответственность за нарушение требований законодательства Российской Федерации и нормативных актов в сфере обработки и защиты персональных данных определяется в соответствии с законодательством Российской Федерации.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">2. Цели сбора персональных данных</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.1.</h3>
                  <p>
                    Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей. Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.2.</h3>
                  <p>
                    Обработке подлежат только персональные данные, которые отвечают целям их обработки.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.3. Обработка Оператором персональных данных осуществляется в следующих целях:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-briefcase-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">ведение кадрового и бухгалтерского учета;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-text-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">обеспечение соблюдения трудового законодательства РФ;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-money-dollar-circle-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">обеспечение соблюдения налогового законодательства РФ;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-shield-user-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">обеспечение соблюдения пенсионного законодательства РФ;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-scales-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">исполнение судебного акта;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-government-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">участие лица в конституционном, гражданском, административном, уголовном судопроизводстве, судопроизводстве в арбитражных судах;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-list-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">подготовка, заключение и исполнение гражданско-правового договора;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-user-search-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">подбор персонала (соискателей) на вакантные должности оператора;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-heart-pulse-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">добровольное медицинское страхование;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-building-2-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">осуществления иных прав и законных интересов Организации в рамках осуществления видов деятельности, предусмотренных Уставом и иными локальными нормативными актами Организации, или третьих лиц либо достижения общественно значимых целей.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.4.</h3>
                  <p>
                    Обработка персональных данных работников может осуществляться исключительно в целях обеспечения соблюдения законов и иных нормативных правовых актов.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">3. Правовые основания обработки персональных данных</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1.</h3>
                  <p className="mb-4">
                    Правовым основанием обработки персональных данных является совокупность нормативных правовых актов, во исполнение которых и в соответствии с которыми Оператор осуществляет обработку персональных данных, в том числе:
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-government-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Конституция Российской Федерации;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-scales-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Гражданский кодекс Российской Федерации;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-briefcase-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Трудовой кодекс Российской Федерации;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-money-dollar-circle-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Налоговый кодекс Российской Федерации;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-shield-user-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Федеральный закон от 27 июля 2006 года № 152-ФЗ «О персональных данных»;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-building-2-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Федеральный закон от 08 февраля 1998 года № 14-ФЗ «Об обществах с ограниченной ответственностью»;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-calculator-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Федеральный закон от 06 декабря 2011 года № 402-ФЗ «О бухгалтерском учете»;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-heart-pulse-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Федеральный закон от 15 декабря 2001 года № 167-ФЗ «Об обязательном пенсионном страховании в Российской Федерации»;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-list-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">иные нормативные правовые акты, регулирующие отношения, связанные с деятельностью Оператора.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.2. Правовым основанием обработки персональных данных также являются:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-text-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">договоры, заключаемые между Оператором и субъектами персональных данных;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">согласие субъектов персональных данных на обработку их персональных данных.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">4. Объем и категории обрабатываемых персональных данных, категории субъектов персональных данных</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.1.</h3>
                  <p>
                    Содержание и объем обрабатываемых персональных данных должны соответствовать заявленным целям обработки, предусмотренным в разд. 2 настоящей Политики. Обрабатываемые персональные данные не должны быть избыточными по отношению к заявленным целям их обработки.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4.2. Оператор может обрабатывать персональные данные следующих категорий субъектов персональных данных:</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">4.2.1. Работники, уволенные работники:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>фамилия, имя, отчество</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>дата рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>месяц рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>год рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>место рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>семейное положение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>доходы</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>пол</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес электронной почты</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес регистрации</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>СНИЛС</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>гражданство</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес места жительства</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер телефона</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>ИНН</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные документа, удостоверяющего личность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные водительского удостоверения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер расчетного счета</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>профессия</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о трудовой деятельности</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>реквизиты банковской карты</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер лицевого счета</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>должность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>отношение к воинской обязанности, сведения о воинском учете</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения об образовании</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>состав семьи</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о состоянии здоровья (специальные категории)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о судимости (специальные категории)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">4.2.2. Клиенты, контрагенты, представители контрагентов, выгодоприобретатели по договорам Оператора:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>фамилия, имя, отчество</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>дата рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>месяц рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>год рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>место рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес электронной почты</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес регистрации</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>гражданство</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес места жительства</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер телефона</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер расчетного счета</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>ИНН</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные документа, удостоверяющего личность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>профессия</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о трудовой деятельности</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>должность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения об образовании</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">4.2.4. Родственники работников:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>фамилия, имя, отчество</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>дата рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>месяц рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>год рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>место рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>пол</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>гражданство</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные документа, содержащиеся в свидетельстве о рождении</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6">
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">4.2.5. Соискатели:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>фамилия, имя, отчество</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>дата рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>месяц рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>год рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>место рождения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>семейное положение</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>доходы</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес электронной почты</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес регистрации</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>гражданство</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>адрес места жительства</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>номер телефона</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные документа, удостоверяющего личность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>профессия</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о трудовой деятельности</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>должность</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>данные водительского удостоверения</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>отношение к воинской обязанности, сведения о воинском учете</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения об образовании</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>состав семьи</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о состоянии здоровья (специальные категории)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-circle-fill text-cyan-400 text-xs"></i>
                          <span>сведения о судимости (специальные категории)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.3.</h3>
                  <p>
                    Оператором не осуществляется обработка биометрических персональных данных (сведений, которые характеризуют физиологические и биологические особенности человека, на основании которых можно установить его личность).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">4.4.</h3>
                  <p>
                    Оператором не осуществляется обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, за исключением случаев, предусмотренных законодательством РФ.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">5. Порядок и условия обработки персональных данных</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.1.</h3>
                  <p>
                    Обработка персональных данных осуществляется Оператором в соответствии с требованиями законодательства Российской Федерации.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.2.</h3>
                  <p>
                    Обработка персональных данных осуществляется с согласия субъектов персональных данных на обработку их персональных данных, а также без такового в случаях, предусмотренных законодательством Российской Федерации.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.3. Оператор осуществляет обработку персональных данных для каждой цели их обработки следующими способами:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-computer-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">неавтоматизированная обработка персональных данных;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-global-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">автоматизированная обработка персональных данных с передачей полученной информации по информационно-телекоммуникационным сетям или без таковой;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-shuffle-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">смешанная обработка персональных данных.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.4.</h3>
                  <p>
                    К обработке персональных данных допускаются работники Оператора, в должностные обязанности которых входит обработка персональных данных.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.5. Обработка персональных данных для каждой цели обработки, указанной в п. 2.3 Политики, осуществляется путем:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-user-voice-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">получения персональных данных в устной и письменной форме непосредственно от субъектов персональных данных;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-database-2-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">внесения персональных данных в журналы, реестры и информационные системы Оператора;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-settings-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">использования иных способов обработки персональных данных.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.6.</h3>
                  <p className="mb-4">
                    Не допускается раскрытие третьим лицам и распространение персональных данных без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом. Согласие на обработку персональных данных, разрешенных субъектом персональных данных для распространения, оформляется отдельно от иных согласий субъекта персональных данных на обработку его персональных данных.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/70">
                    <i className="ri-information-line text-cyan-400 mr-2"></i>
                    Требования к содержанию согласия на обработку персональных данных, разрешенных субъектом персональных данных для распространения, утверждены Приказом Роскомнадзора от 24 февраля 2021 года № 18.
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.7.</h3>
                  <p>
                    Передача персональных данных органам дознания и следствия, в Федеральную налоговую службу, Социальный фонд России и другие уполномоченные органы исполнительной власти и организации осуществляется в соответствии с требованиями законодательства Российской Федерации.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.8. Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, распространения и других несанкционированных действий, в том числе:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-shield-check-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">определяет угрозы безопасности персональных данных при их обработке;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-list-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">принимает локальные нормативные акты и иные документы, регулирующие отношения в сфере обработки и защиты персональных данных;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-user-settings-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">назначает лиц, ответственных за обеспечение безопасности персональных данных в структурных подразделениях и информационных системах Оператора;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-tools-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">создает необходимые условия для работы с персональными данными;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-folder-chart-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">организует учет документов, содержащих персональные данные;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-server-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">организует работу с информационными системами, в которых обрабатываются персональные данные;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-lock-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">хранит персональные данные в условиях, при которых обеспечивается их сохранность и исключается неправомерный доступ к ним;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-graduation-cap-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">организует обучение работников Оператора, осуществляющих обработку персональных данных.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.9.</h3>
                  <p>
                    Оператор осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требует каждая цель обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.9.1.</h3>
                  <p>
                    Персональные данные на бумажных носителях хранятся у Оператора в течение сроков хранения документов, для которых эти сроки предусмотрены законодательством об архивном деле в РФ (Федеральный закон от 22 октября 2004 года No 125-ФЗ «Об архивном деле в Российской Федерации», Перечень типовых управленческих архивных документов, образующихся в процессе деятельности государственных органов, органов местного самоуправления и организаций, с указанием сроков их хранения (утв. Приказом Росархива от 20 декабря 2019 года No 236)).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.9.2.</h3>
                  <p>
                    Срок хранения персональных данных, обрабатываемых в информационных системах персональных данных, соответствует сроку хранения персональных данных на бумажных носителях.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.10. Оператор прекращает обработку персональных данных в следующих случаях:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-error-warning-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">выявлен факт их неправомерной обработки. Срок - в течение трех рабочих дней с даты выявления;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-checkbox-circle-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">достигнута цель их обработки;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-time-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">истек срок действия или отозвано согласие субъекта персональных данных на обработку указанных данных, когда по Закону о персональных данных обработка этих данных допускается только с согласия.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.11. При достижении целей обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку Оператор прекращает обработку этих данных, если:</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-text-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-shield-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">Оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Законом о персональных данных или иными федеральными законами;</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-file-list-line text-cyan-400 mt-1 flex-shrink-0"></i>
                      <span className="text-sm text-white/70">иное не предусмотрено другим соглашением между Оператором и субъектом персональных данных.</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.12.</h3>
                  <p>
                    При обращении субъекта персональных данных к Оператору с требованием о прекращении обработки персональных данных в срок, не превышающий 10 рабочих дней с даты получения Оператором соответствующего требования, обработка персональных данных прекращается, за исключением случаев, предусмотренных Законом о персональных данных. Указанный срок может быть продлен, для этого Оператору необходимо направить субъекту персональных данных мотивированное уведомление с указанием причин продления срока.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">5.13.</h3>
                  <p>
                    При сборе персональных данных, в том числе посредством информационно телекоммуникационной сети Интернет, Оператор обеспечивает запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение персональных данных граждан Российской Федерации с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев, указанных в Законе о персональных данных.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">6. Актуализация, исправление, удаление, уничтожение персональных данных, ответы на запросы субъектов на доступ к персональным данным</h2>
              <div className="space-y-4 text-sm md:text-base text-white/80 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6.1.</h3>
                  <p className="mb-4">
                    Подтверждение факта обработки персональных данных Оператором, правовые основания и цели обработки персональных данных, а также иные сведения, указанные в ч. 7 ст. 14 Закона о персональных данных, предоставляются Оператором субъекту персональных данных или его представителю в течение 10 рабочих дней с момента обращения либо получения запроса субъекта персональных данных или его представителя. Данный срок может быть продлен, но не более чем на пять рабочих дней. Для этого Оператору следует направить субъекту персональных данных мотивированное уведомление с указанием причин продления срока предоставления запрашиваемой информации.
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 mb-4">
                    <p className="text-sm text-white/70 mb-3">
                      В предоставляемые сведения не включаются персональные данные, относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных.
                    </p>
                    
                    <h4 className="text-base font-semibold text-cyan-300 mb-3">Запрос должен содержать:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <i className="ri-id-card-line text-cyan-400 mt-1 flex-shrink-0"></i>
                        <span className="text-sm text-white/70">номер основного документа, удостоверяющего личность субъекта персональных данных или его представителя, сведения о дате выдачи указанного документа и выдавшем его органе;</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-file-list-3-line text-cyan-400 mt-1 flex-shrink-0"></i>
                        <span className="text-sm text-white/70">сведения, подтверждающие участие субъекта персональных данных в отношениях с Оператором (номер договора, дата заключения договора, условное словесное обозначение и (или) иные сведения), либо сведения, иным образом подтверждающие факт обработки персональных данных Оператором;</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-quill-pen-line text-cyan-400 mt-1 flex-shrink-0"></i>
                        <span className="text-sm text-white/70">подпись субъекта персональных данных или его представителя.</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-white/70">
                        <i className="ri-information-line text-cyan-400 mr-2"></i>
                        Запрос может быть направлен в форме электронного документа и подписан электронной подписью в соответствии с законодательством Российской Федерации.
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-3">
                    Оператор предоставляет сведения, указанные в ч. 7 ст. 14 Закона о персональных данных, субъекту персональных данных или его представителю в той форме, в которой направлены соответствующие обращение либо запрос, если иное не указано в обращении или запросе.
                  </p>
                  
                  <p className="mb-3">
                    Если в обращении (запросе) субъекта персональных данных не отражены в соответствии с требованиями Закона о персональных данных все необходимые сведения или субъект не обладает правами доступа к запрашиваемой информации, то ему направляется мотивированный отказ.
                  </p>
                  
                  <p>
                    Право субъекта персональных данных на доступ к его персональным данным может быть ограничено в соответствии с ч. 8 ст. 14 Закона о персональных данных, в том числе если доступ субъекта персональных данных к его персональным данным нарушает права и законные интересы третьих лиц.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6.2.</h3>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-lock-line text-cyan-400"></i>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-2">Блокирование неточных данных</h4>
                        <p className="text-sm text-white/70">
                          В случае выявления неточных персональных данных при обращении субъекта персональных данных или его представителя либо по их запросу или по запросу Роскомнадзора Оператор осуществляет блокирование персональных данных, относящихся к этому субъекту персональных данных, с момента такого обращения или получения указанного запроса на период проверки, если блокирование персональных данных не нарушает права и законные интересы субъекта персональных данных или третьих лиц.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-refresh-line text-cyan-400"></i>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white mb-2">Уточнение данных</h4>
                        <p className="text-sm text-white/70">
                          В случае подтверждения факта неточности персональных данных Оператор на основании сведений, представленных субъектом персональных данных или его представителем либо Роскомнадзором, или иных необходимых документов уточняет персональные данные в течение семи рабочих дней со дня представления таких сведений и снимает блокирование персональных данных.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">6.3.</h3>
                  <p>
                    В случае выявления неправомерной обработки персональных данных при обращении (запросе) субъекта персональных данных или его представителя либо Роскомнадзора Оператор осуществляет блокирование неправомерно обрабатываемых персональных данных, относящихся к этому субъекту персональных данных, с момента такого обращения или получения запроса.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6.4.</h3>
                  <p className="mb-4">
                    При выявлении Оператором, Роскомнадзором или иным заинтересованным лицом факта неправомерной или случайной передачи (предоставления, распространения) персональных данных (доступа к персональным данным), повлекшей нарушение прав субъектов персональных данных, Оператор:
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-4 md:p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-time-line text-red-400 text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-red-300 mb-2">В течение 24 часов</h4>
                        <p className="text-sm text-white/70">
                          уведомляет Роскомнадзор о произошедшем инциденте, предполагаемых причинах, повлекших нарушение прав субъектов персональных данных, предполагаемом вреде, нанесенном правам субъектов персональных данных, и принятых мерах по устранению последствий инцидента, а также предоставляет сведения о лице, уполномоченном Оператором на взаимодействие с Роскомнадзором по вопросам, связанным с инцидентом;
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-alarm-warning-line text-orange-400 text-lg"></i>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-orange-300 mb-2">В течение 72 часов</h4>
                        <p className="text-sm text-white/70">
                          уведомляет Роскомнадзор о результатах внутреннего расследования выявленного инцидента и предоставляет сведения о лицах, действия которых стали его причиной (при наличии).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">6.5. Порядок уничтожения персональных данных Оператором</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">6.5.1. Условия и сроки уничтожения персональных данных Оператором:</h4>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ri-checkbox-circle-line text-green-400"></i>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-1">Достижение цели обработки</h5>
                            <p className="text-sm text-white/70">достижение цели обработки персональных данных либо утрата необходимости достигать эту цель - в течение 30 дней;</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ri-calendar-check-line text-blue-400"></i>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-1">Истечение сроков хранения</h5>
                            <p className="text-sm text-white/70">достижение максимальных сроков хранения документов, содержащих персональные данные, - в течение 30 дней;</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ri-error-warning-line text-yellow-400"></i>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-1">Незаконное получение данных</h5>
                            <p className="text-sm text-white/70">предоставление субъектом персональных данных (его представителем) подтверждения того, что персональные данные получены незаконно или не являются необходимыми для заявленной цели обработки, - в течение семи рабочих дней;</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <i className="ri-close-circle-line text-red-400"></i>
                          </div>
                          <div>
                            <h5 className="text-sm font-semibold text-white mb-1">Отзыв согласия</h5>
                            <p className="text-sm text-white/70">отзыв субъектом персональных данных согласия на обработку его персональных данных, если их сохранение для цели их обработки более не требуется, - в течение 30 дней.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-3">6.5.2.</h4>
                      <p className="mb-4">
                        При достижении цели обработки персональных данных, а также в случае отзыва субъектом персональных данных согласия на их обработку персональные данные подлежат уничтожению, если:
                      </p>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-file-text-line text-cyan-400 mt-1 flex-shrink-0"></i>
                          <span className="text-sm text-white/70">иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является субъект персональных данных;</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-shield-line text-cyan-400 mt-1 flex-shrink-0"></i>
                          <span className="text-sm text-white/70">оператор не вправе осуществлять обработку без согласия субъекта персональных данных на основаниях, предусмотренных Законом о персональных данных или иными федеральными законами;</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-file-list-line text-cyan-400 mt-1 flex-shrink-0"></i>
                          <span className="text-sm text-white/70">иное не предусмотрено другим соглашением между Оператором и субъектом персональных данных.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">6.5.3.</h4>
                      <p className="text-sm text-white/70">
                        Уничтожение персональных данных осуществляет комиссия, созданная приказом директора.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-semibold text-cyan-300 mb-2">6.5.4.</h4>
                      <p className="text-sm text-white/70">
                        Способы уничтожения персональных данных устанавливаются в локальных нормативных актах Оператора.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-8">
              <Link href="/" 
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-left-line"></i>
                <span>Вернуться на главную</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 lg:py-16 bg-black border-t border-white/10">
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