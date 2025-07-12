'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

export default function Games() {
  const games = [
    {
      title: 'Cyber Odyssey',
      description: 'A futuristic RPG adventure set in a cyberpunk world. Features dynamic combat system, branching storylines, and stunning visual effects.',
      tech: ['Unity', 'C#', 'Blender', 'Photoshop'],
      category: 'RPG',
      status: 'Released',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Mystic Realms',
      description: 'An enchanting fantasy world where magic meets strategy. Build your kingdom, cast spells, and conquer mystical lands.',
      tech: ['Unreal Engine', 'C++', 'Maya', 'Substance Painter'],
      category: 'Strategy',
      status: 'In Development',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Neon Racers',
      description: 'High-speed racing game with customizable vehicles and neon-lit tracks. Experience the thrill of futuristic racing.',
      tech: ['Unity', 'C#', '3ds Max', 'After Effects'],
      category: 'Racing',
      status: 'Released',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Space Defenders',
      description: 'Tower defense game set in outer space. Defend your base from alien invasions using strategic weapon placements.',
      tech: ['Unity', 'C#', 'Illustrator', 'Spine'],
      category: 'Tower Defense',
      status: 'Released',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="games" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Games</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of games spanning different genres and platforms, 
            each crafted with attention to detail and innovative gameplay mechanics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Game Preview */}
              <div className={`h-48 bg-gradient-to-br ${game.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {game.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    game.status === 'Released' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {game.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {game.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
                    <Play size={16} />
                    Play Demo
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200">
                    <Github size={16} />
                    Source
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200">
                    <ExternalLink size={16} />
                    Live
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
