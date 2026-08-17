import { motion } from 'framer-motion';

const steps = [
  { label: 'QA Merge\nDetected', icon: '\uD83D\uDD0D' },
  { label: 'Determine\nTargets',  icon: '\uD83C\uDFAF' },
  { label: 'Create\nMerge Req',  icon: '\u2795' },
  { label: 'Monitor\nStatus',    icon: '\uD83D\uDCE1' },
  { label: 'Conflict\nAlerts',   icon: '\u26A0\uFE0F' },
];

export default function GitLabWorkflow() {
  return (
    <motion.section
      id='gitlab-workflow'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>GitLab Hotfix Back-Merge Workflow</h2>
        <div className='flow-steps'>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className='flow-step'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: '0 0 20px rgba(0,191,255,0.2)' }}
            >
              <div style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{step.icon}</div>
              <div style={{ whiteSpace: 'pre-line', lineHeight: 1.3, fontSize: '0.78rem' }}>{step.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
