import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left lg:w-1/2"
            >
              <h2 className="text-base font-semibold text-emerald-300 tracking-wide uppercase">Welcome to my portfolio</h2>
              <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-blue-500">
                Java FullStack Developer
              </p>
              <p className="max-w-xl mt-5 mx-auto lg:mx-0 text-xl text-gray-300 font-light">
                With a passion for building robust backend systems and a keen interest in frontend technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 lg:mt-0 lg:w-1/2"
            >
              <img
                src="/herosectionimage.webp?height=400&width=400"
                alt="Java Full-Stack Developer"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>
  );
};

export default HeroSection;
