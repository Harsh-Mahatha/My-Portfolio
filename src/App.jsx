import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Play, Github, Linkedin, Mail, Code, Gamepad2, User, FolderOpen, ChevronRight, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 'escape-ai',
      title: 'Escape the AI',
      subtitle: 'AI-powered 3D Psychological Thriller',
      description: 'A 3D psychological thriller game where players must convince an OpenAI-powered NPC to let them leave or find a hidden phone to call police. Features Unity NavMesh for AI navigation, LipSync integration, and realistic facial animations.',
      tech: ['Unity 3D', 'OpenAI API', 'C#', 'NavMesh', 'LipSync', 'Blend Shapes'],
      date: 'March 2025',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 'bazaar-broker',
      title: 'Bazaar Broker',
      subtitle: 'React-based Battle Simulator',
      description: 'Developed a battle simulator web app for the game The Bazaar, enabling players to test strategies and builds. Live application with C# backend logic and cross-functional team collaboration.',
      tech: ['React.js', 'C#', 'Web Development', 'Backend Logic'],
      date: 'January 2025 - Present',
      status: 'Live',
      image: '/api/placeholder/600/400',
      videoUrl: '#',
      liveUrl: 'www.bazaarbroker.com'
    },
    {
      id: 'car-racing',
      title: '3D Car Racing',
      subtitle: 'Delhi-based Racing Game',
      description: 'Assisted team by creating UI and scripts for a 3D car racing game. Worked with Unity\'s Time system and Terrain Generation to develop a Delhi-based map, including 3D modeling for basic assets.',
      tech: ['Unity 3D', 'C#', 'Terrain Generation', '3D Modeling', 'UI Design'],
      date: '2024',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      videoUrl: '#'
    },
    {
      id: 'platformer-2d',
      title: '2D Platformer (Captain Cliffs)',
      subtitle: 'Super Mario Inspired Game',
      description: 'Created my first complete 2D game inspired by Super Mario. Learned pixel art creation and Unity 2D basics, implementing classic platformer mechanics and character animations.',
      tech: ['Unity 2D', 'C#', 'Pixel Art', 'Animation'],
      date: '2024',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      videoUrl: '#'
    }
  ];

  const experience = [
    {
      company: 'The Brown Academy (NZ)',
      position: 'Game Developer (Permanent)',
      duration: 'February 2025 - Present',
      description: 'Permanent team member contributing to core RPG project and side projects like Bazaar Broker. Writing core C# backend logic, collaborating with cross-functional teams, and delivering live tools.',
      achievements: ['Core C# backend development', 'Cross-functional collaboration', 'Live product delivery']
    },
    {
      company: 'The Brown Academy (NZ)',
      position: 'Game Developer Intern',
      duration: 'August 2024 - February 2025',
      description: 'Contributed to a 2D Fantasy RPG project, gaining hands-on Unity experience, implementing models, and enhancing skills in unit testing for robust gameplay mechanics.',
      achievements: ['Unity functionalities mastery', 'Model implementation', 'Unit testing expertise']
    }
  ];

  const skills = {
    'Programming Languages': ['C++', 'C#'],
    'Game Engines': ['Unity Engine', 'Unreal Engine'],
    'Web Development': ['React.js', 'Frontend Development'],
    'Game Development': ['3D Modeling', 'Pixel Art', 'UI Design', 'Animation']
  };

  const NavBar = () => (
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

  const HomePage = () => (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
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
            <button
              onClick={() => setCurrentPage('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
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
              <div className="text-4xl font-bold text-purple-400 mb-2">2+</div>
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

  const AboutPage = () => (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enthusiastic and motivated Game Developer with a solid foundation in game design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">My Story</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate game developer proficient in programming languages and tools such as C#, Unity, and Unreal Engine. 
              I'm eager to collaborate with creative teams to bring innovative game concepts to life and continually learn new technologies and methodologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working as a permanent team member at The Brown Academy (NZ), I've expanded my role beyond core RPG projects 
              to contribute to innovative tools like Bazaar Broker, demonstrating my versatility in both game development and web technologies.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white">Bachelor of Technology</h3>
                <p className="text-blue-400">Computer Science Engineering</p>
                <p className="text-gray-400">JEMTEC, Greater Noida</p>
                <p className="text-gray-500 text-sm">2024</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white">Senior Secondary Education</h3>
                <p className="text-gray-400">BMVB- ASMA</p>
                <p className="text-gray-500 text-sm">2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
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

  const ContactPage = () => (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Let's collaborate and bring innovative game concepts to life!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white">harshmahatha1847@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white">H-17/348, Sangam Vihar, New Delhi - 110080</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                  <Linkedin className="text-blue-500" size={24} />
                  <div>
                    <div className="text-gray-400 text-sm">LinkedIn</div>
                    <div className="text-white">www.linkedin.com/in/harshmahatha</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What I'm Looking For</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <ChevronRight className="text-blue-400" size={16} />
                  Game Development Opportunities
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ChevronRight className="text-blue-400" size={16} />
                  Creative Team Collaborations
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ChevronRight className="text-blue-400" size={16} />
                  Unity & Unreal Engine Projects
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <ChevronRight className="text-blue-400" size={16} />
                  Full-stack Development Roles
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <div className="block text-gray-300 text-sm mb-2">Name</div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <div className="block text-gray-300 text-sm mb-2">Email</div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div>
                <div className="block text-gray-300 text-sm mb-2">Subject</div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project collaboration"
                />
              </div>
              <div>
                <div className="block text-gray-300 text-sm mb-2">Message</div>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => alert('Message sent! (This is a demo - integrate with your preferred email service)')}
              >
                Send Message
              </button>
            </div>
          </div> 
                
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'projects': return <ProjectsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <NavBar />
      {renderPage()}
    </div>
  );
};

export default Portfolio;