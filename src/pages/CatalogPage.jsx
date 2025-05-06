import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);

  // Загрузка продуктов и извлечение категорий
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Mahsulotlar yuklanmadi');
        }
        const data = await response.json();
        const formattedProducts = data.map((item) => ({
          id: item.id,
          name: item.title,
          price: Math.round(item.price * 12000),
          image: item.image,
          category: item.category,
        }));
        setProducts(formattedProducts);
        setFilteredProducts(formattedProducts);

        // Извлекаем уникальные категории
        const uniqueCategories = ['All', ...new Set(formattedProducts.map((item) => item.category))];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Фильтрация по цене и категории
  useEffect(() => {
    let filtered = products;

    // Фильтр по цене
    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Фильтр по категории
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [priceRange, selectedCategory, products]);

  if (loading) {
    return <div className="text-center py-10">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Xato: {error}</div>;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-10">
        Katalog
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        {/* Фильтры */}
        <motion.div
          className="w-full lg:w-1/4 bg-white p-4 sm:p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Filtrlar
          </h2>

          {/* Фильтр по цене */}
          <div className="mb-6">
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Narx bo'yicha</h3>
            <Slider
              range
              min={0}
              max={10000000}
              defaultValue={[0, 10000000]}
              onChange={(value) => setPriceRange(value)}
              trackStyle={[{ background: 'linear-gradient(to right, #3b82f6, #1e40af)' }]}
              handleStyle={[
                {
                  backgroundColor: '#ffffff',
                  borderColor: '#3b82f6',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  width: 16,
                  height: 16,
                  marginTop: -6,
                },
                {
                  backgroundColor: '#ffffff',
                  borderColor: '#3b82f6',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  width: 16,
                  height: 16,
                  marginTop: -6,
                },
              ]}
              railStyle={{ backgroundColor: '#e5e7eb', height: 6 }}
            />
            <div className="flex justify-between mt-3 text-sm sm:text-base text-gray-600">
              <span>{priceRange[0].toLocaleString()} UZS</span>
              <span>{priceRange[1].toLocaleString()} UZS</span>
            </div>
          </div>

          {/* Фильтр по категории */}
          <div className="mb-6 max-h-[540px]">
            <h3 className="text-sm sm:text-base font-medium text-gray-700 mb-2">Kategoriya</h3>
            <motion.select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </motion.select>
          </div>
        </motion.div>

        {/* Список продуктов */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 50 }}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-white p-4 sm:p-5 rounded-lg shadow-md transition-shadow cursor-pointer"
                >
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-36 sm:h-40 lg:h-44 object-contain mb-3 sm:mb-4"
                    />
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
                      {product.category}
                    </p>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">
                      {product.price.toLocaleString()} UZS
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}