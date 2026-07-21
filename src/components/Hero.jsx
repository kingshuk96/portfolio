import { motion } from 'framer-motion'

const codeLines = [
  { tokens: [
    { cls: 'text-[#C792EA]',     text: 'const' },
    { cls: 'text-teal',          text: ' developer' },
    { cls: 'text-text-muted',    text: ' = {' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'name' },
    { cls: 'text-text-muted',    text: ': ' },
    { cls: 'text-accent',        text: '"Kingshuk Sanyal"' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'role' },
    { cls: 'text-text-muted',    text: ': ' },
    { cls: 'text-accent',        text: '"Backend Developer"' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'experience' },
    { cls: 'text-text-muted',    text: ': ' },
    { cls: 'text-[#F78C6C]',     text: '5' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'stack' },
    { cls: 'text-text-muted',    text: ': [' },
  ]},
  { indent2: true, tokens: [
    { cls: 'text-accent',        text: '"Node.js"' },
    { cls: 'text-text-muted',    text: ', ' },
    { cls: 'text-accent',        text: '"TypeScript"' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent2: true, tokens: [
    { cls: 'text-accent',        text: '"AWS"' },
    { cls: 'text-text-muted',    text: ', ' },
    { cls: 'text-accent',        text: '"PostgreSQL"' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent2: true, tokens: [
    { cls: 'text-accent',        text: '"Firebase"' },
    { cls: 'text-text-muted',    text: ', ' },
    { cls: 'text-accent',        text: '"MongoDB"' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-text-muted',    text: '],' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'passion' },
    { cls: 'text-text-muted',    text: ': ' },
    { cls: 'text-accent',        text: '"systems that scale quietly"' },
    { cls: 'text-text-muted',    text: ',' },
  ]},
  { indent: true, tokens: [
    { cls: 'text-teal',          text: 'available' },
    { cls: 'text-text-muted',    text: ': ' },
    { cls: 'text-[#F78C6C]',     text: 'true' },
  ]},
  { tokens: [{ cls: 'text-text-muted', text: '};' }] },
  { tokens: [] },
  { tokens: [{ cls: 'text-text-muted italic', text: '// > node developer.ts' }] },
  { tokens: [
    { cls: 'text-text-muted italic', text: '// ready in 42ms.' },
    { cls: '',                       text: ' ' },
    { cls: 'cursor-blink',           text: '▌' },
  ]},
]

const stats = [
  { num: '5+',    label: 'years experience' },
  { num: '99.9%', label: 'uptime shipped' },
  { num: '10k+',  label: 'users served' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="max-w-[1120px] mx-auto px-6 pt-[90px] pb-[60px] relative z-[1]" id="top">
      <div className="grid [grid-template-columns:1.1fr_1fr] gap-[60px] items-center max-[880px]:grid-cols-1">

        {/* LEFT — staggered text */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Avatar */}
          <motion.div variants={itemVariants} className="mb-7 w-fit">
            <div className="relative w-[88px] h-[88px]">
              {/* Pulsing amber ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-1 rounded-full border border-[rgba(255,180,84,0.35)]"
                style={{ background: 'radial-gradient(circle, rgba(255,180,84,0.25) 0%, transparent 70%)' }}
              />
              <img
                src="/assets/kinsghuk.png"
                alt="Kingshuk Sanyal"
                className="relative z-[1] w-[88px] h-[88px] rounded-full border-2 border-accent-dim object-cover object-top block"
              />
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="font-mono text-[14px] text-teal mb-5 mt-0">
            {'// backend engineer, siliguri, india'}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-sans font-extrabold leading-none tracking-[-0.03em] mb-6 mt-0 text-text-primary text-[clamp(48px,7vw,84px)]"
          >
            Kingshuk<br />Sanyal
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[18px] mb-9 mt-0 max-w-[480px] text-text-secondary">
            I build server-side systems that don&apos;t fall over — APIs, event pipelines, and cloud infrastructure that hold up at scale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-[14px] mb-14 flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block font-mono text-[14px] px-6 py-[13px] rounded-sm font-semibold bg-accent text-[#14100A]"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block font-mono text-[14px] px-6 py-[13px] rounded-sm border border-border-hard text-text-primary hover:border-accent-dim hover:bg-bg-panel transition-colors duration-150"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={containerVariants} className="flex gap-10 max-[720px]:gap-6 max-[720px]:flex-wrap">
            {stats.map(({ num, label }) => (
              <motion.div key={label} variants={itemVariants} className="flex flex-col">
                <span className="font-mono text-[26px] font-bold text-accent">{num}</span>
                <span className="text-[12.5px] mt-[2px] text-text-muted">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — code window */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-[880px]:-order-1"
          aria-hidden="true"
        >
          <div
            className="rounded-md overflow-hidden border border-border-hard bg-bg-panel"
            style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,180,84,0.03)' }}
          >
            {/* Titlebar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border-soft bg-bg-panel-raised">
              <div className="flex gap-[6px]">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              </div>
              <span className="font-mono text-[12.5px] ml-1 text-text-muted">developer.ts</span>
            </div>

            {/* Code lines */}
            <motion.pre
              className="m-0 px-5 py-[22px] overflow-x-auto font-mono text-[13.5px] leading-[1.85]"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.7 } } }}
            >
              <code>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    className={line.indent2 ? 'pl-12' : line.indent ? 'pl-6' : ''}
                    variants={{
                      hidden:  { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
                    }}
                  >
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.cls}>{tok.text}</span>
                    ))}
                  </motion.div>
                ))}
              </code>
            </motion.pre>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-[70px]" aria-hidden="true">
        <span className="scroll-hint-line" />
      </div>
    </section>
  )
}
