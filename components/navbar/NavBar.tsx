"use client";
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.nav 
      className="w-full h-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white flex items-center justify-between px-6 shadow-lg shadow-violet-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo on the left */}
      <motion.div 
        className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-gray-500 via-purple-700 to-gray-900 bg-clip-text text-transparent"
        whileHover={{ scale: 1.1, rotate: 15 }}
      >
        Space E-Commerce
      </motion.div>

      {/* Navigation Links in the center */}
      <motion.ul 
        className="flex space-x-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.li
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }}
          className="cursor-pointer hover:text-blue-400"
        >
          Home
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }} 
          className="cursor-pointer hover:text-blue-400"
        >
          About
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }} 
          className="cursor-pointer hover:text-blue-400"
        >
          Galactic Goods
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }} 
          className="cursor-pointer hover:text-blue-400"
        >
          Starship Registration
        </motion.li>
        <motion.li 
          whileHover={{ scale: 1.1, textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }} 
          className="cursor-pointer hover:text-blue-400"
        >
          Cosmic Blog
        </motion.li>
      </motion.ul>

      {/* Authentication Area on the right */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.button
          className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-black transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Sign In
        </motion.button>
        <motion.button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-black rounded hover:bg-blue-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up
        </motion.button>
        
        {/* Dashboard button */}
        <motion.button
          className="px-4 py-2 border border-blue-400 text-blue-400 rounded hover:bg-gradient-to-r from-blue-500 to-blue-300 hover:text-black transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Dashboard
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}

export default NavBar;
