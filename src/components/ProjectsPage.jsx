import React from 'react';
import { Play, Download, ExternalLink, Gamepad2 } from 'lucide-react';

const ProjectsPage = ({ projects }) => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A showcase of my game development projects, from 2D platformers to AI-powered 3D experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
              <div className="text-6xl text-gray-600">
                <Gamepad2 />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-medium">{project.subtitle}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-xs">{project.date}</span>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs hover:bg-green-500/30 transition-colors flex items-center gap-1">
                      <ExternalLink size={12} />
                      Live
                    </button>
                  )}
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-xs hover:bg-purple-500/30 transition-colors flex items-center gap-1">
                    <Download size={12} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;
