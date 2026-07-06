'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const BASE = process.env.NODE_ENV === 'production' ? '/build-with-jiya' : ''

const projects = [
  {
    name: 'LUMEN AESTHETICS',
    desc: 'Medical aesthetics clinic with scroll-triggered animations, bento grid layout, and an editorial premium feel built entirely in vanilla HTML/CSS/JS.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/lumen-aesthetics/',
    code: 'https://github.com/Jiyagarg-10/lumen-aesthetics',
    bg: 'linear-gradient(135deg, #1a0a1e 0%, #2d1040 100%)',
    cardBg: '#fce4ec',
    img: `${BASE}/screenshots/lumen.png`,
  },
  {
    name: "JOE'S CAFE",
    desc: 'Interactive café ordering site with eat-in and takeaway flow, animated cart, and a clean browsable menu experience.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/joes-cafe/',
    code: 'https://github.com/Jiyagarg-10/joes-cafe',
    bg: 'linear-gradient(135deg, #0a1a12 0%, #0f2d1e 100%)',
    cardBg: '#e0f7f4',
    img: `${BASE}/screenshots/joes-cafe.png`,
  },
  {
    name: 'GALAXY SHOES',
    desc: 'Futuristic sneaker e-commerce with scroll-driven GSAP scenes, animated SVG star fields, and a full product browsing experience.',
    tech: 'GSAP · SVG · JS',
    live: 'https://jiyagarg-10.github.io/galaxy-shoes/',
    code: 'https://github.com/Jiyagarg-10/galaxy-shoes',
    bg: 'linear-gradient(135deg, #0a0a1e 0%, #151535 100%)',
    cardBg: '#ede7f6',
    img: `${BASE}/screenshots/galaxy-shoes.png`,
  },
  {
    name: 'LÊ PHIN',
    desc: 'Vietnamese coffee shop client mockup for an East Village NYC café. Warm earthy tones, full menu page, embedded map, and ordering flow.',
    tech: 'HTML · CSS · JS',
    live: 'https://jiyagarg-10.github.io/le-phin/',
    code: 'https://github.com/Jiyagarg-10/le-phin',
    bg: 'linear-gradient(135deg, #1a0f08 0%, #2d1a0a 100%)',
    cardBg: '#fff8e1',
    img: `${BASE}/screenshots/le-phin.png`,
  },
]

function Marquee({ name, reverse }: { name: string; reverse: boolean }) {
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

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AnimatedSite() {
  return (
    <>
      {/* ── NAV ── */}
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="nav-logo">
          <div className="nav-initials">JG</div>
          <span className="nav-brand">Jiya Garg</span>
        </div>
        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section className="hero">
        <span className="doodle doodle-q">?</span>
        <span className="doodle doodle-star">✦</span>
        <span className="doodle doodle-smile">☺</span>
        <span className="doodle doodle-arrow">↗</span>
        <span className="doodle doodle-dot">◆</span>
        <span className="doodle doodle-squig">∿</span>
        <span className="doodle doodle-plus">✕</span>
        <span className="doodle doodle-circle">○</span>

        <motion.div
          className="hero-badge-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="hero-badge badge-greenwich">🎓 University of Greenwich</span>
          <span className="hero-badge badge-london">📍 London, UK</span>
          <span className="hero-badge badge-avail">✦ Available for projects</span>
        </motion.div>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          I build <span className="c1">beautiful</span> websites<br />
          that <span className="c2">convert &amp; grow</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          …for independent brands, small businesses &amp; anyone with a bold vision.
        </motion.p>

        <motion.p
          className="hero-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Self-taught web designer studying at the University of Greenwich, based in London. I specialise in clean, fast, conversion-focused websites for independent brands and small businesses — but I&apos;m always up for an interesting brief.
        </motion.p>
        <motion.p
          className="hero-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.52 }}
        >
          I use a mix of hand-coded HTML/CSS/JS, React, GSAP, and AI-assisted tools like Lovable, Bolt.new, and Durable to get quality sites live fast. Usually 3–5 days from kick-off to launch.
        </motion.p>

        <motion.div
          className="hero-pills"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {['3–5 day delivery', 'AI-powered builds', 'Independent brands'].map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <FadeIn><div className="sym-divider" aria-hidden="true">✦ ✳ ✦ ✳ ✦ ✳ ✦ ✳ ✦</div></FadeIn>

      {/* ── PROJECTS ── */}
      <FadeIn><p className="projects-heading" id="projects">Selected work</p></FadeIn>
      <section className="projects">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.08}>
            <motion.article
              className="project-card"
              style={{ background: p.cardBg }}
              whileHover={{ y: -4, boxShadow: '0 24px 60px rgba(0,0,0,0.18)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
              <Marquee name={p.name} reverse={i % 2 !== 0} />
              <div className="project-body">
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
                <div className="project-image" style={{ background: p.bg }}>
                  {p.img ? <img src={p.img} alt={p.name} /> : <div className="project-image-placeholder">{p.name}</div>}
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <FadeIn>
          <div className="how-header">
            <span className="eyebrow">How it works</span>
            <span className="how-tagline">From first message to live site in 3–5 days.</span>
          </div>
        </FadeIn>
        <div className="how-steps">
          {[
            { num: '01', title: 'Brief', desc: 'You tell me about your business, what you need, and what you like. No forms, no calls required — a DM or voice note works perfectly.', time: 'Day 1' },
            { num: '02', title: 'Build', desc: 'I design and build your site — clean, fast, mobile-first. You get a preview link to review before anything goes live. One round of revisions included.', time: 'Days 2–4' },
            { num: '03', title: 'Launch', desc: 'Your site goes live on your domain. I handle the deployment, do a final check, and hand everything over — including the code if you want it.', time: 'Day 3' },
          ].map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1}>
              <div className="how-step">
                <span className="how-step-num">{s.num}</span>
                <div className="how-step-title">{s.title}</div>
                <p className="how-step-desc">{s.desc}</p>
                <span className="how-step-time">{s.time}</span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <div className="how-cta">
            <div className="how-cta-text">
              <p className="how-cta-headline">Ready to get started?<br /><em>DM me and we&apos;ll figure out the rest.</em></p>
            </div>
            <div className="how-cta-buttons">
              <a href="https://www.instagram.com/buildwithjiya?igsh=eDVpeG9tMWJka3Z3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="how-btn-primary">DM on Instagram ↗</a>
              <a href="mailto:gargjiya714@gmail.com" className="how-btn-secondary">Send an email</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" id="about">
        <div className="about-inner">
          <div className="about-grid">
            <FadeIn>
              <div className="about-left-col">
                <div className="about-photo">
                  <img src={`${BASE}/jiya.jpg`} alt="Jiya — web designer based in London" />
                </div>
                <div className="about-stats-row">
                  <div><span className="stat-number pink">3–5</span><span className="stat-label">day delivery</span></div>
                  <div><span className="stat-number teal">4</span><span className="stat-label">live sites built</span></div>
                  <div><span className="stat-number yellow">∞</span><span className="stat-label">ideas to ship</span></div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="about-right-col">
                <div className="about-right">
                  <span className="eyebrow">About me</span>
                  <p className="about-body">I&apos;m a self-taught web designer based in London. I build websites that look good and actually do something — convert visitors, generate bookings, build trust.</p>
                  <p className="about-body">I work with independent brands, small businesses, and anyone who needs a professional online presence without the 3-month agency timeline and price tag.</p>
                  <p className="about-body">Every project here was built from scratch, with a real brief and a real outcome in mind. I use AI tools to move fast, not cut corners — the code is clean, the design is intentional, and the sites work.</p>
                </div>
                <blockquote className="about-quote">
                  &ldquo;Good design isn&apos;t just how it looks — it&apos;s how fast it loads, how easy it converts, and how proud you feel sending people to it.&rdquo;
                </blockquote>
                <div className="about-tags">
                  {['Based in London', 'Open to remote', 'Independent brands', 'Fast turnaround', 'Clean code'].map(t => (
                    <span key={t} className="about-tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <FadeIn>
        <section className="stack-section" id="stack">
          <span className="eyebrow">Stack &amp; tools</span>
          <div className="stack-pills">
            {['HTML/CSS/JS', 'React', 'GSAP', 'Framer Motion', 'Lovable', 'Bolt.new', 'Durable', 'Framer', 'Python', 'SQL'].map((t, i) => (
              <motion.span
                key={t}
                className="stack-pill"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35, ease: 'easeOut' }}
                whileHover={{ scale: 1.08 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ── */}
      <FadeIn>
        <section className="cta-section" id="contact">
          <p className="cta-eyebrow">Based in London · Available now</p>
          <h2 className="cta-headline">
            Every business has a story;<br />
            <em>let&apos;s build the website that tells it.</em>
          </h2>
          <div className="cta-buttons">
            <motion.a
              href="https://www.instagram.com/buildwithjiya?igsh=eDVpeG9tMWJka3Z3&utm_source=qr"
              target="_blank" rel="noopener noreferrer"
              className="btn-solid"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Comment SITE on Instagram ↗
            </motion.a>
            <motion.a
              href="mailto:gargjiya714@gmail.com"
              className="btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Send an email
            </motion.a>
          </div>
        </section>
      </FadeIn>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-left">Jiya Garg ✦ 2026 · London</span>
        <div className="footer-links">
          <a href="https://github.com/Jiyagarg-10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/buildwithjiya?igsh=eDVpeG9tMWJka3Z3&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:gargjiya714@gmail.com">Email</a>
        </div>
      </footer>
    </>
  )
}
