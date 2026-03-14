'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { defaultNotes, type Note, type NoteLink } from '@/data/content'

interface NotesWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function NotesWindow({ isOpen, onClose }: NotesWindowProps) {
  const [notes, setNotes] = useState<Note[]>(defaultNotes)
  const [activeId, setActiveId] = useState<number>(defaultNotes[0].id)
  const activeNote = notes.find(n => n.id === activeId) ?? notes[0]

  // Position state (lazy init avoids SSR window access)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const dragging = useRef(false)
  const origin = useRef({ x: 0, y: 0 })
  const startPos = useRef({ x: 0, y: 0 })

  // Initialize position on first render (client only)
  const getPos = () => {
    if (pos) return pos
    return { x: Math.max(20, window.innerWidth - 720), y: 80 }
  }

  function onDragStart(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest('button, input, textarea, a')) return
    dragging.current = true
    const current = getPos()
    origin.current = { x: e.clientX, y: e.clientY }
    startPos.current = current

    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      setPos({
        x: Math.max(0, startPos.current.x + e.clientX - origin.current.x),
        y: Math.max(0, startPos.current.y + e.clientY - origin.current.y),
      })
    }
    const onUp = () => {
      dragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  function createNote() {
    const n: Note = { id: Date.now(), title: 'New Note', date: 'Now', body: '' }
    setNotes(prev => [n, ...prev])
    setActiveId(n.id)
  }

  function updateNote(id: number, field: 'title' | 'body', value: string) {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, [field]: value } : n))
  }

  if (!isOpen) return null

  const currentPos = getPos()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 8 }}
      transition={{ duration: 0.2 }}
      className="fixed z-[400] flex flex-col overflow-hidden"
      style={{
        left: currentPos.x,
        top: currentPos.y,
        width: 680,
        height: 460,
        background: '#f5f5f0',
        borderRadius: 12,
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
      }}
    >
      {/* Title bar */}
      <div
        onMouseDown={onDragStart}
        className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[#c8c8c3] flex-shrink-0 cursor-grab active:cursor-grabbing select-none"
        style={{ background: 'linear-gradient(180deg, #e8e8e3 0%, #dcdcd7 100%)' }}
      >
        <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] hover:brightness-90 flex-shrink-0" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex-shrink-0" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] flex-shrink-0" />
        <span className="flex-1 text-center text-[12px] text-[#666] font-medium">Notes</span>
        <div className="flex gap-3 text-[#888] text-sm select-none">
          <span>⊞</span><span>≡</span><span>↗</span><span>⌕</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-[#e8e8e3] border-r border-[#d0d0cb] flex flex-col overflow-hidden flex-shrink-0">
          <p className="text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5">☁ iCloud</p>
          <div className="flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 bg-black/8 cursor-pointer">
            <span className="text-[12px] text-[#666]">📁</span> All Notes
          </div>
          <p className="text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5">Folders</p>
          <div className="flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer">
            <span>📁</span> Portfolio Notes
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer">
            <span>📁</span> Ideas
          </div>
          <p className="text-[10px] text-[#999] uppercase tracking-wider font-semibold px-3 pt-3 pb-1.5">Tags</p>
          <div className="flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer">
            <span className="text-[#e54]">#</span> Important
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 text-[12px] text-[#333] rounded-md mx-1.5 hover:bg-black/6 cursor-pointer">
            <span className="text-[#5a7]">#</span> WIP
          </div>
          <div className="flex-1" />
          <button
            onClick={createNote}
            className="m-2 py-2 text-[12px] text-[#555] bg-black/6 hover:bg-black/10 rounded-lg transition-colors"
          >
            + New Note
          </button>
        </div>

        {/* Note list */}
        <div className="w-52 border-r border-[#d8d8d3] overflow-y-auto no-scrollbar flex-shrink-0 bg-[#f0f0eb]">
          {notes.map(note => (
            <div
              key={note.id}
              onClick={() => setActiveId(note.id)}
              className={`px-3.5 py-3 border-b border-[#e4e4df] cursor-pointer transition-colors ${
                note.id === activeId ? 'bg-[rgba(255,210,0,0.2)]' : 'hover:bg-black/4'
              }`}
            >
              <p className="text-[12px] font-semibold text-[#1a1a1a] mb-0.5 truncate">{note.title}</p>
              <span className="text-[10px] text-[#888] mr-1.5">{note.date}</span>
              <span className="text-[10px] text-[#999]">{note.body.slice(0, 30)}...</span>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="flex-1 p-5 flex flex-col overflow-hidden">
          <input
            className="text-[18px] font-semibold text-[#1a1a1a] mb-4 border-none outline-none bg-transparent w-full"
            style={{ fontFamily: 'inherit' }}
            value={activeNote?.title ?? ''}
            onChange={e => updateNote(activeId, 'title', e.target.value)}
            placeholder="Title"
          />
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <textarea
              className="w-full text-[13px] text-[#333] leading-relaxed border-none outline-none bg-transparent resize-none"
              style={{ fontFamily: 'inherit', minHeight: 160 }}
              value={activeNote?.body ?? ''}
              onChange={e => updateNote(activeId, 'body', e.target.value)}
              placeholder="Start writing..."
            />
          </div>
          {activeNote?.links && activeNote.links.length > 0 && (
            <div className="flex flex-col gap-2 pt-3 pb-1 border-t border-[#d8d8d3]">
              {activeNote.links.map((link: NoteLink, i: number) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[12px] text-[#5a7a5c] hover:text-[#3d5c3f] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <div className="flex gap-2 mt-3">
            {['# Important', '# WIP'].map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-black/6 rounded-full text-[10px] text-[#666] cursor-pointer hover:bg-black/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
