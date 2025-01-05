import { motion } from 'framer-motion'

import React from 'react'
import experienceData from '../data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold mb-8 text-center">Experience</h2>
    <div className="space-y-8">
      {experienceData.map((job, index) => (
        <motion.div 
          key={job.company}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold">{job.role}</h3>
          <p className="text-sm text-emerald-300 mt-1">{job.company}</p>
          <p className="text-sm text-gray-400 mt-2 font-light">{job.period}</p>
        </motion.div>
      ))}
    </div>
    </section>
  )
}


