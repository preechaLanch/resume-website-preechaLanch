import React, {useState , useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App () {
  const [activeSection, setActiveSection]= useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
    useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <ThemeProvider>
      <div className='min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300'>
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About/>
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  )
}
export default App;