
'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';

export default function Clients() {
  const clients = [
    'ООО «ГАЗПРОМ ИНВЕСТ»',
    'ООО «АЧИМ ДЕВЕЛОПМЕНТ»',
    'ООО «ГЛ ИНЖИНИРИНГ»',
    'ООО «ГАЗПРОМ ГАЗИФИКАЦИЯ»',
    'ООО «ГАЗПРОМ ЭНЕРГО»',
    'ООО «ГАЗПРОМ ДОБЫЧА КРАСНОДАР»',
    'ООО «ГАЗПРОМ ДОБЫЧА НАДЫМ»',
    'ООО «ГАЗПРОМ ДОБЫЧА НОЯБРЬСК»',
    'ООО «ГАЗПРОМ ДОБЫЧА УРЕНГОЙ»',
    'ООО «ГАЗПРОМ ДОБЫЧА ЯМБУРГ»',
    'ООО «ГАЗПРОМ ДОБЫЧА АСТРАХАНЬ»',
    'ООО «ГАЗПРОМ ДОБЫЧА ИРКУТСК»',
    'ООО «ГАЗПРОМ ДОБЫЧА ОРЕНБУРГ»',
    'ПАО «ГАЗПРОМ НЕФТЬ»',
    'ООО «ГАЗПРОМНЕФТЬ-ЗАПОЛЯРЬЕ»',
    'ООО «ГАЗПРОМ ПЕРЕРАБОТКА»',
    'ООО «ГАЗПРОМ ПРОЕКТИРОВАНИЕ»',
    'ООО «ГАЗПРОМ ПХГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ВОЛГОГРАД»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЕКАТЕРИНБУРГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ КАЗАНЬ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ КРАСНОДАР»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ МОСКВА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ СУРГУТ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ТОМСК»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ УХТА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЧАЙКОВСКИЙ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ ЮГОРСК»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ НИЖНИЙ НОВГОРОД»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ САНКТ-ПЕТЕРБУРГ»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ САМАРА»',
    'ООО «ГАЗПРОМ ТРАНСГАЗ СТАВРОПОЛЬ»'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Заголовок страницы */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Наши заказчики
            </h1>
          </div>

          {/* Сетка клиентов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center min-h-[80px]"
              >
                <h3 className="text-gray-800 font-medium text-sm leading-tight text-center">
                  {client}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
