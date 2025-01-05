import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useAnimation } from 'framer-motion';


const App = () => {
  const controls = useAnimation()

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
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection controls={controls}/>
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    // <VibrantPortfolioStyled/>
  );
};

export default App;
