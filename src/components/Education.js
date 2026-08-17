import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section
      id='education'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Education</h2>
        <motion.div
          className='card edu-card'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <div className='edu-icon'>&#x1F393;</div>
          <div>
            <h3 className='edu-degree'>B.E. Electronics &amp; Instrumentation Engineering</h3>
            <p className='edu-uni'>JSS Science and Technology University (SJCE), Mysuru</p>
            <span className='pill'>CGPA: 8.5 / 10</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
