
'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import ContactsMap from '../../components/ContactsMap';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Контакты
            </h1>
          </div>
          <div className="text-center mb-12">
          </div>
        </div>
        
        <ContactsMap />
      </div>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}