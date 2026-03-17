'use client'
import { useState } from 'react'

const skillGroups = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.4)',
    skills: ['Python', 'PyTorch', 'LangChain', 'RAG', 'LLMs', 'Ollama', 'FAISS', 'OpenCV'],
    className: 'col-span-1 md:col-span-4',
    visual: true,
  },
  {
    id: 2,
    title: 'Full Stack',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.4)',
    skills: ['Next.js', 'React', 'Node.js', 'Express', 'TypeScript', 'REST APIs', 'WebSockets'],
    className: 'col-span-1 md:col-span-4',
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    color: '#c8a96e',
    glow: 'rgba(200,169,110,0.4)',
    skills: ['PostgreSQL', 'Prisma', 'Supabase', 'Docker', 'Vercel', 'GitHub Actions', 'Redis'],
    className: 'col-span-1 md:col-span-4',
  },
  {
    id: 4,
    title: 'Specialized',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.4)',
    skills: ['Three.js', 'WebGL', 'Flutter', 'BLE', 'RADAR systems', 'Bluetooth P2P', 'WebRTC'],
    className: 'col-span-1 md:col-span-7',
  },
  {
    id: 5,
    title: 'Currently Learning',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.4)',
    skills: ['Rust', 'Kubernetes', 'AWS', 'Web3', 'LLM Fine-tuning'],
    className: 'col-span-1 md:col-span-5',
    badge: '🔥 active',
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 text-center cursor-default">ARSENAL</p>
        <h1 className="text-5xl md:text-7xl text-white mb-20 text-center cursor-default" style={{ fontFamily: 'var(--font-syne)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
          Tools I&apos;ve weaponized.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {skillGroups.map((group) => (
            <div 
              key={group.id}
              className={`group flex flex-col p-8 rounded-3xl transition-all duration-300 backdrop-blur-md relative overflow-hidden cursor-default ${group.className}`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = group.color;
                e.currentTarget.style.boxShadow = `0 10px 40px ${group.glow}`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {group.visual && (
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" style={{ background: group.color }}></div>
              )}
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-2xl text-white" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}>{group.title}</h3>
                {group.badge && (
                  <span className="font-mono text-[10px] uppercase px-3 py-1 rounded-full border flex-shrink-0" style={{ color: group.color, borderColor: `${group.color}50`, background: `${group.color}20` }}>
                    {group.badge}
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="font-mono text-[11px] px-4 py-2 rounded-full border transition-all"
                    style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      borderColor: 'rgba(255,255,255,0.1)', 
                      background: `${group.color}15` 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
