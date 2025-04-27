import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
      onClick={onClick}
    >
      <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
      onClick={onClick}
    >
      <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  );
}

export default function AllProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Для хранения всех загруженных товаров
  const [limit, setLimit] = useState(8); // Начальное количество товаров
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState({});

  // Загружаем товары при изменении limit
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data); // Сохраняем все товары
        setProducts(data.slice(0, 8)); // Первые 8 для слайдера
      })
      .catch((err) => setError(err.message));
  }, [limit]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadMoreProducts = () => {
    setLimit((prev) => prev + 8); // Увеличиваем лимит на 8 товаров
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (error) return <div className="text-center text-red-500 p-6">Error: {error}</div>;
  if (!products.length) return <div className="text-center p-6">Loading...</div>;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-black mb-6">Barcha mahsulotlarimiz</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                  onError={(e) => {
                    console.error(`Ошибка загрузки изображения: ${product.image}`);
                    e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                  }}
                />
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button onClick={() => toggleFavorite(product.id)}>
                    <svg
                      className={`w-6 h-6 ${favorites[product.id] ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition`}
                      fill={favorites[product.id] ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <button onClick={() => navigate(`/product/${product.id}`)}>
                    <svg
                      className="w-6 h-6 text-gray-400 hover:text-blue-500 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="text-sm font-medium text-black mt-4 truncate">{product.title}</h3>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-500 text-xs ml-2">({product.rating?.count || Math.floor(Math.random() * 100)})</span>
              </div>
              <p className="text-black font-bold mt-2">${Math.round(product.price)}</p>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
              >
                Buyurtma berish
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Дополнительные товары в виде сетки */}
      <AnimatePresence>
        {allProducts.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
          >
            {allProducts.slice(8).map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2"
              >
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-contain"
                      onError={(e) => {
                        console.error(`Ошибка загрузки изображения: ${product.image}`);
                        e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                      }}
                    />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button onClick={() => toggleFavorite(product.id)}>
                        <svg
                          className={`w-6 h-6 ${favorites[product.id] ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition`}
                          fill={favorites[product.id] ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        </svg>
                      </button>
                      <button onClick={() => navigate(`/product/${product.id}`)}>
                        <svg
                          className="w-6 h-6 text-gray-400 hover:text-blue-500 transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-black mt-4 truncate">{product.title}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-500 text-xs ml-2">({product.rating?.count || Math.floor(Math.random() * 100)})</span>
                  </div>
                  <p className="text-black font-bold mt-2">${Math.round(product.price)}</p>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
                  >
                    Buyurtma berish
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-6">
        <button
          onClick={loadMoreProducts}
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
        >
          Barcha ko'rish
        </button>
      </div>
    </div>
  );
}