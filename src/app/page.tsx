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
      style={{
        backgroundColor: '#0e0e0e',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
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
