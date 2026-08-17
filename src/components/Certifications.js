import { motion } from 'framer-motion';

const certs = [
  { name: 'AWS DevOps Engineering',  icon: '\u2601\uFE0F', color: '#ff9900' },
  { name: 'OCI Generative AI',       icon: '\uD83E\uDD16', color: '#c74634' },
  { name: 'NPTEL DBMS',             icon: '\uD83D\uDDC4\uFE0F', color: '#00bfff' },
  { name: 'NPTEL DSA',              icon: '\uD83D\uDD22', color: '#7c3aed' },
];

export default function Certifications() {
  return (
    <motion.section
      id='certifications'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Certifications</h2>
        <div className='certs-grid'>
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className='card cert-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{ borderBottom: `3px solid ${cert.color}` }}
            >
              <span className='cert-icon'>{cert.icon}</span>
              <p className='cert-name' style={{ color: cert.color }}>{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
