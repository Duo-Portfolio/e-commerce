"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch'; // Adjust the import path accordingly

const Products = () => {
  const [filter, setFilter] = useState('All');

  // Fetch data from the API
  const { data, isLoading, error } = useFetch("GET", "https://dummyjson.com/products", "products");

  // Handle loading and error states
  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error fetching products: {error.message}</div>;
  }

  // Filter products based on the selected filter
  const filteredProducts = data.products.filter(product => {
    if (filter === 'On Sale') return product.discountPercentage > 0; // Adjust based on discount property
    if (filter === 'High Rating') return product.rating >= 4; // Adjust if necessary
    return true;
  });

  return (
    <section className="relative h-full w-full py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-900 opacity-30 animate-gradient-x"></div>
      <motion.h1 className="text-5xl text-white text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Featured Products
      </motion.h1>

      <div className="flex justify-center mb-24 space-x-4">
        <button 
          onClick={() => setFilter('All')}
          className={`px-8 py-2 rounded ${filter === 'All' ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('On Sale')}
          className={`px-4 py-2 rounded ${filter === 'On Sale' ? 'bg-red-700' : 'bg-red-500'} text-white`}
        >
          On Sale
        </button>
        <button 
          onClick={() => setFilter('High Rating')}
          className={`px-4 py-2 rounded ${filter === 'High Rating' ? 'bg-purple-700' : 'bg-purple-500'} text-white`}
        >
          High Rating
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <motion.div key={product.id} className="relative bg-gray-900 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300 overflow-hidden border-4 border-x-blue-500 border-y-violet-500 rounded-3xl"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {product.discountPercentage > 0 && ( // Show Sale label if discounted
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </div>
            )}
            <div className="relative h-48 w-full mb-4">
              <img src={product.images[0] || "https://img.freepik.com/premium-photo/banner-universe-conceptual-web-banner-planet-stars-background_88088-985.jpg"} // Use the first image or a placeholder
                alt={product.title}
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              {product.title}
            </h2>
            <p className="text-lg text-blue-300 drop-shadow-[0_0_8px_rgba(0,183,255,0.8)]">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mb-4">
              {Array(Math.round(product.rating)).fill(0).map((_, index) => (
                <FaStar key={index} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <motion.button className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 hover:scale-105 transition duration-300">
              Add to Cart
            </motion.button>
            <motion.button className="mt-2 px-4 py-2 bg-transparent border border-black text-white rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
              Quick View
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
