'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'
import { contributions } from '@/data/content'

interface ContributionsScreenProps { onOpenContribution: (id: string) => void }

const rotations = [-1.5, 1.2, -0.8]
const offsets = [4, 55, 8]

export default function ContributionsScreen({ onOpenContribution }: ContributionsScreenProps) {
  return (
    <Screen id="contributions">
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-[40px] text-[#1a1a1a] mt-2 mb-7">
        Contributions
      </motion.h1>
      <div className="relative" style={{ minHeight: 500 }}>
        {contributions.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => onOpenContribution(c.id)}
            initial={{ opacity: 0, y: 24, rotate: rotations[i] }}
            animate={{ opacity: 1, y: 0, rotate: rotations[i] }}
            transition={{ delay: i * 0.1 + 0.1, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            className="absolute text-left bg-white rounded-xl p-5 shadow-md w-56"
            style={{ marginLeft: offsets[i], top: i * 190, transformOrigin: 'top center' }}
          >
            <div className="absolute -top-2.5 left-5 w-4 h-4 rounded-full" style={{ background: '#e54', boxShadow: '0 2px 6px rgba(220,60,40,0.4)' }} />
            <p className="font-serif text-[20px] text-[#1a1a1a] mb-2 leading-snug">{c.title}</p>
            <p className="text-[11px] leading-relaxed text-[#777]">{c.preview}</p>
          </motion.button>
        ))}
      </div>
    </Screen>
  )
}
