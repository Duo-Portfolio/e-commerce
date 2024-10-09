"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import useFetch from "../../hooks/useFetch";
import ProductModal from "./ProductModal"; // Ensure you have this import

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  const productsPerPage = 9;

  const { data, isLoading, error } = useFetch(
    "GET",
    "/api/products",
    "products"
  );

  if (isLoading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Error fetching products: {error.message}
      </div>
    );
  }

  const filteredProducts = data.products.filter((product) => {
    if (filter === "On Sale") return product.discountPercentage > 0;
    if (filter === "High Rating") return product.rating >= 4;
    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleQuickView = (product) => {
    setSelectedProduct(product); // Set the selected product for the modal
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <section className="relative h-full w-full py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 opacity-30 animate-gradient-x"></div>
      <motion.h1
        className="text-5xl text-white text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Featured Products
      </motion.h1>

      <div className="flex justify-center mb-24 space-x-4">
        <button
          onClick={() => setFilter("All")}
          className={`px-8 py-2 bg-gradient-to-r from-indigo-800 to-purple-400 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 transition duration-300 transform hover:scale-110`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("On Sale")}
          className={`px-8 py-2 bg-gradient-to-r from-indigo-800 to-purple-400 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 transition duration-300 transform hover:scale-110`}
        >
          On Sale
        </button>
        <button
          onClick={() => setFilter("High Rating")}
          className={`px-8 py-2 bg-gradient-to-r from-indigo-800 to-purple-400 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 transition duration-300 transform hover:scale-110`}
        >
          High Rating
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-gray-900 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300 overflow-hidden border-4 border-x-blue-500 border-y-violet-500 rounded-3xl"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {product.discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </div>
            )}
            <div className="relative h-48 w-full mb-36 p-2">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={500}
                height={500}
                layout="responsive"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl font-bold text-zinc-400 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
              {product.title}
            </h2>
            <p className="text-lg text-blue-300 drop-shadow-[0_0_8px_rgba(0,183,255,0.8)]">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mb-4">
              {Array(Math.round(product.rating))
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="text-violet-400 mr-1" />
                ))}
            </div>
            <motion.button className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-700 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 hover:scale-105 transition duration-300">
              Add to Cart
            </motion.button>
            <motion.button
              onClick={() => handleQuickView(product)} // Open modal on click
              className="mt-2 px-4 py-2 bg-transparent border border-black text-white rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
            >
              Quick View
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-2 px-4 py-2 rounded-lg transition duration-300 transform ${
              currentPage === index + 1
                ? "bg-gradient-to-r from-indigo-500 to-purple-700 text-black"
                : "bg-gray-700 text-white hover:bg-indigo-600 hover:text-white"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
};

export default Products;
