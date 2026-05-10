import React from 'react';
import { Link } from 'react-router-dom';
import TechParticles from './TechParticles';
import RecentProjectsCarousel from './RecentProjectsCarousel';

const HomePage = ({ projects }) => (
  <div className="min-h-screen pt-20">
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <TechParticles />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 z-0"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="relative mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full">
            <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-70 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full p-[6px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-[-50%] animate-spin-slow blur-sm bg-[conic-gradient(from_0deg,transparent_0deg,transparent_120deg,#a855f7_180deg,transparent_180deg,transparent_300deg,#3b82f6_360deg)]"></div>
              <div className="absolute inset-[6px] rounded-full bg-gray-900 z-0"></div>
              <img
                src="/Images/Me.jpg"
                alt="Harsh Mahatha profile"
                className="relative z-10 w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            HARSH MAHATHA
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8">
            Front-end Engineer 
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                React.js
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              Vue.js
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
             Angular.js
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="relative inline-flex h-14 overflow-hidden rounded-lg p-[2px] transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-gray-900 px-8 py-2 text-sm font-semibold text-white backdrop-blur-3xl tracking-wide">
              View My Work
            </span>
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center"
          >
            Get In Touch
          </Link>
          <a
            href="/Downloads/Harsh's Resume.pdf"
            download
            className="relative inline-flex h-14 overflow-hidden rounded-lg p-[2px] transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF9BC5_0%,#49496E_50%,#FFCA95_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-gray-900 px-8 py-2 text-sm font-semibold text-white backdrop-blur-3xl tracking-wide">
              Resume
            </span>
          </a>
        </div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Spinning glowing orb */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] opacity-40 animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#a855f7_120deg,transparent_140deg,transparent_300deg,#3b82f6_320deg)]"></div>
        {/* Reverse spinning orb */}
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-40 animate-spin-reverse bg-[conic-gradient(from_0deg,transparent_0deg,transparent_100deg,#ec4899_120deg,transparent_140deg,transparent_300deg,#6366f1_320deg)]"></div>
        
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>

    {/* Recent Projects Carousel */}
    <RecentProjectsCarousel projects={projects} />

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
