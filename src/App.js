import React from 'react';
import Header from './components/Header';
import FeaturedContent from './components/FeaturedContent';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      
      <main> 
        <FeaturedContent />
        <ProductCategories />
        <FeaturedProducts />
      </main>
      <Footer />
      
    </div>
    </>
     
  );
}

export default App;
