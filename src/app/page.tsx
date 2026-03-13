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
