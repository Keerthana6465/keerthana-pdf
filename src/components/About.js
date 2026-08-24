import { motion } from 'framer-motion';

const strengths = [
  'Backend / API Engineering',
  'Workflow Automation',
  'Test Automation',
  'Problem Solving',
  'Cross-functional Collaboration'
];

const contact = [
  { label: '\uD83D\uDCE7 Email', href: 'mailto:keerthanam19092003@gmail.com' },
  {
    label: '\uD83D\uDD17 LinkedIn',
    href: 'https://linkedin.com/in/keerthana-m-2b335933a'
  },
  { label: '\uD83D\uDCDE +91 7349449878', href: 'tel:+917349449878' }
];

export default function About() {
  return (
    <motion.section
      id='about'
      className='section'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className='section-inner'>
        <h2 className='section-title'>About</h2>
        <div className='about-grid'>
          <motion.div
            className='card about-summary'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Software Engineer with{' '}
              <strong>1+ year of industry experience</strong> across backend
              engineering, workflow automation, test automation, cloud cost
              operations, and API-driven platforms. Experienced in Python, REST
              APIs, SQL, AWS, GitLab, Jira, n8n, and Playwright. Built reusable
              automation frameworks, GitLab back-merge compliance workflows,
              product-onboarding automation, and cloud billing/consumption
              processes. Strong in{' '}
              <strong>
                translating manual operational processes into scalable,
                auditable automation
              </strong>
              .
            </p>
            <div className='contact-row'>
              {contact.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className='hero-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='card'
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className='card-sub-title'>Engineering Strengths</h3>
            <div className='pills-wrap'>
              {strengths.map((s) => (
                <span key={s} className='pill'>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
