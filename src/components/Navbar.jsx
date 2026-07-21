import { useState, useEffect } from 'react'

const navItems = [
  { label: 'about',      flag: '--about',      href: '#about' },
  { label: 'skills',     flag: '--skills',     href: '#skills' },
  { label: 'projects',   flag: '--projects',   href: '#projects' },
  { label: 'experience', flag: '--experience', href: '#experience' },
  { label: 'contact',    flag: '--contact',    href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-[100] border-b border-border-soft bg-[rgba(10,14,18,0.85)] backdrop-blur-[10px]">
      <div className="max-w-[1120px] flex items-center gap-5 mx-auto px-6 py-[14px]">

        {/* Window dots */}
        <div className="flex gap-[6px] shrink-0" aria-hidden="true">
          <span className="w-[10px] h-[10px] rounded-full opacity-85 bg-[#FF5F57]" />
          <span className="w-[10px] h-[10px] rounded-full opacity-85 bg-[#FEBC2E]" />
          <span className="w-[10px] h-[10px] rounded-full opacity-85 bg-[#28C840]" />
        </div>

        {/* Prompt path */}
        <span className="font-mono text-[13px] text-text-secondary whitespace-nowrap hidden sm:block">
          kingshuk@portfolio
          <span className="text-accent">:~$</span>
        </span>

        {/* Desktop / mobile nav */}
        <nav
          id="navlinks"
          className={[
            'ml-auto flex items-center gap-6 font-mono text-[13px]',
            'max-[720px]:fixed max-[720px]:top-[57px] max-[720px]:left-0 max-[720px]:right-0',
            'max-[720px]:flex-col max-[720px]:items-start max-[720px]:px-6 max-[720px]:py-5 max-[720px]:gap-[18px]',
            'max-[720px]:border-b max-[720px]:border-border-soft max-[720px]:bg-bg-base',
            'max-[720px]:transition-transform max-[720px]:duration-[250ms]',
            menuOpen ? 'max-[720px]:translate-y-0' : 'max-[720px]:-translate-y-[140%]',
          ].join(' ')}
        >
          {navItems.map(({ label, flag, href }) => (
            <a
              key={label}
              href={href}
              data-flag={flag}
              onClick={closeMenu}
              className="nav-flag text-text-secondary transition-colors duration-150 hover:text-text-primary"
            >
              {label}
            </a>
          ))}

          {/* Resume */}
          <a
            href="/assets/Kingshuk_Sanyal_Resume.pdf"
            download
            className="font-mono text-[13px] text-accent border border-border-hard px-3 py-[6px] rounded-sm transition-all duration-150 hover:bg-accent-soft hover:border-accent-dim"
          >
            ./resume.pdf
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          id="menuToggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex-col gap-1 ml-auto p-2 cursor-pointer bg-transparent border-0 flex min-[721px]:hidden"
        >
          <span className="w-5 h-[2px] block bg-text-primary" />
          <span className="w-5 h-[2px] block bg-text-primary" />
          <span className="w-5 h-[2px] block bg-text-primary" />
        </button>
      </div>
    </header>
  )
}
