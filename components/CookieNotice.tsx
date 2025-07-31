'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-3xl mx-auto bg-white border border-gray-300 shadow-lg rounded-xl p-4 z-50">
      <p className="text-gray-800 text-sm mb-2">
        Этот сайт использует только технические{' '}
        <Link href="/cookie-policy" className="text-blue-600 underline hover:text-blue-800">
          cookie
        </Link>
        , необходимые для его функционирования. Эти{' '}
        <Link href="/cookie-policy" className="text-blue-600 underline hover:text-blue-800">
          cookie
        </Link>{' '}
        не требуют вашего согласия.
      </p>
      <div className="text-right">
        <button
          onClick={handleAccept}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Понимаю
        </button>
      </div>
    </div>
  );
}
