import React from "react";

const AboutPage = ({ experience, skills }) => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Creative and motivated Game Developer with a solid background in
          building games and a flair for frontend web development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">My Story</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate game developer proficient in programming languages
            and tools such as C#, Unity, and Unreal Engine. I'm eager to
            collaborate with creative teams to bring innovative game concepts to
            life and continually learn new technologies and methodologies.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently working as a permanent team member at The Brown Academy
            (NZ), I've expanded my role beyond core RPG projects to contribute
            to innovative tools like Bazaar Broker, demonstrating my versatility
            in both game development and web technologies.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-white">
                Bachelor of Technology
              </h3>
              <p className="text-gray-400">Computer Science Engineering</p>
              <p className="text-gray-400">JEMTEC, Greater Noida</p>
              <p className="text-gray-500 text-sm">2025</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-white">
                Senior Secondary Education
              </h3>
              <p className="text-gray-400">BMVB- ASMA</p>
              <p className="text-gray-500 text-sm">2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <div key={skill} className="text-gray-300 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Achievements
          </h2>
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-2">
            Co-Author – Research Publication (<a href="http://cssp.thehinweis.com/2024/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">CSSP Conference</a>)
          </h3>
          <p className="text-gray-300 mb-2">
            Co-authored a research paper accepted at the Control System and
            Signal Processing (CSSP) conference, organized by Hinweis
            Research. The paper focused on a novel model designed to enhance
            NPC behavior in video games by leveraging the capabilities of the
            OpenAI API. We utilized the Unity Engine to simulate and test this
            model within interactive game environments, demonstrating how
            AI-driven responses can make NPCs more dynamic, realistic, and
            adaptive to player interactions.
          </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.position}
                  </h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
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

export default AboutPage;
