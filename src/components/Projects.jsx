import { motion } from 'framer-motion'
import { SectionTag, StaggerContainer, StaggerItem } from './ui/animations'

const projects = [
  {
    name: 'Bloc Ad-Manager',
    status: 'in testing',
    desc: "A real-time bidding and campaign management platform built with Node.js, TypeScript, and PostgreSQL, with Stripe-powered billing. Contributed to core campaign and bidding features currently in testing, targeting a 40% lift in campaign efficiency and a 50% cut in advertiser setup time.",
    metrics: [
      { val: '+40%', label: 'campaign efficiency' },
      { val: '−50%', label: 'setup time' },
    ],
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Sequelize ORM', 'Stripe'],
  },
  {
    name: 'Zonely',
    status: 'live',
    desc: "A real-time chat and calling platform powered by Node.js, Fastify, MongoDB, and Firebase. Played a key role in building and scaling the platform from the ground up, driving event-driven architecture improvements that cut latency by 35% while supporting 500+ concurrent users at 99.9% uptime — surpassing 10,000+ downloads.",
    metrics: [
      { val: '10k+',  label: 'downloads' },
      { val: '500+',  label: 'concurrent users' },
      { val: '99.9%', label: 'uptime' },
      { val: '−35%',  label: 'latency' },
    ],
    tech: ['Node.js', 'Fastify', 'PostgreSQL', 'Firebase', 'Prisma', 'MongoDB', 'Cashfree'],
  },
  {
    name: 'Ariso',
    status: 'live',
    desc: "A serverless Google Workspace integration spanning Gmail, Calendar, and Drive, built on AWS Lambda, API Gateway, and PostgreSQL. Engineered the pipeline to reliably ingest 5,000+ daily events, integrating AWS SQS for asynchronous processing that guarantees 100% data accuracy across 500+ enterprise users.",
    metrics: [
      { val: '5,000+', label: 'daily events' },
      { val: '100%',   label: 'data accuracy' },
      { val: '500+',   label: 'enterprise users' },
    ],
    tech: ['AWS Lambda', 'API Gateway', 'S3', 'Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'AWS SQS'],
  },
  {
    name: 'Creoate',
    status: 'live',
    desc: "A B2B e-commerce platform combining WooCommerce with a Node.js/AWS Lambda backend and MySQL. Built features for order customization and shipping automation that streamlined the ordering pipeline, boosting customer engagement by 30% and order completion by 20%, while automating away 70% of manual shipping work.",
    metrics: [
      { val: '+30%', label: 'engagement' },
      { val: '+20%', label: 'order completion' },
      { val: '−70%', label: 'manual shipping' },
    ],
    tech: ['WooCommerce', 'Node.js', 'AWS Lambda', 'MySQL'],
  },
]

function TechPill({ label }) {
  return (
    <span className="font-mono text-[11.5px] px-[10px] py-1 rounded-full border border-border-hard bg-bg-panel-raised text-text-secondary">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section
      className="max-w-[1120px] mx-auto px-6 py-[110px] border-b border-border-soft"
      id="projects"
    >
      <SectionTag>{'// projects'}</SectionTag>

      <StaggerContainer className="grid grid-cols-2 gap-5 max-[880px]:grid-cols-1" stagger={0.12}>
        {projects.map((proj) => (
          <StaggerItem key={proj.name}>
            <motion.article
              whileHover={{
                y: -5,
                boxShadow: '0 20px 60px -12px rgba(255, 180, 84, 0.12)',
                borderColor: 'var(--color-accent-dim)',
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-md px-[26px] pt-[26px] pb-6 border border-border-soft bg-bg-panel h-full"
            >
              {/* Head */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="m-0 text-[19px] font-bold">{proj.name}</h3>
                <span className="font-mono text-[11px] px-[10px] py-[3px] rounded-full border border-border-hard text-teal whitespace-nowrap">
                  {proj.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-[14.5px] mb-[18px] mt-0 text-text-secondary">{proj.desc}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-x-[18px] gap-y-2 mb-[18px]">
                {proj.metrics.map(({ val, label }) => (
                  <span key={label} className="text-[13px] text-text-muted">
                    <strong className="font-mono font-bold text-accent">{val}</strong>{' '}{label}
                  </span>
                ))}
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => <TechPill key={t} label={t} />)}
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
