import React from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  FileText,
  Globe,
  Handshake,
  LineChart,
  Mail,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Investment Readiness Review',
    text: 'AI-supported review of deck, positioning, data room, and fundraising story before serious investor outreach begins.',
  },
  {
    icon: Target,
    title: 'Investor Targeting & Shortlists',
    text: 'Curated investor research by sector, geography, stage, ticket size, and strategic fit.',
  },
  {
    icon: Handshake,
    title: 'Fundraising Support',
    text: 'Hands-on support for outreach, follow-up, messaging, and investor communication.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'LP Raising for Venture Funds',
    text: 'Positioning and targeted outreach support for specialist and impact-oriented venture funds.',
  },
]

const readinessSteps = [
  {
    icon: FileText,
    title: 'Upload your deck to Unbiased Ventures',
    text: 'Create your account, use promo code UVSCHMITTBCOMAN, upload your latest deck, and generate your first report.',
    cta: 'Open Unbiased Ventures',
    href: 'https://www.unbiasedventures.ch/',
  },
  {
    icon: CheckCircle2,
    title: 'Answer the D-Risk.IT questionnaire',
    text: 'Complete the D-Risk.IT questions and generate your second report on strengths, gaps, and readiness needs.',
    cta: 'Open D-Risk.IT',
    href: 'https://dri.ai/drisk-it',
  },
  {
    icon: Mail,
    title: 'Send both reports by email',
    text: 'Please send both reports to guenter@bridge4impact.com before requesting a first fundraising meeting.',
    cta: 'Email the reports',
    href: 'mailto:guenter@bridge4impact.com',
  },
]

const readinessBands = [
  {
    title: 'Above 80%',
    text: 'Usually a strong enough basis for a first serious fundraising discussion.',
  },
  {
    title: '65%–79%',
    text: 'Often a good basis for targeted readiness improvement first.',
  },
  {
    title: 'Below 65%',
    text: 'In most cases, more preparation is advisable before fundraising support would be efficient.',
  },
]

const packages = [
  {
    icon: FileText,
    title: 'Readiness Sprint',
    subtitle: 'Best for early preparation',
    items: [
      'Deck and narrative review',
      'Investment readiness feedback',
      'Key weaknesses and priorities',
      'Clear next-step recommendations',
    ],
  },
  {
    icon: Users,
    title: 'Investor Fit Package',
    subtitle: 'Best for focused outreach preparation',
    items: [
      'Investor profile definition',
      'Research-backed shortlist support',
      'Outreach messaging guidance',
      'Smarter targeting before launch',
    ],
  },
  {
    icon: LineChart,
    title: 'Fundraising Advisory',
    subtitle: 'Best for active mandates',
    items: [
      'Ongoing fundraising support',
      'Tracking and follow-up',
      'Investor communication support',
      'Flexible fee structures depending on case quality',
    ],
  },
]

const proofPoints = [
  'Investment-readiness-first approach',
  'AI-enhanced research and workflow',
  'Qualified investor targeting instead of broad mass outreach',
  'Cross-border perspective and partner network',
  'Focus on impact, venture, climate, and mission-driven capital',
  'Independent, practical, and selective collaboration style',
]

const faqs = [
  {
    q: 'Do you work only with startups?',
    a: 'No. Bridge4Impact also supports venture funds, especially where LP positioning and aligned capital raising matter.',
  },
  {
    q: 'Do you always work on a success-fee basis?',
    a: 'Not always. It depends on readiness, complexity, and how much preparation is still needed before outreach can be effective.',
  },
  {
    q: 'When should we talk?',
    a: 'Usually after the pre-check or before broad investor outreach starts. Early conversations often save time and reputation.',
  },
  {
    q: 'Can you work internationally?',
    a: 'Yes. The positioning and investor-targeting approach is designed for cross-border fundraising contexts and international collaboration.',
  },
]

function SectionTitle({ eyebrow, title, text, className = '' }) {
  return (
    <div className={`section-title ${className}`.trim()}>
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
          --header-offset: 78px;
          --section-space: 22px;
        }

        html {
          scroll-padding-top: calc(var(--header-offset) + 6px);
        }

        #home,
        #services,
        #readiness,
        #about,
        #packages,
        #faq,
        #contact,
        #impressum,
        #datenschutz {
          scroll-margin-top: calc(var(--header-offset) + 6px);
        }

        body {
          overflow-x: hidden;
        }

        .container {
          width: min(1520px, calc(100% - 48px));
          margin: 0 auto;
        }

        .topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          background: rgba(8, 120, 121, 0.78);
          backdrop-filter: blur(18px);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 10px 0;
          min-height: var(--header-offset);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .brand-logo {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          object-fit: cover;
          flex: 0 0 auto;
        }

        .brand-title {
          font-size: 1.04rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .brand-subtitle {
          margin-top: 3px;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(246, 240, 230, 0.72);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: flex-end;
          font-size: 0.95rem;
          color: rgba(246, 240, 230, 0.90);
        }

        .nav a:hover,
        .footer-links a:hover,
        .legal-links a:hover {
          color: #fff;
        }

        main {
          padding-top: var(--header-offset);
        }

        .screen-section {
          min-height: calc(100svh - var(--header-offset));
          display: flex;
          align-items: center;
          padding: var(--section-space) 0;
          position: relative;
          z-index: 1;
        }

        .section-stack {
          width: 100%;
          display: grid;
          gap: 18px;
        }

        .hero-screen {
          padding-top: 8px;
          padding-bottom: 18px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(420px, 0.85fr);
          gap: 28px;
          align-items: center;
        }

        .hero-copy {
          max-width: 60rem;
        }

        .pill {
          margin-top: 0;
          padding: 8px 14px;
          font-size: 0.92rem;
        }

        .hero-title {
          margin: 12px 0 16px;
          font-size: clamp(3.6rem, 6.9vw, 6.3rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
        }

        .hero-title .line {
          display: block;
        }

        .lead {
          max-width: 46rem;
          font-size: 1.18rem;
          line-height: 1.62;
          color: rgba(246,240,230,0.86);
          margin: 0 0 10px;
        }

        .sublead {
          max-width: 48rem;
          color: rgba(246,240,230,0.76);
          line-height: 1.68;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 12px 18px;
          border-radius: 16px;
          font-weight: 600;
          transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
        }

        .button:hover,
        .contact-panel:hover {
          transform: translateY(-1px);
        }

        .button-primary {
          background: var(--cream);
          color: var(--text-dark);
          box-shadow: var(--shadow);
        }

        .button-secondary {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.28);
        }

        .hero-side {
          display: grid;
          gap: 14px;
        }

        .hero-main-card {
          padding: 24px;
        }

        .hero-main-card h3 {
          margin-top: 10px;
          font-size: 2rem;
          line-height: 1.1;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .hero-mini-panel {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          background: rgba(0,0,0,0.10);
          border-radius: 18px;
          padding: 14px 15px;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          padding: 16px 16px 18px;
          border-radius: 24px;
        }

        .stat-card strong {
          display: block;
          font-size: 1.18rem;
        }

        .stat-card span {
          display: block;
          margin-top: 8px;
          line-height: 1.5;
          color: rgba(246,240,230,0.76);
        }

        .section-title {
          max-width: 64rem;
          margin-bottom: 16px;
        }

        .section-title h2 {
          margin: 8px 0 0;
          font-size: clamp(2.6rem, 4.4vw, 4.45rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          text-wrap: balance;
        }

        .section-title p {
          max-width: 56rem;
          margin-top: 14px;
          color: rgba(246,240,230,0.78);
          line-height: 1.62;
          font-size: 1.04rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .service-card,
        .readiness-card,
        .package-card,
        .faq-card,
        .contact-card,
        .legal-card,
        .about-card {
          height: 100%;
        }

        .service-card {
          padding: 24px;
        }

        .service-card h3,
        .readiness-card h3,
        .package-card h3,
        .faq-card h3,
        .about-card h3 {
          margin: 14px 0 10px;
          font-size: 1.42rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .service-card p,
        .readiness-card p,
        .faq-card p,
        .about-card p,
        .legal-copy p,
        .package-subtitle,
        .package-items,
        .contact-card p,
        .legal-list,
        .legal-note {
          line-height: 1.6;
        }

        .readiness-title .line,
        .hero-title .line {
          display: block;
        }

        .readiness-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .readiness-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 270px;
        }

        .mini-bands {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .band-card {
          padding: 18px;
          border-radius: 22px;
        }

        .band-card h3 {
          margin: 0 0 8px;
          font-size: 1.18rem;
        }

        .band-card p {
          margin: 0;
          line-height: 1.55;
          color: rgba(246,240,230,0.76);
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: 18px;
        }

        .about-card {
          padding: 28px;
        }

        .about-copy h2 {
          margin: 8px 0 12px;
          font-size: clamp(2.3rem, 4vw, 3.9rem);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .about-copy p {
          margin: 0 0 12px;
          color: rgba(246,240,230,0.80);
        }

        .about-panel {
          display: grid;
          gap: 12px;
        }

        .about-tag {
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.06);
          color: rgba(246,240,230,0.86);
          line-height: 1.5;
        }

        .proof-grid {
          display: grid;
          gap: 12px;
        }

        .proof-item,
        .package-item,
        .legal-badge {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          border-radius: 18px;
          padding: 12px 14px;
        }

        .proof-item {
          background: rgba(255,255,255,0.06);
          color: rgba(246,240,230,0.86);
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .package-card {
          padding: 24px;
        }

        .package-top {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .package-subtitle {
          color: rgba(11,143,144,0.68);
          margin-top: 4px;
        }

        .package-items {
          display: grid;
          gap: 10px;
          margin-top: 14px;
        }

        .package-item {
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.86);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .faq-card {
          padding: 22px;
        }

        .faq-head {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .faq-card h3 {
          margin: 0;
          font-size: 1.28rem;
        }

        .faq-card p {
          margin: 12px 0 0;
          color: rgba(246,240,230,0.78);
        }

        .contact-wrap {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
          gap: 18px;
          align-items: stretch;
        }

        .contact-card {
          padding: 28px;
        }

        .contact-card h2,
        .legal-card h2 {
          margin: 8px 0 12px;
          font-size: clamp(2.2rem, 4.2vw, 4rem);
          line-height: 1.03;
          letter-spacing: -0.04em;
        }

        .info-box {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(11,143,144,0.07);
          color: rgba(11,143,144,0.82);
          line-height: 1.58;
        }

        .contact-panels {
          display: grid;
          gap: 14px;
        }

        .contact-panel {
          display: block;
          background: #fff;
          color: var(--text-dark);
          padding: 18px 20px;
          border-radius: 20px;
          border: 1px solid rgba(11,143,144,0.14);
          min-height: 110px;
        }

        .contact-panel:hover {
          box-shadow: 0 16px 36px rgba(11,143,144,0.14);
        }

        .contact-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .contact-text {
          color: rgba(11,143,144,0.75);
          line-height: 1.55;
        }

        .legal-links {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          color: rgba(11,143,144,0.78);
          font-weight: 600;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
        }

        .legal-card {
          padding: 28px;
        }

        .legal-copy {
          display: grid;
          gap: 14px;
          color: rgba(11,143,144,0.84);
        }

        .legal-copy h3 {
          margin: 0 0 6px;
          font-size: 1.15rem;
          line-height: 1.25;
        }

        .legal-list {
          display: grid;
          gap: 6px;
          color: rgba(11,143,144,0.84);
        }

        .legal-note {
          border-radius: 18px;
          padding: 14px 16px;
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.82);
        }

        .legal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 2px;
        }

        .legal-badge {
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.84);
        }

        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .footer-inner {
          width: min(1520px, calc(100% - 48px));
          margin: 0 auto;
          padding: 22px 0 28px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 16px;
          color: rgba(246,240,230,0.68);
          font-size: 0.94rem;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: flex-end;
        }

        @media (max-width: 1280px) {
          .container,
          .footer-inner {
            width: min(1440px, calc(100% - 40px));
          }

          .hero-grid,
          .about-grid,
          .contact-wrap {
            grid-template-columns: 1fr;
          }

          .hero-side {
            max-width: 860px;
          }

          .services-grid,
          .packages-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1024px) {
          :root {
            --header-offset: 108px;
            --section-space: 20px;
          }

          .topbar-inner {
            display: grid;
            gap: 10px;
          }

          .nav {
            justify-content: flex-start;
            gap: 16px;
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: none;
            padding-bottom: 2px;
          }

          .nav::-webkit-scrollbar {
            display: none;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }

          .hero-title {
            font-size: clamp(3.2rem, 8vw, 5.4rem);
          }

          .readiness-grid,
          .mini-bands,
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          :root {
            --header-offset: 118px;
            --section-space: 16px;
          }

          .container,
          .footer-inner {
            width: min(100% - 20px, 1520px);
          }

          .screen-section {
            min-height: auto;
          }

          .brand-logo {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }

          .brand-title {
            font-size: 0.98rem;
          }

          .brand-subtitle {
            font-size: 0.66rem;
            letter-spacing: 0.16em;
          }

          .hero-title {
            font-size: clamp(2.45rem, 12vw, 4.1rem);
          }

          .hero-title .line,
          .readiness-title .line {
            display: block;
          }

          .lead {
            font-size: 1.05rem;
          }

          .hero-main-card,
          .service-card,
          .readiness-card,
          .package-card,
          .faq-card,
          .contact-card,
          .legal-card,
          .about-card {
            padding: 20px;
            border-radius: 24px;
          }

          .hero-mini-grid,
          .hero-stats,
          .services-grid,
          .packages-grid {
            grid-template-columns: 1fr;
          }

          .button {
            width: 100%;
          }

          .footer-inner {
            grid-template-columns: 1fr;
          }

          .footer-links {
            justify-content: flex-start;
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
        <section id="home" className="screen-section hero-screen">
          <div className="container section-stack">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="pill">
                  <Sparkles size={15} />
                  Investment readiness first. Outreach second.
                </div>

                <h1 className="hero-title">
                  <span className="line">Bridging strong</span>
                  <span className="line">impact ventures</span>
                  <span className="line">with the right capital.</span>
                </h1>

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
              </div>

              <div className="hero-side">
                <Card className="glass hero-main-card">
                  <div className="eyebrow">What makes the difference</div>
                  <h3>Fundraising with more focus and less wasted effort</h3>
                  <div className="hero-mini-grid">
                    <div className="hero-mini-panel"><Users size={17} />Better investor fit instead of broad generic mass outreach.</div>
                    <div className="hero-mini-panel"><Search size={17} />Early readiness checks before expensive fundraising mistakes.</div>
                    <div className="hero-mini-panel"><Globe size={17} />Cross-border perspective and partner access where useful.</div>
                    <div className="hero-mini-panel"><Handshake size={17} />Selective, practical collaboration from preparation to active support.</div>
                  </div>
                </Card>

                <div className="hero-stats">
                  <Card className="glass stat-card"><strong>80%+</strong><span>Usually strong enough for a first serious fundraising discussion.</span></Card>
                  <Card className="glass stat-card"><strong>65–79%</strong><span>Often a good basis for targeted readiness improvement first.</span></Card>
                  <Card className="glass stat-card"><strong>Hands-on</strong><span>Practical support for startups, funds, and selected ecosystem partners.</span></Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="screen-section">
          <div className="container section-stack">
            <SectionTitle
              eyebrow="Services"
              title="What Bridge4Impact can do for you"
              text="A practical mix of fundraising preparation, investor targeting, and hands-on support—adapted to what is actually needed at your stage."
            />

            <div className="services-grid">
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

        <section id="readiness" className="screen-section">
          <div className="container section-stack">
            <SectionTitle
              eyebrow="Investment Readiness Pre-Check"
              title={
                <span className="readiness-title">
                  <span className="line">Pre-check your investment readiness</span>
                  <span className="line">and receive your personalized reports</span>
                </span>
              }
              text="Before I invest time in a first fundraising meeting with an interested entrepreneur, I usually ask for two readiness reports. This helps me understand your current preparation level and whether active fundraising already makes sense."
            />

            <div className="readiness-grid">
              {readinessSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.title} className="glass readiness-card">
                    <div>
                      <Icon size={22} />
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                    <div className="hero-actions" style={{ marginTop: '16px' }}>
                      <a className="button button-secondary" href={step.href}>{step.cta}</a>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="mini-bands">
              {readinessBands.map((band) => (
                <Card key={band.title} className="glass band-card">
                  <h3>{band.title}</h3>
                  <p>{band.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="screen-section">
          <div className="container section-stack">
            <div className="about-grid">
              <Card className="glass about-card">
                <div className="eyebrow">About</div>
                <div className="about-copy">
                  <h2>Independent fundraising support with an ecosystem mindset</h2>
                  <p>
                    Bridge4Impact by Günter Schmittberger is the public-facing brand for independent fundraising support focused on impact-oriented startups and venture funds.
                  </p>
                  <p>
                    The goal is not to push every company into outreach too early. The goal is to improve quality first, sharpen the narrative, and then focus on the investors most likely to care.
                  </p>
                  <p>
                    The advisory style is practical, selective, and collaborative, with a strong focus on investor fit, process discipline, and cross-border fundraising contexts.
                  </p>
                </div>
              </Card>

              <div className="about-panel">
                <Card className="glass about-card">
                  <div className="eyebrow">Works with</div>
                  <div className="about-tag"><strong>Impact Startups</strong><br />Founders who want stronger materials, sharper positioning, and better-fit investors.</div>
                  <div className="about-tag"><strong>Venture Funds</strong><br />GPs who need clearer LP positioning and thoughtful fundraising support.</div>
                  <div className="about-tag"><strong>Ecosystem Partners</strong><br />Advisors and international partners who want fundraising expertise to complement their own work.</div>
                </Card>
                <Card className="glass about-card">
                  <div className="eyebrow">How I work</div>
                  <div className="proof-grid">
                    {proofPoints.map((point) => (
                      <div key={point} className="proof-item"><CheckCircle2 size={16} />{point}</div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="screen-section">
          <div className="container section-stack">
            <SectionTitle
              eyebrow="Packages"
              title="A clear structure for how people can work with you"
              text="This section is designed to make your offer easier to understand and easier to buy."
            />

            <div className="packages-grid">
              {packages.map((pkg) => {
                const Icon = pkg.icon
                return (
                  <Card key={pkg.title} className="paper package-card">
                    <div className="package-top">
                      <div>
                        <h3>{pkg.title}</h3>
                        <div className="package-subtitle">{pkg.subtitle}</div>
                      </div>
                      <Icon size={22} />
                    </div>

                    <div className="package-items">
                      {pkg.items.map((item) => (
                        <div key={item} className="package-item"><CheckCircle2 size={16} />{item}</div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="screen-section">
          <div className="container section-stack">
            <SectionTitle
              eyebrow="FAQ"
              title="Questions a serious client may ask before reaching out"
            />

            <div className="faq-grid">
              {faqs.map((item) => (
                <Card key={item.q} className="glass faq-card">
                  <div className="faq-head">
                    <MessageSquare size={18} />
                    <h3>{item.q}</h3>
                  </div>
                  <p>{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="screen-section">
          <div className="container section-stack">
            <div className="contact-wrap">
              <Card className="paper contact-card">
                <div className="eyebrow dark">Next step</div>
                <h2>Ready to explore whether we are a fit?</h2>
                <p>
                  The best next step is usually the readiness pre-check. Once you have uploaded your deck to Unbiased Ventures, completed the D-Risk.IT questionnaire, and sent both reports by email, you are welcome to book a first online meeting.
                </p>
                <div className="info-box">
                  Please complete the two readiness checks first and then send both reports by email to guenter@bridge4impact.com.
                </div>
                <div className="legal-links">
                  <a href="#impressum">Impressum</a>
                  <a href="#datenschutz">Datenschutz</a>
                </div>
              </Card>

              <div className="contact-panels">
                <a className="contact-panel" href="https://calendly.com/g-schmittberger">
                  <div className="contact-title"><CalendarDays size={18} /> Book an intro call</div>
                  <div className="contact-text">calendly.com/g-schmittberger</div>
                </a>
                <a className="contact-panel" href="mailto:guenter@bridge4impact.com">
                  <div className="contact-title"><Mail size={18} /> Contact by email</div>
                  <div className="contact-text">guenter@bridge4impact.com</div>
                </a>
                <a className="contact-panel" href="tel:+491752985215">
                  <div className="contact-title"><Phone size={18} /> Phone / WhatsApp</div>
                  <div className="contact-text">+49 175 298 5215</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="impressum" className="screen-section">
          <div className="container section-stack">
            <Card className="paper legal-card">
              <div className="eyebrow dark">Impressum</div>
              <h2>Impressum</h2>
              <div className="legal-copy">
                <div>
                  <h3>Angaben zum Anbieter</h3>
                  <div className="legal-list">
                    <div><strong>Günter Schmittberger</strong></div>
                    <div>Bridge4Impact by Günter Schmittberger</div>
                    <div>Gonsbachblick 33</div>
                    <div>55122 Mainz</div>
                    <div>Deutschland</div>
                  </div>
                </div>

                <div>
                  <h3>Kontakt</h3>
                  <div className="legal-list">
                    <div>E-Mail: <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a></div>
                    <div>Telefon / WhatsApp: <a href="tel:+491752985215">+49 175 298 5215</a></div>
                  </div>
                </div>

                <div>
                  <h3>Umsatzsteuer</h3>
                  <div className="legal-list">
                    <div>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</div>
                    <div>DE167964328</div>
                  </div>
                </div>

                <div>
                  <h3>Verantwortlich für journalistisch-redaktionelle Inhalte</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger</div>
                    <div>Gonsbachblick 33, 55122 Mainz, Deutschland</div>
                  </div>
                </div>

                <div>
                  <h3>Hinweis nach § 36 VSBG</h3>
                  <p>
                    Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, soweit nicht im Einzelfall zwingende gesetzliche Verpflichtungen bestehen.
                  </p>
                </div>

                <div>
                  <h3>Haftung für Inhalte und Links</h3>
                  <p>
                    Die Inhalte dieser Website wurden mit kaufmännischer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                </div>

                <div className="legal-badges">
                  <div className="legal-badge"><BadgeCheck size={16} /> Anbieterkennzeichnung</div>
                  <div className="legal-badge"><ShieldCheck size={16} /> DDG / MStV / VSBG</div>
                  <div className="legal-badge"><Phone size={16} /> schnelle Kontaktaufnahme</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="datenschutz" className="screen-section">
          <div className="container section-stack">
            <Card className="paper legal-card">
              <div className="eyebrow dark">Datenschutz</div>
              <h2>Datenschutzhinweise</h2>
              <div className="legal-copy">
                <div>
                  <h3>1. Verantwortlicher</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger</div>
                    <div>Gonsbachblick 33, 55122 Mainz, Deutschland</div>
                    <div>E-Mail: <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a></div>
                    <div>Telefon / WhatsApp: <a href="tel:+491752985215">+49 175 298 5215</a></div>
                  </div>
                </div>

                <div>
                  <h3>2. Hosting und technische Bereitstellung</h3>
                  <p>
                    Diese Website wird über Cloudflare Pages bereitgestellt. Beim Aufruf der Website können technisch erforderliche Daten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Datei bzw. URL, Referrer, Browser- und Betriebssysteminformationen sowie weitere sicherheitsrelevante Verbindungsdaten. Die Verarbeitung erfolgt zur sicheren Bereitstellung der Website, zur Stabilität, Fehleranalyse und Abwehr von Missbrauch.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung dieses Online-Angebots.
                  </p>
                </div>

                <div>
                  <h3>3. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp</h3>
                  <p>
                    Wenn Sie Kontakt mit mir aufnehmen, verarbeite ich die von Ihnen übermittelten Angaben, um Ihre Anfrage zu bearbeiten und gegebenenfalls eine spätere geschäftliche Kommunikation vorzubereiten oder durchzuführen.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche Maßnahmen oder Vertragsdurchführung geht, sowie ergänzend Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen Anfragen.
                  </p>
                  <p>
                    Bitte beachten Sie: Wenn Sie WhatsApp nutzen, erfolgt die Kommunikation zusätzlich über den von Ihnen gewählten Messenger-Dienst. Dabei können weitere Daten durch den jeweiligen Anbieter verarbeitet werden. Wenn Sie eine datensparsamere Kommunikation bevorzugen, nutzen Sie bitte E-Mail.
                  </p>
                </div>

                <div>
                  <h3>4. Externe Links und Drittangebote</h3>
                  <p>
                    Diese Website enthält Links zu externen Angeboten, insbesondere zu Calendly, Unbiased Ventures und D-Risk.IT. Beim Anklicken eines solchen Links verlassen Sie diese Website. Für die Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.
                  </p>
                </div>

                <div>
                  <h3>5. Keine eigenen Analyse- oder Marketing-Tools nach aktuellem Stand</h3>
                  <p>
                    Nach aktuellem Stand werden auf dieser Website keine eigenen Tracking- oder Marketing-Tools eingesetzt. Technisch erforderliche Protokoll- und Sicherheitsdaten im Rahmen des Hostings und der Auslieferung der Website bleiben hiervon unberührt.
                  </p>
                </div>

                <div>
                  <h3>6. Speicherdauer</h3>
                  <p>
                    Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die Daten gelöscht oder die Verarbeitung eingeschränkt.
                  </p>
                </div>

                <div>
                  <h3>7. Ihre Rechte</h3>
                  <p>
                    Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                </div>

                <div>
                  <h3>8. Beschwerderecht bei der Aufsichtsbehörde</h3>
                  <p>
                    Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für Rheinland-Pfalz ist dies der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
                  </p>
                </div>

                <div>
                  <h3>9. Stand</h3>
                  <p>Stand dieser Datenschutzhinweise: April 2026.</p>
                </div>

                <div className="legal-note">
                  Diese Datenschutzhinweise sind als praxistaugliche Basis für die aktuelle Website ohne Kontaktformular und ohne eigene Tracking-Tools formuliert. Wenn später weitere Tools, eingebettete Inhalte, Newsletter, Formulare, Webanalyse oder zusätzliche Zahlungs- oder CRM-Dienste eingebunden werden, sollte der Text entsprechend aktualisiert werden.
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© Bridge4Impact by Günter Schmittberger — Fundraising advisory for impact startups and venture funds</div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#readiness">Readiness Check</a>
            <a href="#about">About</a>
            <a href="#packages">Packages</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
