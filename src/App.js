import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import PaymentPage from './components/PaymentPage';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList';
import MenProductList from './components/MenProductList';
import KidProductList from './components/KidProductList';
import SellPage from './components/SellPage';
import BookProductList from './components/BookProductList';
import RentalPage from './components/RentalPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AdminLogin from './components/AdminLogin';
import Sign from './components/Sign';
import AdminDashboard from './components/admin/AdminDashboard';
import WomenCartPage from './components/WomenCartPage';
import WomenCheckoutPage from './components/WomenCheckoutPage';
import MenCartPage from './components/MenCartPage';
import MenCheckoutPage from './components/MenCheckoutPage';
import KidCartPage from './components/KidCartPage';
import KidCheckoutPage from './components/KidCheckoutPage';
import WholeCart from './components/WholeCart';
import CartPayment from './components/CartPayment';
import SchemeManagement from './components/SchemeManagement';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/sign" element={<Sign />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/women" element={<ProductList />} />
          <Route path="/rent" element={<RentalPage />} />
          <Route path="/book" element={<BookProductList />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/men" element={<MenProductList />} />
          <Route path="/kids" element={<KidProductList />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/women-cart" element={<WomenCartPage />} />
          <Route path="/women-checkout" element={<WomenCheckoutPage />} />
          <Route path="/men-cart" element={<MenCartPage />} />
          <Route path="/men-checkout" element={<MenCheckoutPage />} />
          <Route path="/kid-cart" element={<KidCartPage />} />
          <Route path="/kid-checkout" element={<KidCheckoutPage />} />
          <Route path="/whole" element={<WholeCart />} />
          <Route path="/cart-payment" element={<CartPayment />} />
          <Route path="/scheme" element={<SchemeManagement />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
