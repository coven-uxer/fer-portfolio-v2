'use client'
import { motion } from 'framer-motion'

interface DockProps {
  onNotesToggle: () => void
}

export default function Dock({ onNotesToggle }: DockProps) {
  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-2.5 px-4 py-2.5 z-[500] rounded-[20px]"
      style={{
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(20px) saturate(1.8)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {/* Portfolio vinyl */}
      <DockItem label="Portfolio">
        <div className="w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 40% 35%, #333, #0a0a0a)' }}>
          <div className="w-3.5 h-3.5 rounded-full" style={{ background: 'radial-gradient(circle, #555, #222)', border: '2px solid #333' }} />
        </div>
      </DockItem>

      {/* Figma */}
      <DockItem label="Figma Community" href="https://figma.com/@ferloera">
        <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ff7262, #a259ff, #1abcfe, #0acf83)' }}>
          <svg width="26" height="26" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C36.99 23.56 38 25.98 38 28.5C38 31.02 36.99 33.44 35.22 35.22C33.44 36.99 31.02 38 28.5 38C25.98 38 23.56 36.99 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 18 52.44 16.22 54.22C14.44 55.99 12.02 57 9.5 57C6.98 57 4.56 55.99 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C31.02 19 33.44 18 35.22 16.22C36.99 14.44 38 12.02 38 9.5C38 6.98 36.99 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 18 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#FF7262"/>
            <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 36.99 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
      </DockItem>

      {/* LinkedIn */}
      <DockItem label="LinkedIn" href="https://linkedin.com/in/ferloera">
        <div className="w-full h-full flex items-center justify-center" style={{ background: '#0a66c2' }}>
          <span className="text-white font-bold text-lg font-serif">in</span>
        </div>
      </DockItem>

      {/* Dribbble */}
      <DockItem label="Dribbble" href="https://dribbble.com/ferloera">
        <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e94584, #c032a0)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
            <path d="M2 12c3-2 7-3 10-1 2 2 3 6 2 9M22 12c-3-1-7-1-9 1-3 2-4 7-3 9M7 3c1 3 3 6 6 7 3 1 6 0 9-2" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
      </DockItem>

      {/* Notes */}
      <DockItem label="Notes" onClick={onNotesToggle}>
        <div className="w-full h-full flex items-center justify-center bg-[#ffd60a]">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="12" width="24" height="16" rx="2" fill="#ffd60a"/>
            <rect x="4" y="4" width="24" height="12" rx="2" fill="#ffc500"/>
            <line x1="8" y1="18" x2="24" y2="18" stroke="#9a6e00" strokeWidth="1.5"/>
            <line x1="8" y1="22" x2="20" y2="22" stroke="#9a6e00" strokeWidth="1.5"/>
            <line x1="8" y1="26" x2="16" y2="26" stroke="#9a6e00" strokeWidth="1.5"/>
          </svg>
        </div>
      </DockItem>
    </div>
  )
}

interface DockItemProps {
  label: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

function DockItem({ label, href, onClick, children }: DockItemProps) {
  const base = "relative flex items-center justify-center w-[52px] h-[52px] rounded-[12px] cursor-pointer overflow-hidden group"

  const inner = (
    <>
      {children}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[rgba(30,30,30,0.9)] backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {label}
      </div>
    </>
  )

  if (href) {
    return (
      <motion.a href={href} target="_blank" rel="noreferrer" className={base} whileHover={{ scale: 1.25, y: -8 }} transition={{ duration: 0.18 }}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.div className={base} onClick={onClick} whileHover={{ scale: 1.25, y: -8 }} transition={{ duration: 0.18 }}>
      {inner}
    </motion.div>
  )
}
