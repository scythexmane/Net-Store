import React from 'react';
import Slider from 'react-slick';

// Кастомные стрелки для слайдера
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 lg:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 lg:p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition`}
      onClick={onClick}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function Banner() {
  const images = [
    new URL('../assets/Landingpage.png', import.meta.url).href,
    new URL('../assets/Landingpage2.png', import.meta.url).href,
    new URL('../assets/Landingpage3.png', import.meta.url).href,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2",
    customPaging: (i) => (
      <div
        className={`w-8 sm:w-10 lg:w-12 h-1 sm:h-1.5 rounded cursor-pointer transition-all ${
          i === settings.initialSlide ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      />
    ),
  };

  return (
    <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[350px] rounded-2xl overflow-hidden shadow-lg mt-4 sm:mt-6 lg:mt-8 mx-4 sm:mx-6 lg:mx-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[350px]">
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Ошибка загрузки картинки! Проверь путь: ${image}`);
                e.currentTarget.src = 'https://via.placeholder.com/1200x300?text=Ошибка+загрузки+баннера';
              }}
            />
            <div className="absolute top-1/2 left-4 sm:left-6 lg:left-8 transform -translate-y-1/2 text-black">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight">
                NEW LAPTOP
              </h2>
              <button className="mt-2 sm:mt-3 lg:mt-4 bg-blue-500 text-white py-1 sm:py-2 lg:py-2.5 px-4 sm:px-6 lg:px-8 rounded-full hover:bg-blue-600 transition text-xs sm:text-sm lg:text-base font-medium">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}