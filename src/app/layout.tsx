import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fer Loera — Portfolio',
  description: 'UX/UI Designer bridging human behavior and digital product design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
