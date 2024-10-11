import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = () => {
  const text = "Your journey into the cosmos of shopping begins now!"; // Define the text directly
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index += 1;
      } else {
        clearInterval(interval); // Stop when done
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [text]);

  return (
    <motion.div
      className="absolute top-0 left-0 p-4 w-full text-white text-left" // Align text to the left
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
        Welcome to the Universe of Shopping!
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gradient">
        {displayText}
      </p>
    </motion.div>
  );
};

export default TypingText;
