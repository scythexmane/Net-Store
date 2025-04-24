import React from 'react';

import Frame1 from '../assets/1.png'; // PlayStation
import Frame2 from '../assets/2.png'; // Women
import Frame3 from '../assets/3.png'; // Speakers
import Frame4 from '../assets/4.png'; // Perfume

export default function NewProducts() {
  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold text-black text-center">Yangi mahsulotlar</h2>

      <div className="flex gap-4 items-start justify-center">
        {/* Left - PlayStation */}
        <div className="relative w-[599px] h-[584px] rounded-xl overflow-hidden group">
          <img
            src={Frame1}
            alt="PlayStation 5"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-2 underline text-sm hover:opacity-80 transition">Shop Now</button>
          </div>
        </div>

        {/* Right block */}
        <div className="flex flex-col gap-4">
          {/* Women’s Collection */}
          <div className="relative w-[582px] h-[284px] rounded-xl overflow-hidden group">
            <img
              src={Frame2}
              alt="Women’s Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Women’s Collections</h3>
              <p className="text-sm">Featured woman collections that give you another vibe.</p>
              <button className="mt-2 underline text-sm hover:opacity-80 transition">Shop Now</button>
            </div>
          </div>

          {/* Speakers & Perfume */}
          <div className="flex gap-4 justify-center">
            {[ 
              { img: Frame3, title: "Speakers", desc: "Amazon wireless speakers" },
              { img: Frame4, title: "Perfume", desc: "GUCCI INTENSE OUD EDP" }
            ].map((item, index) => (
              <div key={index} className="relative w-[280px] h-[284px] rounded-xl overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-xs">{item.desc}</p>
                  <button className="mt-1 underline text-xs hover:opacity-80 transition">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
