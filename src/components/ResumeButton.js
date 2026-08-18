import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PDF_URL = 'https://keerthana-pdf.vercel.app/keerthana-resume.pdf';
const VIEWER_URL = `https://docs.google.com/viewer?url=${encodeURIComponent(PDF_URL)}&embedded=true`;


  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
        className='resume-fab'
        title='View Resume'
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className='resume-fab-icon'>📄</span>
        <span className='resume-fab-label'>Resume</span>
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className='resume-modal-overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className='resume-modal'
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='resume-modal-header'>
                <span className='resume-modal-title'>📄 Keerthana M — Resume</span>
                <div className='resume-modal-actions'>
                  <a
                    href='/keerthana-resume.pdf'
                    download='Keerthana_M_Resume.pdf'
                    className='resume-modal-download'
                  >
                    ⬇ Download
                  </a>
                  <button className='resume-modal-close' onClick={() => setOpen(false)}>✕</button>
                </div>
              </div>
              <iframe
                src={VIEWER_URL}
                title='Keerthana Resume'
                className='resume-modal-iframe'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

