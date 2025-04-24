import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CatalogPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortOrder, setSortOrder] = useState(null); // null, 'asc', 'desc'

  // Получаем категории
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(['all', ...data]);
      })
      .catch((err) => console.error('Ошибка загрузки категорий:', err));
  }, []);

  // Получаем товары
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        // Устанавливаем максимальную цену для ползунка
        const maxPrice = Math.max(...data.map((p) => p.price));
        setPriceRange((prev) => ({ ...prev, max: Math.ceil(maxPrice) }));
      })
      .catch((err) => console.error('Ошибка загрузки товаров:', err));
  }, []);

  // Фильтрация и сортировка товаров
  useEffect(() => {
    let filtered = [...products];

    // Фильтрация по категории
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Фильтрация по цене
    filtered = filtered.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Сортировка
    if (sortOrder) {
      filtered.sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortOrder, products]);

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      {/* Фильтры */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-6">Katalog</h1>

        {/* Фильтр по категориям */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2">Kategoriyalar</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition duration-300 ${
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
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2">Narx oralig'i</h3>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Min: ${priceRange.min}</label>
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
            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Max: ${priceRange.max}</label>
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
          <h3 className="text-lg font-semibold text-black mb-2">Saralash</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder('asc')}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                sortOrder === 'asc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-100'
              }`}
            >
              Arzonroq
            </button>
            <button
              onClick={() => setSortOrder('desc')}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                sortOrder === 'desc'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-blue-100'
              }`}
            >
              Qimmatroq
            </button>
            <button
              onClick={() => setSortOrder(null)}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 group cursor-pointer"
          >
            {/* Изображение товара */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain p-4"
                onError={(e) => {
                  console.error('Ошибка загрузки изображения товара');
                  e.currentTarget.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
                }}
              />
              {/* Затемнение при ховере */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>

            {/* Информация о товаре */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-black truncate">{product.title}</h3>
              <p className="text-gray-600 mt-1">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}