import { Syne, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['400','600','700','800'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const spaceMono = Space_Mono({ subsets: ['latin'], variable: '--font-space-mono', weight: ['400','700'] })

export const metadata = { title: 'Vishwas Tiwari — AI Builder', description: 'Top 2% · Co-Founder · 15+ AI Systems' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
