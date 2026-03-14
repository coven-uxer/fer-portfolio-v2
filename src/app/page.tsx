'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import PhoneShell from '@/components/PhoneShell'
import Dock from '@/components/Dock'
import NotesWindow from '@/components/NotesWindow'

export default function Home() {
  const [notesOpen, setNotesOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth < 1024)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <main
      className="w-screen h-screen overflow-hidden relative"
      style={isMobile ? {
        backgroundColor: '#f0f0ee',
      } : {
        backgroundColor: '#0e0e0e',
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <PhoneShell isMobile={isMobile} />

      {!isTablet && (
        <>
          <AnimatePresence>
            {notesOpen && (
              <NotesWindow isOpen={notesOpen} onClose={() => setNotesOpen(false)} />
            )}
          </AnimatePresence>
          <Dock onNotesToggle={() => setNotesOpen(o => !o)} />
        </>
      )}
    </main>
  )
}
