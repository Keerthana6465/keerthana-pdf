import { motion } from 'framer-motion';

const blocks = [
  { label: 'Product\nDescription', icon: '\uD83D\uDCDD' },
  { label: 'Product\nDetails',     icon: '\u2139\uFE0F' },
  { label: 'Media &\nDocuments',   icon: '\uD83D\uDCCE' },
  { label: 'Pricing\nPlans',       icon: '\uD83D\uDCB0' },
  { label: 'Additional\nDetails',  icon: '\u2795' },
];

export default function PlaywrightFramework() {
  return (
    <motion.section
      id='playwright-framework'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Playwright Onboarding Framework</h2>
        <div className='pw-grid'>
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              className='pw-block'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{block.icon}</div>
              <div style={{ whiteSpace: 'pre-line', lineHeight: 1.3, fontSize: '0.8rem' }}>{block.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
