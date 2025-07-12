'use client';

import { motion } from 'framer-motion';
import { Code, Gamepad2, Palette, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient game code"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Game Design",
      description: "Creating engaging gameplay mechanics"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Arts",
      description: "Crafting immersive visual experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimizing games for smooth gameplay"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate game developer with expertise in creating engaging, 
            high-performance games using modern technologies and creative design principles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in game development, I've worked on various projects 
              ranging from indie mobile games to AAA console titles. My passion lies in creating 
              immersive experiences that captivate players and push the boundaries of interactive entertainment.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in Unity and Unreal Engine development, with strong skills in C#, C++, 
              and various game development frameworks. I'm always eager to learn new technologies 
              and explore innovative approaches to game design.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript', 'Python', 'Blender', '3D Modeling'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-purple-400 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
