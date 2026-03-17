"use client"
import { useState } from 'react'

const favs = [
  { src: '/photos/messi.webp', label: 'FAV\nPLAYER', desc: 'Messi 🐐 GOAT. No debate.' },
  { src: '/photos/favfood.webp', label: 'FAV\nFOOD', desc: 'Paneer Butter Masala + Naan. Non-negotiable.' },
  { src: '/photos/hyderabad.jpg', label: 'FAV\nCITY', desc: 'Hyderabad 🕌 Biryani capital of the world.' },
  { src: '/photos/bike.jpg', label: 'FAV\nRIDE', desc: 'Night rides through Hyderabad at 2AM 🏍️' },
  { src: '/photos/dietcoke.jpg', label: 'FAV\nDRINK', desc: 'Diet Coke forever. Non-negotiable.' },
  { src: '/photos/setup.jpg', label: 'FAV\nSETUP', desc: 'Dual monitors. Where the magic happens.' },
]

export default function SuffelCard() {
  const [current, setCurrent] = useState(0)
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden" style={{ background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)" }}>
      <div className="container mx-auto px-6 relative z-10 py-20 flex flex-col h-full justify-center">
        <p style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 900,
          fontSize: 'clamp(64px, 12vw, 120px)',
          color: 'white',
          textAlign: 'center',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          marginBottom: '48px',
        }}>
          FAV.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto w-full">
          {/* LEFT col (45%) */}
          <div className="w-full md:w-[45%] relative z-20 flex flex-col">
            <span className="font-mono text-gray-500 mb-6 tracking-widest text-sm">
              {String(current + 1).padStart(2, '0')} / {String(favs.length).padStart(2, '0')}
            </span>
            <div className="mb-6 flex flex-col justify-center">
              {favs[current].label.split('\n').map((line, i) => (
                <span key={i} className={`text-[72px] font-syne font-black leading-none ${i === 0 ? 'text-white' : 'text-amber-300'}`} style={{ letterSpacing: '-0.03em' }}>
                  {line}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-[16px] max-w-sm font-sans h-12">
              {favs[current].desc}
            </p>
            
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setCurrent(i => (i - 1 + favs.length) % favs.length)}
                className="border border-white/20 text-white px-6 py-2 rounded-full hover:border-white/50 transition-all text-sm font-mono"
              >
                ← prev
              </button>
              <button
                onClick={() => setCurrent(i => (i + 1) % favs.length)}
                className="border border-white/20 text-white px-6 py-2 rounded-full hover:border-white/50 transition-all text-sm font-mono"
              >
                next →
              </button>
            </div>
          </div>
          
          {/* RIGHT col (55%) */}
          <div className="w-full md:w-[55%] relative z-10 flex justify-end">
            <div className="w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                key={current}
                src={favs[current].src}
                alt={favs[current].label.replace('\n', ' ')}
                className="w-full h-full object-cover"
                style={{ animation: 'fadeSlide 0.4s ease-out forwards' }}
              />
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}} />
    </section>
  )
}
