import React from 'react';

export default function Service() {
  return (
    <div className="mt-10 py-10 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8h18M6 5l-3 3 3 3m12-6l3 3-3 3m-9 6h6m-3-3v6"></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black">BEPUL VA TEZ YETKAZIB BERISH</h3>
          <p className="text-sm text-gray-600 mt-2">Buyurtma uchun bepul yetkazib berish</p>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black">24/7 MIJOZLARGA XIZMAT KO‘RSATISH</h3>
          <p className="text-sm text-gray-600 mt-2">Doimiy 24/7 mijozlarga xizmat ko‘rsatish</p>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-black">PULNI QAYTARIB BERISH KAFOLATI</h3>
          <p className="text-sm text-gray-600 mt-2">Biz pulni 30 kun ichida qaytaramiz</p>
        </div>
      </div>
    </div>
  );
}