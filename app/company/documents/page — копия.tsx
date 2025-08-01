
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';
import Link from 'next/link';

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Политика в отношении обработки персональных данных",
      link: "/privacy-policy"
    },
    {
      id: 2,
      title: "Лицензия ФСТЭК России от 30.01.2023 по технической защите конфиденциальной информации. Рег. № Л024-00107-77/00639358",
      link: "#"
    },
    {
      id: 3,
      title: "Сертификат качества ГОСТ Р ИСО 9001-2015",
      link: "#"
    },
    {
      id: 4,
      title: "Сертификат соответствия ИНТЕРГАЗСЕРТ Проектирование инженерно-технических средств охраны на объектах Группы Газпром",
      link: "#"
    },
    {
      id: 5,
      title: "Свидетельство о ГРЮЛ",
      link: "#"
    },
    {
      id: 6,
      title: "Свидетельство ИНН",
      link: "#"
    },
    {
      id: 7,
      title: "Свидетельство члена СОЮЗА СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <ScrollToTopButton />
      
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Документы
            </h1>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-normal text-slate-800 leading-tight">
                    {doc.title}
                  </h3>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Link 
                    href={doc.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-center whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 text-sm"
                  >
                    <i className="ri-eye-line text-base"></i>
                    Просмотреть
                  </Link>
                  
                  <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-medium transition-colors duration-200 text-center whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 text-sm">
                    <i className="ri-download-line text-base"></i>
                    Скачать PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}