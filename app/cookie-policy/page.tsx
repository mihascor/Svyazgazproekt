
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
    <main className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Политика использования cookie
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              ООО «Связьгазпроект» использует только технические cookie, необходимые для корректной работы сайта.
            </p>
            <p>
              Файлы cookie используются исключительно для:
              <br />– сохранения пользовательских настроек;
              <br />– управления пользовательской сессией;
              <br />– обеспечения безопасности и отображения контента.
            </p>
            <p>
              Мы не используем cookie для анализа поведения, маркетинга, рекламы или передачи данных третьим лицам.
            </p>
            <p>
              Вы можете отключить cookie в настройках вашего браузера, однако это может повлиять на корректную работу сайта.
            </p>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
