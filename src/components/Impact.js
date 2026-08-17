import { motion } from 'framer-motion';

const stats = [
  { value: '1+',  label: 'Year Experience', icon: '\uD83D\uDCC5', color: '#00bfff' },
  { value: '6',   label: 'Projects Built',  icon: '\uD83D\uDE80', color: '#7c3aed' },
  { value: '97%', label: 'ML Accuracy',     icon: '\uD83C\uDFAF', color: '#f97316' },
  { value: '2',   label: 'Companies',       icon: '\uD83C\uDFE2', color: '#10b981' },
];

const achievements = [
  'Reduced manual effort with reusable Playwright automation frameworks, freeing up team capacity.',
  'Improved AWS billing reporting accuracy and resolved consumption discrepancies across IN and EU.',
  'Delivered scalable n8n + GitLab compliance workflows with dynamic conflict handling and auto-merge.',
  'Automated Excel-based data processing pipelines, eliminating repetitive operational tasks.',
  'Supported multi-region FinOps operations including API validation and cloud cost tracking.',
];

export default function Impact() {
  return (
    <motion.section
      id='impact'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Impact</h2>

        <div className='stats-grid'>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className='card stat-card'
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{ borderTop: `3px solid ${stat.color}` }}
            >
              <span className='stat-icon'>{stat.icon}</span>
              <span className='stat-value' style={{ color: stat.color }}>{stat.value}</span>
              <span className='stat-label'>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='card'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className='card-sub-title'>Key Achievements</h3>
          <ul className='achievements-list'>
            {achievements.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {a}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
