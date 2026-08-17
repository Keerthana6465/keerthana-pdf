import { motion } from 'framer-motion';

const jobs = [
  {
    company: 'Bosch',
    role: 'Technical Engineer',
    period: 'March 2025 – Present',
    color: '#00bfff',
    bullets: [
      'Built scalable <strong>n8n + GitLab automation</strong> for merge tracking and hotfix back-merge compliance, including dynamic branch/project handling, MR creation, status monitoring, auto-merge, and conflict alerts.',
      'Developed a reusable <strong>Playwright automation framework</strong> for product onboarding and regression testing using Page Object Model, CSV-driven data, reusable functions, and automated reports.',
      'Automated <strong>backend/API validation and product onboarding</strong> workflows for the USP marketplace with structured customer and product data handling.',
      'Supported <strong>AWS consumption posting and FinOps operations</strong> across IN and EU, including API validation, billing reports, account analysis, and cloud cost tracking.',
      'Worked on <strong>AWS billing and invoice reconciliation</strong>, improving reporting accuracy and resolving consumption discrepancies with stakeholders.',
      'Automated <strong>Excel-based data processing and reporting</strong> using Python/Pandas, reducing repetitive manual effort and improving validation consistency.',
    ],
  },
  {
    company: 'Larsen & Toubro',
    role: 'Software Engineering Intern',
    period: 'Aug 2024 – Sep 2024',
    color: '#f97316',
    bullets: [
      'Engineered an AFDX emulator in Debian Linux using Python socket programming and supported network communication testing.',
      'Automated network communication test scenarios and prepared technical documentation for the engineering workflow.',
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id='experience'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>Experience</h2>
        <div className='timeline'>
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className='timeline-item'
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className='timeline-dot' style={{ background: job.color, boxShadow: `0 0 10px ${job.color}` }} />
              <div className='card'>
                <div className='job-header'>
                  <div>
                    <h3 className='job-company' style={{ color: job.color }}>{job.company}</h3>
                    <p className='job-role'>{job.role}</p>
                  </div>
                  <span className='job-period'>{job.period}</span>
                </div>
                <ul className='job-bullets'>
                  {job.bullets.map((b, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
