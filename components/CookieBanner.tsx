'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const accepted = window.localStorage.getItem('cookieConsentAccepted');
      if (accepted !== 'true') {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem('cookieConsentAccepted', 'true');
    } catch {}
    setIsVisible(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center z-[60] pointer-events-none">
      <div className="pointer-events-auto max-w-3xl w-[calc(100%-2rem)] rounded-2xl bg-black/85 text-white border border-white/10 px-4 py-3 shadow-xl backdrop-blur-md flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
        <p className="leading-relaxed">
          Этот сайт использует только технические cookie, необходимые для его функционирования.
          Эти cookie не требуют Вашего согласия и используются для таких целей, как, например,
          запоминание ваших настроек, управление сессией и отображение контента.
        </p>

        <button
          type="button"
          onClick={accept}
          className="whitespace-nowrap mt-1 md:mt-0 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-white text-black hover:bg-gray-100 transition-colors"
        >
          Понимаю
        </button>
      </div>
    </div>
  );
}
