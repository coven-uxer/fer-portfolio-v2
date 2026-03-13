'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }

const links = [
  {
    label: 'Send an email',
    href: 'mailto:ferloera.ux@gmail.com',
    download: false,
  },
  {
    label: 'Go to Figma Community',
    href: 'https://www.figma.com/@ferloeraux',
    download: false,
  },
  {
    label: "Download Fer's CV",
    href: '/Loera_Fernando_Curriculum_2026.pdf',
    download: true,
  },
]

const socials = [
  { label: 'LinkedIn',  img: '/plateLinkedIn.png',  href: 'https://www.linkedin.com/in/ferloeraux/' },
  { label: 'Dribbble',  img: '/plateDribbble.png',  href: 'https://dribbble.com/fflloo' },
  { label: 'Medium',    img: '/plateMedium.png',    href: 'https://medium.com/@ferloera.ux' },
  { label: 'Instagram', img: '/plateInstagram.png', href: 'https://www.instagram.com/ferloera.ux/' },
]

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

export default function ConnectScreen() {
  return (
    <Screen id="connect">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">

        {/* Title */}
        <motion.h1 variants={item} className="text-[46px] leading-[1.1] font-serif text-[#5a7a5c] mt-2">
          Connect
        </motion.h1>

        {/* Link rows */}
        <motion.div variants={item} className="flex flex-col">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              download={l.download || undefined}
              target={!l.download && !l.href.startsWith('mailto') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-3 border-b border-[#d8d8d4] last:border-none text-[#625f5f] hover:text-[#1a1a1a] transition-colors"
            >
              <span className="shrink-0 text-[#625f5f]"><MailIcon /></span>
              <span className="flex-1 text-[15px] font-[DM_Sans,sans-serif]">{l.label}</span>
              <span className="shrink-0 text-[#625f5f]"><ArrowIcon /></span>
            </a>
          ))}
        </motion.div>

        {/* Find me on */}
        <motion.div variants={item} className="flex flex-col gap-4 mt-2">
          <p className="text-[18px] font-semibold text-[#111813]">Find me on</p>
          <div className="grid grid-cols-2 gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 260 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <img
                  src={s.img}
                  alt={s.label}
                  className="w-full aspect-square object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
                />
                <span className="text-[10px] tracking-widest uppercase font-medium text-[#111813]">
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </Screen>
  )
}
