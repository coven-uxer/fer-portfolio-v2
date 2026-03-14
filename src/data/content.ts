export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string  // lo conservas para el ProjectScreen y la navegación interna
  subtitle: string  // igual
  image: string  // ahora obligatorio, ya no opcional
  body: string[]
  links: ProjectLink[]
}

export interface Contribution {
  id: string
  title: string
  preview: string
  body: string[]
  links: ProjectLink[]
}

export interface NoteLink {
  label: string
  href: string
}

export interface Note {
  id: number
  title: string
  date: string
  body: string
  links?: NoteLink[]
}

export const projects: Project[] = [
  {
    id: 'b2b-financial',
    title: 'Optimización de Procesos Financieros B2B',
    subtitle: 'OmniAdmin & X-Card',
    image: '/cards/Project-1.png',
    body: [
      'Product Designer único en una consultoría de desarrollo de software, a cargo de dos productos simultáneos para X-Card, una fintech B2B: OmniAdmin, sistema administrativo interno para analistas financieros, y el rediseño de la app bancaria para clientes finales.',
      'El proyecto operó bajo restricciones reales: sprints de una semana con entrega directa a desarrollo, entre 3 y 4 proyectos paralelos, sin presupuesto para research y sin procesos de diseño establecidos. Construí mis propios flujos de trabajo desde cero.',
      'La decisión de diseño más crítica fue el flujo de registro de prospectos, que requería subir más de 10 documentos. Opté por tabs contraíbles agrupados por categoría en lugar de un stepper lineal, aplicando el principio de completion anxiety para reducir abandono en tareas administrativas largas.',
      'Sin procesos de handoff establecidos, diseñé un sistema de documentación propio llamado Design Records — cinco tipos especializados para traducir decisiones de diseño en especificaciones accionables para desarrollo. DesignOps thinking como respuesta pragmática, no como disciplina formal.',
    ],
    links: [
      { label: 'Coming soon', href: '#' },
    ],
  },
  {
    id: 'healthcare-ux',
    title: 'Project 2 is pending',
    subtitle: 'MedFlow Platform',
    image: '/cards/Project-2.png',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    links: [
      { label: 'Coming soon', href: '#' },
    ],
  },
  {
    id: 'fintech-dashboard',
    title: 'Project 3 is pending',
    subtitle: 'ClearPay Analytics',
    image: '/cards/Project-3.png',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    links: [
      { label: 'Coming soon', href: '#' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'Project 4 is pending',
    subtitle: 'Retail Reimagined',
    image: '/cards/Project-4.png',
    body: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    links: [
      { label: 'Coming soon', href: '#' },
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
    links: [
      { label: 'Figma Community', href: 'https://www.figma.com/@ferloeraux' },
      { label: 'Documentation', href: 'https://www.figma.com/@ferloeraux' },
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
    links: [
      { label: 'Portfolio', href: 'https://www.figma.com/@ferloeraux' },
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
    links: [
      { label: 'Figma Community', href: 'https://www.figma.com/@ferloeraux' },
      { label: 'UX Audit Template', href: 'https://www.figma.com/@ferloeraux' },
    ],
  },
]

export const defaultNotes: Note[] = [
  {
    id: 1,
    title: 'Portfolio en construcción',
    date: 'Hoy',
    body: 'Este portafolio se encuentra actualmente en construcción.\n\nPróximamente:\n• Casos de estudio completos\n• Versión en inglés y español\n• Links actualizados',
    links: [
      { label: 'Ver portafolio anterior (Figma Make)', href: 'https://wonder-ruby-90313387.figma.site/' },
    ],
  },
  {
    id: 2,
    title: 'Always learning and improving',
    date: 'Ayer',
    body: 'Actualmente estoy estudiando Ciencias del Comportamiento Humano y aprendiendo nuevas herramientas — entre ellas vibe coding. De hecho, este portfolio fue vibe codeado.\n\nTambién leo y aprendo activamente para mantenerme actualizado como profesional. Estoy encantado con esta profesión porque me permite evolucionar constantemente.\n\nSi estás leyendo esto: gracias por tomarte el tiempo. Espero que te guste el portfolio.\n\nNo olvides descargar mi CV y leer los casos de estudio completos si te interesa conocer más.',
  }
]
