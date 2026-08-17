import { motion } from 'framer-motion';

export default function ResumeButton() {
  return (
    <motion.a
      href='/keerthana-resume.pdf'
      download='Keerthana_M_Resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='resume-fab'
      title='Download Resume PDF'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className='resume-fab-icon'>📄</span>
      <span className='resume-fab-label'>Resume</span>
    </motion.a>
  );
}
