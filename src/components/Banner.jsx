import React from 'react';
import Slider from 'react-slick';

// Кастомные стрелки для слайдера
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
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
      className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10`}
      onClick={onClick}
    >
      <svg className="w-4 h-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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

  // Настройки для react-slick
  const settings = {
    dots: true, // Включаем индикаторы
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Показываем 1 слайд
    slidesToScroll: 1, // Прокручиваем по 1 слайду
    autoplay: true, // Автоматическая прокрутка
    autoplaySpeed: 3000, // Интервал 3 секунды
    fade: true, // Плавный переход (убирает дергание)
    prevArrow: <PrevArrow />, // Кастомная стрелка "назад"
    nextArrow: <NextArrow />, // Кастомная стрелка "вперёд"
    dotsClass: "slick-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2", // Стили для индикаторов
    customPaging: (i) => (
      <div
        className={`w-12 h-1 rounded cursor-pointer transition-all ${
          i === settings.initialSlide ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      />
    ),
  };

  return (
    <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-lg mt-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[300px]">
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Ошибка загрузки картинки! Проверь путь: ${image}`);
                e.currentTarget.src = 'https://via.placeholder.com/1200x300?text=Ошибка+загрузки+баннера';
              }}
            />
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-black">
              <h2 className="text-4xl font-bold">NEW LAPTOP</h2>
              <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition text-sm font-medium">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}