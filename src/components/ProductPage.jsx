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

  // Тестовые данные, если API не работает
  const fallbackProduct = {
    id: 1,
    title: 'Kids Electric Car',
    price: 960,
    description: 'A stylish electric car for kids with remote control and LED lights.',
    image: 'https://via.placeholder.com/300x300?text=Kids+Electric+Car',
    rating: { rate: 4.5, count: 65 },
  };

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) {
    console.error(error);
    // Если API не работает, используем тестовые данные
    setProduct(fallbackProduct);
  }

  const displayProduct = product || fallbackProduct;

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Изображение товара */}
        <div>
          <img
            src={displayProduct.image}
            alt={displayProduct.title}
            className="w-full h-[400px] object-contain rounded-lg shadow-md"
            onError={(e) => {
              console.error(`Ошибка загрузки изображения: ${displayProduct.image}`);
              e.currentTarget.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
            }}
          />
        </div>

        {/* Информация о товаре */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-4">{displayProduct.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500 text-sm ml-2">
              ({displayProduct.rating?.count || 65})
            </span>
          </div>
          <p className="text-2xl font-bold text-black mb-4">
            ${displayProduct.price}
          </p>
          <p className="text-gray-600 mb-6">{displayProduct.description}</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}