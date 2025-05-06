import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TopBar() {
  const [offer, setOffer] = useState('Buyurtmalaringizni 1 kuni ichida beramiz');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState('O\'zbek');

  const languages = [
    { code: 'uz', name: 'O\'zbek' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ];

  const handleOfferHover = () => {
    setOffer('Tez yetkazib beramiz — 24 soat!');
  };

  const handleOfferLeave = () => {
    setOffer('Buyurtmalaringizni 1 kuni ichida beramiz');
  };

  return (
    <div className="bg-black text-white py-2 sm:py-3 lg:py-4 shadow-lg">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base lg:text-lg">
        {/* Адрес (слева) */}
        <Link
          to="https://maps.google.com/?q=Shahhar-Toshkent"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-300 transition-colors duration-200"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="hover:underline">Shahhar-Toshkent</span>
        </Link>

        {/* Предложение (по центру) */}
        <motion.div
          className="mt-2 sm:mt-0 text-center flex-1"
          onMouseEnter={handleOfferHover}
          onMouseLeave={handleOfferLeave}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            key={offer}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="font-medium"
          >
            {offer}
          </motion.span>
        </motion.div>

        {/* Выбор языка (справа) */}
        <div className="mt-2 sm:mt-0 relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center space-x-1 hover:text-blue-300 transition-colors duration-200"
          >
            <span>{language}</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <AnimatePresence>
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md z-10"
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.name);
                      setIsLanguageOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
                  >
                    {lang.name}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}