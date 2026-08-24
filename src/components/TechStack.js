import { motion } from 'framer-motion';

const categories = [
  { label: 'Languages', color: '#00bfff', items: ['Python', 'C', 'SQL'] },
  {
    label: 'Backend & APIs',
    color: '#7c3aed',
    items: ['Spring Boot', 'REST APIs', 'Postman', 'API Validation', 'Maven']
  },
  {
    label: 'Automation',
    color: '#f97316',
    items: [
      'n8n',
      'Playwright',
      'Pandas',
      'CSV/Excel Automation',
      'Page Object Model'
    ]
  },
  {
    label: 'Cloud & DevOps',
    color: '#10b981',
    items: ['AWS', 'Git', 'GitLab', 'CI/CD', 'Linux', 'Cloud Cost Optimization']
  },
  {
    label: 'Platforms & Tools',
    color: '#f59e0b',
    items: ['Jira', 'VS Code', 'MySQL', 'DBMS', 'Networking']
  },
  {
    label: 'Data & Reporting',
    color: '#ec4899',
    items: [
      'Pandas',
      'Excel Automation',
      'Consumption Reporting',
      'Billing Reconciliation',
      'Dashboards'
    ]
  }
];

export default function TechStack() {
  return (
    <motion.section
      id='tech-stack'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Tech Stack</h2>
        <div className='tech-grid'>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className='card'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{ borderLeft: `3px solid ${cat.color}` }}
            >
              <h4 className='tech-cat-title' style={{ color: cat.color }}>
                {cat.label}
              </h4>
              <div className='pills-wrap'>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className='pill'
                    style={{
                      borderColor: `${cat.color}44`,
                      color: cat.color,
                      background: `${cat.color}11`
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
