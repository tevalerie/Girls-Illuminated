import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.imgur.com/BKQ5Aba.jpg")`,
        height: "500px",
      }}
    >
      {/* Red overlay with reduced opacity */}
      <div className="absolute inset-0 bg-radiantRed/40" />
      {/* Keep the gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-texGyreBonum">
            About Girls Illuminated
          </h1>
          <p className="text-xl md:text-2xl font-openSans">
            Empowering young women through holistic wellness and meaningful
            connections.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
