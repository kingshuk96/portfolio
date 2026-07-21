import { motion } from 'framer-motion'
import { SectionTag, FadeUp } from './ui/animations'

const jobs = [
  {
    title: 'Senior Backend Developer',
    date: 'Jan 2021 — Present',
    company: 'Appycodes · Siliguri, West Bengal, India',
    bullets: [
      'Collaborated with a team of 5 engineers across concurrent enterprise projects, working directly with clients on well-scoped, on-time delivery.',
      'Built core features across Bloc Ad-Manager, Zonely, Ariso, and Creoate — spanning real-time bidding, chat infrastructure, Workspace integrations, and e-commerce automation.',
      'Set up CI/CD pipelines, documented APIs with Swagger, and wrote Jest-based test suites to reduce regressions across projects.',
    ],
  },
  {
    title: 'Backend Developer',
    date: 'Nov 2020 — Jan 2021',
    company: 'Technogleam · Siliguri, West Bengal, India',
    bullets: [
      'Built RESTful server-side APIs using Node.js, Express.js, and Sequelize ORM.',
      'Aligned with frontend developers on API contracts for consistent cross-service integration.',
    ],
  },
  {
    title: 'Freelance Backend Developer',
    date: 'Dec 2019 — Oct 2020',
    company: 'Independent / Self-directed · India',
    bullets: [
      'Took on freelance backend projects, deepening practical skills in Node.js, PostgreSQL, and AWS through client and personal work.',
    ],
  },
  {
    title: 'Software Trainee Engineer',
    date: 'Feb 2019 — Nov 2019',
    company: 'Carvewing Solution (formerly SHRI GOWRI SOLUTIONS) · Bangalore, India',
    bullets: [
      'Built an automated error detection and notification system, alerting engineers on crashes and auto-creating Jira tickets.',
      'Gained full-SDLC experience including debugging and version control under senior engineer guidance.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      className="max-w-[1120px] mx-auto px-6 py-[110px] border-b border-border-soft"
      id="experience"
    >
      <SectionTag>{'// experience'}</SectionTag>

      {/* Timeline */}
      <div className="relative timeline-line pl-0">
        {jobs.map((job, idx) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-7"
            style={{ paddingBottom: idx === jobs.length - 1 ? 0 : '44px' }}
          >
            {/* Marker */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.12 + 0.2, type: 'spring', stiffness: 300 }}
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-[1] font-mono text-[14px] font-bold border border-accent-dim bg-bg-panel text-accent"
            >
              $
            </motion.div>

            {/* Content */}
            <div className="flex-1 pt-[3px]">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                <h3 className="m-0 text-[19px] font-bold">{job.title}</h3>
                <span className="font-mono text-[12.5px] text-text-muted">{job.date}</span>
              </div>
              <p className="text-[14px] mb-[14px] mt-0 text-teal">{job.company}</p>
              <ul className="flex flex-col gap-2">
                {job.bullets.map((b) => (
                  <li key={b} className="text-[14.5px] pl-[18px] relative text-text-secondary">
                    <span className="absolute left-0 text-accent-dim">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <FadeUp delay={0.2} className="mt-[60px]">
        <p className="font-mono text-[14px] mb-4 mt-0 tracking-[0.02em] text-accent">
          {'// education'}
        </p>
        <motion.div
          whileHover={{ borderColor: 'var(--color-accent-dim)' }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-x-4 gap-y-[6px] items-baseline px-5 py-4 rounded-md border border-border-soft bg-bg-panel"
        >
          <span className="font-semibold">B.Tech, Computer Science &amp; Engineering</span>
          <span className="text-[14px] text-text-secondary">
            Adamas Institute of Technology, MAKAUT
          </span>
          <span className="ml-auto font-mono text-[13px] text-text-muted">2018</span>
        </motion.div>
      </FadeUp>
    </section>
  )
}
