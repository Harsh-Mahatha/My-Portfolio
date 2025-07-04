import React from 'react';
import { Link } from 'react-router-dom';
import TechParticles from './TechParticles';

const HomePage = ({ projects }) => (
  <div className="min-h-screen pt-20">
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <TechParticles />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-0"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="/Images/Me.jpg"
            alt="Harsh Mahatha profile"
            className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            HARSH MAHATHA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Game Developer & Programmer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
              Unity Expert
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              C# Developer
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
              React.js
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-4 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            Get In Touch
          </Link>
          <a
            href="/Downloads/Harsh's Resume.pdf"
            download
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center"
          >
            Resume
          </a>
        </div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>

    {/* Quick Stats */}
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">{projects.length}+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">1+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
