"use client";
import React from "react";
import { motion } from "framer-motion";
import SpaceModelCanvas from "./SpaceModelCanvas"; // Import your 3D model component
import TypingText from "./TypingText"; // Import your typing effect component

const InputField = ({ type, placeholder, index }) => (
  <div className="relative flex items-center">
    <input
      type={type}
      placeholder={placeholder}
      autoComplete="off"
      className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors duration-300"
    />
    {/* Futuristic glowing dot at the end of the input */}
    <motion.span
      className="absolute right-0 bottom-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-700 rounded-full shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    />
  </div>
);

const SignInForm = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Model Background */}
      <SpaceModelCanvas />

      {/* Form Container */}
      <motion.div
        className="relative bg-black bg-opacity-90 border border-gray-900 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg w-11/12 max-w-md z-10 mx-auto mt-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Glowing Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-700 opacity-80 blur-lg rounded-3xl" />

        {/* Title with Futuristic Vibe */}
        <h2 className="relative text-3xl sm:text-4xl font-bold text-center text-white mb-6 tracking-widest uppercase">
          Sign In
        </h2>

        {/* Input Fields */}
        <div className="relative space-y-6">
          {["Email", "Password"].map((placeholder, index) => (
            <InputField
              key={index}
              type={placeholder === "Password" ? "password" : "text"}
              placeholder={placeholder}
              index={index}
            />
          ))}
        </div>

        {/* Sign In Button with Sci-Fi Glow */}
        <motion.button
          className="relative w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold uppercase rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500"
          whileHover={{ scale: 1.05 }}
        >
          Sign In
        </motion.button>

        {/* Decorative Stars and Nebula Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            className="w-full h-full bg-[url('/path-to-your-stars-image.png')] bg-no-repeat bg-cover opacity-20"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Typing Text Effect */}
      <TypingText />
    </div>
  );
};

export default SignInForm;
