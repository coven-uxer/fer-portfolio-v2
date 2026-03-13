'use client'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PhoneShell from '@/components/PhoneShell'
import Dock from '@/components/Dock'
import NotesWindow from '@/components/NotesWindow'

export default function Home() {
  const [notesOpen, setNotesOpen] = useState(false)

  return (
    <main
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: 'radial-gradient(ellipse at 20% 50%, #1e2a1e 0%, #0a0a0a 60%)' }}
    >
      {/* Construction badge */}
      <div
        className="fixed top-5 right-5 z-[600] text-[11px] px-3.5 py-2 rounded-full pointer-events-none"
        style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        {/* 🚧 Portfolio en construcción */}
      </div>

      <PhoneShell />

      <AnimatePresence>
        {notesOpen && (
          <NotesWindow isOpen={notesOpen} onClose={() => setNotesOpen(false)} />
        )}
      </AnimatePresence>

      <Dock onNotesToggle={() => setNotesOpen(o => !o)} />
    </main>
  )
}
