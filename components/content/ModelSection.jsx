"use client";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model"; // Adjust the import path based on your file structure
import { motion } from "framer-motion"; // Import Framer Motion

const ModelSection = () => {
  const modelRef = useRef();

  // Function to handle mouse movement and rotate the model
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
    const y = -(clientY / window.innerHeight) * 2 + 1; // Normalize to -1 to 1

    if (modelRef.current) {
      // Rotate the model based on mouse position
      modelRef.current.rotation.y = x * Math.PI; // Control left-right rotation
      modelRef.current.rotation.x = (y * Math.PI) / 2; // Control up-down rotation
    }
  };

  return (
    <div
      className="flex h-[500px] relative overflow-hidden bg-[rgba(46,36,90,0.2)]"
      onMouseMove={handleMouseMove}
    >
      {/* Left Side for 3D Model */}
      <div className="flex-1 flex justify-center items-end">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[1, 1, 1]} />
          <Model
            url="/Dayo.glb"
            position={[0, -2, 0]} // Lower the model
            scale={[2, 2, 2]} // Scale as needed
          />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Right Side for Other Content */}
      <div className="flex-1 flex flex-col justify-center p-4 text-white">
        <motion.h1
          className="text-3xl font-bold glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Galaxy
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover a universe of amazing products that redefine the boundaries
          of technology and style.
        </motion.p>
        <motion.ul
          className="mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <li className="mt-2">✨ Unique Designs</li>
          <li className="mt-2">🛸 Advanced Technology</li>
          <li className="mt-2">🌌 Intergalactic Shipping</li>
        </motion.ul>
        <motion.button
          className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-600 rounded-full transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Shop Now
        </motion.button>
      </div>

      {/* Additional Floating Animation for the Model */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2,
          yoyo: Infinity,
          ease: "easeInOut",
        }}
        style={{ pointerEvents: "none" }} // Prevent interaction
      />
    </div>
  );
};

// Set the display name for the ModelSection component
ModelSection.displayName = "ModelSection";

export default ModelSection;
