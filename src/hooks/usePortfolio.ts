'use client'
import { useState, useCallback } from 'react'
import { defaultNotes, type Note } from '@/data/content'

export type ScreenId =
  | 'work'
  | 'about'
  | 'contributions'
  | 'connect'
  | 'project'
  | 'contribution'

interface PortfolioState {
  currentScreen: ScreenId
  previousScreen: ScreenId
  activeProjectId: string | null
  activeContributionId: string | null
  menuOpen: boolean
}

export function usePortfolio() {
  const [state, setState] = useState<PortfolioState>({
    currentScreen: 'work',
    previousScreen: 'work',
    activeProjectId: null,
    activeContributionId: null,
    menuOpen: false,
  })

  const navTo = useCallback((screen: ScreenId) => {
    setState(s => ({ ...s, previousScreen: s.currentScreen, currentScreen: screen, menuOpen: false }))
  }, [])

  const openProject = useCallback((id: string) => {
    setState(s => ({ ...s, previousScreen: 'work', currentScreen: 'project', activeProjectId: id, menuOpen: false }))
  }, [])

  const openContribution = useCallback((id: string) => {
    setState(s => ({ ...s, previousScreen: 'contributions', currentScreen: 'contribution', activeContributionId: id, menuOpen: false }))
  }, [])

  const goBack = useCallback(() => {
    setState(s => ({ ...s, currentScreen: s.previousScreen }))
  }, [])

  const openMenu = useCallback(() => setState(s => ({ ...s, menuOpen: true })), [])
  const closeMenu = useCallback(() => setState(s => ({ ...s, menuOpen: false })), [])

  const showPill = state.currentScreen === 'work' || state.currentScreen === 'about'
  const showBack = state.currentScreen === 'project' || state.currentScreen === 'contribution'
  const showMenu = !showBack

  return { state, navTo, openProject, openContribution, goBack, openMenu, closeMenu, showPill, showBack, showMenu }
}

// Notes hook — session only, no persistence
export function useNotes() {
  const [notes, setNotes] = useState<Note[]>(defaultNotes)
  const [activeId, setActiveId] = useState<number>(defaultNotes[0].id)

  const activeNote = notes.find(n => n.id === activeId) ?? notes[0]

  const createNote = useCallback(() => {
    const newNote: Note = { id: Date.now(), title: 'New Note', date: 'Now', body: '' }
    setNotes(prev => [newNote, ...prev])
    setActiveId(newNote.id)
  }, [])

  const updateNote = useCallback((id: number, field: 'title' | 'body', value: string) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, [field]: value } : n))
  }, [])

  return { notes, activeId, activeNote, setActiveId, createNote, updateNote }
}
