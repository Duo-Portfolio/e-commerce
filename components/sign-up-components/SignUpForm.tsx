"use client";
import React from "react";
import { motion } from "framer-motion";

const SignUpForm = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-black bg-cover bg-center"
      style={{ backgroundImage: `url('/test4.jpg')` }} // Space-themed background
    >
      {/* Floating Circles for Extra Decor */}
      <div className="absolute flex items-center justify-between w-full bottom-6 top-6">
        {/* Circle on the Left Side */}
        <motion.div
          className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ marginRight: "auto", marginLeft: "2rem" }} // Adjust spacing as needed
        />

        {/* Circle on the Right Side */}
        <motion.div
          className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ marginLeft: "auto", marginRight: "2rem" }} // Adjust spacing as needed
        />
      </div>

      {/* Form Container */}
      <motion.div
        className="relative bg-black bg-opacity-90 border border-gray-900 p-8 sm:p-10 md:p-12 rounded-3xl shadow-lg w-11/12 max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* Glowing Border Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-700 opacity-80 blur-lg rounded-3xl"></div>

        {/* Title with Futuristic Vibe */}
        <h2 className="relative text-3xl sm:text-4xl font-bold text-center text-white mb-6 tracking-widest uppercase">
          Create Account
        </h2>

        {/* Input Fields */}
        <div className="relative space-y-6">
          {["Username", "Email", "Password", "Confirm Password"].map(
            (placeholder, index) => (
              <div className="relative flex items-center" key={index}>
                <input
                  type={placeholder.includes("Password") ? "password" : "text"}
                  placeholder={placeholder}
                  autoComplete="off"
                  className="w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition-colors duration-300"
                  onFocus={(e) =>
                    e.target.type === "password"
                      ? e.target.setAttribute("autocomplete", "new-password")
                      : ""
                  }
                />
                {/* Futuristic glowing dot at the end of the input */}
                <motion.span
                  className="absolute right-0 bottom-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-700 rounded-full shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                />
              </div>
            )
          )}
        </div>

        {/* Sign Up Button with Sci-Fi Glow */}
        <motion.button
          className="relative w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold uppercase rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up
        </motion.button>

        {/* Decorative Stars and Nebula Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            style={{ marginBottom: "50px" }} // Adjust this value to move the stars down
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpForm;
