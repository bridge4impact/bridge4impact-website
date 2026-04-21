import React, { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
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
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

const CALENDLY_LINK = 'https://calendly.com/g-schmittberger'
const UNBIASED_LINK = 'https://www.unbiasedventures.ch/'
const DRISK_LINK = 'https://dri.ai/drisk-it'
const EQUISY_LINK = 'https://equisy.io/'


const AFFILIATIONS = {
  memberships: [
    {
      key: 'bvii',
      title: 'Bundesverband Impact Investing',
      subtitle: 'Membership',
      description: 'German impact investing association focused on promoting impact investing, knowledge-building, partnerships, and suitable framework conditions.',
      href: 'https://bundesinitiative-impact-investing.org/en/',
      previewHref: 'https://bundesinitiative-impact-investing.org/en/',
      source: 'turn656799view0',
    },
    {
      key: 'tti',
      title: 'Top Tier Impact',
      subtitle: 'Ambassador for the Frankfurt Area',
      description: 'Global ecosystem of investors, entrepreneurs, and corporate leaders with a private network, investing activity, and advisory work.',
      href: 'https://www.toptierimpact.com/',
      previewHref: 'https://www.toptierimpact.com/',
      source: 'turn656799view1',
    },
    {
      key: 'catalyst',
      title: 'Catalyst Now',
      subtitle: 'Member',
      description: 'Global movement and collaboration platform for social innovators and systems-change actors.',
      href: 'https://catalystnow.net/',
      previewHref: 'https://catalystnow.net/',
      source: 'turn420819view0',
    },
  ],
  partners: [
    {
      key: 'csg',
      title: 'capitalism & the social good group',
      subtitle: 'Selected partnership',
      description: 'Advisory group focused on innovation, sustainability, and stakeholder-oriented value creation.',
      href: 'https://www.csg-group.org/',
      previewHref: 'https://www.csg-group.org/',
      personName: 'Diane Kaldany',
      personHref: 'https://www.linkedin.com/in/dianekaldany/',
      source: 'turn420819view1',
    },
    {
      key: 'tbs',
      title: 'Transnational Business Solutions',
      subtitle: 'Selected partnership',
      description: 'Cross-border business and advisory collaboration associated with Sumantra Sen.',
      href: 'https://www.transbizsolution.com/',
      previewHref: 'https://www.transbizsolution.com/',
      personName: 'Sumantra Sen',
      personHref: 'https://www.linkedin.com/in/sumantra63/',
      source: '',
    },
    {
      key: 'umergence',
      title: 'Umergence',
      subtitle: 'Selected partnership',
      description: 'Capital raising and advisory platform with a seasoned team active across private capital relationships.',
      href: 'https://www.umergence.com/',
      previewHref: 'https://www.umergence.com/',
      personName: 'Will Hogan',
      personHref: 'https://www.linkedin.com/in/willhogan/',
      source: 'turn420819view2',
    },
    {
      key: 'bonomics',
      title: 'Bonomics',
      subtitle: 'Selected partnership',
      description: 'Strategic finance and fractional CFO-style advisory focused on clarity, growth, and decision support.',
      href: 'https://bonomics.wixsite.com/bonomics',
      previewHref: 'https://bonomics.wixsite.com/bonomics',
      personName: 'René Bonomi',
      personHref: 'https://www.linkedin.com/in/renebonomi/',
      source: 'turn420819view3',
    },
  ],
}

const EMBED_NOTE = 'Some external sites — especially LinkedIn and some company sites — may block in-site preview windows because of their security settings. In that case, use the direct link.'

// Replace these after you create the Stripe payment links.
const STRIPE_LINKS = {
  readiness: 'https://buy.stripe.com/fZueVdePFgZX3NR6C6eZ200',
  workflow: 'https://buy.stripe.com/fZu4gzgXN2538476C6eZ201',
  advisoryDeposit: 'https://buy.stripe.com/aFaeVdazp6ljbgjd0ueZ202',
}

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
    href: UNBIASED_LINK,
  },
  {
    icon: CheckCircle2,
    title: 'Complete the D-Risk.IT questionnaire',
    text: 'Answer the D-Risk.IT questions and generate your second report to identify strengths, gaps, and preparation needs.',
    cta: 'Open D-Risk.IT',
    href: DRISK_LINK,
  },
  {
    icon: Mail,
    title: 'Send both reports by email',
    text: 'Send both completed reports to guenter@bridge4impact.com before requesting a first fundraising meeting.',
    cta: 'Email the reports',
    href: 'mailto:guenter@bridge4impact.com',
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

const packageOverview = [
  {
    key: 'readiness',
    icon: FileText,
    title: 'Investor Readiness Audit',
    shortTitle: 'Readiness Audit',
    price: '€350 net',
    bestFor: 'Best for startups before active outreach',
    summary: 'Know whether you are ready to raise, what is missing, and what to fix first.',
    bullets: ['Pitch/deck review', 'Gap analysis', 'Positioning recommendations', '45-minute review call'],
    buyHref: STRIPE_LINKS.readiness,
    detailHref: '/?package=readiness',
    cta: 'Buy now',
  },
  {
    key: 'workflow',
    icon: Users,
    title: 'Fundraising Workflow Sprint',
    shortTitle: 'Workflow Sprint',
    price: '€1,200 net',
    bestFor: 'Best for teams that need structure fast',
    summary: 'Turn fundraising chaos into a repeatable system in a short, focused sprint.',
    bullets: ['CRM structure', 'Segmentation logic', 'Outreach templates', 'Follow-up workflow'],
    buyHref: STRIPE_LINKS.workflow,
    detailHref: '/?package=workflow',
    cta: 'Buy now',
  },
  {
    key: 'advisory',
    icon: LineChart,
    title: 'Fractional Fundraising Ops Support',
    shortTitle: 'Ops Support',
    price: 'Intro call + €350 net onboarding deposit',
    bestFor: 'Best for startups and fund managers in live fundraising mode',
    summary: 'Ongoing remote support without hiring a full-time fundraising operations person.',
    bullets: ['Weekly strategy support', 'folk workflow management', 'Targeting refinement', 'Pipeline review'],
    buyHref: STRIPE_LINKS.advisoryDeposit,
    detailHref: '/?package=advisory',
    cta: 'Pay deposit',
  },
]

const packageDetails = {
  readiness: {
    icon: FileText,
    title: 'Investor Readiness Audit',
    eyebrow: 'Package 1',
    price: '€350 net',
    bestFor: 'Startups before active outreach',
    promise: 'Know whether you are ready to raise, what is missing, and what to fix first.',
    intro:
      'This package is designed for founders who want a clear outside view before spending time and reputation on investor outreach.',
    includes: [
      'Review of pitch deck or fundraising materials',
      'Readiness assessment',
      'Identification of the biggest gaps',
      'Recommendations on positioning, materials, and process',
      '45-minute review call',
    ],
    outcome: [
      'You get a clearer picture of your current fundraising quality.',
      'You know which issues matter most before contacting investors.',
      'You receive practical next-step recommendations instead of generic feedback.',
    ],
    primaryCta: 'Buy Investor Readiness Audit',
    primaryHref: STRIPE_LINKS.readiness,
    secondaryCta: 'Back to package overview',
    secondaryHref: '/#packages',
  },
  workflow: {
    icon: Users,
    title: 'Fundraising Workflow Sprint',
    eyebrow: 'Package 2',
    price: '€1,200 net',
    bestFor: 'Teams that need structure fast',
    promise: 'In a short sprint, I help you turn fundraising chaos into a repeatable system.',
    intro:
      'This package is for teams that already have momentum but need a cleaner operating structure for outreach, follow-up, and investor qualification.',
    includes: [
      'folk CRM structure and pipeline design',
      'Key custom fields and segmentation logic',
      'Investor shortlist framework',
      'Outreach templates',
      'Follow-up workflow',
      'Practical next-step roadmap',
    ],
    outcome: [
      'You move from scattered outreach to a structured fundraising process.',
      'Your CRM setup becomes more useful for qualification and follow-up.',
      'Your team gets a clearer operating rhythm for investor communications.',
    ],
    primaryCta: 'Buy Fundraising Workflow Sprint',
    primaryHref: STRIPE_LINKS.workflow,
    secondaryCta: 'Back to package overview',
    secondaryHref: '/#packages',
  },
  advisory: {
    icon: LineChart,
    title: 'Fractional Fundraising Ops Support',
    eyebrow: 'Package 3',
    price: 'Free intro call + €350 net onboarding deposit',
    bestFor: 'Startups and fund managers in live fundraising mode',
    promise: 'Ongoing remote support without hiring a full-time fundraising operations person.',
    intro:
      'This package is for live fundraising situations where selective ongoing support is needed across strategy, pipeline discipline, targeting, and follow-up.',
    includes: [
      'Weekly strategy and execution support',
      'Workflow management in folk',
      'Investor targeting refinement',
      'Outreach and follow-up improvements',
      'Pipeline review and founder guidance',
    ],
    outcome: [
      'You get ongoing external support without committing to a full-time hire.',
      'Your fundraising process stays more disciplined during live execution.',
      'The €350 onboarding deposit can be credited against the first monthly invoice if the engagement starts.',
    ],
    primaryCta: 'Book free intro call',
    primaryHref: CALENDLY_LINK,
    tertiaryCta: 'Pay onboarding deposit',
    tertiaryHref: STRIPE_LINKS.advisoryDeposit,
    secondaryCta: 'Back to package overview',
    secondaryHref: '/#packages',
  },
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`.trim()}>{children}</div>
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

function Logo() {
  return <img src="/logo.png" alt="Bridge4Impact logo" className="brand-logo" />
}

export default function App() {
  const packageKey = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('package') : null
  const packagePage = packageKey ? packageDetails[packageKey] : null
  const rootPath = typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
  const homeHref = (hash = '') => `${rootPath}${hash}`
  const [previewItem, setPreviewItem] = useState(null)
  const allAffiliations = useMemo(() => [...AFFILIATIONS.memberships, ...AFFILIATIONS.partners], [])

  return (
    <div className="site-shell">
      <div className="background-glow" aria-hidden="true" />

      <style>{`
        :root {
          --bg: #0b8f90;
          --bg-deep: #0a7d7f;
          --cream: #f6f0e6;
          --text-dark: #0b8f90;
          --line: rgba(255,255,255,0.13);
          --line-soft: rgba(255,255,255,0.10);
          --shadow: 0 24px 60px rgba(0,0,0,0.14);
          --header-h: 84px;
          --max-w: 1440px;
          --gutter: 28px;
          --section-bottom: 36px;
          --section-top: 8px;
          --gap: 18px;
        }

        *, *::before, *::after { box-sizing: border-box; }
        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
          scroll-padding-top: var(--header-h);
        }
        body {
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
          background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 54%, #0a8385 100%);
          color: var(--cream);
        }
        a { color: inherit; text-decoration: none; }
        .site-shell {
          min-height: 100vh;
          position: relative;
          background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 54%, #0a8385 100%);
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
        .wrap {
          width: min(var(--max-w), calc(100vw - var(--gutter) * 2));
          margin: 0 auto;
        }
        .topbar {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          height: var(--header-h);
          border-bottom: 1px solid var(--line);
          background: rgba(8,120,121,0.84);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }
        .topbar-inner {
          height: var(--header-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .brand-logo {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .brand-title {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .brand-subtitle {
          margin-top: 3px;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(246,240,230,0.72);
          white-space: nowrap;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 0.92rem;
          color: rgba(246,240,230,0.88);
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .nav a:hover { color: #fff; }
        main {
          position: relative;
          z-index: 1;
          padding-top: var(--header-h);
        }
        section[id] { scroll-margin-top: var(--header-h); }
        .page-section {
          min-height: calc(100svh - var(--header-h));
          padding: var(--section-top) 0 var(--section-bottom);
          display: flex;
          align-items: flex-start;
        }
        .stack { display: grid; gap: 24px; }
        .eyebrow {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(246,240,230,0.64);
        }
        .section-title h2 {
          margin: 8px 0 0;
          font-size: clamp(2.3rem, 4.1vw, 3.9rem);
          line-height: 1.03;
          letter-spacing: -0.045em;
          max-width: 22ch;
        }
        .section-title p {
          max-width: 76ch;
          margin: 14px 0 0;
          color: rgba(246,240,230,0.76);
          line-height: 1.62;
          font-size: 1rem;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          font-size: 0.9rem;
          color: rgba(246,240,230,0.92);
          width: fit-content;
        }
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 12px 20px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.97rem;
          transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
          cursor: pointer;
          white-space: nowrap;
        }
        .button:hover { transform: translateY(-1px); }
        .button-primary {
          background: var(--cream);
          color: var(--text-dark);
          box-shadow: var(--shadow);
          border: none;
        }
        .button-secondary {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.28);
          color: var(--cream);
        }
        .button-secondary:hover { background: rgba(255,255,255,0.06); }
        .button-cream-outline {
          background: transparent;
          border: 1px solid rgba(11,143,144,0.25);
          color: var(--text-dark);
        }
        .button-cream-outline:hover { background: rgba(11,143,144,0.05); }
        .card {
          border: 1px solid var(--line-soft);
          background: rgba(255,255,255,0.07);
          border-radius: 24px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .card.cream {
          background: var(--cream);
          color: var(--text-dark);
          border-color: rgba(11,143,144,0.14);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.22fr) minmax(0, 0.78fr);
          gap: 28px;
          align-items: start;
        }
        .hero-copy {
          display: grid;
          gap: 18px;
        }
        .hero-title {
          font-size: clamp(3.2rem, 5.6vw, 6rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          max-width: none;
        }
        .hero-title .line { display: block; }
        .hero-title .line.small { font-size: 0.76em; line-height: 0.94; }
        .lead {
          font-size: 1rem;
          line-height: 1.55;
          color: rgba(246,240,230,0.86);
          max-width: none;
        }
        .sublead {
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(246,240,230,0.74);
          max-width: 50rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 6px;
        }
        .hero-side { display: grid; gap: var(--gap); }
        .hero-main-card { padding: 26px; }
        .hero-main-card h3 {
          margin: 10px 0 16px;
          font-size: 1.52rem;
          line-height: 1.12;
          letter-spacing: -0.03em;
        }
        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .hero-mini-panel {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          padding: 13px 14px;
          border-radius: 16px;
          background: rgba(0,0,0,0.12);
          line-height: 1.5;
          font-size: 0.9rem;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .stat-card {
          padding: 16px;
          border-radius: 20px;
        }
        .stat-card strong {
          display: block;
          font-size: 1.14rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .stat-card span {
          display: block;
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(246,240,230,0.74);
        }
        .services-grid,
        .readiness-grid,
        .packages-grid,
        .faq-grid {
          display: grid;
          gap: var(--gap);
        }
        .services-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .readiness-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .packages-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .faq-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .service-card,
        .readiness-card,
        .faq-card,
        .package-overview-card { padding: 24px; }
        .service-card h3,
        .readiness-card h3,
        .faq-card h3,
        .package-overview-card h3 {
          margin: 14px 0 10px;
          font-size: 1.18rem;
          line-height: 1.24;
          letter-spacing: -0.025em;
        }
        .service-card p,
        .readiness-card p,
        .faq-card p,
        .package-overview-card p {
          line-height: 1.62;
          color: rgba(246,240,230,0.78);
          font-size: 0.97rem;
        }
        .package-price {
          margin-top: 14px;
          font-weight: 700;
          font-size: 1.08rem;
          color: var(--cream);
        }
        .package-bestfor {
          margin-top: 6px;
          font-size: 0.92rem;
          color: rgba(246,240,230,0.68);
        }
        .package-bullets {
          margin-top: 16px;
          display: grid;
          gap: 8px;
        }
        .package-bullets div {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 0.93rem;
          line-height: 1.5;
          color: rgba(246,240,230,0.82);
        }
        .package-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .detail-shell {
          display: grid;
          gap: 20px;
          max-width: 1100px;
        }
        .detail-card { padding: 30px; }
        .detail-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 12px;
        }
        .detail-card h1 {
          font-size: clamp(2.5rem, 4.6vw, 4.6rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 15ch;
        }
        .detail-meta {
          display: grid;
          gap: 8px;
          margin-top: 12px;
          color: rgba(246,240,230,0.84);
          font-size: 1rem;
          line-height: 1.6;
        }
        .detail-price {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--cream);
        }
        .detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          gap: var(--gap);
        }
        .detail-body,
        .detail-side { display: grid; gap: var(--gap); }
        .detail-panel { padding: 24px; }
        .detail-panel h3 {
          margin-bottom: 12px;
          font-size: 1.12rem;
          letter-spacing: -0.02em;
        }
        .detail-list {
          display: grid;
          gap: 10px;
          color: rgba(246,240,230,0.82);
          font-size: 0.97rem;
          line-height: 1.6;
        }
        .detail-list div {
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }
        .detail-note {
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.06);
          color: rgba(246,240,230,0.78);
          font-size: 0.94rem;
          line-height: 1.6;
        }
        .detail-cta-card { padding: 24px; }
        .detail-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 20px;
          align-items: stretch;
        }
        .about-card { padding: 32px; }
        .about-card h2 {
          margin: 10px 0 16px;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          line-height: 1.06;
          letter-spacing: -0.04em;
          max-width: none;
        }
        .about-card h2 .line { display: block; }
        .about-card h3 {
          margin: 10px 0 18px;
          font-size: 1.28rem;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }
        .about-card p {
          line-height: 1.65;
          color: rgba(246,240,230,0.78);
          margin-bottom: 12px;
        }
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .proof-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          color: rgba(246,240,230,0.88);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        .legal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--gap);
        }
        .legal-card { padding: 28px; }
        .legal-card.cream { color: var(--text-dark); }
        .legal-copy {
          display: grid;
          gap: 18px;
          color: rgba(11,143,144,0.84);
        }
        .legal-copy h2 {
          font-size: clamp(1.7rem, 2.8vw, 2.4rem);
          line-height: 1.08;
          letter-spacing: -0.04em;
        }
        .legal-copy h3 {
          margin-bottom: 6px;
          font-size: 1.06rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-dark);
        }
        .legal-copy p,
        .legal-copy li {
          line-height: 1.62;
          font-size: 0.96rem;
        }
        .legal-copy ul { padding-left: 18px; }
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .footer-inner {
          padding: 18px 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          color: rgba(246,240,230,0.62);
          font-size: 0.9rem;
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-links a:hover { color: #fff; }

        @media (max-width: 1180px) {
          .hero-grid,
          .detail-grid,
          .about-grid,
          .legal-grid {
            grid-template-columns: 1fr;
          }
          .services-grid,
          .packages-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 980px) {
          :root {
            --header-h: 108px;
            --gutter: 20px;
          }
          .topbar-inner {
            height: auto;
            padding: 10px 0;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 8px;
          }
          .nav {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: none;
            justify-content: flex-start;
            font-size: 0.88rem;
            gap: 14px;
            padding-bottom: 2px;
            width: 100%;
          }
          .nav::-webkit-scrollbar { display: none; }
          .services-grid,
          .readiness-grid,
          .packages-grid,
          .faq-grid,
          .hero-mini-grid,
          .hero-stats,
          .proof-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .hero-title { font-size: clamp(2.9rem, 8vw, 4.6rem); }
          .section-title h2 { max-width: 22ch; }
        }
        @media (max-width: 640px) {
          :root {
            --header-h: 116px;
            --gutter: 14px;
            --section-top: 8px;
            --section-bottom: 34px;
          }
          .hero-title { font-size: clamp(2.15rem, 10vw, 3.25rem); max-width: none; }
          .hero-title .line.small { font-size: 0.84em; }
          .lead { font-size: 1rem; }
          .button { width: 100%; }
          .services-grid,
          .readiness-grid,
          .packages-grid,
          .faq-grid,
          .hero-mini-grid,
          .hero-stats,
          .proof-grid { grid-template-columns: 1fr; }
          .detail-card,
          .detail-panel,
          .detail-cta-card,
          .about-card,
          .legal-card { padding: 22px 20px; }
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a href={homeHref('#home')} className="brand">
            <Logo />
            <div>
              <div className="brand-title">Bridge4Impact</div>
              <div className="brand-subtitle">by Günter Schmittberger</div>
            </div>
          </a>
          <nav className="nav">
            <a href={homeHref('#home')}>Home</a>
            <a href={homeHref('#services')}>Services</a>
            <a href={homeHref('#readiness')}>Readiness Check</a>
            <a href={homeHref('#about')}>About</a>
            <a href={homeHref('#packages')}>Packages</a>
            <a href={homeHref('#faq')}>FAQ</a>
            <a href={homeHref('#contact')}>Contact</a>
            <a href={homeHref('#impressum')}>Impressum</a>
            <a href={homeHref('#datenschutz')}>Datenschutz</a>
          </nav>
        </div>
      </header>

      <main>
        {packagePage ? (
          <section className="page-section" id="package-detail">
            <div className="wrap detail-shell">
              <a href={packagePage.secondaryHref} className="pill" style={{ width: 'fit-content' }}>
                <ArrowLeft size={15} /> Back to package overview
              </a>

              <Card className="detail-card">
                <div className="detail-top">
                  <div>
                    <div className="eyebrow">{packagePage.eyebrow}</div>
                    <h1>{packagePage.title}</h1>
                    <div className="detail-meta">
                      <div><strong>Best for:</strong> {packagePage.bestFor}</div>
                      <div className="detail-price">{packagePage.price}</div>
                      <div>{packagePage.promise}</div>
                    </div>
                  </div>
                  {React.createElement(packagePage.icon, { size: 28 })}
                </div>
                <p className="sublead" style={{ maxWidth: '74ch' }}>{packagePage.intro}</p>
              </Card>

              <div className="detail-grid">
                <div className="detail-body">
                  <Card className="detail-panel">
                    <h3>What is included</h3>
                    <div className="detail-list">
                      {packagePage.includes.map((item) => (
                        <div key={item}><CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 3 }} /><span>{item}</span></div>
                      ))}
                    </div>
                  </Card>
                  <Card className="detail-panel">
                    <h3>Expected outcome</h3>
                    <div className="detail-list">
                      {packagePage.outcome.map((item) => (
                        <div key={item}><ArrowRight size={16} style={{ flexShrink: 0, marginTop: 3 }} /><span>{item}</span></div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="detail-side">
                  <Card className="detail-cta-card cream">
                    <div className="eyebrow">Next step</div>
                    <h3 style={{ margin: '10px 0 12px', fontSize: '1.35rem', lineHeight: 1.2 }}>{packagePage.title}</h3>
                    <p style={{ color: 'rgba(11,143,144,0.78)', lineHeight: 1.6 }}>
                      All prices are shown net. VAT is added where legally required.
                    </p>
                    <div className="detail-cta-actions">
                      <a className="button button-primary" href={packagePage.primaryHref} target="_blank" rel="noopener noreferrer">
                        {packagePage.primaryCta}
                      </a>
                      {packagePage.tertiaryCta ? (
                        <a className="button button-cream-outline" href={packagePage.tertiaryHref} target="_blank" rel="noopener noreferrer">
                          {packagePage.tertiaryCta}
                        </a>
                      ) : null}
                      <a className="button button-cream-outline" href={packagePage.secondaryHref}>
                        {packagePage.secondaryCta}
                      </a>
                    </div>
                  </Card>
                  <div className="detail-note">
                    Package 3 uses a free intro call first. If both sides want to move forward, the €350 net onboarding deposit can be credited against the first monthly invoice if the engagement starts.
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section id="home" className="page-section">
              <div className="wrap stack">
                <div className="hero-grid">
                  <div className="hero-copy">
                    <div className="pill"><Sparkles size={15} />Investment readiness first. Outreach second.</div>
                    <h1 className="hero-title">
                      <span className="line">Bridging strong</span>
                      <span className="line">impact ventures</span>
                      <span className="line small">with the</span>
                      <span className="line">right capital.</span>
                    </h1>
                    <p className="lead">
                      Bridge4Impact helps impact startups and venture funds become more investment ready, reach better-fit investors, and run smarter fundraising processes.
                    </p>
                    <p className="sublead">
                      Investors are highly selective. That is why my work often starts before fundraising itself: sharpening the story, revealing weaknesses early, improving materials, and focusing effort where the chance of conversion is highest.
                    </p>
                    <div className="hero-actions">
                      <a className="button button-primary" href="#readiness">Start the pre-check <ArrowRight size={18} /></a>
                      <a className="button button-secondary" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Book an intro call</a>
                    </div>
                  </div>

                  <div className="hero-side">
                    <Card className="hero-main-card">
                      <div className="eyebrow">What makes the difference</div>
                      <h3>Fundraising with more focus and less wasted effort</h3>
                      <div className="hero-mini-grid">
                        <div className="hero-mini-panel"><Users size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span>Better investor fit instead of broad generic mass outreach.</span></div>
                        <div className="hero-mini-panel"><Search size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span>Early readiness checks before expensive fundraising mistakes.</span></div>
                        <div className="hero-mini-panel"><Globe size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span>Cross-border perspective and partner access where useful.</span></div>
                        <div className="hero-mini-panel"><Handshake size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span>Selective, practical collaboration from preparation to active support.</span></div>
                      </div>
                    </Card>
                    <div className="hero-stats">
                      <Card className="stat-card"><strong>80%+</strong><span>Usually strong enough for a first serious fundraising discussion.</span></Card>
                      <Card className="stat-card"><strong>65–79%</strong><span>Often a good basis for targeted readiness improvement first.</span></Card>
                      <Card className="stat-card"><strong>Hands-on</strong><span>Practical support for startups, funds, and selected ecosystem partners.</span></Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="page-section">
              <div className="wrap stack">
                <SectionTitle eyebrow="Services" title="What Bridge4Impact can do for you" text="A practical mix of fundraising preparation, investor targeting, and hands-on support — adapted to what is actually needed at your stage." />
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

            <section id="readiness" className="page-section">
              <div className="wrap stack">
                <SectionTitle eyebrow="Investment Readiness Pre-Check" title="Pre-check your investment readiness before we talk" text="Before I invest time in a first fundraising meeting, I ask for two readiness reports. This helps me understand your current preparation level and whether active fundraising already makes sense." />
                <div className="readiness-grid">
                  {readinessSteps.map((step) => {
                    const Icon = step.icon
                    return (
                      <Card key={step.title} className="readiness-card">
                        <div>
                          <Icon size={24} />
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                        <div>
                          <a className="button button-secondary" href={step.href} target={step.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{step.cta}</a>
                        </div>
                      </Card>
                    )
                  })}
                </div>
                <Card className="readiness-card">
                  <div>
                    <BriefcaseBusiness size={24} />
                    <h3>No data room yet?</h3>
                    <p>If you do not yet have a structured data room, I recommend creating a paid account on Equisy before serious investor outreach.</p>
                  </div>
                  <div>
                    <a className="button button-secondary" href={EQUISY_LINK} target="_blank" rel="noopener noreferrer">Open Equisy</a>
                  </div>
                </Card>
              </div>
            </section>

            <section id="about" className="page-section">
              <div className="wrap stack">
                <div className="about-grid">
                  <Card className="about-card">
                    <div className="eyebrow">About</div>
                    <h2>
                      <span className="line">Independent fundraising support</span>
                      <span className="line">with an ecosystem mindset</span>
                    </h2>
                    <p>
                      Bridge4Impact by Günter Schmittberger is built around a simple idea: better fundraising happens when preparation, investor fit, and execution work together.
                    </p>
                    <p>
                      Instead of pushing every company into outreach too early, the goal is to strengthen quality first — then focus on the investors most likely to care.
                    </p>
                    <p>
                      The advisory style is independent, practical, and collaborative, with a focus on impact-oriented startups, venture funds, and mission-driven capital.
                    </p>
                  </Card>
                  <Card className="about-card">
                    <div className="eyebrow">What this means in practice</div>
                    <h3>Focused quality, better investor fit, and selective collaboration</h3>
                    <div className="proof-grid">
                      {[
                        'Investment-readiness-first approach',
                        'AI-enhanced research and workflow',
                        'Qualified investor targeting instead of broad mass outreach',
                        'Cross-border perspective and partner access',
                        'Focus on impact, venture, climate, and mission-driven capital',
                        'Independent, practical, and selective collaboration style',
                      ].map((point) => (
                        <div key={point} className="proof-item"><CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 2 }} /><span>{point}</span></div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>



            <section id="network" className="page-section">
              <div className="wrap stack">
                <SectionTitle eyebrow="Memberships & selected partnerships" title="Credibility, network access, and aligned collaboration" text="These memberships and selected partnerships strengthen positioning, signal ecosystem access, and help explain the broader context in which Bridge4Impact operates." />
                <p className="network-note">
                  My recommendation is to present them in two clearly separated groups: memberships and selected partnerships. That keeps the message credible and avoids any impression that every organization is formally endorsing every service on this site. Some external sites can be previewed inside the website window; others may block this for security reasons.
                </p>

                <div className="network-grid">
                  <h3 className="network-subtitle">Memberships</h3>
                  <div className="network-cards">
                    {AFFILIATIONS.memberships.map((item) => (
                      <Card key={item.key} className="network-card">
                        <div className="network-tag">{item.subtitle}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="network-actions">
                          <button className="button button-secondary" type="button" onClick={() => setPreviewItem(item)}>View in website window</button>
                          <a className="button button-primary" href={item.href} target="_blank" rel="noopener noreferrer">Open site</a>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="network-grid">
                  <h3 className="network-subtitle">Selected partnerships</h3>
                  <div className="network-cards">
                    {AFFILIATIONS.partners.map((item) => (
                      <Card key={item.key} className="network-card">
                        <div className="network-tag">{item.subtitle}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="network-actions">
                          <button className="button button-secondary" type="button" onClick={() => setPreviewItem(item)}>View in website window</button>
                          <a className="button button-primary" href={item.href} target="_blank" rel="noopener noreferrer">Open site</a>
                          {item.personHref ? <a className="button button-secondary" href={item.personHref} target="_blank" rel="noopener noreferrer">Open {item.personName}</a> : null}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="packages" className="page-section">
              <div className="wrap stack">
                <SectionTitle eyebrow="Packages" title="Choose the right starting package" text="Start with a compact overview here. Each package also has its own dedicated detail page with fuller explanation, CTA, and payment logic." />
                <div className="packages-grid">
                  {packageOverview.map((pkg) => {
                    const Icon = pkg.icon
                    return (
                      <Card key={pkg.key} className="package-overview-card">
                        <Icon size={24} />
                        <h3>{pkg.title}</h3>
                        <p>{pkg.summary}</p>
                        <div className="package-price">{pkg.price}</div>
                        <div className="package-bestfor">{pkg.bestFor}</div>
                        <div className="package-bullets">
                          {pkg.bullets.map((item) => (
                            <div key={item}><CheckCircle2 size={15} style={{ flexShrink: 0, marginTop: 2 }} /><span>{item}</span></div>
                          ))}
                        </div>
                        <div className="package-actions">
                          <a className="button button-secondary" href={pkg.detailHref}>View details</a>
                          {pkg.key === 'advisory' ? (
                            <a className="button button-primary" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Book intro call</a>
                          ) : (
                            <a className="button button-primary" href={pkg.buyHref} target="_blank" rel="noopener noreferrer">{pkg.cta}</a>
                          )}
                        </div>
                      </Card>
                    )
                  })}
                </div>
                <div className="detail-note">
                  All prices are shown net. VAT is added where legally required. Package 3 uses a free intro call first and a separate onboarding deposit if both sides want to continue.
                </div>
              </div>
            </section>

            <section id="faq" className="page-section">
              <div className="wrap stack">
                <SectionTitle eyebrow="FAQ" title="Questions a serious client may ask before reaching out" />
                <div className="faq-grid">
                  {faqs.map((item) => (
                    <Card key={item.q} className="faq-card">
                      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <MessageSquare size={18} style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <h3>{item.q}</h3>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section id="contact" className="page-section">
              <div className="wrap stack">
                <Card className="cream legal-card">
                  <div className="legal-copy">
                    <div className="eyebrow">Next step</div>
                    <h2>Ready to explore whether we are a fit?</h2>
                    <p>Please complete the two readiness checks first and then send both reports by email to guenter@bridge4impact.com.</p>
                    <div style={{ display: 'grid', gap: 12 }}>
                      <a className="button button-cream-outline" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                        <CalendarDays size={18} /> Book free intro call
                      </a>
                      <a className="button button-cream-outline" href="mailto:guenter@bridge4impact.com">
                        <Mail size={18} /> Contact by email
                      </a>
                      <a className="button button-cream-outline" href="tel:+491752985215">
                        <Phone size={18} /> Phone / WhatsApp: +49 175 298 5215
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section id="impressum" className="page-section">
              <div className="wrap legal-grid">
                <Card className="cream legal-card">
                  <div className="legal-copy">
                    <div className="eyebrow">Impressum</div>
                    <h2>Angaben gemäß § 5 DDG</h2>
                    <div>
                      <h3>Anbieter</h3>
                      <p>
                        Günter Schmittberger<br />
                        Gonsbachblick 33<br />
                        55122 Mainz<br />
                        Deutschland
                      </p>
                    </div>
                    <div>
                      <h3>Kontakt</h3>
                      <p>
                        E-Mail: <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a><br />
                        Telefon / WhatsApp: <a href="tel:+491752985215">+49 175 298 5215</a>
                      </p>
                    </div>
                    <div>
                      <h3>Umsatzsteuer</h3>
                      <p>USt-IdNr.: DE167964328</p>
                    </div>
                  </div>
                </Card>
                <Card className="cream legal-card">
                  <div className="legal-copy">
                    <div className="eyebrow">Weitere Hinweise</div>
                    <h2>Redaktionelle Verantwortung</h2>
                    <div>
                      <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
                      <p>
                        Günter Schmittberger<br />
                        Gonsbachblick 33<br />
                        55122 Mainz<br />
                        Deutschland
                      </p>
                    </div>
                    <div>
                      <h3>Hinweis nach VSBG</h3>
                      <p>
                        Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </div>
                    <div>
                      <h3>Markenname</h3>
                      <p>Öffentlich sichtbare Marke: Bridge4Impact by Günter Schmittberger.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section id="datenschutz" className="page-section">
              <div className="wrap">
                <Card className="cream legal-card">
                  <div className="legal-copy">
                    <div className="eyebrow">Datenschutz</div>
                    <h2>Datenschutzhinweise</h2>
                    <div>
                      <h3>1. Verantwortlicher</h3>
                      <p>
                        Verantwortlich für die Datenverarbeitung auf dieser Website ist Günter Schmittberger, Gonsbachblick 33, 55122 Mainz, Deutschland, E-Mail: guenter@bridge4impact.com.
                      </p>
                    </div>
                    <div>
                      <h3>2. Hosting und technische Bereitstellung</h3>
                      <p>
                        Diese Website wird über Cloudflare Pages bereitgestellt. Dabei können technisch notwendige Verbindungsdaten, Sicherheitsdaten und Server-Logdaten verarbeitet werden, um die Website zuverlässig und sicher auszuliefern.
                      </p>
                    </div>
                    <div>
                      <h3>3. Kontaktaufnahme</h3>
                      <p>
                        Wenn Sie per E-Mail, Telefon oder WhatsApp Kontakt aufnehmen, werden die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage verarbeitet. Dies gilt auch für übersandte Reports und Unterlagen im Rahmen des Investment-Readiness-Checks.
                      </p>
                    </div>
                    <div>
                      <h3>4. Externe Links und Terminbuchung</h3>
                      <p>
                        Diese Website enthält Links zu externen Diensten, insbesondere Calendly, Unbiased Ventures, D-Risk.IT und später gegebenenfalls Stripe. Beim Anklicken dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
                      </p>
                    </div>
                    <div>
                      <h3>5. Speicherdauer und Rechte</h3>
                      <p>
                        Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch im Rahmen der gesetzlichen Vorgaben zu.
                      </p>
                    </div>
                    <div>
                      <h3>6. Beschwerderecht</h3>
                      <p>
                        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist insbesondere der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
                      </p>
                    </div>
                    <div>
                      <h3>7. Hinweis</h3>
                      <p>
                        Auf dieser Website werden nach aktuellem Stand keine eigenen Analyse- oder Marketing-Tracking-Tools eingesetzt. Sobald zusätzliche Dienste eingebunden werden, werden diese Datenschutzhinweise entsprechend angepasst.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          </>
        )}

          {previewItem ? (
            <div className="preview-backdrop" role="dialog" aria-modal="true" aria-label={previewItem.title} onClick={() => setPreviewItem(null)}>
              <div className="preview-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="preview-head">
                  <div>
                    <div className="eyebrow">Preview window</div>
                    <h3>{previewItem.title}</h3>
                  </div>
                  <button className="button button-secondary" type="button" onClick={() => setPreviewItem(null)}>
                    <ArrowLeft size={18} /> Close
                  </button>
                </div>
                <div className="preview-body">
                  <div className="preview-side">
                    <div className="network-tag">{previewItem.subtitle}</div>
                    <p>{previewItem.description}</p>
                    <p>{EMBED_NOTE}</p>
                    <div className="network-actions">
                      <a className="button button-primary" href={previewItem.href} target="_blank" rel="noopener noreferrer">Open original site</a>
                      {previewItem.personHref ? <a className="button button-secondary" href={previewItem.personHref} target="_blank" rel="noopener noreferrer">Open {previewItem.personName}</a> : null}
                    </div>
                  </div>
                  <div className="preview-frame-wrap">
                    {previewItem.previewHref ? <iframe className="preview-frame" title={previewItem.title} src={previewItem.previewHref} /> : <div className="preview-fallback">This item does not have an embeddable preview link configured. Use the direct links on the left.</div>}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>© Bridge4Impact by Günter Schmittberger — Fundraising Advisory for impact startups and venture funds</div>
          <div className="footer-links">
            <a href={homeHref('#home')}>Home</a>
            <a href={homeHref('#packages')}>Packages</a>
            <a href={homeHref('#impressum')}>Impressum</a>
            <a href={homeHref('#datenschutz')}>Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
