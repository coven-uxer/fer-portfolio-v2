'use client'
import { motion } from 'framer-motion'
import Screen from '@/components/ui/Screen'

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }

export default function AboutScreen() {
  return (
    <Screen id="about">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4">
        <motion.h1
          variants={item}
          className="text-[46px] leading-[1.1] font-serif text-[#5a7a5c] mt-2"
        >
          About me
        </motion.h1>

        <motion.div variants={item} className="flex flex-col gap-3">
          <p className="text-[14px] font-semibold text-[#1a1a1a] leading-snug">
            The mindset
          </p>
          <p className="text-[13px] leading-relaxed text-[#444]">
            My approach to design is rooted in the study of Human Behavior. I believe that a truly functional product isn&apos;t just easy to use; it&apos;s built on evidence, empathy, and a deep understanding of how people think and act.
          </p>
          <p className="text-[13px] leading-relaxed text-[#444]">
            With a background in UI and a passion for UX Research, I focus on creating scalable systems and meaningful experiences. I&apos;m constantly evolving, adapting, and looking for ways to add value through detail-oriented and people-centered strategy.
          </p>
        </motion.div>
      </motion.div>
    </Screen>
  )
}
