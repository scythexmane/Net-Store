import React from 'react';
import image from '../assets/laptop.png'

export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10 ">
      {/* Основной контент */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Текст */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-black mb-6">Biz haqimizda</h1>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit aliquam arcu faucibus ultricies mauris cursus. Risus in eu dui egestus enim.
          </p>
        </div>

        {/* Изображение */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={image}
              alt="Laptop and coffee"
              className="w-6/7 h-auto rounded-lg shadow-md transform group-hover:scale-105 group-hover:shadow-xl transition duration-300"
              onError={(e) => {
                console.error('Ошибка загрузки изображения');
                e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
              }}
            />
            
          </div>
        </div>
      </div>

      {/* Карточки с цифрами */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Карточка 1: 10.5K */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">10.5K</h3>
          <p className="text-gray-600">Sellers active our site</p>
        </div>

        {/* Карточка 2: 33K */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791-4-4-4z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">33K</h3>
          <p className="text-gray-600">Monthly Product Sale</p>
        </div>

        {/* Карточка 3: 45.5K */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">45.5K</h3>
          <p className="text-gray-600">Customer active in our site</p>
        </div>

        {/* Карточка 4: 25K */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transform hover:-translate-y-2 hover:shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 group">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791-4-4-4z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">25K</h3>
          <p className="text-gray-600">Annual gross sale in our site</p>
        </div>
      </div>
    </div>
  );
}