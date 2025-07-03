import React, { useState, useEffect } from "react";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import ContactPage from "./components/ContactPage";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: "escape-ai",
      title: "Escape the AI",
      subtitle: "AI-powered 3D Psychological Thriller",
      description:
        "A 3D psychological thriller game where players must convince an OpenAI-powered NPC to let them leave or find a hidden phone to call police. Features Unity NavMesh for AI navigation, LipSync integration, and realistic facial animations.",
      overview:
        "Escape the AI is a first-person voice-controlled narrative puzzle game built in Unity using C#. The project explores next-generation AI-driven NPC interaction, combining real-time voice input, emotional expression, dynamic behavior, and memory-based responses. The game features an intelligent captor NPC who adapts, converses, and evolves in reaction to the player’s voice and text input, enabling a deeply immersive experience. By blending OpenAI’s GPT models, Amazon Polly for text-to-speech, and Unity animation systems, this project pushes the boundaries of NPC realism and emotional responsiveness.",
      keyFeatures: [
        "Voice based Command System",
        "Emotionally responsive NPC",
        "Natural dialogue system",
        "Text to speech integration",
        "Command Parsing and Behaviour control",
        "Memory-based responses",
        "Multiple escpae strategies",
        "Immersive 3D environment",
      ],
      tech: [
        "Unity 3D",
        "OpenAI API",
        "C#",
        "NavMesh",
        "LipSync",
        "Blend Shapes",
        "Amazon Polly",
        "Whisper(OpenAI)",
        "Blender + Vroid Studio",
      ],
      date: "March 2025",
      status: "Completed",
      image: "/Images/AI.png",
      videoUrl: "https://2daul8qhawhwqdvv.public.blob.vercel-storage.com/AIvid-DSp6EFrRI6vkHmI4aYaw9vWm8n3dTw.mp4",
      downloadUrl: "#",
    },
    {
      id: "bazaar-broker",
      title: "Bazaar Broker",
      subtitle: "React-based Battle Simulator",
      description:
        "Developed a battle simulator web app for the game The Bazaar, enabling players to test strategies and builds. Live application with C# backend logic and cross-functional team collaboration.",
      overview: `As a player, one thing that always annoyed me was figuring out whether something should go on the or of the core. 😅 I can't be the only one who's spent way too much time doing the math or second-guessing myself. So, I started building a little to help with that!
This website is an unofficial fan-made tools designed to assist players of The Bazaar. `,
      keyFeatures: [
        "Interactive battle simulations",
        "Custom Decks",
        "Premade Monster Loadouts",
        "Strategy and build testing",
        "Deck Optimization",
        "Custom Stats Button"
      ],
      tech: ["React.js", "C#", "Web Development", "Backend Logic", "Scalar"],
      date: "January 2025 - Present",
      status: "Live",
      image: "/Images/BB.png",
      videoUrl: "https://2daul8qhawhwqdvv.public.blob.vercel-storage.com/BB-OqYIyfqGuwvx1YSkZ1iwblCJFFzpx1.mp4",
      liveUrl: "www.bazaarbroker.com",
    },
    {
      id: "car-racing",
      title: "RevR Car Racing",
      subtitle: "Delhi-based Racing Game",
      description:
        "Assisted team by creating UI and scripts for a 3D car racing game. Worked with Unity's Time system and Terrain Generation to develop a Delhi-based map, including 3D modeling for basic assets.",
      overview:
        "Development of RevR, a culturally immersive 3D racing game set in a Delhi-inspired environment, using Unity and C#. The project aims to differentiate itself from generic Western racing games by providing an authentic Indian experience through localized visuals, dynamic AI, weather effects, and realistic physics. RevR offers players an engaging and relatable racing experience by integrating culturally significant map design, interactive UI, and responsive gameplay mechanics.",
      keyFeatures: [
        "Delhi-inspired 3D map",
        "Custom UI and scripts",
        "Realistic car physics",
        "Position Tracker and Speedometer",
        "Dynamic Environmental Effects",
        "Adaptive AI opponents",
      ],
      tech: [
        "Unity 3D",
        "C#",
        "Terrain Generation",
        "3D Modeling",
        "UI Design",
      ],
      date: "September 2024",
      status: "Completed",
      image: "/Images/RevR.png",
      videoUrl: "https://2daul8qhawhwqdvv.public.blob.vercel-storage.com/Revr-aOZoY16xPAvcVeOa2WvKXlsCrmcKen.mp4",
      downloadUrl: "https://2daul8qhawhwqdvv.public.blob.vercel-storage.com/RevR%20x64-04f0XksKgkiWAtrC2dHWoJyyZANUYu.rar",
    },
    {
      id: "platformer-2d",
      title: "Captain Cliffs - 2D Platformer",
      subtitle: "Super Mario Inspired Game",
      description:
        "Created my first complete 2D game inspired by Super Mario. Learned pixel art creation and Unity 2D basics, implementing classic platformer mechanics and character animations.",
      overview:
        "A classic 2D platformer inspired by Super Mario, featuring custom pixel art and engaging level design. The project showcases my journey into game development, focusing on Unity 2D engine capabilities and pixel art creation. It includes character animations, Tilemaps, and classic platformer mechanics, providing a nostalgic gaming experience.",
      keyFeatures: [
        "Classic platformer mechanics",
        "Custom pixel art graphics",
        "Surprising obstacles and enemies",
        "Tilemaps for level design",
        "Unity 2D engine",
      ],
      tech: ["Unity 2D", "C#", "Pixel Art", "Animation"],
      date: "December 2023",
      status: "Completed",
      image: "/Images/CC.png",
      videoUrl: "https://2daul8qhawhwqdvv.public.blob.vercel-storage.com/CC-pNSL7QGxJcTvdBcsuh0rmm8Jo7a1mk.mp4",
      downloadUrl: "/Downloads/CaptainCliffs.rar",
    },
  ];

  const experience = [
    {
      company: "The Brown Academy (NZ)",
      position: "Game Developer (Permanent)",
      duration: "February 2025 - Present",
      description:
        "Permanent team member contributing to core RPG project and side projects like Bazaar Broker. Writing core C# backend logic, collaborating with cross-functional teams, and delivering live tools.",
      achievements: [
        "Core C# backend development",
        "Cross-functional collaboration",
        "Live product delivery",
      ],
    },
    {
      company: "The Brown Academy (NZ)",
      position: "Game Developer Intern",
      duration: "August 2024 - February 2025",
      description:
        "Contributed to a 2D Fantasy RPG project, gaining hands-on Unity experience, implementing models, and enhancing skills in unit testing for robust gameplay mechanics.",
      achievements: [
        "Unity functionalities mastery",
        "Model implementation",
        "Unit testing expertise",
      ],
    },
  ];

  const skills = {
    "Programming Languages": ["C++", "C#"],
    "Game Engines": ["Unity Engine", "Unreal Engine"],
    "Web Development": ["React.js", "Frontend Development"],
    "Game Development": ["3D Modeling", "Pixel Art", "UI Design", "Animation"],
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isScrolled={isScrolled}
        />
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage projects={projects} setCurrentPage={setCurrentPage} />}
            />
            <Route
              path="/about"
              element={<AboutPage experience={experience} skills={skills} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage projects={projects} />}
            />
            <Route
              path="/projects/:id"
              element={<ProjectDetailPage projects={projects} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </div>
        <footer className="w-full text-center text-xs py-3 opacity-70 border-t border-gray-700 mt-auto">
          <span>&copy; {new Date().getFullYear()} Harsh. Built by me ofcourse.</span>
        </footer>
      </div>
    </Router>
  );
};

export default Portfolio;
