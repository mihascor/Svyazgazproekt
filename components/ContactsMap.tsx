'use client';

import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function ContactsMap() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const offices = [
    { 
      name: 'Вологда', 
      coords: [59.199689, 39.921095], 
      address: 'ул. Козленская, д. 119а, оф. 308/9',
      isMain: true
    },
    { 
      name: 'Санкт-Петербург', 
      coords: [59.825656, 30.326163], 
      address: 'Пулковское шоссе, д. 28А оф. 805' 
    },
    { 
      name: 'Воронеж', 
      coords: [51.679336, 39.187639], 
      address: 'ул. Урицкого, д. 151'
    },
    { 
      name: 'Нижний Новгород', 
      coords: [56.311182, 43.996851], 
      address: 'ул. Новая, д. 10, пом. П10'
    },
    { 
      name: 'Ставрополь', 
      coords: [45.044126, 41.912597], 
      address: 'проспект Кулакова, д. 7Г, пом. 33'
    },
    { 
      name: 'Томск', 
      coords: [56.473023, 84.968544], 
      address: 'ул. Дзержинского, д. 8'
    },
    { 
      name: 'Казань', 
      coords: [55.799446, 49.208534], 
      address: 'проспект Победы, д. 173, оф. 114'
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.full';
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(initMap);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    const myMap = new window.ymaps.Map('yandex-map-contacts', {
      center: [64.6863, 97.7454], 
      zoom: 3,
      controls: ['zoomControl', 'fullscreenControl']
    });

    offices.forEach((office) => {
      const placemark = new window.ymaps.Placemark(
        office.coords,
        {
          balloonContentHeader: office.name,
          balloonContentBody: office.address.replace(/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n/g, '<br>'),
          hintContent: office.name
        },
        {
          preset: office.isMain ? 'islands#greenCircleDotIcon' : 'islands#darkBlueCircleDotIcon',
          iconColor: office.isMain ? '#16a34a' : '#1e293b'
        }
      );

      myMap.geoObjects.add(placemark);
    });

    setMapLoaded(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div 
            id="yandex-map-contacts" 
            className="w-full h-96 lg:h-[600px]"
            style={{ minHeight: '400px' }}
          />
          {!mapLoaded && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Загрузка карты...</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-3"></div>
              <h3 className="font-bold text-slate-900 text-xl">Центральный офис</h3>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-2">Вологда</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p className="font-medium">ООО «Связьгазпроект»</p>
                <p>ул. Козленская, д. 119а, оф. 308/9</p>
                <p>160012, Вологодская обл., г. Вологда</p>
                <div className="flex items-center mt-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-phone-line text-green-600"></i>
                  </div>
                  <span className="text-green-600 font-medium">+7 (817) 223-96-95</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-mail-line text-blue-600"></i>
                  </div>
                  <span className="text-blue-600">post@issgp.ru</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Региональные офисы</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {offices.slice(1).map((office, index) => (
                <div key={office.name} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-slate-600 rounded-full mr-3"></div>
                    <h4 className="font-semibold text-slate-800">
                      <span className="font-bold">{office.name}</span>
                      <br />
                      <span className="font-normal">{office.address}</span>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-slate-900 text-xl mb-4">Реквизиты</h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="space-y-3 text-slate-700">
                <p><span className="font-semibold">Директор:</span> Макарова Анна Николаевна</p>
                <p><span className="font-semibold">ИНН/КПП:</span> 3525341140/352501001</p>
                <p><span className="font-semibold">ОГРН:</span> 1153525002113</p>
                <p><span className="font-semibold">Расчетный счет №:</span> 40702810512000001270</p>
                <p><span className="font-semibold">Банк:</span> Вологодское отделение № 8638 ПАО Сбербанк</p>
                <p><span className="font-semibold">к/с:</span> 30101810900000000644</p>
                <p><span className="font-semibold">БИК:</span> 041909644</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}