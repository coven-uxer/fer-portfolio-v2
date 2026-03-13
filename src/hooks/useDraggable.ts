'use client'
import { useState, useCallback, useRef } from 'react'

interface Position { x: number; y: number }

export function useDraggable(initial: Position = { x: 80, y: 60 }) {
  const [pos, setPos] = useState<Position>(initial)
  const dragging = useRef(false)
  const origin = useRef<Position>({ x: 0, y: 0 })
  const startPos = useRef<Position>({ x: 0, y: 0 })

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't drag when clicking buttons inside the handle
    if ((e.target as HTMLElement).closest('button')) return
    dragging.current = true
    origin.current = { x: e.clientX, y: e.clientY }
    startPos.current = pos

    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const dx = e.clientX - origin.current.x
      const dy = e.clientY - origin.current.y
      setPos({
        x: Math.max(0, Math.min(window.innerWidth - 340, startPos.current.x + dx)),
        y: Math.max(0, Math.min(window.innerHeight - 740, startPos.current.y + dy)),
      })
    }
    const onUp = () => {
      dragging.current = false
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [pos])

  return { pos, onMouseDown }
}
