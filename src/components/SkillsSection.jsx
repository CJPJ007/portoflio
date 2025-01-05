import React from 'react'
import { motion } from 'framer-motion'
import skillsData from '../data/skills'

const SkillsSection = ({ controls }) => {
  return (
    <section id="skills" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="bg-gray-800 shadow-lg rounded-lg p-4 flex items-center space-x-2"
          >
            <skill.icon className="w-6 h-6 text-emerald-300" />
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
