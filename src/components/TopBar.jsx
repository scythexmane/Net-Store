import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-white text-black text-sm py-2 px-6 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <span className="text-black font-medium">📍 Shahar: Toshkent</span>
      </div>
      <div className="hidden md:block text-center text-gray-600">
        Buyurtmalaringizni bepul yetkazib beramiz – atiga 1 kun ichida
      </div>
      <div className="flex items-center gap-2">
        <span className="cursor-pointer text-black">Uzbek ⌄</span>
      </div>
    </div>
  );
}