'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export default function PrivacyPolicyPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/policies/privacy.md')
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <ScrollToTopButton />

      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
              Политика обработки персональных данных
            </h1>
            <article className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
               {markdown}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
