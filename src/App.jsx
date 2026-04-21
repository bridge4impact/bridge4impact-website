import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Handshake,
  Search,
  Target,
  Users,
  BriefcaseBusiness,
  Sparkles,
  Mail,
  FileText,
  MessageSquare,
  ShieldCheck,
  Building2,
  BadgeEuro,
  LineChart,
  Phone,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Investment Readiness Review',
    text: 'AI-supported review of your deck, positioning, data room, and fundraising story before serious investor outreach begins.',
  },
  {
    icon: Target,
    title: 'Investor Targeting & Shortlists',
    text: 'Curated investor research based on sector, geography, stage, ticket size, and strategic fit.',
  },
  {
    icon: Handshake,
    title: 'Fundraising Support',
    text: 'Practical support for outreach, follow-up, messaging, and investor discussions—often with a mainly success-based structure.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'LP Raising for Venture Funds',
    text: 'Targeted LP positioning and outreach support for emerging and specialist funds with an impact or thematic edge.',
  },
]

const readinessSteps = [
  {
    title: 'Upload your pitch deck to Unbiased Ventures',
    text: 'Create your account, use promo code UVSCHMITTBCOMAN, upload your latest pitch deck, and generate your first report. The first report is free, and the promo code gives you a 10% discount on additional features.',
    cta: 'Open Unbiased Ventures',
    href: 'https://www.unbiasedventures.ch/',
    icon: FileText,
  },
  {
    title: 'Complete the D-Risk.IT questionnaire',
    text: 'Answer the D-Risk.IT questions and generate your second report to identify additional strengths, gaps, and preparation needs.',
    cta: 'Open D-Risk.IT',
    href: 'https://dri.ai/drisk-it',
    icon: CheckCircle2,
  },
  {
    title: 'Send both reports by email',
    text: 'Please send both reports by email to guenter@bridge4impact.com before requesting a first fundraising meeting.',
    cta: 'Email the reports',
    href: 'mailto:guenter@bridge4impact.com',
    icon: Mail,
  },
]

const packages = [
  {
    title: 'Readiness Sprint',
    subtitle: 'Best for early preparation',
    icon: FileText,
    items: [
      'Deck and narrative review',
      'Investment readiness feedback',
      'Key weaknesses and priorities',
      'Clear next-step recommendations',
    ],
  },
  {
    title: 'Investor Fit Package',
    subtitle: 'Best for focused outreach preparation',
    icon: Users,
    items: [
      'Investor profile definition',
      'Research-backed shortlist support',
      'Outreach messaging guidance',
      'Smarter targeting before launch',
    ],
  },
  {
    title: 'Fundraising Advisory',
    subtitle: 'Best for active mandates',
    icon: LineChart,
    items: [
      'Ongoing fundraising support',
      'Tracking and follow-up',
      'Investor communication support',
      'Flexible fee structures depending on case quality',
    ],
  },
]

const useCases = [
  {
    title: 'Startup preparation before outreach',
    text: 'Ideal when a founder has momentum, but the deck, positioning, or investor fit still need work before active fundraising starts.',
  },
  {
    title: 'Investor shortlist refinement',
    text: 'Useful when the company already has a broad list but needs a more realistic shortlist by geography, stage, sector, and ticket size.',
  },
  {
    title: 'Hands-on support during a live raise',
    text: 'Suitable when the company or fund needs a pragmatic partner for messaging, process discipline, and investor follow-up.',
  },
]

const proofPoints = [
  'AI-enhanced fundraising workflow',
  'Deep experience with investor research and qualification',
  'International partner network across multiple advisory specialties',
  'Focus on impact, climate, venture, and mission-driven capital',
  'Flexible engagement from preparation packages to active fundraising support',
  'Independent, hands-on, and pragmatic approach',
]

const faqs = [
  {
    q: 'Do you work only with startups?',
    a: 'No. Bridge4Impact also supports venture funds, especially where LP positioning and aligned capital raising matter.',
  },
  {
    q: 'Do you always take mandates on a success-fee basis?',
    a: 'Not always. It depends on investment readiness, complexity, and the amount of preparation still needed before outreach can be effective.',
  },
  {
    q: 'When should we talk?',
    a: 'Usually after the pre-check or before you start broad investor outreach. Early conversations often save substantial time, effort, and reputation.',
  },
  {
    q: 'Can you work with international clients?',
    a: 'Yes. The positioning and investor-targeting approach is designed for cross-border fundraising contexts and international collaboration.',
  },
]

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`.trim()}>{children}</div>
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="background-glow" />

      <style>{`
        :root {
          --header-offset: 88px;
        }

        html {
          scroll-padding-top: calc(var(--header-offset) + 8px);
        }

        #home,
        #services,
        #readiness,
        #about,
        #packages,
        #faq,
        #contact,
        #impressum {
          scroll-margin-top: calc(var(--header-offset) + 8px);
        }

        .container {
          width: min(1360px, calc(100% - 64px));
        }

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 999;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          background: rgba(8, 120, 121, 0.72);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 12px 0;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          font-size: 1rem;
        }

        .nav a {
          white-space: nowrap;
        }

        .brand-logo {
          width: 56px;
          height: 56px;
        }

        .brand-title {
          font-size: 1.18rem;
        }

        .brand-subtitle {
          font-size: 0.78rem;
        }

        main {
          padding-top: var(--header-offset);
        }

        .section {
          padding: 18px 0 54px;
        }

        .hero {
          padding: 14px 0 42px;
        }

        .hero-grid {
          min-height: calc(100vh - var(--header-offset) - 24px);
          align-items: center;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 30px;
        }

        .pill {
          margin-top: 0;
        }

        .hero h1 {
          font-size: clamp(3.1rem, 7vw, 5.8rem);
          max-width: 9.8ch;
          margin-top: 16px;
          margin-bottom: 18px;
        }

        .lead {
          max-width: 48rem;
        }

        .sublead {
          max-width: 50rem;
        }

        .hero-actions {
          margin-top: 24px;
        }

        .section-title {
          max-width: 64rem;
          margin-bottom: 22px;
        }

        .section-title h2 {
          font-size: clamp(2.2rem, 4.8vw, 4.2rem);
        }

        .grid-four {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .split-grid.about-grid {
          grid-template-columns: 1fr;
        }

        .about-card {
          padding: 34px;
        }

        .about-card-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          gap: 26px;
          align-items: start;
        }

        .about-copy p + p {
          margin-top: 14px;
        }

        .about-proof {
          display: grid;
          gap: 14px;
        }

        .small-feature h3,
        .service-card h3,
        .package-card h3 {
          line-height: 1.25;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 18px;
        }

        .legal-text p {
          margin: 0 0 14px;
        }

        .legal-list {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }

        .legal-list div {
          line-height: 1.6;
        }

        .legal-note {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(11, 143, 144, 0.06);
          color: rgba(11, 143, 144, 0.82);
          line-height: 1.6;
        }

        @media (max-width: 1280px) {
          .container {
            width: min(1280px, calc(100% - 48px));
          }

          .grid-four {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .about-card-grid,
          .legal-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1080px) {
          :root {
            --header-offset: 132px;
          }

          .topbar-inner {
            display: grid;
            gap: 12px;
          }

          .nav {
            display: flex !important;
            gap: 18px;
            overflow-x: auto;
            padding-bottom: 2px;
            flex-wrap: nowrap;
            scrollbar-width: none;
          }

          .nav::-webkit-scrollbar {
            display: none;
          }

          .hero-grid,
          .split-grid,
          .split-faq,
          .contact-split {
            grid-template-columns: 1fr;
          }

          .hero-grid {
            min-height: auto;
            align-items: start;
          }

          .grid-three {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          :root {
            --header-offset: 126px;
          }

          .container {
            width: min(100% - 20px, 1360px);
          }

          .section {
            padding: 14px 0 34px;
          }

          .hero {
            padding: 8px 0 28px;
          }

          .hero h1 {
            font-size: clamp(2.65rem, 13vw, 4.3rem);
            max-width: none;
          }

          .lead {
            font-size: 1.08rem;
            line-height: 1.65;
          }

          .sublead,
          .section-title p,
          .service-card p,
          .faq-card p,
          .small-feature p,
          .legal-text,
          .paper p,
          .contact-card p {
            line-height: 1.62;
          }

          .grid-two,
          .grid-three,
          .grid-four,
          .about-card-grid,
          .legal-grid {
            grid-template-columns: 1fr;
          }

          .card,
          .contact-card,
          .about-card {
            padding: 22px;
            border-radius: 24px;
          }

          .button {
            width: 100%;
            justify-content: center;
          }

          .brand {
            gap: 10px;
          }

          .brand-logo {
            width: 48px;
            height: 48px;
            border-radius: 14px;
          }

          .brand-title {
            font-size: 1rem;
          }

          .brand-subtitle {
            font-size: 0.68rem;
            letter-spacing: 0.16em;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#home" className="brand">
            <img src="/logo.png" alt="Bridge4Impact logo" className="brand-logo" />
            <div>
              <div className="brand-title">Bridge4Impact</div>
              <div className="brand-subtitle">by Günter Schmittberger</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#readiness">Readiness Check</a>
            <a href="#about">About</a>
            <a href="#packages">Packages</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill">
                <Sparkles size={16} />
                Investment readiness first. Outreach second.
              </div>

              <h1>Bridging strong impact ventures with the right capital.</h1>

              <p className="lead">
                Bridge4Impact helps impact startups and venture funds become more investment ready, reach better-fit investors, and run smarter fundraising processes.
              </p>

              <p className="sublead">
                Investors are highly selective. That is why my work often starts before fundraising itself: sharpening the story, revealing weaknesses early, improving materials, and focusing effort where the chance of conversion is highest.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#readiness">
                  Start the pre-check <ArrowRight size={18} />
                </a>
                <a className="button button-secondary" href="https://calendly.com/g-schmittberger">
                  Book an intro call
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-cards">
              <Card className="glass">
                <div className="card-heading-small">What makes the difference</div>
                <h3>Fundraising with more focus and less wasted effort</h3>
                <div className="grid-two compact-grid">
                  <div className="mini-panel"><Users size={18} />Better investor fit instead of generic mass outreach.</div>
                  <div className="mini-panel"><Search size={18} />Early readiness checks before expensive fundraising mistakes.</div>
                  <div className="mini-panel"><Globe size={18} />International perspective and partner access.</div>
                  <div className="mini-panel"><Handshake size={18} />Flexible collaboration from preparation to active support.</div>
                </div>
              </Card>

              <div className="grid-three">
                <Card className="glass small"><strong>80%+</strong><span>Usually strong enough for a first serious fundraising discussion.</span></Card>
                <Card className="glass small"><strong>65–79%</strong><span>Often a good basis for targeted readiness improvement first.</span></Card>
                <Card className="glass small"><strong>Selectively hands-on</strong><span>Practical support for startups, funds, and ecosystem partners.</span></Card>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Services"
              title="What Bridge4Impact can do for you"
              text="A practical mix of fundraising preparation, investor targeting, and hands-on support—adapted to what is actually needed at your stage."
            />

            <div className="grid-four">
              {services.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="glass service-card">
                    <Icon size={24} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="readiness" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Investment Readiness Pre-Check"
              title="Pre-check your investment readiness and receive your personalized reports"
              text="Before I invest time in a first fundraising meeting with an interested entrepreneur, I usually ask for two readiness reports. This helps me understand your current preparation level and whether active fundraising already makes sense."
            />

            <div className="grid-three">
              {readinessSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.title} className="glass package-card">
                    <Icon size={22} />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                    <div className="hero-actions" style={{ marginTop: '18px' }}>
                      <a className="button button-secondary" href={step.href}>
                        {step.cta}
                      </a>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="grid-three" style={{ marginTop: '16px' }}>
              <Card className="glass small-feature">
                <CheckCircle2 size={24} />
                <h3>Above 80%</h3>
                <p>You likely have a strong enough basis for a first online meeting and a serious discussion about fundraising support.</p>
              </Card>
              <Card className="glass small-feature">
                <Target size={24} />
                <h3>65%–79%</h3>
                <p>You may still be a good candidate for one of my investment readiness improvement programs before active investor outreach.</p>
              </Card>
              <Card className="glass small-feature">
                <ShieldCheck size={24} />
                <h3>Below 65%</h3>
                <p>In most cases, more preparation is advisable before fundraising support would be efficient.</p>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split-grid about-grid">
            <Card className="glass about-card">
              <div className="card-heading-small">About</div>
              <div className="about-card-grid">
                <div className="about-copy">
                  <h2>Independent fundraising support with an ecosystem mindset</h2>
                  <p>
                    Bridge4Impact by Günter Schmittberger: independent fundraiser, ecosystem enabler, and advisor supporting impact-oriented startups and venture funds.
                  </p>
                  <p>
                    The advisory style is independent, practical, and collaborative, with a strong focus on impact-oriented startups, venture funds, and mission-driven capital. International partnerships can add specialized expertise where needed.
                  </p>
                  <p>
                    Instead of pushing every company into outreach too early, the goal is to strengthen quality first—then focus on the investors most likely to care.
                  </p>
                </div>

                <div className="about-proof">
                  {proofPoints.map((point) => (
                    <div key={point} className="check-item"><CheckCircle2 size={16} />{point}</div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="section">
          <div className="container grid-three">
            {useCases.map((item) => (
              <Card key={item.title} className="glass small-feature">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="packages" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Packages"
              title="A clear structure for how people can work with you"
              text="This section is designed to make your offer easier to understand and easier to buy."
            />

            <div className="grid-three">
              {packages.map((pkg) => {
                const Icon = pkg.icon
                return (
                  <Card key={pkg.title} className="paper package-card">
                    <div className="package-top">
                      <div>
                        <h3>{pkg.title}</h3>
                        <div className="muted-dark">{pkg.subtitle}</div>
                      </div>
                      <Icon size={22} />
                    </div>
                    <div className="stack-small">
                      {pkg.items.map((item) => (
                        <div key={item} className="check-item dark"><CheckCircle2 size={16} />{item}</div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container grid-three">
            <Card className="glass small-feature"><ShieldCheck size={24} /><h3>Pragmatic quality filter</h3><p>Not every company should go into fundraising immediately. A stronger filter protects time, focus, and credibility.</p></Card>
            <Card className="glass small-feature"><Building2 size={24} /><h3>Cross-border perspective</h3><p>The positioning is designed for founders and fund managers who need to speak credibly across markets and investor types.</p></Card>
            <Card className="glass small-feature"><BadgeEuro size={24} /><h3>Commercially realistic</h3><p>The website frames your offer as advisory and fundraising support, not hype. That builds trust with more serious clients.</p></Card>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container split-faq">
            <SectionTitle
              eyebrow="FAQ"
              title="Questions a serious client may ask before reaching out"
            />
            <div className="stack-medium">
              {faqs.map((item) => (
                <Card key={item.q} className="glass faq-card">
                  <div className="faq-line"><MessageSquare size={18} /><strong>{item.q}</strong></div>
                  <p>{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Card className="paper contact-card">
              <div className="split-grid contact-split">
                <div>
                  <div className="card-heading-small dark">Next step</div>
                  <h2>Ready to explore whether we are a fit?</h2>
                  <p>
                    The best next step is usually the readiness pre-check. Once you have uploaded your deck to Unbiased Ventures, completed the D-Risk.IT questionnaire, and sent both reports by email, you are welcome to book a first online meeting.
                  </p>
                  <div className="info-box">
                    Please complete the two readiness checks first and then send both reports by email to guenter@bridge4impact.com.
                  </div>
                </div>

                <div className="stack-medium">
                  <a className="contact-panel" href="https://calendly.com/g-schmittberger">
                    <div className="contact-title"><ArrowRight size={18} /> Book an intro call</div>
                    <div className="muted-dark">calendly.com/g-schmittberger</div>
                  </a>

                  <a className="contact-panel" href="mailto:guenter@bridge4impact.com">
                    <div className="contact-title"><Mail size={18} /> Contact by email</div>
                    <div className="muted-dark">guenter@bridge4impact.com</div>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="impressum" className="section legal-section">
          <div className="container legal-grid">
            <Card className="paper legal-card">
              <div className="card-heading-small dark">Impressum</div>
              <h2>Impressum</h2>
              <div className="legal-text">
                <p><strong>Angaben gemäß § 5 DDG</strong></p>
                <div className="legal-list">
                  <div><strong>Anbieter:</strong> Guenter Schmittberger</div>
                  <div><strong>Öffentlicher Markenauftritt:</strong> Bridge4Impact by Günter Schmittberger</div>
                  <div><strong>Anschrift:</strong> Gonsbachblick 33, 55122 Mainz, Deutschland</div>
                  <div><strong>E-Mail:</strong> <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a></div>
                  <div><strong>Telefon:</strong> bitte ergänzen, sofern öffentlich gewünscht</div>
                </div>

                <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong></p>
                <p>
                  Guenter Schmittberger<br />
                  Gonsbachblick 33<br />
                  55122 Mainz<br />
                  Deutschland
                </p>

                <p><strong>Verbraucherstreitbeilegung</strong></p>
                <p>
                  Es besteht keine Verpflichtung und keine generelle Bereitschaft zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle, soweit nicht im Einzelfall ausdrücklich etwas anderes vereinbart wird.
                </p>

                <div className="legal-note">
                  Für eine rechtlich belastbare Endfassung solltest du noch prüfen, ob zusätzlich eine öffentlich angegebene Telefonnummer, eine Umsatzsteuer-Identifikationsnummer, Handelsregisterangaben oder berufsrechtliche Pflichtangaben erforderlich sind. Ohne diese Informationen kann ich keine vollständige rechtliche Prüfung ersetzen.
                </div>
              </div>
            </Card>

            <Card className="glass legal-card">
              <div className="card-heading-small">Datenschutz</div>
              <h2>Privacy notice placeholder</h2>
              <div className="legal-text">
                <p>
                  This starter version includes a basic privacy placeholder only. The final Datenschutz text should be adapted to the actual live setup, for example hosting, analytics, embedded content, fonts, scheduling links, and email handling.
                </p>
                <p>
                  For the current minimal version, the safest route is still to avoid unnecessary tracking tools, cookie banners, external embeds, and extra form tools until the legal text is finalized.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© Bridge4Impact by Günter Schmittberger — Fundraising advisory for impact startups and venture funds</div>
          <div>Home · Services · Readiness Check · About · Packages · FAQ · Contact · Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}
