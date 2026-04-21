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

// ─── Data ────────────────────────────────────────────────────────────────────

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
    text: 'Send both completed reports to guenter@bridge4impact.com before requesting a first fundraising meeting.',
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
    text: 'Often a good basis for targeted readiness improvement before outreach.',
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
    a: 'Usually after completing the pre-check or before broad investor outreach starts. Early conversations often save substantial time, effort, and reputation.',
  },
  {
    q: 'Can you work internationally?',
    a: 'Yes. The positioning and investor-targeting approach is designed for cross-border fundraising contexts and international collaboration.',
  },
]

// ─── Layout helpers ───────────────────────────────────────────────────────────

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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="site-shell">
      <div className="background-glow" aria-hidden="true" />

      <style>{`
        /* ── Design tokens ─────────────────────────────────────── */
        :root {
          --bg:          #0b8f90;
          --bg-deep:     #0a7d7f;
          --cream:       #f6f0e6;
          --text-dark:   #0b8f90;
          --line:        rgba(255,255,255,0.13);
          --line-soft:   rgba(255,255,255,0.10);
          --shadow:      0 24px 60px rgba(0,0,0,0.14);

          /* ── Single layout constants ─────────────────────────── */
          --header-h:    78px;
          --max-w:       1440px;
          --gutter:      28px;
          --section-py:  48px;
          --gap:         16px;
        }

        /* ── Reset / base ──────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: calc(var(--header-h) + 4px);
        }

        body {
          overflow-x: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

        body, .site-shell {
          background: linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 52%, #0a8385 100%);
          color: var(--cream);
        }

        a { color: inherit; text-decoration: none; }

        .site-shell {
          min-height: 100vh;
          position: relative;
        }

        /* ── Background glow ───────────────────────────────────── */
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

        /* ── THE ONE SHARED CONTENT WIDTH ──────────────────────── */
        /*    Every .wrap inside the header AND every section       */
        /*    uses this identical rule — guaranteed alignment.      */
        .wrap {
          width: min(var(--max-w), calc(100vw - var(--gutter) * 2));
          margin-inline: auto;
        }

        /* ── Fixed header ──────────────────────────────────────── */
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
          gap: 20px;
          font-size: 0.92rem;
          color: rgba(246,240,230,0.88);
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav a:hover { color: #fff; }

        /* ── Main — starts exactly below header ────────────────── */
        main {
          position: relative;
          z-index: 1;
          padding-top: var(--header-h);
        }

        /* Every section id scrolls so its top lands below header */
        section[id] {
          scroll-margin-top: calc(var(--header-h) + 4px);
        }

        /* ── Section wrapper ───────────────────────────────────── */
        .section {
          padding: 40px 0 48px;
        }

        .stack {
          display: grid;
          gap: 24px;
        }

        /* ── Hero section ──────────────────────────────────────── */
        .hero-section {
          padding: 28px 0 40px;
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

        .hero-title {
          font-size: clamp(3.2rem, 5.8vw, 5.8rem);
          line-height: 0.92;
          letter-spacing: -0.06em;
          max-width: 8.5ch;
        }

        .hero-title .line { display: block; }

        .lead {
          font-size: 1.14rem;
          line-height: 1.6;
          color: rgba(246,240,230,0.86);
          max-width: 48rem;
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
          padding-top: 4px;
        }

        /* ── Hero side card ────────────────────────────────────── */
        .hero-side {
          display: grid;
          gap: var(--gap);
        }

        .hero-main-card {
          padding: 24px;
        }

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

        /* ── Buttons ───────────────────────────────────────────── */
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
        }

        .button-primary:hover { box-shadow: 0 28px 64px rgba(0,0,0,0.18); }

        .button-secondary {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.28);
        }

        .button-secondary:hover { background: rgba(255,255,255,0.06); }

        /* ── Cards ─────────────────────────────────────────────── */
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

        /* ── Eyebrow / section title ───────────────────────────── */
        .eyebrow {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(246,240,230,0.62);
        }

        .cream .eyebrow { color: rgba(11,143,144,0.62); }

        .section-title h2 {
          margin: 8px 0 0;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          line-height: 1.02;
          letter-spacing: -0.045em;
          text-wrap: balance;
          max-width: 22ch;
        }

        .section-title p {
          max-width: 62ch;
          margin: 14px 0 0;
          color: rgba(246,240,230,0.76);
          line-height: 1.62;
        }

        /* ── Services ──────────────────────────────────────────── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: var(--gap);
        }

        .service-card {
          padding: 22px;
        }

        .service-card h3 {
          margin: 14px 0 10px;
          font-size: 1.18rem;
          line-height: 1.22;
          letter-spacing: -0.025em;
        }

        .service-card p {
          line-height: 1.6;
          color: rgba(246,240,230,0.78);
          font-size: 0.96rem;
        }

        /* ── Readiness ─────────────────────────────────────────── */
        .readiness-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--gap);
        }

        .readiness-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .readiness-card h3 {
          margin: 14px 0 10px;
          font-size: 1.18rem;
          line-height: 1.22;
          letter-spacing: -0.025em;
        }

        .readiness-card p {
          line-height: 1.6;
          color: rgba(246,240,230,0.78);
          font-size: 0.96rem;
        }

        .band-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--gap);
        }

        .band-card {
          padding: 18px 20px;
          border-radius: 18px;
        }

        .band-card h3 {
          margin-bottom: 8px;
          font-size: 1.12rem;
          letter-spacing: -0.02em;
        }

        .band-card p {
          font-size: 0.94rem;
          line-height: 1.58;
          color: rgba(246,240,230,0.76);
        }

        /* ── About ─────────────────────────────────────────────── */
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 20px;
          align-items: stretch;
        }

        .about-card {
          padding: 32px;
          height: 100%;
        }

        .about-card h2 {
          margin: 10px 0 16px;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          line-height: 1.06;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

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

        .about-targets {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .about-target {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--line-soft);
          font-weight: 600;
          font-size: 0.92rem;
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

        /* ── Packages ──────────────────────────────────────────── */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: var(--gap);
        }

        .package-card {
          padding: 24px;
        }

        .package-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
        }

        .package-card h3 {
          margin-bottom: 4px;
          font-size: 1.28rem;
          letter-spacing: -0.025em;
        }

        .package-subtitle {
          font-size: 0.86rem;
          color: rgba(11,143,144,0.62);
          margin-bottom: 4px;
        }

        .package-items {
          display: grid;
          gap: 9px;
          margin-top: 16px;
        }

        .package-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 11px 13px;
          border-radius: 14px;
          background: rgba(11,143,144,0.08);
          color: rgba(11,143,144,0.86);
          font-size: 0.93rem;
          line-height: 1.5;
        }

        /* ── FAQ ───────────────────────────────────────────────── */
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: var(--gap);
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
          font-size: 1.1rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .faq-card p {
          margin-top: 12px;
          line-height: 1.62;
          color: rgba(246,240,230,0.76);
          font-size: 0.96rem;
        }

        /* ── Contact ───────────────────────────────────────────── */
        .contact-wrap {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: var(--gap);
          align-items: stretch;
        }

        .contact-card {
          padding: 28px;
        }

        .contact-card h2 {
          margin: 10px 0 16px;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          line-height: 1.06;
          letter-spacing: -0.04em;
          text-wrap: balance;
        }

        .contact-card p {
          line-height: 1.62;
          color: rgba(11,143,144,0.78);
          margin-bottom: 12px;
        }

        .info-box {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(11,143,144,0.07);
          color: rgba(11,143,144,0.82);
          line-height: 1.58;
          font-size: 0.95rem;
        }

        .legal-links {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          color: rgba(11,143,144,0.76);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .text-link:hover { color: var(--text-dark); }

        .contact-panels {
          display: grid;
          gap: 12px;
          align-content: start;
        }

        .contact-panel {
          display: block;
          padding: 18px 20px;
          border-radius: 18px;
          background: #fff;
          color: var(--text-dark);
          border: 1px solid rgba(11,143,144,0.14);
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .contact-panel:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
        }

        .contact-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          margin-bottom: 8px;
          font-size: 1rem;
        }

        .contact-text {
          color: rgba(11,143,144,0.72);
          font-size: 0.93rem;
          line-height: 1.5;
        }

        /* ── Legal sections ────────────────────────────────────── */
        .legal-card {
          padding: 32px 36px;
        }

        .legal-copy {
          display: grid;
          gap: 20px;
          color: rgba(11,143,144,0.84);
        }

        .legal-copy h2 {
          margin: 8px 0 4px;
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
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

        .legal-copy p {
          line-height: 1.64;
          margin-bottom: 8px;
        }

        .legal-copy p:last-child { margin-bottom: 0; }

        .legal-list {
          display: grid;
          gap: 5px;
          line-height: 1.58;
          color: rgba(11,143,144,0.84);
        }

        .legal-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }

        .legal-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 14px;
          background: rgba(11,143,144,0.07);
          color: rgba(11,143,144,0.82);
          font-size: 0.9rem;
        }

        .legal-note {
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(11,143,144,0.07);
          color: rgba(11,143,144,0.80);
          line-height: 1.58;
          font-size: 0.94rem;
        }

        /* ── Footer ────────────────────────────────────────────── */
        .footer {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .footer-inner {
          padding: 20px 0 26px;
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

        /* ── Responsive ────────────────────────────────────────── */
        @media (max-width: 1280px) {
          :root { --gutter: 32px; }
        }

        @media (max-width: 1080px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: clamp(2.8rem, 7vw, 4.4rem);
          }
        }

        @media (max-width: 900px) {
          :root {
            --header-h: 108px;
            --gutter: 20px;
            --section-py: 52px;
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

          .about-grid,
          .contact-wrap {
            grid-template-columns: 1fr;
          }

          .readiness-grid,
          .band-grid,
          .packages-grid,
          .faq-grid,
          .hero-mini-grid,
          .hero-stats,
          .proof-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          :root {
            --header-h: 116px;
            --gutter: 14px;
            --section-py: 40px;
          }

          .hero-title {
            font-size: clamp(2.2rem, 10vw, 3.2rem);
          }

          .lead { font-size: 1rem; }

          .button { width: 100%; }

          .services-grid,
          .readiness-grid,
          .band-grid,
          .packages-grid,
          .faq-grid,
          .hero-mini-grid,
          .hero-stats,
          .proof-grid {
            grid-template-columns: 1fr;
          }

          .legal-card { padding: 22px 20px; }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="topbar">
        <div className="wrap topbar-inner">
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

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section id="home" className="hero-section">
          <div className="wrap stack">
            <div className="hero-grid">

              <div className="hero-copy">
                <div className="pill">
                  <Sparkles size={15} />
                  Investment readiness first. Outreach second.
                </div>

                <h1 className="hero-title">
                  <span className="line">Bridging strong impact</span>
                  <span className="line">ventures with</span>
                  <span className="line">the right capital.</span>
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
                  <a className="button button-secondary" href="https://calendly.com/g-schmittberger" target="_blank" rel="noopener noreferrer">
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
                      <Users size={16} style={{flexShrink:0, marginTop:2}} />
                      <span>Better investor fit instead of broad generic mass outreach.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Search size={16} style={{flexShrink:0, marginTop:2}} />
                      <span>Early readiness checks before expensive fundraising mistakes.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Globe size={16} style={{flexShrink:0, marginTop:2}} />
                      <span>Cross-border perspective and partner access where useful.</span>
                    </div>
                    <div className="hero-mini-panel">
                      <Handshake size={16} style={{flexShrink:0, marginTop:2}} />
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

        {/* ── Services ──────────────────────────────────────────────── */}
        <section id="services" className="section">
          <div className="wrap stack">
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

        {/* ── Readiness Check ───────────────────────────────────────── */}
        <section id="readiness" className="section">
          <div className="wrap stack">
            <SectionTitle
              eyebrow="Investment Readiness Pre-Check"
              title="Pre-check your investment readiness before we talk"
              text="Before I invest time in a first fundraising meeting, I ask for two readiness reports. This helps me understand your current preparation level and whether active fundraising already makes sense."
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
                      <a className="button button-secondary" href={step.href} target={step.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
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

        {/* ── About ─────────────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="wrap stack">
            <div className="about-grid">
              <Card className="about-card">
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
              </Card>

              <Card className="about-card">
                <div className="eyebrow">What this means in practice</div>
                <h3>Focused quality, better investor fit, and selective collaboration</h3>
                <div className="proof-grid">
                  {proofPoints.map((point) => (
                    <div key={point} className="proof-item">
                      <CheckCircle2 size={16} style={{flexShrink:0, marginTop:2}} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Packages ──────────────────────────────────────────────── */}
        <section id="packages" className="section">
          <div className="wrap stack">
            <SectionTitle
              eyebrow="Packages"
              title="How we can work together"
              text="Three clear starting points — each adapted to where you actually are in your fundraising journey."
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
                          <CheckCircle2 size={15} style={{flexShrink:0, marginTop:1}} />
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

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section id="faq" className="section">
          <div className="wrap stack">
            <SectionTitle
              eyebrow="FAQ"
              title="Questions a serious client may ask before reaching out"
            />
            <div className="faq-grid">
              {faqs.map((faq) => (
                <Card key={faq.q} className="faq-card">
                  <div className="faq-head">
                    <MessageSquare size={18} style={{flexShrink:0, marginTop:2}} />
                    <h3>{faq.q}</h3>
                  </div>
                  <p>{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────────────── */}
        <section id="contact" className="section">
          <div className="wrap stack">
            <div className="contact-wrap">
              <Card className="contact-card cream">
                <div className="eyebrow">Next step</div>
                <h2>Ready to explore whether we are a fit?</h2>
                <p>
                  Complete the two readiness checks first and send both reports to guenter@bridge4impact.com. After that, we can discuss your current fundraising status, your materials, and the type of investors you actually want to reach.
                </p>
                <div className="info-box">
                  Early conversations are usually the most valuable ones — before time, effort, and reputation have been spent on the wrong approach.
                </div>
                <div className="legal-links">
                  <a className="text-link" href="#impressum">Impressum</a>
                  <a className="text-link" href="#datenschutz">Datenschutz</a>
                </div>
              </Card>

              <div className="contact-panels">
                <a className="contact-panel" href="https://calendly.com/g-schmittberger" target="_blank" rel="noopener noreferrer">
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

        {/* ── Impressum ─────────────────────────────────────────────── */}
        <section id="impressum" className="section">
          <div className="wrap">
            <Card className="legal-card cream">
              <div className="legal-copy">
                <div>
                  <div className="eyebrow">Impressum</div>
                  <h2>Angaben gemäß § 5 DDG</h2>
                </div>

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
                    <div>E-Mail: <a href="mailto:guenter@bridge4impact.com">guenter@bridge4impact.com</a></div>
                    <div>Telefon / WhatsApp: <a href="tel:+491752985215">+49 175 298 5215</a></div>
                  </div>
                </div>

                <div>
                  <h3>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG</h3>
                  <div className="legal-list">
                    <div>DE167964328</div>
                  </div>
                </div>

                <div>
                  <h3>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV</h3>
                  <div className="legal-list">
                    <div>Günter Schmittberger, Gonsbachblick 33, 55122 Mainz, Deutschland</div>
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
                    <span>Geschäftswebsite — Fundraising Advisory</span>
                  </div>
                </div>

                <div className="legal-note">
                  Diese Website dient der Darstellung von Beratungsdienstleistungen im Bereich Fundraising Advisory für impact-orientierte Startups, Venture Funds und ausgewählte Ökosystempartner.
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ── Datenschutz ───────────────────────────────────────────── */}
        <section id="datenschutz" className="section">
          <div className="wrap">
            <Card className="legal-card cream">
              <div className="legal-copy">
                <div>
                  <div className="eyebrow">Datenschutz</div>
                  <h2>Datenschutzhinweise</h2>
                </div>

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
                    Beim Aufruf dieser Website werden technisch notwendige Daten verarbeitet, darunter IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Inhalte, Browser- und Geräteinformationen sowie ggf. die verweisende Website (Referrer). Diese Verarbeitung ist für den sicheren und stabilen Betrieb der Website erforderlich.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der technisch einwandfreien, sicheren und wirtschaftlichen Bereitstellung dieses Online-Angebots.
                  </p>
                </div>

                <div>
                  <h3>3. Hosting über Cloudflare Pages</h3>
                  <p>
                    Diese Website wird über Cloudflare Pages gehostet und über das globale Netzwerk von Cloudflare, Inc. (101 Townsend St., San Francisco, CA 94107, USA) ausgeliefert. Dabei können Verbindungsdaten einschließlich IP-Adressen auf Servern außerhalb der EU verarbeitet werden. Die Übermittlung erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission sowie der ergänzenden Schutzmaßnahmen von Cloudflare.
                  </p>
                  <p>
                    Cloudflare setzt außerdem Sicherheitsmechanismen ein (u. a. DDoS-Schutz, SSL/TLS-Verschlüsselung), die eine Verarbeitung technischer Verbindungsdaten erfordern. Weitere Informationen finden Sie in der Datenschutzerklärung von Cloudflare unter cloudflare.com/privacypolicy.
                  </p>
                </div>

                <div>
                  <h3>4. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp</h3>
                  <p>
                    Wenn Sie mich per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeite ich die von Ihnen übermittelten personenbezogenen Daten ausschließlich zur Bearbeitung Ihrer Anfrage und für eine etwaige anschließende Geschäftskommunikation.
                  </p>
                  <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Kontaktaufnahme der Anbahnung oder Durchführung eines Vertragsverhältnisses dient, sowie ergänzend Art. 6 Abs. 1 lit. f DSGVO für allgemeine Anfragen. Bei Nutzung von WhatsApp gelten zusätzlich die Datenschutzbedingungen von Meta Platforms Ireland Ltd.
                  </p>
                </div>

                <div>
                  <h3>5. Terminbuchung über Calendly</h3>
                  <p>
                    Für die Terminbuchung wird auf den externen Dienst Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA 30363, USA) weitergeleitet. Die Datenverarbeitung im Rahmen der Terminbuchung — insbesondere Name, E-Mail-Adresse und ggf. weitere Angaben — erfolgt direkt durch Calendly. Es gelten die Datenschutzbestimmungen von Calendly (calendly.com/privacy). Eine Datenübermittlung in die USA erfolgt auf Basis der Standardvertragsklauseln der EU-Kommission.
                  </p>
                </div>

                <div>
                  <h3>6. Externe Links</h3>
                  <p>
                    Diese Website enthält Links zu externen Anbietern, insbesondere zu Unbiased Ventures (unbiasedventures.ch) und D-Risk.IT (dri.ai). Für die Datenverarbeitung auf den verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Beim Aufruf externer Links gelten die jeweiligen Datenschutzhinweise der verlinkten Anbieter.
                  </p>
                </div>

                <div>
                  <h3>7. Cookies und Tracking</h3>
                  <p>
                    Auf dieser Website werden nach aktuellem Stand keine eigenen Analyse-, Marketing- oder Tracking-Tools eingesetzt. Es werden keine Cookies zu Werbe- oder Analysezwecken gesetzt. Cloudflare kann im Rahmen des Sicherheits- und Lastmanagements technisch notwendige Cookies verwenden. Sobald künftig weitere Dienste mit Tracking-Funktion eingesetzt werden, werden diese Datenschutzhinweise entsprechend angepasst.
                  </p>
                </div>

                <div>
                  <h3>8. Speicherdauer</h3>
                  <p>
                    Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach abgeschlossener Bearbeitung gelöscht, sofern keine weitergehende Geschäftsbeziehung besteht.
                  </p>
                </div>

                <div>
                  <h3>9. Ihre Rechte</h3>
                  <p>
                    Ihnen stehen nach der DSGVO folgende Rechte zu: Auskunft über gespeicherte Daten (Art. 15), Berichtigung unrichtiger Daten (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch gegen bestimmte Verarbeitungen (Art. 21). Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                  </p>
                  <p>
                    Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.
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

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="wrap footer-inner">
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
