'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'
import { projects } from '@/data/content'

interface ProjectScreenProps { projectId: string | null }

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export default function ProjectScreen({ projectId }: ProjectScreenProps) {
  const project = projects.find(p => p.id === projectId)
  if (!project) return null
  return (
    <Screen id={`project-${projectId}`}>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="font-serif text-[32px] leading-[1.15] text-[#1a1a1a] mb-6">{project.title}</motion.h1>
        <motion.div variants={item} className="flex items-center gap-2 mb-6">
          {['01 Research', '02 Analysis', '03 Synthesis'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
              <span className="text-[9px] tracking-widest text-[#999] uppercase font-medium whitespace-nowrap">{step}</span>
              {i < 2 && <div className="flex-1 h-px bg-[#ddd]" />}
            </div>
          ))}
        </motion.div>
        {project.body.map((para, i) => (
          <motion.p key={i} variants={item} className="text-[13px] leading-[1.75] text-[#555] mb-4">{para}</motion.p>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="sticky bottom-4 flex justify-center mt-4"
      >
        <div className="bg-[#1a1a1a] rounded-full flex gap-0.5 p-1">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg>Read
          </button>
          <a href="#" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium text-white/80 bg-white/10 hover:bg-white/18 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>Links
          </a>
        </div>
      </motion.div>
    </Screen>
  )
}
