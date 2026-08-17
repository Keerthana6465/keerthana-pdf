import React from 'react';
import OrbitalNav from './components/OrbitalNav';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GitLabWorkflow from './components/GitLabWorkflow';
import PlaywrightFramework from './components/PlaywrightFramework';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Impact from './components/Impact';
import Footer from './components/Footer';
import ResumeButton from './components/ResumeButton';
import './styles/global.css';

function App() {
  return (
    <div className='app'>
      <OrbitalNav />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <GitLabWorkflow />
      <PlaywrightFramework />
      <Education />
      <Certifications />
      <Impact />
      <Footer />
      <ResumeButton />
    </div>
  );
}

export default App;
