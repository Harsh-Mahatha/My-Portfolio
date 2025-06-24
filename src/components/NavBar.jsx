import React from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, isScrolled }) => (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          HM
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize transition-colors duration-200 ${
                currentPage === page ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-4">
          {['home', 'about', 'projects', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 capitalize transition-colors ${
                currentPage === page ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

export default NavBar;
