import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductDetail({ product }) {
  const navigate = useNavigate();

  // Отладка: посмотрим, что приходит в product
  console.log('ProductDetail received product:', product);

  const images = product?.image ? [product.image, product.image, product.image] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 mx-6 mt-6 flex-1"
    >
      <button onClick={() => navigate('/')} className="mb-4 text-blue-500 hover:underline">
        ← Orqaga
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-2 mb-4">
            {images.length > 0 ? (
              images.map((img, index) => (
                <img key={index} src={img} alt={product?.title || 'Product'} className="w-16 h-16 object-contain border border-gray-200 rounded" />
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
          {product?.image ? (
            <img src={product.image} alt={product?.title || 'Product'} className="w-64 h-64 object-contain" />
          ) : (
            <div>No main image</div>
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-black">{product?.title || 'No title'}</h1>
          <p className="text-2xl font-bold text-black mt-2">${product?.price || 'N/A'}</p>
          <p className="text-sm text-gray-600 mt-2">{product?.description || 'No description'}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">RANGI:</p>
            <div className="flex gap-2 mt-2">
              <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
              <button className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></button>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
              Buyurtma berish
            </button>
            <button className="border border-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 transition">
              Savatchaga qo'shish
            </button>
            <button className="border border-gray-300 py-2 px-4 rounded-full hover:bg-gray-100 transition">
              Taqqoslash
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-black">Xususiyatlari</h2>
        <table className="w-full mt-4 border-collapse">
          <tbody>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-200 text-black">CPU</td>
              <td className="p-3 border border-gray-200 text-black">Intel Core i9-12900HX</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 text-black">RAM</td>
              <td className="p-3 border border-gray-200 text-black">DDR5 2x16GB (32GB) 4800</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-200 text-black">STORAGE</td>
              <td className="p-3 border border-gray-200 text-black">1TB M.2 NVME PCIE 4.0</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 text-black">VIDEO CARD</td>
              <td className="p-3 border border-gray-200 text-black">RTX 3080 TI GDDR6 16GB</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-200 text-black">SCREEN</td>
              <td className="p-3 border border-gray-200 text-black">17.3 WQHD (2560x1440), 240Hz IPS</td>
            </tr>
            <tr>
              <td className="p-3 border border-gray-200 text-black">EXTRA</td>
              <td className="p-3 border border-gray-200 text-black">Backpack BP470I Included</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-3 border border-gray-200 text-black">WIFI/AMD</td>
              <td className="p-3 border border-gray-200 text-black">RTX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}