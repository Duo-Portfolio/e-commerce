"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white px-4 overflow-hidden">
      {/* Deep Space Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 opacity-30"></div>
      
      {/* Starry Background */}
      <div className="absolute inset-0 bg-stars opacity-60"></div>
      
      {/* Hero Title with Dark Gradient */}
      <motion.h1
        className="text-7xl font-extrabold leading-tight md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-700 to-black drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" // Dark gradient text with glow effect
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Our Space
      </motion.h1>
      
      {/* Hero Subtitle */}
      <motion.p
        className="mt-4 text-xl max-w-lg mx-auto md:text-2xl text-blue-300 drop-shadow-[0_0_8px_rgba(0,183,255,0.8)]" // Soft blue glow
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore unique products inspired by the cosmos and elevate your style.
      </motion.p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col space-y-4">
        <Button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-black rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:bg-opacity-80 transition duration-300 transform hover:scale-110">
          Shop Now
        </Button>
        <Button className="px-8 py-3 bg-transparent border border-white text-white rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:bg-violet hover:text-black transition duration-300 transform hover:scale-110">
          Explore Categories
        </Button>
      </div>
    </section>
  );
};

export default Hero;
