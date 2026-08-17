import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        <motion.h2
          className='footer-cta'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Have a problem worth automating?
        </motion.h2>
        <p className='footer-sub'>Let&apos;s build something scalable together.</p>
        <div className='footer-links'>
          <a href='mailto:keerthanam19092003@gmail.com' className='footer-btn'>
            &#128231; keerthanam19092003@gmail.com
          </a>
          <a
            href='https://linkedin.com/in/keerthana-m-2b335933a'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-btn'
          >
            &#128279; linkedin.com/in/keerthana-m-2b335933a
          </a>
          <a href='tel:+917349449878' className='footer-btn'>
            &#128222; +91 7349449878
          </a>
        </div>
        <p className='footer-copy'>&copy; 2025 Keerthana M &middot; Bangalore, Karnataka</p>
      </div>
    </footer>
  );
}
