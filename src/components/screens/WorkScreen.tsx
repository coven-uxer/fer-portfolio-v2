'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'
import { projects } from '@/data/content'
import { useDragScroll } from '@/hooks/useDragScroll'

interface WorkScreenProps { onOpenProject: (id: string) => void }

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }

export default function WorkScreen({ onOpenProject }: WorkScreenProps) {
  const drag = useDragScroll()

  return (
    <Screen id="work">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="font-serif text-[46px] leading-[1.05] text-[#1a1a1a] mt-2 mb-5">
          Hello, I&apos;m<br /><span className="text-[#5a7a5c] italic">Fer Loera</span>
        </motion.h1>
        <motion.p variants={item} className="text-[13px] leading-relaxed text-[#555] mb-6">
          I bridge UX/UI design with the study of human behavior to add strategic value to every pixel.
          I specialize in creating digital products where empathy and psychological evidence drive the design.
        </motion.p>
        <motion.div variants={item} className="flex items-center gap-2 mb-8">
          {['01 Research', '02 Analysis', '03 Synthesis'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
              <span className="text-[9px] tracking-widest text-[#999] uppercase font-medium whitespace-nowrap">{step}</span>
              {i < 2 && <div className="flex-1 h-px bg-[#ddd]" />}
            </div>
          ))}
        </motion.div>
        <motion.p variants={item} className="text-[14px] font-medium text-[#1a1a1a] mb-4">Selected work</motion.p>
        <motion.div
          variants={item}
          ref={drag.ref}
          onMouseDown={drag.onMouseDown}
          onMouseMove={drag.onMouseMove}
          onMouseUp={drag.onMouseUp}
          onMouseLeave={drag.onMouseLeave}
          className="flex gap-3 overflow-x-auto no-scrollbar pb-3 pr-1 select-none"
          style={{ scrollSnapType: 'x mandatory', cursor: 'grab' }}
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => { if (!drag.wasDrag()) onOpenProject(project.id) }}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="flex-shrink-0 w-40 h-48 rounded-2xl p-4 flex flex-col justify-end text-left"
              style={{ background: project.gradient, scrollSnapAlign: 'start', pointerEvents: 'auto' }}
            >
              <p className="font-serif text-[15px] text-white/90 leading-snug mb-1">{project.title}</p>
              <p className="text-[10px] text-white/50 tracking-wide">{project.subtitle}</p>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </Screen>
  )
}
