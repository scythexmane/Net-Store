import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from '../components/TopBar.jsx';
import Header from '../components/Header.jsx';
import Banner from '../components/Banner.jsx';
import Categories from '../components/Category.jsx';
import NewDiscounts from '../components/NewDiscounts.jsx';
import PopularProducts from '../components/PopularProducts.jsx';
import ProductPage from '../components/ProductPage.jsx';
import NewProducts from '../components/NewProducts.jsx';
import AllProducts from '../components/AllProducts.jsx';
import Service from '../components/Service.jsx';
import Footer from '../components/Footer.jsx';
import ContactPage from '../pages/Contact.jsx';
import AboutPage from './About.jsx';
import CatalogPage from './CatalogPage.jsx';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Header />
      <div className="max-w-[1440px] mx-auto px-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Categories />
                <NewDiscounts />
                <PopularProducts />
                <NewProducts/>  
                <AllProducts/>
                <Service/>
              </>
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>

      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;