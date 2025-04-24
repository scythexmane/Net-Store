import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-black text-white py-2">
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.243l-4.243-4.243m0 0l-4.243 4.243m4.243-4.243l4.243-4.243m-4.243 4.243l-4.243-4.243"
            ></path>
          </svg>
          <p className="text-sm">{t('topbar_message')}</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent text-white text-sm focus:outline-none"
          >
            <option value="uz" className="text-black">{t('language_uz')}</option>
            <option value="ru" className="text-black">{t('language_ru')}</option>
          </select>
        </div>
      </div>
    </div>
  );
}