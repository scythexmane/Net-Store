import React from 'react';

export default function Header() {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="font-bold text-xl text-black">BrandLogo</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-black font-medium border-b-2 border-black pb-1">Bosh sahifa</a>
        <a href="#" className="text-gray-700 hover:text-black">Katalog</a>
        <a href="#" className="text-gray-700 hover:text-black">Haqimizda</a>
        <a href="#" className="text-gray-700 hover:text-black">Aloqa</a>
      </nav>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Siz nima qidiryapsiz?"
          className="border border-gray-300 px-4 py-2 rounded-md text-sm w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
          📞 Aloqaga chiqish
        </button>
      </div>
    </div>
  );
}