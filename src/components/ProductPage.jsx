import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const fallbackProduct = {
    id: 1,
    title: 'Kids Electric Car',
    price: 960,
    description: 'A stylish electric car for kids with remote control and LED lights.',
    image: 'https://via.placeholder.com/300x300?text=Kids+Electric+Car',
    rating: { rate: 4.5, count: 65 },
  };

  if (loading) return <div className="text-center p-4 sm:p-6">Loading...</div>;
  if (error) {
    console.error(error);
    setProduct(fallbackProduct);
  }

  const displayProduct = product || fallbackProduct;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <button
        onClick={() => navigate('/')}
        className="mb-4 sm:mb-6 text-blue-500 hover:underline text-sm sm:text-base"
      >
        ← Back to Home
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Изображение товара */}
        <div className="flex justify-center">
          <img
            src={displayProduct.image}
            alt={displayProduct.title}
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] object-contain rounded-lg shadow-md"
            onError={(e) => {
              console.error(`Ошибка загрузки изображения: ${displayProduct.image}`);
              e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
            }}
          />
        </div>

        {/* Информация о товаре */}
        <div className="flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 lg:mb-6">
            {displayProduct.title}
          </h1>
          <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
            <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
            <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">
              ({displayProduct.rating?.count || 65})
            </span>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 lg:mb-6">
            ${displayProduct.price}
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
            {displayProduct.description}
          </p>
          <button className="bg-blue-500 text-white py-1 sm:py-2 lg:py-3 px-4 sm:px-6 lg:px-8 rounded-full hover:bg-blue-600 transition text-sm sm:text-base lg:text-lg">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}