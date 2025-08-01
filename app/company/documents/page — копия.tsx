
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ScrollToTopButton from '../../../components/ScrollToTopButton';
import Link from 'next/link';

export default function DocumentsPage() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <ScrollToTopButton />
      
      <main className="pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Документы
            </h1>
          </div>

          <div className="space-y-4">
              {[
    {
      title: 'Политика в отношении обработки персональных данных',
      file: 'privacy-policy.pdf',
    },
    {
      title: 'Лицензия ФСТЭК России от 30.01.2023 по технической защите конфиденциальной информации. Рег. № Л024-00107-77/00639358',
      file: 'license-fstek.pdf',
    },
    {
      title: 'Сертификат качества ГОСТ Р ИСО 9001-2015',
      file: 'certificate-ism-iso.pdf',
    },
    {
      title: 'Свидетельство ИНН',
      file: 'certificate-inn.pdf',
    },
    {
      title: 'Свидетельство о ГРЮЛ',
      file: 'certificate-grul.pdf',
    },
    {
      title: 'Сертификат соответствия ИНТЕРГАЗСЕРТ Проектирование инженерно-технических средств охраны на объектах Группы Газпром',
      file: 'certificate-intergazsert.pdf',
    },
    {
      title: 'Свидетельство члена СОЮЗА СТРОИТЕЛЕЙ ВОРОНЕЖСКОЙ ОБЛАСТИ',
      file: 'certificate-union.pdf',
    },
  ].map((doc, index) => (
    <div
      key={index}
      className="flex justify-between items-center p-4 rounded-xl bg-white shadow-md"
    >
      <p className="text-gray-800">{doc.title}</p>
      <div className="flex space-x-4">
        <a
          href={`/documents/${doc.file}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Просмотреть
        </a>
        <a
          href={`/documents/${doc.file}`}
          download
          className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 border border-blue-600 rounded-md"
        >
          Скачать PDF
        </a>
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