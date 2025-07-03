import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const pageToPath = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
};

const NavBar = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const getActive = (page) => {
    if (page === 'home' && currentPath === '/') return true;
    if (page !== 'home' && currentPath.startsWith(pageToPath[page])) return true;
    return false;
  };
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-shadow"
            aria-label="Go to home page"
          >
            <button type="button">
              HM
            </button>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map((page) => (
              <Link
                key={page}
                to={pageToPath[page]}
                className={`capitalize transition-colors duration-200 ${
                  getActive(page) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {page}
              </Link>
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
              <Link
                key={page}
                to={pageToPath[page]}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 capitalize transition-colors ${
                  getActive(page) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {page}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
