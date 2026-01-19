import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Инициализация Яндекс.Метрики
const initYandexMetrika = () => {
  const metrikaId = import.meta.env.VITE_YANDEX_METRIKA_ID;
  
  if (metrikaId && typeof window !== 'undefined' && (window as any).ym) {
    try {
      (window as any).ym(metrikaId, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true
      });
      console.log('Яндекс.Метрика инициализирована:', metrikaId);
    } catch (error) {
      console.error('Ошибка инициализации Яндекс.Метрики:', error);
    }
  }
};

// Инициализируем метрику после загрузки скрипта
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initYandexMetrika);
} else {
  setTimeout(initYandexMetrika, 100);
}

createRoot(document.getElementById("root")!).render(<App />);
