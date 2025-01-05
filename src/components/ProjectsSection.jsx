import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Projects</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Backend', 'Frontend', 'Full Stack'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab ? 'bg-emerald-300' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700"
          >
            <h3>{project.name}</h3>
            <p>{project.category}</p>
            <p>{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
