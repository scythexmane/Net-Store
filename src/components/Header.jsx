import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
        {/* Логотип */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">BrandLogo</Link>
        </div>

        {/* Навигация */}
        <nav className="flex space-x-6">
          <Link
            to="/"
            className={`text-black hover:text-blue-500 transition ${
              location.pathname === '/' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Bosh sahifa
          </Link>
          <Link
            to="/catalog"
            className={`text-black hover:text-blue-500 transition ${
              location.pathname === '/catalog' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Katalog
          </Link>
          <Link
            to="/about"
            className={`text-black hover:text-blue-500 transition ${
              location.pathname === '/about' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Haqimizda
          </Link>
          <Link
            to="/contact"
            className={`text-black hover:text-blue-500 transition ${
              location.pathname === '/contact' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Aloqa
          </Link>
        </nav>

        {/* Поиск и кнопка */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Sizni qidiryapsiz?"
              className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
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
              ></path>
            </svg>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
            Aloqaga chiqish
          </button>
        </div>
      </div>
    </header>
  );
}