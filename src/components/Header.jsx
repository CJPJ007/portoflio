import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import CustomLogo from './CustomLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">John Doe</span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-12 w-12 relative"
            >
              <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-emerald-300"></div>
              <div className="relative flex items-center justify-center h-12 w-12 rounded-full">
                <CustomLogo />
              </div>
            </motion.div>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-emerald-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-gray-200 hover:text-emerald-300 transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <motion.a
            href="#contact"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-emerald-300 hover:bg-emerald-400"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </div>

    {/* Mobile menu */}
    <motion.div
      className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-200 hover:bg-emerald-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </motion.div>
  </header>
  )
}

export default Header
