import { motion } from 'framer-motion'
import { SectionTag, StaggerContainer, StaggerItem } from './ui/animations'

const skillGroups = [
  { cat: 'languages',           pills: ['Node.js', 'TypeScript', 'JavaScript (ES6+)', 'PHP', 'jQuery'] },
  { cat: 'frameworks',          pills: ['Fastify', 'Express.js', 'NestJS', 'Serverless Framework'] },
  { cat: 'databases',           pills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase Firestore'] },
  { cat: 'cloud & devops',      pills: ['AWS Lambda', 'API Gateway', 'S3 / EC2', 'CloudWatch', 'Firebase', 'Docker', 'CI/CD', 'Digital Ocean'] },
  { cat: 'architecture',        pills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Event-Driven', 'Real-Time Systems'] },
  { cat: 'testing & tools',     pills: ['Jest', 'Swagger', 'Postman', 'Prisma', 'Sequelize', 'Git'] },
  { cat: 'ai coding assistants',pills: ['GitHub Copilot', 'Cursor', 'Claude'], accent: true },
  { cat: 'cms & delivery',      pills: ['WordPress', 'WooCommerce', 'Jira', 'Confluence', 'Agile/Scrum'] },
]

function Pill({ label, accent }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={[
        'font-mono text-[12.5px] px-3 py-[6px] rounded-full border cursor-default',
        accent
          ? 'text-accent border-accent-dim bg-accent-soft'
          : 'text-text-secondary border-border-hard bg-bg-panel-raised',
      ].join(' ')}
    >
      {label}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section
      className="max-w-[1120px] mx-auto px-6 py-[110px] border-b border-border-soft"
      id="skills"
    >
      <SectionTag>{'// skills'}</SectionTag>

      <StaggerContainer
        className="grid grid-cols-2 gap-[18px] max-[880px]:grid-cols-1"
        stagger={0.08}
      >
        {skillGroups.map(({ cat, pills, accent }) => (
          <StaggerItem key={cat} slideFrom="scale">
            <motion.div
              whileHover={{ borderColor: 'var(--color-accent-dim)', y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-md px-6 py-[22px] border border-border-soft bg-bg-panel h-full"
            >
              <h3 className="font-mono text-[13px] font-medium lowercase tracking-[0.03em] mb-[14px] mt-0 text-text-muted">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {pills.map((p) => <Pill key={p} label={p} accent={accent} />)}
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
