import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { 
  GithubIcon, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Coffee,
  Server,
  Database,
  Cloud,
  Cpu,
  Code,
  PenTool,
  Box,
} from 'lucide-react'

const CustomLogo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="20" fill="#6EE7B7"/>
    <path d="M12 20L20 12L28 20L20 28L12 20Z" stroke="#1F2937" strokeWidth="2"/>
    <path d="M20 12V28" stroke="#1F2937" strokeWidth="2"/>
    <path d="M12 20H28" stroke="#1F2937" strokeWidth="2"/>
  </svg>
)

export default function VibrantPortfolioStyled() {
  const [activeTab, setActiveTab] = useState('All')
  const controls = useAnimation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const skillsSection = document.getElementById('skills')
      if (skillsSection && scrollY > skillsSection.offsetTop - window.innerHeight / 2) {
        controls.start(i => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1 }
        }))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  const projects = [
    { name: 'E-commerce Backend', category: 'Backend', tech: 'Java, Spring Boot, MySQL' },
    { name: 'Task Management API', category: 'Backend', tech: 'Java, Quarkus, PostgreSQL' },
    { name: 'Weather Dashboard', category: 'Frontend', tech: 'React, Tailwind CSS, OpenWeather API' },
    { name: 'Microservices Demo', category: 'Backend', tech: 'Java, Spring Cloud, Docker' },
    { name: 'Personal Blog', category: 'Full Stack', tech: 'Java, Spring Boot, React, MongoDB' },
    { name: 'Portfolio Website', category: 'Frontend', tech: 'React, Tailwind CSS' },
  ]

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  const skills = [
    { name: 'Java', icon: Coffee },
    { name: 'Spring Boot', icon: Server },
    { name: 'Quarkus', icon: Cpu },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'Docker', icon: Box },
    { name: 'Kubernetes', icon: Cloud },
    { name: 'React', icon: Code },
    { name: 'Tailwind CSS', icon: PenTool },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMTUiLz48L3N2Zz4=')]
                    animate-[move_8s_linear_infinite] opacity-30"></div>
      </div>

      {/* Header */}
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">John Doe</span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-12 w-12 relative"
                >
                  <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-emerald-300"></div>
                  <div className="relative flex items-center justify-center h-12 w-12 rounded-full">
                    <CustomLogo />
                  </div>
                </motion.div>
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-emerald-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-gray-200 hover:text-emerald-300 transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <motion.a
                href="#contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-emerald-300 hover:bg-emerald-400"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                Hire Me
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:bg-emerald-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="about" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-base font-semibold text-emerald-300 tracking-wide uppercase">Welcome to my portfolio</h2>
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-blue-500">
              Java Backend Developer
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300 font-light">
              With a passion for building robust backend systems and a keen interest in frontend technologies.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="bg-gray-800 shadow-lg rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <skill.icon className="w-6 h-6 text-emerald-300" />
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Projects</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {['All', 'Backend', 'Frontend', 'Full Stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 text-sm ${
                  activeTab === tab
                    ? 'bg-emerald-300 text-gray-900 font-semibold'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-emerald-300 mb-4">{project.category}</p>
                <p className="text-sm font-light">{project.tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {[
              { role: 'Senior Backend Developer', company: 'Tech Innovators Inc.', period: '2020 - Present' },
              { role: 'Backend Developer', company: 'DataSys Solutions', period: '2017 - 2020' },
              { role: 'Junior Java Developer', company: 'StartUp Nexus', period: '2015 - 2017' },
            ].map((job, index) => (
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

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center">Contact</h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <p className="text-lg mb-4 font-light text-center">
              I am always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:john.doe@example.com" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-300 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400 font-light">
            © 2023 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}