import React from "react";
import { Download, ExternalLink, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundOrbs from "./BackgroundOrbs";
import CircuitTrailWrapper from "./CircuitTrailWrapper";

const ProjectsPage = ({ projects }) => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <BackgroundOrbs />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my development projects, from modern web applications
            to AI-powered gaming experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                {/* Video thumbnail */}
                <img
                  src={project.image || "/public/Images/Favicon.png"}
                  alt={project.title + " thumbnail"}
                  className="object-cover w-full h-full shadow-lg group-hover:scale-105 transition-transform duration-500"
                  style={{
                    maxHeight: "16rem",
                    minHeight: "16rem",
                    background: "#222",
                  }}
                />
                {/* More info overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/50">
                  <span className="text-white text-lg font-semibold bg-black/40 px-6 py-2 rounded-lg border border-white/20 backdrop-blur-md tracking-wide">
                    Read More
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
