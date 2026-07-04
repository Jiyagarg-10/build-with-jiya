const projects = [
  {
    name: 'LUMEN AESTHETICS',
    desc: 'Medical aesthetics clinic with scroll-triggered animations, bento grid layout, and an editorial premium feel built entirely in vanilla HTML/CSS/JS.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/lumen-aesthetics/',
    code: 'https://github.com/Jiyagarg-10/lumen-aesthetics',
    bg: 'linear-gradient(135deg, #1a0a1e 0%, #2d1040 100%)',
    img: '/screenshots/lumen.png',
  },
  {
    name: "JOE'S CAFE",
    desc: 'Interactive café ordering site with eat-in and takeaway flow, animated cart, and a clean browsable menu experience.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/joes-cafe/',
    code: 'https://github.com/Jiyagarg-10/joes-cafe',
    bg: 'linear-gradient(135deg, #0a1a12 0%, #0f2d1e 100%)',
    img: '/screenshots/joes-cafe.png',
  },
  {
    name: 'GALAXY SHOES',
    desc: 'Futuristic sneaker e-commerce with scroll-driven GSAP scenes, animated SVG star fields, and a full product browsing experience.',
    tech: 'GSAP · SVG · JS',
    live: 'https://jiyagarg-10.github.io/galaxy-shoes/',
    code: 'https://github.com/Jiyagarg-10/galaxy-shoes',
    bg: 'linear-gradient(135deg, #0a0a1e 0%, #151535 100%)',
    img: '/screenshots/galaxy-shoes.png',
  },
  {
    name: 'LÊ PHIN',
    desc: 'Vietnamese coffee shop client mockup for an East Village NYC café. Warm earthy tones, full menu page, embedded map, and ordering flow.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/le-phin/',
    code: 'https://github.com/Jiyagarg-10/le-phin',
    bg: 'linear-gradient(135deg, #1a0f08 0%, #2d1a0a 100%)',
    img: '/screenshots/le-phin.png',
  },
]

function Marquee({ name, reverse }: { name: string; reverse: boolean }) {
  const chunk = `${name} <sep>✦</sep> `
  const item = `${name} ✦ `
  const repeated = Array(12).fill(item).join('')
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
        <div className="nav-logo">
          <div className="nav-initials">JG</div>
          <span className="nav-brand">Build with Jiya</span>
        </div>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge-row">
          <span className="hero-badge badge-greenwich">🎓 University of Greenwich</span>
          <span className="hero-badge badge-london">📍 London, UK</span>
          <span className="hero-badge badge-avail">✦ Available for projects</span>
        </div>
        <h1 className="hero-headline">
          I build <span className="c1">beautiful</span> websites<br />
          that <span className="c2">convert & grow</span>
        </h1>
        <p className="hero-sub">…for beauty businesses, independent brands & anyone with a bold vision.</p>
        <p className="hero-body">
          Self-taught web designer studying at the University of Greenwich, based in London. I specialise in clean, fast, conversion-focused websites — primarily for beauty businesses and independent brands, but I&apos;m always up for an interesting brief.
        </p>
        <p className="hero-body">
          I use a mix of hand-coded HTML/CSS/JS, React, GSAP, and AI-assisted tools like Lovable, Bolt.new, and Durable to get quality sites live fast. Usually 3–5 days from kick-off to launch.
        </p>
        <div className="hero-pills">
          {['3–5 day delivery', 'AI-powered builds', 'Beauty specialist'].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="sym-divider" aria-hidden="true">✦ ✳ ✦ ✳ ✦ ✳ ✦ ✳ ✦</div>

      {/* ── PROJECTS ── */}
      <p className="projects-heading" id="projects">Selected work</p>
      <section className="projects">
        {projects.map((p, i) => (
          <article key={p.name} className="project-card">
            <Marquee name={p.name} reverse={i % 2 !== 0} />
            <div className="project-body">
              {/* left: text */}
              <div className="project-text">
                <p className="project-desc-big">{p.desc}</p>
                <div className="project-bottom">
                  <div className="project-tech-pills">
                    {p.tech.split(' · ').map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                  <div className="project-links">
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-live">Live ↗</a>
                    ) : (
                      <span className="btn-none">Coming soon</span>
                    )}
                    {p.code ? (
                      <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-code">Code</a>
                    ) : null}
                  </div>
                </div>
              </div>
              {/* right: image */}
              <div className="project-image" style={{background: p.bg}}>
                {p.img ? (
                  <img src={p.img} alt={p.name} />
                ) : (
                  <div className="project-image-placeholder">{p.name}</div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="how-header">
          <span className="eyebrow">How it works</span>
          <span className="how-tagline">From first message to live site in 3–5 days.</span>
        </div>
        <div className="how-steps">
          <div className="how-step">
            <span className="how-step-num">01</span>
            <div className="how-step-title">Brief</div>
            <p className="how-step-desc">You tell me about your business, what you need, and what you like. No forms, no calls required — a DM or voice note works perfectly.</p>
            <span className="how-step-time">Day 1</span>
          </div>
          <div className="how-step">
            <span className="how-step-num">02</span>
            <div className="how-step-title">Build</div>
            <p className="how-step-desc">I design and build your site — clean, fast, mobile-first. You get a preview link to review before anything goes live. One round of revisions included.</p>
            <span className="how-step-time">Days 2–4</span>
          </div>
          <div className="how-step">
            <span className="how-step-num">03</span>
            <div className="how-step-title">Launch</div>
            <p className="how-step-desc">Your site goes live on your domain. I handle the deployment, do a final check, and hand everything over — including the code if you want it.</p>
            <span className="how-step-time">Day 5</span>
          </div>
        </div>
        <div className="how-cta">
          <div className="how-cta-text">
            <span className="how-cta-label">Starting from $99 · ₹5,999</span>
            <p className="how-cta-headline">Ready to get started?<br /><em>DM me and we'll figure out the rest.</em></p>
          </div>
          <div className="how-cta-buttons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="how-btn-primary">DM on Instagram ↗</a>
            <a href="mailto:hello@buildwithjiya.com" className="how-btn-secondary">Send an email</a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-grid">
            <div className="about-left-col">
              <div className="about-photo">
                <img src="/jiya.jpg" alt="Jiya — web designer based in London" />
              </div>
              <div className="about-stats-row">
                <div>
                  <span className="stat-number pink">3–5</span>
                  <span className="stat-label">day delivery</span>
                </div>
                <div>
                  <span className="stat-number teal">4</span>
                  <span className="stat-label">live sites built</span>
                </div>
                <div>
                  <span className="stat-number yellow">∞</span>
                  <span className="stat-label">ideas to ship</span>
                </div>
              </div>
            </div>
            <div className="about-right-col">
              {/* bio */}
              <div className="about-right">
                <span className="eyebrow">About me</span>
                <p className="about-body">
                  I&apos;m a self-taught web designer based in London, currently studying at the <strong style={{color:'#6ecf6e'}}>University of Greenwich</strong>. I build websites that look good and actually do something — convert visitors, generate bookings, build trust.
                </p>
                <p className="about-body">
                  Most of my clients are beauty businesses: salons, lash techs, nail studios, and fitness coaches who need a professional online presence without the 3-month agency timeline and price tag.
                </p>
                <p className="about-body">
                  Every project here was built from scratch, with a real brief and a real outcome in mind. I use AI tools to move fast, not cut corners — the code is clean, the design is intentional, and the sites work.
                </p>
                <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', marginTop:'1.5rem'}}>
                  <span className="about-location loc-greenwich">🎓 Univ. of Greenwich</span>
                  <span className="about-location loc-london">📍 London, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="stack-section" id="stack">
        <span className="eyebrow">Stack &amp; tools</span>
        <div className="stack-pills">
          {['HTML/CSS/JS', 'React', 'GSAP', 'Framer Motion', 'Lovable', 'Bolt.new', 'Durable', 'Framer', 'Python', 'SQL'].map(t => (
            <span key={t} className="stack-pill">{t}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contact">
        <p className="cta-eyebrow">Based in London · Available now</p>
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
        <span className="footer-left">Build with Jiya ✦ 2026 · London</span>
        <div className="footer-links">
          <a href="https://github.com/Jiyagarg-10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:hello@buildwithjiya.com">Email</a>
        </div>
      </footer>
    </>
  )
}
