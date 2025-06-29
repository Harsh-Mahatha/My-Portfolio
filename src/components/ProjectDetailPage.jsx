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
            <p className="text-gray-300 text-base mb-6 leading-relaxed">{project.overview}</p>
            <div className="mb-8">
                <video src={project.videoUrl} controls className="w-full rounded-xl shadow-lg" />
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {project.keyFeatures.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex gap-4 mb-8 justify-start">
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
            {project.status !== "Live" && project.downloadUrl && (
                <div className="flex mb-2">
                    {project.id === "escape-ai" ? (
                        <div className="px-4 py-2 bg-purple-500 text-white rounded flex items-center gap-2 w-full justify-center opacity-60 cursor-not-allowed">
                            <Download size={16} />
                            Download Coming soon
                        </div>
                    ) : (
                        <a
                            href={project.downloadUrl}
                            download
                            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded flex items-center gap-2 w-full justify-center"
                        >
                            <Download size={16} />
                            Download
                        </a>
                    )}
                </div>
            )}
        </div>
    </div>
);
};

export default ProjectDetailPage;
