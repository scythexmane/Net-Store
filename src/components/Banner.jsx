import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    new URL('../assets/Landingpage.png', import.meta.url).href,
    new URL('../assets/Landingpage2.png', import.meta.url).href,
    new URL('../assets/Landingpage3.png', import.meta.url).href,
  ];

  // Автоматическая смена изображений
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    pulse: { scale: [1, 1.02, 1], transition: { duration: 2, repeat: Infinity } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 rounded-xl shadow-2xl ">
      <motion.div
        className="relative w-full h-64 sm:h-80 lg:h-96"
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Laptop ${currentImage + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/marble.png')] opacity-30" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-6 sm:left-12 lg:left-16 transform -translate-y-1/2 text-left text-black max-w-md"
        variants={bannerVariants}
        animate={['visible', 'pulse']}
      >
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          New Laptop
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Lorem ipsum dolor sit amet consectetur.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            to="/catalog"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <span className="text-sm sm:text-base font-medium">Shop now</span>
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Индикаторы изображений */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-blue-500' : 'bg-gray-300'}`}
            animate={{ scale: index === currentImage ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
 