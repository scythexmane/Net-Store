import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Кастомные стрелки для слайдера
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
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
      className={`${className} absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function Categories() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = [
    {
      name: 'Telefon',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5m-4 14H7" />
        </svg>
      ),
    },
    {
      name: 'Kompyuter',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7h6v10m-6 0h6m-9 4h12M3 3h18v14H3V3z" />
        </svg>
      ),
    },
    {
      name: 'Aqlli soatlar',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Kamera',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: 'Quloqchinlar',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m-4 0v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5m4-7a4 4 0 014 4" />
        </svg>
      ),
    },
    {
      name: 'Aksessuarlar',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-4 sm:mb-5 lg:mb-6" data-aos="fade-up">
        Kataloglar
      </h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-1 sm:p-2 lg:p-3"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col items-center p-2 sm:p-3 lg:p-4 bg-white rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition group">
              <div className="text-black group-hover:text-white transition">
                {category.icon}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-black group-hover:text-white transition mt-1 sm:mt-2">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}