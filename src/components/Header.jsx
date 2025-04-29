import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-3 sm:py-4 lg:py-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Логотип */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
          <Link to="/">BrandLogo</Link>
        </div>

        {/* Бургер-меню для мобильных */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Навигация с анимацией */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:flex flex-col lg:flex-row absolute lg:static top-0 right-0 w-64 lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none px-4 py-6 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-6 z-20"
            >
              {/* Кнопка закрытия внутри меню */}
              <button
                className="lg:hidden flex items-center justify-end w-full mb-4 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className={`text-sm sm:text-base lg:text-lg text-black hover:text-blue-500 transition border-b-2 ${
                    location.pathname === '/' ? 'border-blue-500' : 'border-transparent'
                  } pb-1 lg:pb-0`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bosh sahifa
                </Link>
                <Link
                  to="/catalog"
                  className={`text-sm sm:text-base lg:text-lg text-black hover:text-blue-500 transition border-b-2 ${
                    location.pathname === '/catalog' ? 'border-blue-500' : 'border-transparent'
                  } pb-1 lg:pb-0`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Katalog
                </Link>
                <Link
                  to="/about"
                  className={`text-sm sm:text-base lg:text-lg text-black hover:text-blue-500 transition border-b-2 ${
                    location.pathname === '/about' ? 'border-blue-500' : 'border-transparent'
                  } pb-1 lg:pb-0`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Haqimizda
                </Link>
                <Link
                  to="/contact"
                  className={`text-sm sm:text-base lg:text-lg text-black hover:text-blue-500 transition border-b-2 ${
                    location.pathname === '/contact' ? 'border-blue-500' : 'border-transparent'
                  } pb-1 lg:pb-0`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Aloqa
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Поиск и кнопка */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <div className="relative w-40 sm:w-48 lg:w-56">
            <input
              type="text"
              placeholder="Sizni qidiryapsiz?"
              className="w-full border border-gray-300 rounded-full py-1.5 sm:py-2 lg:py-2.5 px-3 sm:px-4 lg:px-5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="bg-blue-500 text-white py-1.5 sm:py-2 lg:py-2.5 px-3 sm:px-4 lg:px-5 rounded-full text-sm sm:text-base hover:bg-blue-600 transition">
            Aloqaga chiqish
          </button>
        </div>
      </div>
    </header>
  );
}