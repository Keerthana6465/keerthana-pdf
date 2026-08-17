import { motion } from 'framer-motion';

const projects = [
  {
    title: 'GitLab Hotfix Back-Merge Automation',
    desc: 'End-to-end compliance workflow: detects merges to QA/Stage, determines back-merge targets dynamically, creates follow-up MRs, monitors merge status, and routes unresolved conflicts for notification.',
    tech: ['GitLab', 'n8n', 'REST APIs', 'Webhooks'],
    color: '#fc6d26',
  },
  {
    title: 'Playwright Product Onboarding Automation',
    desc: 'Reusable automation for Product Description, Details, Media & Docs, Pricing Plans, and Additional Details. Supports multiple product categories with data-driven execution and failure reporting.',
    tech: ['Python', 'Playwright', 'CSV', 'Page Object Model'],
    color: '#00bfff',
  },
  {
    title: 'Jira Workflow Automation',
    desc: 'Automated story validation, subtask processing, workflow transitions, and PI-related updates to reduce repetitive Jira operations and improve process consistency.',
    tech: ['n8n', 'Jira APIs', 'REST APIs'],
    color: '#0052cc',
  },
  {
    title: 'Cloud Consumption & FinOps Automation',
    desc: 'Automated consumption-data processing, customer/account analysis, billing reporting, and validation workflows for IN and EU regions, supporting cloud cost visibility and reconciliation.',
    tech: ['Python', 'Pandas', 'AWS', 'Excel', 'APIs'],
    color: '#ff9900',
  },
  {
    title: 'Vehicle Audit / OCR Automation',
    desc: 'Automated retrieval of vehicle and OCR image links into audit sheets. Defined an AI-assisted validation flow for number-plate, vehicle-visibility, and FASTag checks.',
    tech: ['Python', 'Excel', 'OCR', 'Automation'],
    color: '#10b981',
  },
  {
    title: 'Dysphonic Speech Enhancement',
    desc: 'Neural-network models (ANN/CNN/DNN) for dysphonic speech analysis. Achieved 97% prediction accuracy in project evaluation.',
    tech: ['Python', 'ANN/CNN/DNN', 'Deep Learning'],
    color: '#7c3aed',
  },
];

export default function Projects() {
  return (
    <motion.section
      id='projects'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Projects</h2>
        <div className='projects-grid'>
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className='card'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{ borderTop: `3px solid ${project.color}` }}
            >
              <h3 className='project-title' style={{ color: project.color }}>{project.title}</h3>
              <p className='project-desc'>{project.desc}</p>
              <div className='pills-wrap'>
                {project.tech.map(t => (
                  <span
                    key={t}
                    className='pill'
                    style={{
                      borderColor: `${project.color}44`,
                      color: project.color,
                      background: `${project.color}11`,
                    }}
                  >
                    {t}
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
