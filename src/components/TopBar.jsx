import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TopBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-2 sm:py-3 lg:py-4">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          {/* Иконка */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0"
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
            />
          </svg>
          {/* Текст */}
          <p className="text-xs sm:text-sm lg:text-base font-medium tracking-tight leading-tight sm:leading-normal lg:leading-relaxed truncate">
            {t('topbar_message')}
          </p>
        </div>
      </div>
    </div>
  );
}