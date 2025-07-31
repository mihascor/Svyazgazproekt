
'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RussiaMap from '../components/RussiaMap';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Главная() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <RussiaMap />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
