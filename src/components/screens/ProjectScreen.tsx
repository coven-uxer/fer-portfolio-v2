'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'
import { projects, type ProjectLink } from '@/data/content'

interface ProjectScreenProps {
  projectId: string | null
  onOpenLinks: (title: string, links: ProjectLink[]) => void
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }

export default function ProjectScreen({ projectId, onOpenLinks }: ProjectScreenProps) {
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

      {/* Read / Links pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="sticky bottom-4 flex justify-center mt-6"
      >
        <div className="bg-[#111813] rounded-full flex gap-0.5 p-1.5 shadow-[0_16px_32px_rgba(12,12,13,0.1),0_4px_4px_rgba(12,12,13,0.05)]">
          {/* Read — always active */}
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#111813] text-[13px] font-medium cursor-default select-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12"/></svg>
            Read
          </div>
          {/* Links */}
          <button
            onClick={() => onOpenLinks(project.title, project.links)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[#625f5f] text-[13px] font-medium hover:text-white/80 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            Links
          </button>
        </div>
      </motion.div>
    </Screen>
  )
}
