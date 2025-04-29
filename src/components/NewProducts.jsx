import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Frame1 from '../assets/1.png'; // PlayStation
import Frame2 from '../assets/2.png'; // Women
import Frame3 from '../assets/3.png'; // Speakers
import Frame4 from '../assets/4.png'; // Perfume

export default function NewProducts() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-6 sm:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center mb-4 sm:mb-6 lg:mb-8" data-aos="fade-up">
        Yangi mahsulotlar
      </h2>

      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 items-center lg:items-start justify-center">
        {/* Left - PlayStation */}
        <div
          className="relative w-full max-w-[599px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[584px] rounded-xl overflow-hidden group"
          data-aos="fade-right"
        >
          <img
            src={Frame1}
            alt="PlayStation 5"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">
              PlayStation 5
            </h3>
            <p className="text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 max-w-[90%]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-1 sm:mt-2 lg:mt-3 underline text-xs sm:text-sm lg:text-base hover:opacity-80 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right block */}
        <div className="w-full max-w-[599px] lg:max-w-[582px] flex flex-col gap-3 sm:gap-4 lg:gap-6">
          {/* Women’s Collection */}
          <div
            className="relative w-full h-[200px] sm:h-[250px] lg:h-[284px] rounded-xl overflow-hidden group"
            data-aos="fade-left"
          >
            <img
              src={Frame2}
              alt="Women’s Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold tracking-wide">
                Women’s Collections
              </h3>
              <p className="text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 max-w-[90%]">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-1 sm:mt-2 lg:mt-3 underline text-xs sm:text-sm lg:text-base hover:opacity-80 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Speakers & Perfume */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
            {[
              { img: Frame3, title: "Speakers", desc: "Amazon wireless speakers" },
              { img: Frame4, title: "Perfume", desc: "GUCCI INTENSE OUD EDP" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative w-full sm:w-1/2 max-w-[280px] h-[200px] sm:h-[250px] lg:h-[284px] rounded-xl overflow-hidden group"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 max-w-[90%]">
                    {item.desc}
                  </p>
                  <button className="mt-1 sm:mt-2 underline text-xs sm:text-sm lg:text-base hover:opacity-80 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}