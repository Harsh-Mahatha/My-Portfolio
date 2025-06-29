import React, { useState, useEffect } from 'react';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      image: '/Images/AI.png',
      videoUrl: '/Videos/AIvid.mp4',
    },
    {
      id: 'bazaar-broker',
      title: 'Bazaar Broker',
      subtitle: 'React-based Battle Simulator',
      description: 'Developed a battle simulator web app for the game The Bazaar, enabling players to test strategies and builds. Live application with C# backend logic and cross-functional team collaboration.',
      tech: ['React.js', 'C#', 'Web Development', 'Backend Logic'],
      date: 'January 2025 - Present',
      status: 'Live',
      image: '/Images/BB.png',
      videoUrl: '/Videos/BB.mp4',
      liveUrl: 'www.bazaarbroker.com'
    },
    {
      id: 'car-racing',
      title: '3D Car Racing',
      subtitle: 'Delhi-based Racing Game',
      description: 'Assisted team by creating UI and scripts for a 3D car racing game. Worked with Unity\'s Time system and Terrain Generation to develop a Delhi-based map, including 3D modeling for basic assets.',
      tech: ['Unity 3D', 'C#', 'Terrain Generation', '3D Modeling', 'UI Design'],
      date: 'September 2024',
      status: 'Completed',
      image: '/Images/RevR.png',
      videoUrl: '/Videos/Revr.mp4'
    },
    {
      id: 'platformer-2d',
      title: '2D Platformer (Captain Cliffs)',
      subtitle: 'Super Mario Inspired Game',
      description: 'Created my first complete 2D game inspired by Super Mario. Learned pixel art creation and Unity 2D basics, implementing classic platformer mechanics and character animations.',
      tech: ['Unity 2D', 'C#', 'Pixel Art', 'Animation'],
      date: 'December 2023',
      status: 'Completed',
      image: '/Images/CC.png',
      videoUrl: '/Videos/CC.mp4'
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

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <NavBar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isScrolled={isScrolled}
        />
        <Routes>
          <Route path="/" element={<HomePage projects={projects} setCurrentPage={setCurrentPage} />} />
          <Route path="/about" element={<AboutPage experience={experience} skills={skills} />} />
          <Route path="/projects" element={<ProjectsPage projects={projects} />} />
          <Route path="/projects/:id" element={<ProjectDetailPage projects={projects} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Portfolio;