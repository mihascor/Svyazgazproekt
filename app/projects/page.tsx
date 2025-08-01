
'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      image: "https://readdy.ai/api/search-image?query=Modern%20industrial%20gas%20processing%20facility%20with%20steel%20pipes%20and%20equipment%20against%20clear%20blue%20sky%2C%20industrial%20photography%20style%2C%20high-tech%20petroleum%20refinery%20complex%20with%20modern%20architecture%20and%20engineering%20systems&width=800&height=600&seq=project1&orientation=landscape"
    },
    {
      id: 2,
      image: "https://readdy.ai/api/search-image?query=Large-scale%20oil%20and%20gas%20pipeline%20construction%20project%20with%20workers%20in%20safety%20gear%2C%20industrial%20construction%20site%20with%20heavy%20machinery%20and%20steel%20pipeline%20infrastructure%2C%20professional%20engineering%20photography&width=800&height=600&seq=project2&orientation=landscape"
    },
    {
      id: 3,
      image: "https://readdy.ai/api/search-image?query=Modern%20petrochemical%20plant%20with%20complex%20piping%20systems%20and%20industrial%20towers%2C%20clean%20industrial%20facility%20with%20professional%20lighting%2C%20advanced%20chemical%20processing%20equipment%20and%20storage%20tanks&width=800&height=600&seq=project3&orientation=landscape"
    },
    {
      id: 4,
      image: "https://readdy.ai/api/search-image?query=Underground%20gas%20pipeline%20installation%20project%20with%20excavation%20equipment%2C%20construction%20workers%20installing%20large%20diameter%20pipes%2C%20industrial%20infrastructure%20development%20with%20earth%20moving%20machinery&width=800&height=600&seq=project4&orientation=landscape"
    },
    {
      id: 5,
      image: "https://readdy.ai/api/search-image?query=Gas%20compressor%20station%20with%20modern%20control%20systems%20and%20monitoring%20equipment%2C%20industrial%20facility%20with%20advanced%20automation%20technology%2C%20clean%20energy%20infrastructure%20with%20professional%20industrial%20design&width=800&height=600&seq=project5&orientation=landscape"
    },
    {
      id: 6,
      image: "https://readdy.ai/api/search-image?query=Oil%20refinery%20complex%20with%20distillation%20towers%20and%20processing%20units%2C%20large-scale%20industrial%20facility%20with%20steam%20and%20modern%20equipment%2C%20petroleum%20processing%20plant%20with%20clean%20industrial%20architecture&width=800&height=600&seq=project6&orientation=landscape"
    },
    {
      id: 7,
      image: "https://readdy.ai/api/search-image?query=Natural%20gas%20storage%20facility%20with%20spherical%20tanks%20and%20safety%20systems%2C%20industrial%20storage%20complex%20with%20modern%20engineering%20design%2C%20clean%20energy%20infrastructure%20with%20professional%20industrial%20photography&width=800&height=600&seq=project7&orientation=landscape"
    },
    {
      id: 8,
      image: "https://readdy.ai/api/search-image?query=Industrial%20power%20plant%20with%20cooling%20towers%20and%20electrical%20transmission%20lines%2C%20large-scale%20energy%20infrastructure%20with%20modern%20industrial%20architecture%2C%20professional%20engineering%20photography%20with%20clear%20sky%20background&width=800&height=600&seq=project8&orientation=landscape"
    },
    {
      id: 9,
      image: "https://readdy.ai/api/search-image?query=Chemical%20processing%20facility%20with%20stainless%20steel%20reactors%20and%20control%20systems%2C%20modern%20industrial%20complex%20with%20advanced%20automation%20technology%2C%20clean%20petrochemical%20plant%20with%20professional%20industrial%20design&width=800&height=600&seq=project9&orientation=landscape"
    }
  ];

  const openImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const getVisibleProjects = () => {
    const startIndex = currentSlide * 3;
    return projects.slice(startIndex, startIndex + 3);
  };

  const [carouselPosition, setCarouselPosition] = useState(0);

  const carouselProjects = [
    'Газопровод «Сила Сибири»',
    'Ковыктинское газоконденсатное месторождения',
    'Амурский газоперерабатывающий завод',
    'Московский нефтеперерабатывающий завод',
    'Омский нефтеперерабатывающий завод',
    'Система магистральных газопроводов «Восточная система газоснабжения»'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselPosition(prev => prev - 1);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* メインコンテンツ */}
      <main className="pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* ページタイトル */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              Реализованные проекты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              ООО «Связьгазпроект» обладает большим опытом разработки проектов по комплексам инженерно-технических средств охраны следующих объектов:
            </p>

            <div className="bg-slate-50 rounded-xl p-6 shadow-md max-w-3xl mx-auto">
              <ul className="text-lg text-gray-700 space-y-2 text-left">
                <li>- Газоперерабатывающие заводы</li>
                <li>- Нефтеперерабатывающие заводы</li>
                <li>- Магистральные газо- и нефтепроводы</li>
                <li>- Газораспределительные станции</li>
                <li>- Компрессорные и насосные станции</li>
                <li>- Подземные хранилища газа</li>
                <li>- Линейные объекты системы газоснабжения</li>
                <li>- Объекты спорта и прочие</li>
              </ul>
            </div>
          </div>

          {/* Галерея проектов */}
          <div className="mb-16 relative">
            {/* Левая стрелка */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
            </button>

            {/* Правая стрелка */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-800 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xl"></i>
              </div>
            </button>

            <div className="overflow-hidden rounded-2xl bg-slate-50 p-8 shadow-xl mx-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {getVisibleProjects().map((project) => (
                  <div
                    key={project.id}
                    className="w-full h-60 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 relative group"
                    onClick={() => openImage(project.image)}
                    title="Нажмите для увеличения"
                  >
                    <img
                      src={project.image}
                      alt={`Проект ${project.id}`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-zoom-in-line text-white text-2xl"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Индикаторы слайдов */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`${currentSlide === index ? 'bg-slate-800' : 'bg-slate-300 hover:bg-slate-400'} w-3 h-3 rounded-full transition-all duration-300`}
                />
              ))}
            </div>
          </div>

          {/* Карусель реализованных проектов */}
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl text-white overflow-hidden">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Наши реализованные проекты
            </h2>
            <div className="relative h-16 flex items-center">
              <div
                className="flex items-center space-x-16 text-2xl whitespace-nowrap"
                style={{
                  transform: `translateX(${carouselPosition}px)`,
                  transition: 'none'
                }}
              >
                {/* Дублируем массив несколько раз для бесконечной прокрутки */}
                {Array.from({ length: 10 }).map((_, groupIndex) => (
                  <React.Fragment key={groupIndex}>
                    {carouselProjects.map((project, index) => (
                      <span key={`${groupIndex}-${index}`} className="text-gray-200 hover:text-white transition-colors">
                        {project}
                      </span>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Полноэкранный просмотр изображения */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-close-line text-3xl"></i>
              </div>
            </button>
            <img
              src={selectedImage}
              alt="Полноразмерное изображение проекта"
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
