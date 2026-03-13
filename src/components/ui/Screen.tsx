'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface ScreenProps {
  id: string
  children: React.ReactNode
  className?: string
}

const variants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
}

export default function Screen({ id, children, className = '' }: ScreenProps) {
  return (
    <motion.div
      key={id}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
      className={`absolute inset-0 overflow-y-auto no-scrollbar ${className}`}
      style={{ paddingTop: 70, paddingLeft: 24, paddingRight: 24, paddingBottom: 80 }}
    >
      {children}
    </motion.div>
  )
}
