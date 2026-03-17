'use client'
import { useMemo } from 'react'

const PersonSVG = ({ person }: { person: any }) => (
  <div
    className="absolute bottom-0 flex-shrink-0"
    style={{
      left: `${person.x}%`,
      transform: `scale(${person.size}) rotate(${person.rotation}deg)`,
      transformOrigin: 'bottom center',
      animation: `sway ${person.duration}s ease-in-out infinite ${person.delay}s`,
      opacity: person.opacity,
    }}
  >
    <svg width="48" height="90" viewBox="0 0 48 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hat if applicable */}
      {person.hasHat && <rect x="12" y="0" width="24" height="6" rx="2" fill={`rgb(${person.shade},${person.shade},${person.shade})`} />}
      {person.hasHat && <rect x="8" y="5" width="32" height="3" rx="1" fill={`rgb(${person.shade},${person.shade},${person.shade})`} />}
      {/* Head */}
      <circle cx="24" cy={person.hasHat ? "20" : "14"} r="12" fill={`rgb(${person.shade},${person.shade},${person.shade})`} />
      {/* Glasses if applicable */}
      {person.hasGlasses && <>
        <circle cx="20" cy={person.hasHat ? "19" : "13"} r="4" stroke="black" strokeWidth="1.5" fill="none" />
        <circle cx="28" cy={person.hasHat ? "19" : "13"} r="4" stroke="black" strokeWidth="1.5" fill="none" />
        <line x1="24" y1={person.hasHat ? "19" : "13"} x2="25" y2={person.hasHat ? "19" : "13"} stroke="black" strokeWidth="1.5" />
      </>}
      {/* Body */}
      <rect x="16" y={person.hasHat ? "32" : "26"} width="16" height="28" rx="4" fill={`rgb(${person.shade},${person.shade},${person.shade})`} />
      {/* Left arm */}
      <line x1="16" y1={person.hasHat ? "36" : "30"} x2="4" y2={person.hasHat ? "52" : "46"} stroke={`rgb(${person.shade},${person.shade},${person.shade})`} strokeWidth="5" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="32" y1={person.hasHat ? "36" : "30"} x2="44" y2={person.hasHat ? "52" : "46"} stroke={`rgb(${person.shade},${person.shade},${person.shade})`} strokeWidth="5" strokeLinecap="round" />
      {/* Left leg */}
      <line x1="20" y1={person.hasHat ? "60" : "54"} x2="14" y2="90" stroke={`rgb(${person.shade},${person.shade},${person.shade})`} strokeWidth="6" strokeLinecap="round" />
      {/* Right leg */}
      <line x1="28" y1={person.hasHat ? "60" : "54"} x2="34" y2="90" stroke={`rgb(${person.shade},${person.shade},${person.shade})`} strokeWidth="6" strokeLinecap="round" />
    </svg>
  </div>
)

export default function CrowdHero() {
  const people = useMemo(() => {
    const rows = [
      { count: 35, yOffset: 0, sizeRange: [0.9, 1.3], opacityRange: [0.85, 1], shadeRange: [180, 240] },
      { count: 30, yOffset: 20, sizeRange: [0.65, 0.9], opacityRange: [0.5, 0.75], shadeRange: [80, 140] },
      { count: 25, yOffset: 40, sizeRange: [0.45, 0.65], opacityRange: [0.25, 0.45], shadeRange: [30, 70] },
    ]
    let allPeople: any[] = []
    let id = 0
    rows.forEach((row) => {
      for (let i = 0; i < row.count; i++) {
        const shade = Math.floor(row.shadeRange[0] + Math.random() * (row.shadeRange[1] - row.shadeRange[0]))
        allPeople.push({
          id: id++,
          x: (i / row.count) * 100 + (Math.random() - 0.5) * (100 / row.count),
          size: row.sizeRange[0] + Math.random() * (row.sizeRange[1] - row.sizeRange[0]),
          delay: Math.random() * 3,
          duration: 2.5 + Math.random() * 2,
          rotation: (Math.random() - 0.5) * 12,
          hasGlasses: Math.random() > 0.72,
          hasHat: Math.random() > 0.82,
          shade,
          opacity: row.opacityRange[0] + Math.random() * (row.opacityRange[1] - row.opacityRange[0]),
          yOffset: row.yOffset,
        })
      }
    })
    return allPeople
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient fade at top so crowd blends into black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-10" />
      {/* Crowd */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%]">
        {people.map((person) => (
          <PersonSVG key={person.id} person={person} />
        ))}
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  )
}
