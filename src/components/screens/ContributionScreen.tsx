'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'
import { contributions } from '@/data/content'

interface ContributionScreenProps { contributionId: string | null }

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export default function ContributionScreen({ contributionId }: ContributionScreenProps) {
  const contribution = contributions.find(c => c.id === contributionId)
  if (!contribution) return null
  return (
    <Screen id={`contribution-${contributionId}`}>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="text-[9px] tracking-[0.1em] uppercase text-[#999] font-semibold mb-2">Contributions</motion.p>
        <motion.h1 variants={item} className="font-serif text-[32px] leading-[1.15] text-[#1a1a1a] mb-6">{contribution.title}</motion.h1>
        {contribution.body.map((para, i) => (
          <motion.p key={i} variants={item} className="text-[13px] leading-[1.75] text-[#555] mb-4">{para}</motion.p>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="sticky bottom-4 flex justify-center mt-4">
        <div className="bg-[#1a1a1a] rounded-full flex gap-0.5 p-1">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors">Read</button>
          <a href="#" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors">Links</a>
        </div>
      </motion.div>
    </Screen>
  )
}
