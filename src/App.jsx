import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CartProvider from './components/CartProvider.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartPage from './pages/CartPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ContactPage from './pages/Contact.jsx';
import HomePage from './pages/Home.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AboutPage from './pages/About.jsx';
import ProductPage from './pages/ProductPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-surface text-ink">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
