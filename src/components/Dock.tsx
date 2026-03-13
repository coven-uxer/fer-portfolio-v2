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
      <img
    src="/icons/PlateDock.png"
    alt="Portfolio vinyl"
    className="w-full h-full object-cover"
  />
      </DockItem>

      {/* Figma */}
      <DockItem label="Figma Community" href="https://www.figma.com/@ferloeraux">
      <img
    src="/icons/FigmaDock.png"
    alt="Figma"
    className="w-full h-full object-cover"
  />
      </DockItem>

      {/* LinkedIn */}
      <DockItem label="LinkedIn" href="https://www.linkedin.com/in/ferloeraux/">
      <img
    src="/icons/LinkedInDock.png"
    alt="LinkedIn"
    className="w-full h-full object-cover"
  />
      </DockItem>

      {/* Dribbble */}
      <DockItem label="Dribbble" href="https://dribbble.com/fflloo">
      <img
    src="/icons/DribbbleDock.png"
    alt="Dribbble"
    className="w-full h-full object-cover"
  />
      </DockItem>

      {/* Notes */}
      <DockItem label="Notes" onClick={onNotesToggle}>
      <img
    src="/icons/NotesDock.png"
    alt="Notes"
    className="w-full h-full object-cover"
  />
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
