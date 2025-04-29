import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function AllProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setProducts(data.slice(0, 8));
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
    setLimit((prev) => prev + 8);
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-32 sm:h-36 lg:h-40 object-contain"
          onError={(e) => {
            console.error(`Ошибка загрузки изображения: ${product.image}`);
            e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
          }}
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded">
          NEW
        </span>
        <div className="absolute top-2 right-2 flex space-x-1 sm:space-x-2">
          <button onClick={() => toggleFavorite(product.id)}>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 ${favorites[product.id] ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition`}
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
              />
            </svg>
          </button>
          <button onClick={() => navigate(`/product/${product.id}`)}>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-blue-500 transition"
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
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="text-xs sm:text-sm lg:text-base font-medium text-black mt-3 sm:mt-4 truncate">{product.title}</h3>
      <div className="flex items-center mt-1 sm:mt-2">
        <span className="text-yellow-400 text-xs sm:text-sm">★★★★★</span>
        <span className="text-gray-500 text-xs ml-1 sm:ml-2">({product.rating?.count || Math.floor(Math.random() * 100)})</span>
      </div>
      <p className="text-black font-bold mt-1 sm:mt-2 text-sm sm:text-base">${Math.round(product.price)}</p>
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        className="mt-2 sm:mt-4 w-full bg-blue-500 text-white py-1 sm:py-2 rounded-full hover:bg-blue-600 transition text-xs sm:text-sm"
      >
        Buyurtma berish
      </button>
    </div>
  );

  if (error) return <div className="text-center text-red-500 p-4 sm:p-6">Error: {error}</div>;
  if (!products.length) return <div className="text-center p-4 sm:p-6">Loading...</div>;

  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">Barcha mahsulotlarimiz</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-1 sm:p-2 lg:p-3">
            <ProductCard product={product} />
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
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8"
          >
            {allProducts.slice(8).map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-1 sm:p-2"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-4 sm:mt-6 lg:mt-8">
        <button
          onClick={loadMoreProducts}
          className="bg-blue-500 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full hover:bg-blue-600 transition text-xs sm:text-sm lg:text-base"
        >
          Barcha ko'rish
        </button>
      </div>
    </div>
  );
}