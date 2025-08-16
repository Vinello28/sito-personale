import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Freelance",
      location: "Remote",
      period: "March 2025 - Present",
      type: "Part-time",
      description: "Consulting, software development for .NET Framework applications and complete data persistence and analysis solutions.",
      achievements: [
        "Development and integration of new ASP.NET software modules",
        "Design and development of MAUI applications",
        "Development and integration of new Blazor components"        
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Politecnico di Milano Internship",
      location: "Cremona/Ancona, Hybrid",
      period: "March - May 2024",
      type: "Full-time, 350 hours",
      description: "Development of a Blazor Server CRUD application with integration of machine learning functionality for data analysis.",
      achievements: [
        "Refinement of solution architecture following MVVM pattern",
        "Code writing starting from basic CRUD functions (service injection)",
        "Front-end of the final application and testing",
        "NET.ML Framework for machine learning"
      ]
    },
    {
      title: "ICT Technician",
      company: "IDEA soc.coop.",
      location: "Ancona, AN",
      period: "November 2019",
      type: "Full-time, 120 hours",
      description: "Part of PCTO, development of JavaScript software for a Texas Instruments PLC (48 MHz), with the goal of moving a mechanical arm.",
      achievements: [
        "Assembly and configuration of PCs to work with specific PLCs",
        "PC maintenance"
      ]
    },
    {
      title: "Software Developer",
      company: "IDEA soc.coop.",
      location: "Ancona, AN",
      period: "July 2019",
      type: "Full-time",
      description: "Development and debugging of a PLC interface; the interface had to allow setting parameters necessary for the movement of a servo motor.",
      achievements: [
        "Coordination between team components",
        "Software development starting from a UML design phase",
        "Code testing on Arduino Mega platform"
      ]
    },
    {
      title: "ICT Technician",
      company: "IDEA soc.coop.",
      location: "Ancona, AN",
      period: "May 2019",
      type: "Full-time, 160 hours",
      description: "Part of PCTO, IoT application development for environmental sensor.",
      achievements: [
        "On ESP - Firmware update and correction of one of its modules",
        "IoT application development with MOSQUITTO protocol in Python",
        "Website development for visualization of data collected by the sensor and sent via MOSQUITTO Broker"
      ]
    },
    {
      title: "ICT Technician",
      company: "MF s.r.l.",
      location: "Ancona, AN",
      period: "May 2018",
      type: "Full-time, 120 hours",
      description: "Part of PCTO, Didaskalos project, LIM installation and other multimedia devices for teaching.",
      achievements: [
        "Creation and assembly of timed power strips",
        "Transport, installation and maintenance of LIMs and related PCs in schools in the province of Ancona",
        "Preparation of LIMs for shipping",
        "FESR-PON grant research",
        "PC configuration for schools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey spans from freelance software development to internships 
            and technical roles, showcasing a diverse range of skills and experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-16">
                  <div className="card hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 font-medium mb-2">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 lg:mt-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <MapPin size={12} className="mr-1" />
                          {exp.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
