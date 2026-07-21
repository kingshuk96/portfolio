import { SectionTag, StaggerContainer, StaggerItem } from './ui/animations'

export default function About() {
  return (
    <section
      className="max-w-[1120px] mx-auto px-6 py-[110px] border-b border-border-soft"
      id="about"
    >
      <SectionTag>{'// about'}</SectionTag>

      <StaggerContainer
        className="grid grid-cols-2 gap-10 max-[880px]:grid-cols-1"
        stagger={0.15}
        delayStart={0.1}
      >
        <StaggerItem>
          <p className="text-[17px] m-0 text-text-secondary">
            I&apos;m a senior backend developer with 5+ years building and maintaining scalable, reliable server-side
            applications using Node.js, TypeScript, and AWS. I work across the full backend lifecycle — designing
            RESTful and event-driven APIs, deploying cloud infrastructure, and writing automated tests that keep
            deployments boring in the best way.
          </p>
        </StaggerItem>
        <StaggerItem>
          <p className="text-[17px] m-0 text-text-secondary">
            I&apos;ve spent most of that time inside cross-functional teams shipping real-time systems, third-party
            integrations, and e-commerce platforms — with a strong foundation in PostgreSQL, MongoDB, MySQL,
            CI/CD, and Agile delivery. I&apos;m looking to bring that experience to a product team and keep growing as
            an engineer.
          </p>
        </StaggerItem>
      </StaggerContainer>
    </section>
  )
}
