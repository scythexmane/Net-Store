import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../components/CartContext';

export default function CartPage() {
  const { cartItems = [], removeFromCart, setCartItems } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  // Вычисляем итоговую сумму
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOrder = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setCartItems([]);
      setShowSuccess(false);
    }, 3000);
  };

  // Варианты анимации для карточек товаров
  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
  };

  // Варианты анимации для уведомления
  const notificationVariants = {
    hidden: { y: -100, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { y: -100, opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 1 },
    },
  };

  return (
    <div className="min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-white to-white relative overflow-x-hidden">
      {/* Уведомление об успешной покупке */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            variants={notificationVariants}
            initial="hidden"
            animate={['visible', 'pulse']}
            exit="exit"
            className="fixed top-0 left-0 right-0 mx-2 sm:mx-auto max-w-md bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 sm:p-5 rounded-b-xl shadow-2xl z-50 flex items-center justify-between border-b-4 border-green-300 backdrop-blur-sm bg-opacity-90"
          >
            <div className="flex items-center space-x-3">
              <motion.svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
              <div>
                <h3 className="text-base sm:text-xl font-bold tracking-wide">Buyurtma muvaffaqiyatli!</h3>
                <p className="text-xs sm:text-sm">Umumiy summa: {totalPrice.toLocaleString()} UZS</p>
              </div>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-white hover:text-gray-200 transition-transform duration-200 hover:scale-110"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
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
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-10 text-center tracking-tight drop-shadow-md">
          Savatcha
        </h2>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-opacity-80"
          >
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 tracking-wide">
              Savatchangiz bo'sh, mahsulotlar qo'shing!
            </h2>
            <Link
              to="/catalog"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            >
              Katalogga o'tish
            </Link>
          </motion.div>
        ) : (
          <div>
            <div className="space-y-4 sm:space-y-6">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white bg-opacity-80 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl font-semibold text-gray-800 tracking-tight">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 text-xs sm:text-sm mt-1 sm:mt-2">
                          {item.description.slice(0, 80)}...
                        </p>
                        <p className="text-gray-700 font-medium mt-1 sm:mt-2 text-sm sm:text-base">
                          Narxi: {(item.price * item.quantity).toLocaleString()} UZS ({item.quantity} dona)
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-3 sm:mt-0 text-red-500 hover:text-red-700 font-medium transition-colors duration-200 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a2 2 0 00-2 2v1h8V5a2 2 0 00-2-2zm-1 7v6m4-6v6"
                        />
                      </svg>
                      <span>O'chirish</span>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Итоговая сумма */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-2xl shadow-2xl flex flex-col sm:flex-row justify-between items-center border-t-4 border-indigo-300 backdrop-blur-sm bg-opacity-90 space-y-4 sm:space-y-0"
            >
              <h3 className="text-lg sm:text-2xl font-bold tracking-wide">
                Jami: {totalPrice.toLocaleString()} UZS
              </h3>
              <motion.button
                onClick={handleOrder}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:from-yellow-500 hover:to-orange-600 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buyurtma berish
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}