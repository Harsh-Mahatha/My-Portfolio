import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RecentProjectsCarousel = ({ projects }) => {
  const navigate = useNavigate();
  // Take the first 4 projects
  const recentProjects = projects.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (recentProjects.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [recentProjects.length]);

  if (recentProjects.length === 0) return null;

  const currentProject = recentProjects[currentIndex];

  return (
    <section className="py-16 bg-gray-900/40 relative z-10 border-t border-b border-gray-800/50 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
            </h2>
            <button onClick={() => navigate('/projects')} className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            View All →
            </button>
        </div>
        
        <div className="relative max-w-5xl mx-auto bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          {/* Carousel Slide */}
          <div className="flex flex-col md:flex-row min-h-[350px] animate-fade-in p-2 rounded-md relative transition-all duration-500" key={currentIndex}>
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden group cursor-pointer" onClick={() => navigate(`/projects/${currentProject.id}`)}>
               <img
                  src={currentProject.image || "/public/Images/Favicon.png"}
                  alt={currentProject.title + " thumbnail"}
                  className="object-cover w-full h-full shadow-lg group-hover:scale-105 rounded-md  transition-transform duration-500"
                  style={{ background: '#222' }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold border border-white/30 backdrop-blur-md px-6 py-2 rounded-lg">View Details</span>
                </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-800/50 relative">
              <h3 className="text-3xl font-bold text-white mb-2 hover:text-blue-400 transition-colors cursor-pointer" onClick={() => navigate(`/projects/${currentProject.id}`)}>{currentProject.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{currentProject.subtitle}</p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">{currentProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {currentProject.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded text-xs">{tech}</span>
                ))}
                {currentProject.tech.length > 4 && <span className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded text-xs">+{currentProject.tech.length - 4}</span>}
              </div>
              <button 
                onClick={() => navigate(`/projects/${currentProject.id}`)}
                className="mt-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-colors w-fit font-semibold text-sm border border-blue-500/50 shadow-lg hover:shadow-blue-500/25"
              >
                View Project
              </button>
              
              {/* Dots Navigation inside the card */}
              <div className="absolute bottom-6 right-8 flex gap-2">
                {recentProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'bg-blue-400 scale-125 shadow-[0_0_10px_rgba(96,165,250,0.8)]' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsCarousel;
