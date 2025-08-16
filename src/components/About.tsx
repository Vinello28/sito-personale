import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: "MSc in Computer Engineering and Automation - Artificial Intelligence and Data Science",
      school: "Università Politecnica delle Marche, Ancona",
      period: "2025 - in progress",
      subjects: ["Data Analysis", "Big Data", "Computer Vision"]
    },
    {
      degree: "BSc in Engineering of Computing Systems",
      school: "Politecnico di Milano, Cremona",
      period: "2020 - 2025",
      grade: "Grade: 88",
      activities: ["MESA - Milan Engineering Student Association", "Startup Bootcamp", "Google Developer Student Club"]
    },
    {
      degree: "ICT Technician",
      school: "Istituto Tecnico Industriale Superiore V.Volterra, Ancona",
      period: "2016 - 2020",
      grade: "Grade: 94",
      thesis: "Client/server telemedicine application"
    }
  ];

  const certifications = [
    "Politecnico di Milano - AI Instructions for use",
    "Politecnico di Milano - Digital Transformation and Artificial Intelligence",
    "Politecnico di Milano - Startup Bootcamp",
    "Politecnico di Milano - Blockchain and Smart Contracts",
    "Cambridge Assessment English - FCE (B2)",
    "Samsung Let'sApp - Solve for Tomorrow Edition (20/20)",
    "Google DSC - Explore ML (intermediate track)",
    "AICA - ECDL Full Standard",
    "Politecnico di Milano - Coordination of autonomous robots with AI algorithms"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My skills goes from automation software to design & development 
            of distributed applications. Experience mainly in Microsoft/Azure environment; in recent years, 
            I've had the opportunity to deepen my knowledge of the Java world, UNIX systems and apply 
            engineering methods in problem solving for real world apps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Professional Profile</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                During university, I started studying and using LLMs for data analysis, but also lightweight 
                AI/ML models so that they can be integrated into software projects. Oriented towards finding 
                innovative solutions, with a strong propensity to operate in a sector where research and 
                development are fundamental.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Users className="text-purple-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Organization", "Teamwork", "Presentation skills", "Flexibility", 
                  "Structured approach", "Creativity", "Determination", "Leadership", 
                  "Analysis and synthesis skills"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-green-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h4 className="font-semibold text-lg text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-gray-600 text-sm">{edu.period}</p>
                    {edu.grade && <p className="text-green-600 font-medium text-sm">{edu.grade}</p>}
                    {edu.subjects && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">Subjects:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {edu.subjects.map((subject, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.activities && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">Activities:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {edu.activities.map((activity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.thesis && (
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Award className="text-orange-600 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-700 bg-orange-50 p-2 rounded"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
