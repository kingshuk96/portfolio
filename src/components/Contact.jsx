import { motion } from 'framer-motion'
import { SectionTag, StaggerContainer, StaggerItem } from './ui/animations'

const contacts = [
  { label: 'email',    value: 'sanyalkingshuk96@gmail.com', href: 'mailto:sanyalkingshuk96@gmail.com' },
  { label: 'phone',    value: '+91-8001141977',              href: 'tel:+918001141977' },
  { label: 'linkedin', value: '/in/kingshuk-sanyal',         href: 'https://linkedin.com/in/kingshuk-sanyal', external: true },
  { label: 'github',   value: '/kingshuk96',                 href: 'https://github.com/kingshuk96',           external: true },
]

export default function Contact() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 py-[110px] text-center" id="contact">
      <SectionTag>{'// contact'}</SectionTag>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-extrabold tracking-[-0.02em] mb-4 mt-0 text-[clamp(30px,4.5vw,46px)]"
      >
        Let&apos;s build something<br />that doesn&apos;t break.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="text-[16px] m-0 mx-auto mb-12 text-text-secondary"
      >
        Open to backend and full-stack roles. Reach out below.
      </motion.p>

      <StaggerContainer
        className="grid grid-cols-4 gap-4 max-[880px]:grid-cols-2"
        stagger={0.1}
        delayStart={0.15}
      >
        {contacts.map(({ label, value, href, external }) => (
          <StaggerItem key={label} slideFrom="scale">
            <motion.a
              href={href}
              whileHover={{
                y: -5,
                borderColor: 'var(--color-accent-dim)',
                boxShadow: '0 12px 40px -8px rgba(255, 180, 84, 0.15)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="rounded-md px-[18px] py-[22px] flex flex-col gap-2 items-center border border-border-soft bg-bg-panel"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="font-mono text-[12px] text-accent-dim">{label}</span>
              <span className="text-[13.5px] break-words text-text-primary">{value}</span>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
