import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductDetail({ product }) {
  const navigate = useNavigate();

  const images = product?.image ? [product.image, product.image, product.image] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 sm:p-6 md:p-8 xl:p-10 mx-auto mt-6 max-w-7xl w-full"
    >
      <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">
        ← Orqaga
      </button>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image Gallery */}
        <div className="flex flex-col items-center lg:w-1/2">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product?.title || 'Product'}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain border border-gray-200 rounded"
                />
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
          {product?.image ? (
            <img
              src={product.image}
              alt={product?.title || 'Product'}
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            />
          ) : (
            <div>No main image</div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 lg:w-1/2">
          <h1 className="text-xl sm:text-2xl font-bold text-black">{product?.title || 'No title'}</h1>
          <p className="text-xl sm:text-2xl font-bold text-black mt-2">${product?.price || 'N/A'}</p>
          <p className="text-sm sm:text-base text-gray-600 mt-2">{product?.description || 'No description'}</p>

          <div className="mt-4">
            <p className="text-sm text-gray-600">RANGI:</p>
            <div className="flex gap-2 mt-2">
              <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition text-sm sm:text-base">
              Buyurtma berish
            </button>
            <button className="flex-1 border border-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
              Savatchaga qo'shish
            </button>
            <button className="flex-1 border border-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 transition text-sm sm:text-base">
              Taqqoslash
            </button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-6 overflow-x-auto">
        <h2 className="text-lg sm:text-xl font-bold text-black mb-2">Xususiyatlari</h2>
        <table className="min-w-full border-collapse">
          <tbody>
            {[
              ['CPU', 'Intel Core i9-12900HX'],
              ['RAM', 'DDR5 2x16GB (32GB) 4800'],
              ['STORAGE', '1TB M.2 NVME PCIE 4.0'],
              ['VIDEO CARD', 'RTX 3080 TI GDDR6 16GB'],
              ['SCREEN', '17.3 WQHD (2560x1440), 240Hz IPS'],
              ['EXTRA', 'Backpack BP470I Included'],
              ['WIFI/AMD', 'RTX'],
            ].map(([label, value], i) => (
              <tr key={label} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-3 border border-gray-200 text-sm sm:text-base text-black font-medium">{label}</td>
                <td className="p-3 border border-gray-200 text-sm sm:text-base text-black">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
