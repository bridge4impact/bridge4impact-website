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
    text: 'Create your account, use promo code UVSCHMITTBCOMAN, upload your latest pitch deck, and generate your first report.',
    cta: 'Open Unbiased Ventures',
    href: 'https://www.unbiasedventures.ch/',
  },
  {
    icon: CheckCircle2,
    title: 'Complete the D-Risk.IT questionnaire',
    text: 'Answer the D-Risk.IT questions and generate your second report to identify strengths, gaps, and preparation needs.',
    cta: 'Open D-Risk.IT',
    href: 'https://dri.ai/drisk-it',
  },
  {
    icon: Mail,
    title: 'Send both reports by email',
    text: 'Please send both reports by email to guenter@bridge4impact.com before requesting a first fundraising meeting.',
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
    text: 'In most cases, more preparation is advisable before active fundraising support would be efficient.',
  },
]

const proofPoints = [
  'Investment-readiness-first approach',
  'AI-enhanced research and workflow',
  'Qualified investor targeting instead of broad mass outreach',
  'Cross-border perspective and partner access',
  'Focus on impact, venture, climate, and mission-driven capital',
  'Independent, practical, and selective collaboration style',
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
    a: 'Usually after the pre-check or before broad investor outreach starts. Early conversations often save substantial time, effort, and reputation.',
  },
  {
    q: 'Can you work internationally?',
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
          --bg: #0b8f90;
          --bg-deep: #0a7d7f;
          --bg-soft: rgba(255,255,255,0.07);
          --bg-softer: rgba(255,255,255,0.05);
          --cream: #f6f0e6;
          --text-dark: #0b8f90;
          --line: rgba(255,255,255,0.13);
          --line-soft: rgba(255,255,255,0.10);
          --shadow: 0 24px 60px rgba(0,0,0,0.14);
          --header-h: 82px;
          --gutter: 64px;
          --section-gap: 18px;
        }

        html {
          scroll-padding-top: calc(var(--header-h) + 10px);
        }

        body {
          overflow-x: hidden;
        }

        body, .site-shell {
          background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 52%, #0a8385 100%);
          color: var(--cream);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site-shell {
          min-height: 100vh;
          position: relative;
        }

        .background-glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 25% 20%, rgba(255,255,255,0.08), transparent 28%),
            radial-gradient(circle at 72% 14%, rgba(255,255,255,0.07), transparent 24%),
            radial-gradient(circle at 70% 72%, rgba(255,255,255,0.07), transparent 26%);
          z-index: 0;
        }

        .container {
          width: min(1320px, calc(100vw - var(--gutter) * 2));
          margin: 0 auto;
        }

        .topbar {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          min-height: var(--header-h);
          border-bottom: 1px solid var(--line);
          background: rgba(8, 120, 121, 0.82);
          backdrop-filter: blur(18px);
        }

        .topbar-inner {
          min-height: var(--header-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 0 1 auto;
        }

        .brand-logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          object-fit: cover;
          flex: 0 0 auto;
        }

        .brand-title {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }

        .brand-subtitle {
          margin-top: 4px;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(246,240,230,0.72);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: flex-end;
          font-size: 0.95rem;
          color: rgba(246,240,230,0.9);
        }

        .nav a:hover,
        .footer-links a:hover,
        .text-link:hover {
          color: #fff;
        }

        main {
          position: relative;
          z-index: 1;
          padding-top: var(--header-h);
        }

        section[id] {
          scroll-margin-top: calc(var(--header-h) + 10px);
        }

        .screen-section {
          min-height: calc(100svh - var(--header-h));
          display: flex;
          align-items: center;
          padding: 14px 0 18px;
        }

        .stack {
          width: 100%;
          display: grid;
          gap: 18px;
          align-content: center;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          font-size: 0.92rem;
          color: rgba(246,240,230,0.92);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
          gap: 26px;
          align-items: center;
        }

        .hero-copy {
          display: grid;
          gap: 14px;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(3.4rem, 6vw, 5.6rem);
          line-height: 0.94;
          letter-spacing: -0.055em;
          max-width: 10.4ch;
          text-wrap: balance;
        }

        .hero-title .line {
          display: block;
        }

        .lead {
          max-width: 47rem;
          font-size: 1.16rem;
          line-height: 1.58;
          color: rgba(246,240,230,0.86);
          margin: 0;
        }

        .sublead {
          max-width: 50rem;
          margin: 0;
          color: rgba(246,240,230,0.76);
          line-height: 1.64;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 6px;
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

        .card {
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.07);
          border-radius: 28px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
        }

        .card.cream {
          background: var(--cream);
          color: var(--text-dark);
          border-color: rgba(11,143,144,0.14);
        }

        .eyebrow {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(246,240,230,0.68);
        }

        .cream .eyebrow,
        .cream .section-title p,
        .cream .muted,
        .cream p,
        .cream li,
        .cream .legal-note,
        .cream .legal-copy,
        .cream .legal-list {
          color: rgba(11,143,144,0.84);
        }

        .hero-main-card {
          padding: 24px;
        }

        .hero-main-card h3 {
          margin: 10px 0 16px;
          font-size: 1.7rem;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .hero-mini-panel {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          padding: 14px 15px;
          border-radius: 18px;
          background: rgba(0,0,0,0.1);
          line-height: 1.48;
          font-size: 0.95rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          padding: 16px;
          border-radius: 22px;
        }

        .stat-card strong {
          display: block;
          font-size: 1.18rem;
          margin-bottom: 6px;
        }

        .stat-card span {
          display: block;
          line-height: 1.5;
          color: rgba(246,240,230,0.76);
        }

        .section-title {
          max-width: 70rem;
        }

        .section-title h2 {
          margin: 8px 0 0;
          font-size: clamp(2.4rem, 4.3vw, 4.2rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          text-wrap: balance;
        }

        .section-title p {
          max-width: 60rem;
          margin: 14px 0 0;
          color: rgba(246,240,230,0.78);
          line-height: 1.6;
        }

        .services-grid,
        .packages-grid,
        .faq-grid,
        .readiness-grid,
        .band-grid,
        .proof-grid {
          display: grid;
          gap: 16px;
        }

        .services-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .service-card,
        .readiness-card,
        .package-card,
        .faq-card,
        .about-card,
        .contact-card,
        .legal-card {
          padding: 22px;
          height: 100%;
        }

        .service-card h3,
        .readiness-card h3,
        .package-card h3,
        .faq-card h3,
        .about-card h3 {
          margin: 14px 0 10px;
          font-size: 1.32rem;
          line-height: 1.18;
          letter-spacing: -0.03em;
        }

        .service-card p,
        .readiness-card p,
        .package-card p,
        .faq-card p,
        .about-card p,
        .contact-card p,
        .legal-copy p,
        .legal-list,
        .legal-note {
          line-height: 1.58;
        }

        .readiness-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .readiness-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 238px;
        }

        .band-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .band-card {
          padding: 18px;
          border-radius: 22px;
        }

        .band-card h3 {
          margin: 0 0 8px;
          font-size: 1.16rem;
          line-height: 1.2;
        }

        .band-card p {
          margin: 0;
          color: rgba(246,240,230,0.78);
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: 16px;
        }

        .about-copy h2,
        .contact-card h2,
        .legal-card h2 {
          margin: 8px 0 12px;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1.04;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .about-copy p {
          margin: 0 0 12px;
          color: rgba(246,240,230,0.8);
        }

        .about-targets {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .about-target {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--line-soft);
          color: rgba(246,240,230,0.9);
          font-weight: 600;
        }

        .proof-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .proof-item,
        .package-item,
        .legal-badge {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 12px 14px;
          border-radius: 18px;
        }

        .proof-item {
          background: rgba(255,255,255,0.06);
          color: rgba(246,240,230,0.88);
        }

        .packages-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .package-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .faq-head {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .faq-card h3 {
          margin: 0;
        }

        .faq-card p {
          margin: 12px 0 0;
          color: rgba(246,240,230,0.78);
        }

        .contact-wrap {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(350px, 0.98fr);
          gap: 16px;
          align-items: stretch;
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
          min-height: 112px;
          padding: 18px 20px;
          border-radius: 20px;
          background: #fff;
          color: var(--text-dark);
          border: 1px solid rgba(11,143,144,0.14);
        }

        .contact-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .contact-text {
          color: rgba(11,143,144,0.76);
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .legal-copy {
          display: grid;
          gap: 14px;
          color: rgba(11,143,144,0.84);
        }

        .legal-copy h3 {
          margin: 0 0 6px;
          font-size: 1.12rem;
          line-height: 1.25;
        }

        .legal-list {
          display: grid;
          gap: 6px;
          color: rgba(11,143,144,0.84);
        }

        .legal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .legal-badge {
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.84);
        }

        .legal-note {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.84);
        }

        .text-link {
          color: rgba(11,143,144,0.86);
          font-weight: 600;
        }

        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .footer-inner {
          width: min(1320px, calc(100vw - var(--gutter) * 2));
          margin: 0 auto;
          padding: 18px 0 24px;
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

        @media (max-width: 1380px) {
          :root {
            --gutter: 40px;
          }
        }

        @media (max-width: 1180px) {
          .hero-grid,
          .about-grid,
          .contact-wrap,
          .legal-grid {
            grid-template-columns: 1fr;
          }

          .services-grid,
          .packages-grid,
          .readiness-grid,
          .band-grid,
          .faq-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hero-title {
            max-width: 12ch;
          }
        }

        @media (max-width: 980px) {
          :root {
            --header-h: 112px;
            --gutter: 24px;
          }

          .topbar-inner {
            display: grid;
            gap: 10px;
            padding: 8px 0;
            align-content: center;
          }

          .nav {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: none;
            padding-bottom: 2px;
            justify-content: flex-start;
          }

          .nav::-webkit-scrollbar {
            display: none;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: clamp(3rem, 8vw, 4.8rem);
            max-width: 11ch;
          }

          .hero-mini-grid,
          .hero-stats,
          .proof-grid,
          .services-grid,
          .packages-grid,
          .readiness-grid,
          .band-grid,
          .faq-grid,
          .legal-grid {
            grid-template-columns: 1fr;
          }

          .screen-section {
            min-height: auto;
            padding: 18px 0;
          }
        }

        @media (max-width: 680px) {
          :root {
            --header-h: 120px;
            --gutter: 14px;
          }

          .brand-logo {
            width: 38px;
            height: 38px;
            border-radius: 10px;
          }

          .brand-title {
            font-size: 0.98rem;
          }

          .brand-subtitle {
            font-size: 0.64rem;
            letter-spacing: 0.16em;
          }

          .hero-title {
            font-size: clamp(2.25rem, 12vw, 3.6rem);
            max-width: none;
          }

          .lead {
            font-size: 1.02rem;
          }

          .button {
            width: 100%;
          }

          .service-card,
          .readiness-card,
          .package-card,
          .faq-card,
          .about-card,
          .contact-card,
          .legal-card,
          .hero-main-card {
            padding: 18px;
            border-radius: 22px;
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
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="screen-section">
          <div className="container stack">
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
                <Card className="hero-main-card">
                  <div className="eyebrow">What makes the difference</div>
                  <h3>Fundraising with more focus and less wasted effort</h3>
                  <div className="hero-mini-grid">
                    <div className="hero-mini-panel">
                      <Users size={16} />
                      <span>Better investor fit instead of broad generic mass outreach.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Search size={16} />
                      <span>Early readiness checks before expensive fundraising mistakes.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Globe size={16} />
                      <span>Cross-border perspective and partner access where useful.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Handshake size={16} />
                      <span>Selective, practical collaboration from preparation to active support.</span>
                    </div>
                  </div>
                </Card>

                <div className="hero-stats">
                  <Card className="stat-card">
                    <strong>80%+</strong>
                    <span>Usually strong enough for a first serious fundraising discussion.</span>
                  </Card>
                  <Card className="stat-card">
                    <strong>65–79%</strong>
                    <span>Often a good basis for targeted readiness improvement first.</span>
                  </Card>
                  <Card className="stat-card">
                    <strong>Hands-on</strong>
                    <span>Practical support for startups, funds, and selected ecosystem partners.</span>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="screen-section">
          <div className="container stack">
            <SectionTitle
              eyebrow="Services"
              title="What Bridge4Impact can do for you"
              text="A practical mix of fundraising preparation, investor targeting, and hands-on support — adapted to what is actually needed at your stage."
            />

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="service-card">
                    <Icon size={24} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="readiness" className="screen-section">
          <div className="container stack">
            <SectionTitle
              eyebrow="Investment Readiness Pre-Check"
              title="Pre-check your investment readiness and receive your personalized reports"
              text="Before I invest time in a first fundraising meeting with an interested entrepreneur, I usually ask for two readiness reports. This helps me understand your current preparation level and whether active fundraising already makes sense."
            />

            <div className="readiness-grid">
              {readinessSteps.map((step) => {
                const Icon = step.icon
                return (
                  <Card key={step.title} className="readiness-card">
                    <div>
                      <Icon size={22} />
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                    <div>
                      <a className="button button-secondary" href={step.href}>
                        {step.cta}
                      </a>
                    </div>
                  </Card>
                )
              })}
            </div>

            <div className="band-grid">
              {readinessBands.map((band) => (
                <Card key={band.title} className="band-card">
                  <h3>{band.title}</h3>
                  <p>{band.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="screen-section">
          <div className="container stack">
            <div className="about-grid">
              <Card className="about-card">
                <div className="about-copy">
                  <div className="eyebrow">About</div>
                  <h2>Independent fundraising support with an ecosystem mindset</h2>
                  <p>
                    Bridge4Impact by Günter Schmittberger is built around a simple idea: better fundraising happens when preparation, investor fit, and execution work together.
                  </p>
                  <p>
                    Instead of pushing every company into outreach too early, the goal is to strengthen quality first — then focus on the investors most likely to care.
                  </p>
                  <p>
                    The advisory style is independent, practical, and collaborative, with a focus on impact-oriented startups, venture funds, and mission-driven capital.
                  </p>
                  <div className="about-targets">
                    <div className="about-target">Impact startups</div>
                    <div className="about-target">Venture funds</div>
                    <div className="about-target">Ecosystem partners</div>
                  </div>
                </div>
              </Card>

              <Card className="about-card">
                <div className="eyebrow">What this means in practice</div>
                <h3>Focused quality, better investor fit, and selective collaboration</h3>
                <div className="proof-grid">
                  {proofPoints.map((point) => (
                    <div key={point} className="proof-item">
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="packages" className="screen-section">
          <div className="container stack">
            <SectionTitle
              eyebrow="Packages"
              title="A clear structure for how people can work with you"
              text="This section is designed to make your offer easier to understand and easier to buy."
            />

            <div className="packages-grid">
              {packages.map((pkg) => {
                const Icon = pkg.icon
                return (
                  <Card key={pkg.title} className="package-card cream">
                    <div className="package-top">
                      <div>
                        <h3>{pkg.title}</h3>
                        <div className="package-subtitle">{pkg.subtitle}</div>
                      </div>
                      <Icon size={22} />
                    </div>

                    <div className="package-items">
                      {pkg.items.map((item) => (
                        <div key={item} className="package-item">
                          <CheckCircle2 size={16} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="faq" className="screen-section">
          <div className="container stack">
            <SectionTitle
              eyebrow="FAQ"
              title="Questions a serious client may ask before reaching out"
            />

            <div className="faq-grid">
              {faqs.map((faq) => (
                <Card key={faq.q} className="faq-card">
                  <div className="faq-head">
                    <MessageSquare size={18} />
                    <h3>{faq.q}</h3>
                  </div>
                  <p>{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="screen-section">
          <div className="container stack">
            <div className="contact-wrap">
              <Card className="contact-card cream">
                <div className="eyebrow">Next step</div>
                <h2>Ready to explore whether we are a fit?</h2>
                <p>
                  Please complete the two readiness checks first and then send both reports by email to guenter@bridge4impact.com.
                </p>
                <div className="info-box">
                  After that, we can discuss your current fundraising status, your materials, and the type of investors you actually want to reach.
                </div>
                <div className="legal-links">
                  <a className="text-link" href="#impressum">Go to Impressum</a>
                  <a className="text-link" href="#datenschutz">Go to Datenschutz</a>
                </div>
              </Card>

              <div className="contact-panels">
                <a className="contact-panel" href="https://calendly.com/g-schmittberger">
                  <div className="contact-title">
                    <CalendarDays size={20} />
                    <span>Book an intro call</span>
                  </div>
                  <div className="contact-text">calendly.com/g-schmittberger</div>
                </a>

                <a className="contact-panel" href="mailto:guenter@bridge4impact.com">
                  <div className="contact-title">
                    <Mail size={20} />
                    <span>Contact by email</span>
                  </div>
                  <div className="contact-text">guenter@bridge4impact.com</div>
                </a>

                <a className="contact-panel" href="tel:+491752985215">
                  <div className="contact-title">
                    <Phone size={20} />
                    <span>Phone / WhatsApp</span>
                  </div>
                  <div className="contact-text">+49 175 298 5215</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="impressum" className="screen-section">
          <div className="container stack">
            <Card className="legal-card cream">
              <div className="legal-copy">
                <div className="eyebrow">Impressum</div>
                <h2>Angaben gemäß § 5 DDG</h2>

                <div>
                  <h3>Diensteanbieter</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger</div>
                    <div>Gonsbachblick 33</div>
                    <div>55122 Mainz</div>
                    <div>Deutschland</div>
                  </div>
                </div>

                <div>
                  <h3>Kontakt</h3>
                  <div className="legal-list">
                    <div>E-Mail: guenter@bridge4impact.com</div>
                    <div>Telefon / WhatsApp: +49 175 298 5215</div>
                  </div>
                </div>

                <div>
                  <h3>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG</h3>
                  <div className="legal-list">
                    <div>DE167964328</div>
                  </div>
                </div>

                <div>
                  <h3>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger</div>
                    <div>Gonsbachblick 33</div>
                    <div>55122 Mainz</div>
                    <div>Deutschland</div>
                  </div>
                </div>

                <div>
                  <h3>Hinweis nach § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</h3>
                  <p>
                    Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div className="legal-badges">
                  <div className="legal-badge">
                    <BadgeCheck size={16} />
                    <span>Bridge4Impact by Günter Schmittberger</span>
                  </div>
                  <div className="legal-badge">
                    <ShieldCheck size={16} />
                    <span>Geschäftswebsite / Dienstleistungsangebot</span>
                  </div>
                </div>

                <div className="legal-note">
                  Diese Website dient der Darstellung von Dienstleistungen im Bereich Fundraising Advisory für Startups, Venture Funds und ausgewählte Ökosystempartner.
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="datenschutz" className="screen-section">
          <div className="container stack">
            <Card className="legal-card cream">
              <div className="legal-copy">
                <div className="eyebrow">Datenschutz</div>
                <h2>Datenschutzhinweise</h2>

                <div>
                  <h3>1. Verantwortlicher</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger</div>
                    <div>Gonsbachblick 33, 55122 Mainz, Deutschland</div>
                    <div>E-Mail: guenter@bridge4impact.com</div>
                    <div>Telefon / WhatsApp: +49 175 298 5215</div>
                  </div>
                </div>

                <div>
                  <h3>2. Allgemeine Hinweise zur Datenverarbeitung</h3>
                  <p>
                    Beim Aufruf dieser Website werden technisch erforderliche Informationen verarbeitet, insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Inhalte, Browser-Informationen, Referrer sowie technische Protokolldaten. Diese Verarbeitung ist erforderlich, um die Website sicher und stabil bereitzustellen.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren, stabilen und wirtschaftlichen Bereitstellung dieses Online-Angebots.
                  </p>
                </div>

                <div>
                  <h3>3. Hosting und Auslieferung über Cloudflare Pages / Cloudflare</h3>
                  <p>
                    Diese Website wird über Cloudflare Pages und Dienste der Cloudflare-Gruppe ausgeliefert. Dabei können personenbezogene Daten, insbesondere technische Verbindungsdaten und IP-Adressen, verarbeitet werden, um Inhalte auszuliefern, Angriffe abzuwehren und die Verfügbarkeit der Website sicherzustellen.
                  </p>
                  <p>
                    Weitere Informationen zur Verarbeitung personenbezogener Daten durch Cloudflare finden Sie in den Datenschutzinformationen von Cloudflare.
                  </p>
                </div>

                <div>
                  <h3>4. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp</h3>
                  <p>
                    Wenn Sie mich per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeite ich die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für eine gegebenenfalls anschließende geschäftliche Kommunikation.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um die Anbahnung oder Durchführung eines Vertrags geht, sowie ergänzend Art. 6 Abs. 1 lit. f DSGVO für allgemeine Anfragen und Kommunikation.
                  </p>
                </div>

                <div>
                  <h3>5. Terminbuchung über Calendly</h3>
                  <p>
                    Für die Terminvereinbarung wird auf einen externen Buchungsdienst weitergeleitet. Beim Aufruf dieses Dienstes werden personenbezogene Daten direkt durch den jeweiligen Anbieter verarbeitet. Bitte beachten Sie daher zusätzlich die Datenschutzinformationen des externen Buchungsdienstes.
                  </p>
                </div>

                <div>
                  <h3>6. Externe Links</h3>
                  <p>
                    Diese Website enthält Links zu externen Websites, insbesondere zu Unbiased Ventures und D-Risk.IT. Für die Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                  </p>
                </div>

                <div>
                  <h3>7. Cookies und Tracking</h3>
                  <p>
                    Auf dieser Website werden nach aktuellem Stand keine eigenen Analyse- oder Marketing-Tools eingesetzt. Sollten künftig zusätzliche Tools, Einbettungen oder Tracking-Dienste eingesetzt werden, werden diese Datenschutzhinweise entsprechend angepasst.
                  </p>
                </div>

                <div>
                  <h3>8. Speicherdauer</h3>
                  <p>
                    Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                  </p>
                </div>

                <div>
                  <h3>9. Ihre Rechte</h3>
                  <p>
                    Ihnen stehen nach der DSGVO insbesondere folgende Rechte zu: Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen bestimmte Verarbeitungen sowie das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.
                  </p>
                  <p>
                    Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                  </p>
                </div>

                <div>
                  <h3>10. Stand</h3>
                  <p>Stand dieser Datenschutzhinweise: April 2026</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>© Bridge4Impact by Günter Schmittberger — Fundraising Advisory for impact startups and venture funds</div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
