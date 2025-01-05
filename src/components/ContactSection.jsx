import React from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, Linkedin, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold mb-8 text-center">Contact</h2>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 shadow-lg rounded-lg p-6"
    >
      <p className="text-lg mb-4 font-light text-center">
        I am always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:jaipalchauhan52@gmail.com" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
          <Mail className="w-6 h-6" />
        </a>
        <a href="https://github.com/cjpj007" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
          <GithubIcon className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/jaypal-chauhan-192263172/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  </section>
  )
}
