'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-syne font-black text-xl"
          style={{ background: 'linear-gradient(135deg,#fff 0%,#c8a96e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          VT
        </span>
        <div className="hidden md:flex items-center gap-8">
          {['home','works','about','contact'].map(link => (
            <a key={link} href={`#${link}`}
              className="font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://enfibio.me"
            target="_blank"
            className="hidden md:block"
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              paddingBottom: '1px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
          >
            enfibio.me ↗
          </a>
          <a 
            href="mailto:vishwast656@gmail.com"
            style={{
              border: '1px solid rgba(255,255,255,0.7)',
              borderRadius: '9999px',
              padding: '8px 22px',
              fontSize: '12px',
              fontFamily: '"Space Mono", monospace',
              letterSpacing: '0.12em',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'white'
              e.currentTarget.style.color = 'black'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'white'
            }}
          >
            LET&apos;S TALK
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {['home','works','about','contact'].map(link => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}
              className="font-mono text-sm text-white/60 uppercase tracking-widest">{link}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
