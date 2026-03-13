export interface Project {
  id: string
  title: string
  subtitle: string
  gradient: string
  body: string[]
}

export interface Contribution {
  id: string
  title: string
  preview: string
  body: string[]
}

export interface Note {
  id: number
  title: string
  date: string
  body: string
}

export const projects: Project[] = [
  {
    id: 'b2b-financial',
    title: 'Optimization of B2B Financial Processes',
    subtitle: 'OmniAdmin & X-Card',
    gradient: 'linear-gradient(160deg, #4a6b5a 0%, #2d4a3e 100%)',
    body: [
      'A deep dive into the financial operations of mid-sized B2B companies, identifying friction points in approval workflows, expense tracking, and multi-user access. The goal was to reduce time-on-task for finance managers by at least 40%.',
      'Through extensive user research — 14 interviews, diary studies, and contextual inquiry — we mapped the full journey of a financial transaction from request to reconciliation. The pain points were clear: too many handoffs, unclear ownership, and tools that weren\'t designed for collaborative finance.',
      'The redesign introduced a modular card system for expense requests, real-time approval chains, and an activity feed that gave every stakeholder visibility without inbox overload. A new permission model allowed granular control without requiring IT intervention.',
      'The result was a 52% reduction in task completion time for common workflows, a 78% increase in user satisfaction scores, and adoption across three enterprise clients within the first quarter of launch.',
    ],
  },
  {
    id: 'healthcare-ux',
    title: 'Healthcare UX Redesign',
    subtitle: 'MedFlow Platform',
    gradient: 'linear-gradient(160deg, #4a2d3a 0%, #2d1a25 100%)',
    body: [
      'MedFlow serves clinical staff across 40+ hospitals. The legacy system required extensive training and had an error rate that concerned risk management teams. This project was a full redesign of the patient intake and handoff system.',
      'We embedded with nursing staff during 12-hour shifts, observed handoffs between departments, and conducted cognitive load assessments during peak hours. The existing system demanded too much working memory at exactly the moments when nurses had none to spare.',
      'The new design prioritized progressive disclosure — showing only what\'s needed for the current task — alongside a customizable dashboard that allowed each role to configure their view. Color and iconography were redesigned to be legible under stress and on aging monitors.',
      'Post-launch audits showed a 34% reduction in documentation errors and a 29-minute reduction in average patient handoff time across participating facilities.',
    ],
  },
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard System',
    subtitle: 'ClearPay Analytics',
    gradient: 'linear-gradient(160deg, #2d3a5a 0%, #1a2540 100%)',
    body: [
      'ClearPay needed a unified analytics dashboard that could serve both power-user analysts and executive stakeholders — typically two audiences with very different needs and very different tolerances for complexity.',
      'Research revealed the tension: analysts needed granularity and raw data access; executives needed narrative and highlight detection. Neither group trusted a system built for the other. The challenge was designing one surface that served both without compromise.',
      'The solution was a layered information architecture — a high-level narrative view with progressive drill-down into raw data, all within the same screen flow. Custom chart components were built to communicate confidence intervals and trend direction in a single glance.',
      'Within six months of launch, weekly active users increased by 3x and the dashboard replaced four legacy reporting tools that had each required separate training programs.',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Experience Reimagined',
    subtitle: 'Retail Reimagined',
    gradient: 'linear-gradient(160deg, #5a4a2d 0%, #3a2d1a 100%)',
    body: [
      'A major retail brand\'s digital presence was fragmented across three platforms, each with different interaction patterns and visual languages. The result was customer confusion, abandoned carts, and a brand perception gap between digital and physical stores.',
      'The project began with a competitive audit and 20 moderated usability sessions. The key finding: customers expected the warmth and assistance of in-store staff but got cold, product-grid interfaces that prioritized inventory over experience.',
      'We introduced a guided discovery flow — a conversational layer that helped customers articulate what they were looking for — alongside contextual product storytelling and a redesigned checkout that reduced steps from 7 to 3.',
      'Cart abandonment dropped by 41% in the first two months. Average order value increased by 18%, attributed to the improved discovery experience surfacing complementary items in context rather than as a separate upsell step.',
    ],
  },
]

export const contributions: Contribution[] = [
  {
    id: 'design-system',
    title: 'Design System',
    preview: 'A comprehensive design system built to scale across multiple products.',
    body: [
      'A contribution to the open-source design system ecosystem — a set of foundational components, tokens, and documentation built to help small teams ship consistent products without a dedicated design systems engineer.',
      'The system covers typography, color, spacing, interactive states, and accessibility guidelines. Every component includes usage notes, anti-patterns, and example compositions to reduce guesswork for designers and developers alike.',
      'Published through Figma Community, it\'s been duplicated by over 3,000 teams and received contributions from designers across 14 countries. The token architecture is compatible with Tailwind CSS and vanilla CSS custom properties.',
      'Ongoing maintenance focuses on expanding the motion guidelines and adding a dark mode token layer that doesn\'t require maintaining two separate sets of components.',
    ],
  },
  {
    id: 'ux-lead',
    title: 'UX Lead',
    preview: 'Leading UX strategy and research for cross-functional teams.',
    body: [
      'As UX Lead for a cross-functional product team, I was responsible for translating research insights into design direction and ensuring quality from concept to launch.',
      'I established a research operations practice from scratch — standardizing how we recruited participants, stored findings, and socialized insights across the organization. This reduced time-from-insight-to-action from 6 weeks to under 2.',
      'I mentored three mid-level designers, running weekly design critiques focused on decision rationale rather than aesthetic preference. Each designer shipped at least one major feature independently within their first six months.',
      'At the strategic level, I contributed to roadmap prioritization by quantifying design debt and user pain in terms that resonated with product and engineering partners.',
      'The team shipped 11 significant product improvements over 18 months, with an average satisfaction increase of 22 points per feature measured at 30-day post-launch.',
    ],
  },
  {
    id: 'figma-community',
    title: 'Figma Community',
    preview: 'Open-source resources and templates for the design community.',
    body: [
      'Over three years of active publishing on Figma Community, I\'ve released 12 free resources used by designers at companies ranging from two-person startups to Fortune 500 firms.',
      'Notable releases include a UX audit template duplicated 8,000+ times, a heuristic evaluation kit with pre-built severity scales, and a research synthesis board for turning interview data into actionable insights.',
      'Each release includes a companion article explaining the thinking behind the structure — not just what the file contains, but why it\'s organized the way it is.',
      'The community engagement has been genuinely reciprocal: feedback from users in Brazil, Germany, and India has shaped how I think about internationalization and the assumptions baked into Western design frameworks.',
    ],
  },
]

export const defaultNotes: Note[] = [
  {
    id: 1,
    title: 'Portfolio en construcción',
    date: 'Hoy',
    body: 'Este portafolio se encuentra actualmente en construcción.\n\nPróximamente:\n• Casos de estudio completos\n• Imágenes de proyectos reales\n• CV actualizado\n• Versión en inglés',
  },
  {
    id: 2,
    title: 'React Hooks Best Practices',
    date: 'Ayer',
    body: 'Always use useCallback for functions passed to child components to prevent unnecessary re-renders.\n\nKey Rules:\n• Use useCallback when passing callbacks\n• Use useMemo for expensive calculations\n• Keep dependencies array accurate',
  },
]
