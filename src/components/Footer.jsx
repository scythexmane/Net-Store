import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
  };

  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-b-lg shadow-lg z-50 text-sm font-medium"
          >
            Savolingiz muvaffaqiyatli yuborildi!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Колонка 1: Логотип и соцсети */}
          <div>
            <h3 className="text-2xl font-bold mb-4 transition-transform duration-300 hover:scale-105">
              <Link to="/" className="hover:text-blue-400 transition-colors duration-300">
                BrandLogo
              </Link>
            </h3>
            <p className="text-sm text-gray-400 mb-4">Biz ijtimoiy tarmoqlarda</p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.14 6.84 9.46v-6.7H6.5v-2.76h2.38v-2.1c0-2.36 1.4-3.66 3.56-3.66 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.82h2.58l-.42 2.76h-2.16v6.7c3.98-1.32 6.84-5.06 6.84-9.46 0-5.5-4.46-9.96-9.96-9.96z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.98 2H7.02A5.02 5.02 0 002 7.02v9.96A5.02 5.02 0 007.02 22h9.96A5.02 5.02 0 0022 16.98V7.02A5.02 5.02 0 0016.98 2zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm5-8.5a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.54 2H4.46A2.46 2.46 0 002 4.46v15.08A2.46 2.46 0 004.46 22h15.08A2.46 2.46 0 0022 19.54V4.46A2.46 2.46 0 0019.54 2zM8.54 18.46H6.46V9.54h2.08v8.92zM7.5 8.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 9.96h-2.08v-4.62c0-1.1-.4-1.85-1.4-1.85-.76 0-1.22.52-1.42 1.02-.08.18-.1.42-.1.66v4.79H11.5V9.54h2v1.22c.3-.46.84-1.12 2.04-1.12 1.5 0 2.62.98 2.62 3.08v5.74z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Колонка 2: Aloqa */}
          <div>
            <h3 className="text-xl font-bold mb-4 transition-transform duration-300 hover:scale-105">Aloqa</h3>
            <a
              href="https://maps.app.goo.gl/qimJwUxurSvhSeFo6"
              className="text-sm text-gray-400 mb-2 block hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              Manzil:Toshkent
            </a>
            <a
              href="mailto:qwertyui@gmail.com"
              className="text-sm text-gray-400 mb-2 block hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              qwertyui@gmail.com
            </a>
            <a
              href="tel:+9989917777777"
              className="text-sm text-gray-400 block hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              +9989917777777
            </a>
          </div>

          {/* Колонка 3: Haqimizda */}
          <div>
            <h3 className="text-xl font-bold mb-4 transition-transform duration-300 hover:scale-105">Haqimizda</h3>
            <p className="text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-blue-400 hover:underline transition-colors duration-300 block mb-1"
              >
                Maxfiylik siyosati va shaxsiy ma'lumotlarni himoya qilish
              </a>
              <a
                href="#"
                className="hover:text-blue-400 hover:underline transition-colors duration-300 block"
              >
                Mahsulotlarni va to'lovlarni qaytarish siyosati
              </a>
            </p>
          </div>

          {/* Колонка 4: Savol berish */}
          <div>
            <h3 className="text-xl font-bold mb-4 transition-transform duration-300 hover:scale-105">Savol berish</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full bg-gray-800 text-white text-sm py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700"
                required
              />
              <input
                type="tel"
                placeholder="Telefon raqam"
                className="w-full bg-gray-800 text-white text-sm py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700"
                required
              />
              <textarea
                placeholder="Savol berish..."
                className="w-full bg-gray-800 text-white text-sm py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-gray-700"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            “2024 © “notebook.uz” MCHJ, TIN 309376127, Barcha huquqlar himoyalangan”
          </p>
          <p className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
            Hamkor: Cleancoders group
          </p>
        </div>
      </div>
    </footer>
  );
}