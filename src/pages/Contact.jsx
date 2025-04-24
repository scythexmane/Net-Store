import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Карточка 1: Bizga Qo'ng'iroq Qiling */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black">Bizga Qo'ng'iroq Qiling</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Biz 24/7 kun tartibida ishlaymiz</p>
          <p className="text-sm text-gray-600 mb-2">Raqam: +9989917777777</p>
        </div>

        {/* Карточка 2: Bizga yozing */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black">Bizga yozing</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Shakli to'ldiring va biz 24 saat ichida siz bilan bog'lanamiz</p>
          <p className="text-sm text-gray-600">Email: customer@exclusive.com</p>
          <p className="text-sm text-gray-600">Email: support@EXCLUSIVE.com</p>
        </div>
      </div>

      {/* Форма */}
      <div className="mt-10 bg-white rounded-lg shadow-md p-6">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                Ismingiz *
              </label>
              <input
                type="text"
                id="name"
                placeholder="Ismingiz *"
                className="w-full bg-gray-100 text-black text-sm py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                Telefon raqamingiz *
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Telefon raqamingiz *"
                className="w-full bg-gray-100 text-black text-sm py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
              Sizning habaringiz
            </label>
            <textarea
              id="message"
              placeholder="Sizning habaringiz"
              className="w-full bg-gray-100 text-black text-sm py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>
          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
            >
              Habar yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}