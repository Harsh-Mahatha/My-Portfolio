import React from "react";
import { Download, ExternalLink } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetailPage = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div>
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button className="px-4 py-2 bg-blue-500 rounded" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
            <button className="mb-6 text-blue-400 hover:underline" onClick={() => navigate(-1)}>
                ← Back to Projects
            </button>
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-blue-400 text-lg mb-4">{project.subtitle}</p>
            <span className={`px-2 py-1 rounded-full text-xs font-medium mb-4 inline-block ${
                project.status === "Live"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
            }`}>
                {project.status}
            </span>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="mb-8">
                <video src={project.videoUrl} controls className="w-full rounded-xl shadow-lg" />
            </div>
            <div className="flex gap-4">
                {project.status !== "Live" && (
                    <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded flex items-center gap-2">
                        <Download size={16} />
                        Download
                    </button>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded flex items-center gap-2"
                    >
                        Live
                        <ExternalLink size={18} />  
                    </a>
                )}
            </div>
        </div>
    </div>
);
};

export default ProjectDetailPage;
