import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CatalogPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(['all', ...data]);
      })
      .catch((err) => console.error('Ошибка загрузки категорий:', err));
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const maxPrice = Math.max(...data.map((p) => p.price));
        setPriceRange((prev) => ({ ...prev, max: Math.ceil(maxPrice) }));
      })
      .catch((err) => console.error('Ошибка загрузки товаров:', err));
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );

    if (sortOrder) {
      filtered.sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortOrder, products]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      {/* Фильтры */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">
          Katalog
        </h1>

        {/* Фильтр по категориям */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-3">
            Kategoriyalar
          </h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border text-xs sm:text-sm lg:text-base transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-black border-gray-300 hover:bg-blue-100'
                }`}
              >
                {category === 'all' ? 'Barcha kategoriyalar' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Фильтр по цене */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-3">
            Narx oralig'i
          </h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-xs sm:text-sm text-gray-600">Min: ${priceRange.min}</label>
              <input
                type="range"
                min="0"
                max={priceRange.max}
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    min: Number(e.target.value),
                  }))
                }
                className="w-full accent-blue-500"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-xs sm:text-sm text-gray-600">Max: ${priceRange.max}</label>
              <input
                type="range"
                min="0"
                max={priceRange.max}
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange((prev) => ({
                    ...prev,
                    max: Number(e.target.value),
                  }))
                }
                className="w-full accent-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Сортировка */}
        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-black mb-2 sm:mb-3">
            Saralash
          </h3>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border text-xs sm:text-sm lg:text-base transition duration-300 ${
                sortOrder === 'asc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-100'
              }`}
            >
              Arzonroq
            </button>
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border text-xs sm:text-sm lg:text-base transition duration-300 ${
                sortOrder === 'desc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-100'
              }`}
            >
              Qimmatroq
            </button>
            <button
              onClick={() => setSortOrder(null)}
              className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full border text-xs sm:text-sm lg:text-base transition duration-300 ${
                sortOrder === null
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-100'
              }`}
            >
              Reyting Boyicha
            </button>
          </div>
        </div>
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 group cursor-pointer"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-44 lg:h-48 object-contain p-3 sm:p-4"
                onError={(e) => {
                  console.error('Ошибка загрузки изображения товара');
                  e.currentTarget.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>

            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-black truncate">{product.title}</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm lg:text-base">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}