import React from 'react';
import { motion } from 'framer-motion';
import '../styles/orbital.css';

const sections = [
  { label: 'ABOUT', id: 'about', emoji: '\uD83D\uDC69\u200D\uD83D\uDCBB' },
  { label: 'EXPERIENCE', id: 'experience', emoji: '\uD83D\uDCBC' },
  { label: 'TECH STACK', id: 'tech-stack', emoji: '\u2699\uFE0F' },
  { label: 'PROJECTS', id: 'projects', emoji: '\uD83D\uDE80' },
  { label: 'EDUCATION', id: 'education', emoji: '\uD83C\uDF93' },
  { label: 'CERTIFICATIONS', id: 'certifications', emoji: '\uD83C\uDFC5' },
  { label: 'IMPACT', id: 'impact', emoji: '\u2728' }
];

export default function OrbitalNav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='orbital-hero'>
      {/* Decorative static rings */}
      <div className='deco-ring deco-ring-1' />
      <div className='deco-ring deco-ring-2' />
      <div className='deco-ring deco-ring-3' />

      {/* Center hero */}
      <div className='hero-center'>
        <div className='hero-photo-wrap'>
          <img src='/resume.photo.jpeg' alt='Keerthana M' />
        </div>
        <h1 className='hero-name'>Keerthana M</h1>
        <p className='hero-role'>Software Engineer</p>
        <p className='hero-domain'>
          Backend &bull; Automation &bull; Cloud &bull; n8n
        </p>
        <p className='hero-location'>&#128205; Bangalore, Karnataka</p>
        <div className='hero-links'>
          <a href='mailto:keerthanam19092003@gmail.com' className='hero-link'>
            &#128231; Email
          </a>
          <a
            href='https://linkedin.com/in/keerthana-m-2b335933a'
            target='_blank'
            rel='noopener noreferrer'
            className='hero-link'
          >
            &#128279; LinkedIn
          </a>
          <a href='tel:+917349449878' className='hero-link'>
            &#128222; +91 7349449878
          </a>
        </div>
      </div>

      {/* Orbital nodes */}
      <div className='orbital-ring'>
        {sections.map((section, i) => (
          <div key={section.id} className={`orbit-node orbit-node-${i + 1}`}>
            <motion.button
              className='node-btn'
              whileHover={{ scale: 1.15 }}
              onClick={() => scrollTo(section.id)}
            >
              <span className='node-emoji'>{section.emoji}</span>
              <span className='node-label'>{section.label}</span>
            </motion.button>
          </div>
        ))}
      </div>

      <motion.div
        className='scroll-hint'
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        &#8595; Scroll to explore
      </motion.div>
    </section>
  );
}
