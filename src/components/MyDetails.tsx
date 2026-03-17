"use client"
import { useState } from 'react'

const stats = [
  { title: 'Systems Shipped', value: 15, suffix: '+', desc: 'production AI systems', features: ['AI Honeypot', 'S.A.M', 'MedGPT', 'MunzoPay', 'PANOPTIC', 'FinOps', 'LearnMate', 'AwaasDirect'] },
  { title: 'National Rank', value: 2, suffix: '%', prefix: 'Top ', desc: 'of 40,000+ builders', features: ['India AI Impact Buildathon', 'GUVI × HCL', 'Feb 2026', '40,000+ participants'] },
  { title: 'GitHub Repos', value: 20, suffix: '+', desc: 'public + private', features: ['Python', 'JavaScript', 'Flutter', 'Next.js'] },
  { title: 'Languages Known', value: 8, suffix: '', desc: 'programming languages', features: ['Python', 'JavaScript', 'Dart', 'Java', 'PHP', 'C', 'Kotlin', 'React Native'] },
  { title: 'Startup Founded', value: 1, suffix: '', desc: 'Enfibio Technologies Pvt. Ltd.', features: ['AI Division', 'IoT Division', 'Mobile Division', 'Co-Founder & CTO'] },
]

export default function MyDetails() {
  const [flipped, setFlipped] = useState<number | null>(null)
  return (
    <div
      style={{ background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)" }}
      className="py-20 px-6"
    >
      <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 text-center">NUMBERS</p>
      <h1 className="text-6xl text-white mb-16 text-center font-syne font-black">MY STATS.</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="group relative h-48 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div
              className="w-full h-full transition-transform duration-500"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-[#0c0c1a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">{stat.title}</p>
                <p className="text-5xl text-amber-400 font-syne font-black">
                  {stat.prefix || ''}{stat.value}{stat.suffix}
                </p>
                <div className="flex items-end justify-between">
                  <p className="text-white/30 text-xs font-mono">{stat.desc}</p>
                  <span className="text-white/20 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    ↻ flip
                  </span>
                </div>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 bg-indigo-950 border border-indigo-500/30 rounded-2xl p-6 flex flex-col gap-2"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-indigo-400 text-xs font-mono uppercase tracking-widest mb-2">{stat.title}</p>
                {stat.features.map(f => (
                  <p key={f} className="text-white/70 text-sm font-mono">→ {f}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
