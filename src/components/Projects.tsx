'use client'
import { useState } from 'react'
import VideoModal from './VideoModal'

const projects = [
  {
    title: 'AI Honeypot',
    sub: 'Autonomous Anti-Scam Intelligence',
    description: 'Autonomous AI agent that calls scammers back, voice-impersonates humans on live calls, extracts structured threat intelligence with zero human involvement.',
    tags: ['Autonomous AI', 'Voice ML', 'Behavioral Classification'],
    color: '#06b6d4',
    github: 'https://github.com/vishwastiwari01',
    video: null,
  },
  {
    title: 'S.A.M',
    sub: 'Smart Autonomous Mobile Assistant (40MB)',
    description: 'Fine-tuned TinyLLaMA running on-device in just 40MB — no cloud. Full phone control via voice: calls, messages, navigation, apps. Continuous Jarvis wake-word mode.',
    tags: ['TinyLLaMA', 'On-Device ML', 'Flutter'],
    color: '#6366f1',
    github: 'https://github.com/vishwastiwari01',
    video: '/videos/sam-demo.mp4',
  },
  {
    title: 'MedGPT',
    sub: 'RAG Medical Knowledge System',
    description: 'RAG over 302 pages of medical literature + real-time PubMed search. Llama 3.1 70B with source citations and query expansion.',
    tags: ['RAG', 'Llama 3.1 70B', 'PubMed', 'Streamlit'],
    color: '#c8a96e',
    live: 'https://medgpt1.streamlit.app',
    github: 'https://github.com/vishwastiwari01',
    video: null,
  },
  {
    title: 'MunzoPay',
    sub: 'BLE Offline Payment System',
    description: 'P2P payments over Bluetooth Low Energy — zero internet required. Offline signing, daily limits, sync-on-reconnect. Built for India\'s rural reality.',
    tags: ['BLE', 'Flutter', 'Fintech', 'Offline-first'],
    color: '#06b6d4',
    github: 'https://github.com/vishwastiwari01',
    video: '/videos/munzopay-demo.mp4',
  },
  {
    title: 'PANOPTIC',
    sub: 'UAS-SIGINT Defense Intelligence Platform',
    description: 'Defense-grade drone dashboard: 3D Himalayan terrain (Three.js), satellite downlink, RADAR/JAMMER/SAR classification, RF spectrogram, NVG/FLIR modes.',
    tags: ['Three.js', 'Defense', 'RADAR', 'WebGL'],
    color: '#6366f1',
    github: 'https://github.com/vishwastiwari01',
    video: null,
    featured: true,
  },
  {
    title: 'AwaasDirect',
    sub: "India's Broker-Free Property Marketplace",
    description: "India's first AI-powered direct housing marketplace. RERA-verified owners, zero brokerage, AI floor plan generator, 3D virtual tours, real-time chat.",
    tags: ['Next.js', 'Node.js', 'Prisma', 'AI'],
    color: '#c8a96e',
    live: 'https://github.com/vishwastiwari01/awaasdirect',
    github: 'https://github.com/vishwastiwari01/awaasdirect',
    video: null,
    featured: true,
  },
  {
    title: 'FinOps',
    sub: 'Zero-Cost AI Financial Advisor',
    description: 'LSTM 7-day price forecasting + Gemini 1.5 Flash + RSS news sentiment + Yahoo Finance. Candlestick dashboard with TensorFlow/Keras · FAISS stack.',
    tags: ['LSTM', 'Gemini 1.5', 'FAISS', 'TensorFlow'],
    color: '#06b6d4',
    github: 'https://github.com/vishwastiwari01',
    video: null,
  },
  {
    title: 'LearnMate',
    sub: 'Gamified AI Learning Platform',
    description: 'Block Coding · Fill-Blanks · Real Code modes. Live Arena multiplayer battles, AI-powered hints, XP/leveling and achievement streaks.',
    tags: ['Next.js', 'AI', 'Multiplayer', 'Gamification'],
    color: '#6366f1',
    live: 'https://learnmate-nextjs.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    video: null,
  },
]

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="works" className="bg-[#04040c] py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">PROJECTS</p>
        <h2 className="text-6xl md:text-7xl text-white mb-16" style={{ fontFamily: 'var(--font-syne)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95 }}>Featured Work.</h2>

        <div className="flex flex-col border-b border-white/10">
          {projects.map((project, i) => (
            <div 
              key={project.title}
              className="group relative flex flex-col md:flex-row md:items-center gap-6 py-12 border-t border-white/10 transition-colors hover:bg-white/[0.01] px-4 md:px-8 cursor-default"
            >
              {/* Subtle left border glow on hover */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_currentColor]" 
                style={{ background: project.color, color: project.color }}
              ></div>

              {/* Left: Project NUMBER (ghost text) */}
              <div className="w-[10%] min-w-[80px]">
                <div className="text-[80px] font-syne font-thin leading-[0.8] text-white/10 group-hover:text-white/20 transition-colors select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Center: Title and Tagline */}
              <div className="w-full md:w-[40%] flex flex-col gap-2 relative">
                <div className="flex items-center gap-3">
                  <h3 className="font-syne font-extrabold text-[28px] text-white leading-none">{project.title}</h3>
                  {project.featured && (
                    <span 
                      className="font-mono text-[10px] uppercase px-3 py-1 rounded-full border shadow-[0_0_15px_currentColor] select-none"
                      style={{ color: project.color, borderColor: `${project.color}50`, background: `${project.color}20` }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <p className="font-mono text-[#06b6d4] text-xs">{project.sub}</p>
                <p className="text-white/50 text-sm mt-3 leading-relaxed md:hidden">{project.description}</p>
              </div>

              {/* Right: Tech Stack & Actions */}
              <div className="w-full md:w-[50%] flex flex-col items-start md:items-end gap-5">
                <p className="text-white/50 text-[15px] leading-relaxed hidden md:block text-right">{project.description}</p>
                <div className="flex flex-wrap md:justify-end gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="font-mono text-[11px] px-3 py-1 rounded-md border"
                      style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.1)', background: `${project.color}15` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
                      <svg className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">
                      <span className="opacity-50 group-hover/link:opacity-100 transition-opacity">↗</span> Live
                    </a>
                  )}
                  {project.video && (
                    <button
                      onClick={() => setActiveVideo(project.video)}
                      className="group/link flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
                      style={{ color: project.color }}>
                      <span className="opacity-50 group-hover/link:opacity-100 transition-opacity">▶</span> Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  )
}
