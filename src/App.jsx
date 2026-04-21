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

const audiences = [
  {
    title: 'Impact Startups',
    text: 'For founders who want honest feedback, stronger materials, and better-fit investor outreach before wasting time on low-probability conversations.',
  },
  {
    title: 'Venture Funds',
    text: 'For GPs who need sharper positioning, curated LP targeting, and support with thoughtful, high-quality fundraising processes.',
  },
  {
    title: 'Ecosystem Partners',
    text: 'For accelerators, advisors, and international partners who want a practical fundraising specialist to complement their own expertise.',
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
    text: 'Useful when a company already has a broad list but needs a more realistic shortlist by geography, stage, sector, and ticket size.',
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

      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand">
            <img src="/logo.png" alt="Bridge4Impact logo" className="brand-logo" />
            <div>
              <div className="brand-title">Bridge4Impact</div>
              <div className="brand-subtitle">by Günter Schmittberger</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#readiness">Readiness Check</a>
            <a href="#about">About</a>
            <a href="#packages">Packages</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
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
          <div className="container split-grid">
            <Card className="paper">
              <div className="card-heading-small dark">Who this is for</div>
              <h2>Built for focused, mission-driven fundraising</h2>
              <div className="stack-large">
                {audiences.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass">
              <div className="card-heading-small">About</div>
              <h2>Independent fundraising support with an ecosystem mindset</h2>
              <p>
                Bridge4Impact by Günter Schmittberger: independent fundraiser, ecosystem enabler, and advisor supporting impact-oriented startups and venture funds.
              </p>
              <p>
                The advisory style is independent, practical, and collaborative, with a strong focus on impact-oriented startups, venture funds, and mission-driven capital. International partnerships can add specialized expertise where needed.
              </p>
              <div className="grid-two checklist-grid">
                {proofPoints.map((point) => (
                  <div key={point} className="check-item"><CheckCircle2 size={16} />{point}</div>
                ))}
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
          <div className="container grid-two">
            <Card className="glass legal-card">
              <div className="card-heading-small">Impressum</div>
              <h2>Legal notice</h2>
              <div className="legal-text">
                <p><strong>Angaben gemäß § 5 DDG</strong></p>
                <p>
                  Guenter Schmittberger<br />
                  Gonsbachblick 33<br />
                  55122 Mainz<br />
                  Germany
                </p>
                <p>
                  E-Mail: <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a>
                </p>
                <p>Public-facing brand: Bridge4Impact by Günter Schmittberger</p>
              </div>
            </Card>

            <Card className="glass legal-card">
              <div className="card-heading-small">Datenschutz</div>
              <h2>Privacy notice placeholder</h2>
              <div className="legal-text">
                <p>
                  This starter version includes a basic privacy placeholder only. The final Datenschutz text should be adapted to the actual setup you choose, for example hosting, analytics, embedded content, fonts, forms, and email handling.
                </p>
                <p>
                  For the first minimal version, the safest route is to avoid unnecessary tracking tools, cookie banners, external embeds, and contact forms until the legal text is finalized.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© Bridge4Impact by Günter Schmittberger — Fundraising advisory for impact startups and venture funds</div>
          <div>Suggested pages: Home · Services · Readiness Check · About · FAQ · Contact · Impressum · Datenschutz</div>
        </div>
      </footer>
    </div>
  )
}
