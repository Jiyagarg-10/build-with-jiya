const projects = [
  {
    name: 'LUMEN AESTHETICS',
    desc: 'Medical aesthetics clinic with scroll-triggered animations, bento grid layout, and an editorial premium feel built entirely in vanilla HTML/CSS/JS.',
    tech: 'HTML · CSS · JS',
    type: 'Medical / Beauty',
    live: 'https://jiyagarg-10.github.io/lumen-aesthetics/',
    code: 'https://github.com/Jiyagarg-10/lumen-aesthetics',
  },
  {
    name: "JOE'S CAFE",
    desc: 'Interactive café ordering site with drag-and-drop salad builder, animated cart, and smooth Framer Motion page transitions.',
    tech: 'React · Framer Motion',
    type: 'Food & Beverage',
    live: 'https://jiyagarg-10.github.io/joes-cafe/',
    code: 'https://github.com/Jiyagarg-10/joes-cafe',
  },
  {
    name: 'GALAXY SHOES',
    desc: 'Futuristic sneaker e-commerce with scroll-driven GSAP scenes, animated SVG star fields, and a full product browsing experience.',
    tech: 'GSAP · SVG · JS',
    type: 'E-commerce',
    live: 'https://jiyagarg-10.github.io/galaxy-shoes/',
    code: 'https://github.com/Jiyagarg-10/galaxy-shoes',
  },
  {
    name: 'LÊ PHIN',
    desc: 'Vietnamese coffee shop client mockup for an East Village NYC café. Warm earthy tones, full menu page, embedded map, and ordering flow — built with Durable AI.',
    tech: 'Durable AI · HTML · CSS',
    type: 'Food & Beverage',
    live: null,
    code: null,
  },
]

function Marquee({ name, reverse }: { name: string; reverse: boolean }) {
  const chunk = `${name} ✦ `
  const repeated = Array(10).fill(chunk).join('')
  return (
    <div className="project-marquee">
      <div className={`marquee-track${reverse ? ' rev' : ''}`}>
        <span>{repeated}</span>
        <span aria-hidden="true">{repeated}</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-left">
          <span className="nav-initials">JG</span>
          <span className="nav-brand">Build with Jiya</span>
        </div>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <p className="hero-eyebrow">Web designer · AI tools · London ✦ Available for projects</p>
        <h1 className="hero-name">JIYA</h1>
        <p className="hero-subtitle">…and I build websites, with a flair for making things convert.</p>
        <p className="hero-body">
          Self-taught designer based in London, studying at the University of Greenwich. I specialise in clean, fast, conversion-focused websites — primarily for beauty businesses and independent brands, but I&apos;m always up for an interesting brief.
        </p>
        <p className="hero-body">
          I use a mix of hand-coded HTML/CSS/JS, React, GSAP, and AI-assisted tools like Lovable, Bolt.new, and Durable to get quality sites live fast. Usually 3–5 days from kick-off to launch.
        </p>
        <div className="hero-pills">
          {['Greenwich University', 'London', '3–5 day delivery', 'AI-powered builds'].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="sym-divider" aria-hidden="true">✦ ✳ ✦ ✳ ✦ ✳ ✦ ✳ ✦</div>

      {/* ── PROJECTS ── */}
      <section className="projects" id="projects">
        {projects.map((p, i) => (
          <article key={p.name} className="project-card">
            <Marquee name={p.name} reverse={i % 2 !== 0} />
            <div className="project-body">
              <div className="project-left">
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">{p.tech}</div>
              </div>
              <div className="project-right">
                <span className="project-type">{p.type}</span>
                <div className="project-links">
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-live">Live ↗</a>
                  ) : (
                    <span className="btn-none">Soon</span>
                  )}
                  {p.code ? (
                    <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-code">Code</a>
                  ) : (
                    <span className="btn-none">—</span>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="about-grid">
          <div className="about-left">
            <div>
              <span className="stat-number">3–5</span>
              <span className="stat-label">day delivery</span>
            </div>
            <div>
              <span className="stat-number">4</span>
              <span className="stat-label">live sites</span>
            </div>
          </div>
          <div className="about-right">
            <span className="eyebrow">About</span>
            <p className="about-body">
              I&apos;m a self-taught web designer based in London, currently studying at the University of Greenwich. I build websites that look good and actually do something — convert visitors, generate bookings, build trust.
            </p>
            <p className="about-body">
              Most of my clients are beauty businesses: salons, lash techs, nail studios, and fitness coaches who need a professional online presence without the 3-month agency timeline and price tag.
            </p>
            <p className="about-body">
              Every project here was built from scratch, with a real brief and a real outcome in mind. I use AI tools to move fast, not cut corners — the code is clean, the design is intentional, and the sites work.
            </p>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="stack-section">
        <span className="eyebrow">Stack &amp; tools</span>
        <div className="stack-pills">
          {['HTML/CSS/JS', 'React', 'GSAP', 'Framer Motion', 'Lovable', 'Bolt.new', 'Durable', 'Framer', 'Python', 'SQL'].map(t => (
            <span key={t} className="stack-pill">{t}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <p className="cta-eyebrow">Looking for my next project</p>
        <h2 className="cta-headline">
          Every business has a story;<br />
          <em>let&apos;s build the website that tells it.</em>
        </h2>
        <div className="cta-buttons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
          >
            Comment SITE on Instagram ↗
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            DM me directly
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-left">Build with Jiya ✦ 2026</span>
        <div className="footer-links">
          <a href="https://github.com/Jiyagarg-10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:hello@buildwithjiya.com">Email</a>
        </div>
      </footer>
    </>
  )
}
