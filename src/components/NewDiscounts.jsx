import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewDiscounts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
  const navigate = useNavigate();

  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации (1 секунда)
      once: true, // Анимация срабатывает только один раз при скролле
    });
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message));

    // Если API недоступен, можно использовать моковые данные
    /*
    const mockProducts = Array(8).fill().map((_, index) => ({
      id: index + 1,
      title: `Product ${index + 1}`,
      price: 99.99 + index * 10,
      image: "https://via.placeholder.com/150",
    }));
    setProducts(mockProducts);
    */
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
  if (products.length === 0) return <div className="text-center p-6">Loading products...</div>;

  return (
    <div className="bg-white p-6 mx-6 mt-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black" data-aos="fade-up">
          YANGI CHEGIRMALAR
        </h2>
        <div className="flex space-x-4" data-aos="fade-left">
          <div className="text-center">
            <span className="block text-lg font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">Days</span>
          </div>
          <span className="text-lg font-bold text-black">:</span>
          <div className="text-center">
            <span className="block text-lg font-bold text-black">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">Hours</span>
          </div>
          <span className="text-lg font-bold text-black">:</span>
          <div className="text-center">
            <span className="block text-lg font-bold text-black">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">Minutes</span>
          </div>
          <span className="text-lg font-bold text-black">:</span>
          <div className="text-center">
            <span className="block text-lg font-bold text-black">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-xs text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-2"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Задержка для каждой карточки (0ms, 100ms, 200ms и т.д.)
          >
            <div
              className="bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{Math.floor(Math.random() * 20 + 10)}%
              </span>
              <button className="absolute top-2 right-2">
                <svg className="w-5 h-5" fill="none" stroke="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                  ></path>
                </svg>
              </button>
              <img src={product.image} alt={product.title} className="w-32 h-32 mx-auto mb-2 object-contain" />
              <h3 className="text-sm font-medium text-black">{product.title.slice(0, 20)}...</h3>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <span className="text-red-500 font-bold">${Math.floor(product.price * 0.8)}</span>
                <span className="text-gray-500 line-through">${Math.floor(product.price)}</span>
              </div>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition text-sm">
                Buyurtma berish
              </button>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg className="w-8 h-8 text-gray-600 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg className="w-8 h-8 text-gray-600 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}