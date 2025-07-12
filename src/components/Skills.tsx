'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Cpu, Layers, Gamepad2, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Game Engines',
      icon: <Gamepad2 className="w-6 h-6" />,
      skills: [
        { name: 'Unity', level: 95 },
        { name: 'Unreal Engine', level: 90 },
        { name: 'Godot', level: 75 },
        { name: 'GameMaker Studio', level: 80 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'C#', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: '3D & Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Blender', level: 90 },
        { name: 'Maya', level: 85 },
        { name: 'Photoshop', level: 88 },
        { name: 'Substance Painter', level: 75 }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Platforms',
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: 'PC/Steam', level: 95 },
        { name: 'Mobile (iOS/Android)', level: 90 },
        { name: 'Console (Xbox/PS)', level: 85 },
        { name: 'WebGL', level: 80 }
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Performance',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: 'Optimization', level: 90 },
        { name: 'Profiling', level: 85 },
        { name: 'Memory Management', level: 88 },
        { name: 'Rendering Pipeline', level: 82 }
      ],
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Tools & Workflow',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Git/Version Control', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Unity Cloud Build', level: 85 }
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across different aspects of game development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              The game development industry is constantly evolving, and I&apos;m committed to staying
              current with the latest technologies, tools, and best practices. Currently exploring 
              VR/AR development, AI integration in games, and advanced rendering techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium">
                VR/AR Development
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-medium">
                Real-time Ray Tracing
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-medium">
                Procedural Generation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
