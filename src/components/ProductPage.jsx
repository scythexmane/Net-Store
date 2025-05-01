import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from './CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const buttonRef = useRef(null);

  // Запрос к API для получения данных о товаре
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Mahsulot topilmadi');
        }
        const data = await response.json();
        setProduct({
          id: data.id,
          name: data.title,
          description: data.description,
          price: Math.round(data.price * 12000), // Конвертация цены в UZS
          image: data.image,
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      setIsAdding(true);
      addToCart(product);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Xato: {error}</div>;
  }

  return (
    <div className="max-w-[1440px] min-h-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Кнопка "Назад" */}
      <motion.button
        onClick={() => navigate(-1)} // Возвращает на предыдущую страницу
        className="mb-6 flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-lg font-medium">Orqaga</span>
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Изображение товара */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Информация о товаре */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {product.price.toLocaleString()} UZS
          </p>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
            >
              Buyurtma Berish
            </button>

            {/* Анимация добавления в корзину */}
            {isAdding && (
              <motion.div
                className="absolute top-0 left-0"
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: 0,
                  scale: 0.5,
                  x: window.innerWidth - 100,
                  y: -window.innerHeight + 100,
                }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setIsAdding(false)}
              >
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}