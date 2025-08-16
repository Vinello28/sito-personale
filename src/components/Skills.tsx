import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Globe, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "C", level: 90 },
        { name: "C#", level: 95 },
        { name: "Java", level: 88 },
        { name: "JavaScript", level: 55},
        { name: "TypeScript", level: 50 },
        { name: "Python", level: 77 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-green-600" size={24} />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "React", level: 60 },
        { name: "ASP.NET", level: 88 },
        { name: "Blazor", level: 85 }
      ]
    },
    {
      title: "Data & AI",
      icon: <Cpu className="text-purple-600" size={24} />,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "PyTorch", level: 86 },
        { name: "Agent Development", level: 75 },
        { name: "Data Analysis", level: 80 },
        { name: "NLP models", level: 84 },
        { name: "Transformer & LLM", level: 90 }
      ]
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="text-orange-600" size={24} />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "SQL Server", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "UNIX Systems", level: 75 },
        { name: "Windows", level: 90 }
      ]
    },
    {
      title: "Design & Architecture",
      icon: <GitBranch className="text-red-600" size={24} />,
      skills: [
        { name: "Design Patterns", level: 85 },
        { name: "Design from top level", level: 88 },
        { name: "UML Design", level: 80 },
        { name: "Testing & Debugging", level: 85 },
        { name: "System Architecture", level: 75 }
      ]
    },
    {
      title: "Networking & IoT",
      icon: <Database className="text-indigo-600" size={24} />,
      skills: [
        { name: "Network Protocols", level: 90 },
        { name: "IoT Development", level: 65 },
        { name: "PLC Programming", level: 70 },
        { name: "Arduino", level: 85 },
      ]
    }
  ];

  const softSkills = [
    "Organization",
    "Teamwork", 
    "Presentation skills",
    "Flexibility",
    "Structured problem-solving approach",
    "Creativity",
    "Determination",
    "Leadership",
    "Analysis and synthesis skills"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical skills and soft skills that enable me to 
            tackle complex problems and deliver innovative solutions.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              I'm constantly expanding my knowledge in emerging technologies, especially in AI computing and local LLMs. My academic background in Computer Engineering
              focused on Artificial Intelligence and Data Science keeps me at the forefront of technological innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
