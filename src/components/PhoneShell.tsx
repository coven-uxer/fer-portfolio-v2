'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePortfolio } from '@/hooks/usePortfolio'
import { useDraggable } from '@/hooks/useDraggable'
import { type ProjectLink } from '@/data/content'
import WorkScreen from './screens/WorkScreen'
import AboutScreen from './screens/AboutScreen'
import ContributionsScreen from './screens/ContributionsScreen'
import ConnectScreen from './screens/ConnectScreen'
import ProjectScreen from './screens/ProjectScreen'
import ContributionScreen from './screens/ContributionScreen'

interface PhoneShellProps {
  isMobile?: boolean
}

interface LinksOverlayData {
  title: string
  links: ProjectLink[]
}

export default function PhoneShell({ isMobile = false }: PhoneShellProps) {
  const { state, navTo, openProject, openContribution, goBack, openMenu, closeMenu, showPill, showBack, showMenu } = usePortfolio()
  const { pos, onMouseDown } = useDraggable({ x: 80, y: 60 })

  const [linksOverlay, setLinksOverlay] = useState<LinksOverlayData | null>(null)

  const openLinks = (title: string, links: ProjectLink[]) => setLinksOverlay({ title, links })
  const closeLinks = () => setLinksOverlay(null)

  const screens = (
    <AnimatePresence mode="wait">
      {state.currentScreen === 'work' && <WorkScreen key="work" onOpenProject={openProject} />}
      {state.currentScreen === 'about' && <AboutScreen key="about" />}
      {state.currentScreen === 'contributions' && <ContributionsScreen key="contributions" onOpenContribution={openContribution} />}
      {state.currentScreen === 'connect' && <ConnectScreen key="connect" />}
      {state.currentScreen === 'project' && <ProjectScreen key={`project-${state.activeProjectId}`} projectId={state.activeProjectId} onOpenLinks={openLinks} />}
      {state.currentScreen === 'contribution' && <ContributionScreen key={`contribution-${state.activeContributionId}`} contributionId={state.activeContributionId} onOpenLinks={openLinks} />}
    </AnimatePresence>
  )

  const menuButton = (
    <AnimatePresence>
      {showMenu && (
        <motion.button
          key="menu"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={openMenu}
          className="absolute top-5 right-5 w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center gap-1 z-[160] hover:bg-white/90 transition-colors"
        >
          {[0,1,2].map(i => <span key={i} className="w-4 h-px bg-[#444] rounded block" />)}
        </motion.button>
      )}
    </AnimatePresence>
  )

  const backButton = (
    <AnimatePresence>
      {showBack && (
        <motion.button
          key="back"
          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}
          onClick={goBack}
          className="absolute top-5 left-5 w-8 h-8 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center z-[160] text-[#444] text-base hover:bg-white/90 transition-colors"
        >
          ←
        </motion.button>
      )}
    </AnimatePresence>
  )

  // Work/About pill — only shows on work & about screens
  const workAboutPill = (
    <AnimatePresence>
      {showPill && (
        <motion.div
          key="pill"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#111813] rounded-full flex gap-0.5 p-1.5 z-30 shadow-[0_16px_32px_rgba(12,12,13,0.1),0_4px_4px_rgba(12,12,13,0.05)]"
        >
          {(['work', 'about'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => navTo(tab)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all capitalize ${
                state.currentScreen === tab
                  ? 'bg-white text-[#111813]'
                  : 'text-[#625f5f] hover:text-white/80'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )

  const menuOverlay = (
    <AnimatePresence>
      {state.menuOpen && (
        <motion.div
          key="menu-overlay"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-[200] flex flex-col justify-between p-7 pt-16"
          style={{ background: 'rgba(240,240,238,0.92)', backdropFilter: 'blur(12px)' }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 w-8 h-8 bg-black/8 rounded-lg text-base text-[#666] flex items-center justify-center hover:bg-black/12"
          >✕</button>
          <nav className="flex flex-col gap-1">
            {(['work', 'about', 'contributions', 'connect'] as const).map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => navTo(item)}
                className="font-serif text-[36px] text-[#1a1a1a] text-left py-1 capitalize hover:text-[#5a7a5c] transition-colors bg-transparent border-none"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </nav>
          <div />
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Links overlay — shared between project and contribution screens
  const linksOverlayEl = (
    <AnimatePresence>
      {linksOverlay && (
        <motion.div
          key="links-overlay"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="absolute inset-0 z-[200] flex flex-col justify-between p-7 pt-16"
          style={{ background: 'rgba(240,240,238,0.92)' }}
        >
          <button
            onClick={closeLinks}
            className="absolute top-5 right-5 w-8 h-8 bg-black/8 rounded-lg text-base text-[#666] flex items-center justify-center hover:bg-black/12"
          >✕</button>

          <nav className="flex flex-col gap-1">
            {linksOverlay.links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-serif text-[24px] text-[#1a1a1a] text-left py-1 hover:text-[#5a7a5c] hover:underline transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div />
        </motion.div>
      )}
    </AnimatePresence>
  )

  // ── Mobile layout ──────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="absolute inset-0 w-full h-full" style={{ background: '#f0f0ee' }}>
        {menuButton}
        {backButton}
        {screens}
        {workAboutPill}
        {menuOverlay}
        {linksOverlayEl}
      </div>
    )
  }

  // ── Desktop layout (original) ──────────────────────────────────
  return (
    <div className="absolute" style={{ left: pos.x, top: pos.y, width: 340, zIndex: 100 }}>
      {/* Drag handle */}
      <div
        className="absolute top-0 left-0 right-0 h-14 rounded-t-[44px] z-[150] cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
      />

      {/* Phone frame */}
      <div
        className="w-[340px] h-[740px] rounded-[44px] overflow-hidden relative"
        style={{
          background: '#f0f0ee',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[120px] h-9 bg-[#0a0a0a] rounded-[20px] z-50 flex items-center justify-end pr-2.5 gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />
          <div className="w-2 h-2 rounded-full bg-[#22aa55]" />
        </div>

        {menuButton}
        {backButton}
        {screens}
        {workAboutPill}
        {menuOverlay}
        {linksOverlayEl}
      </div>
    </div>
  )
}
