'use client'
import { useState } from 'react'
import VideoModal from './VideoModal'

const projects = [
  {
    title: 'BharatMaps',
    sub: 'DRDO Dare to Dream Winner',
    description: 'An offline-first emergency communication and navigation platform that enables secure messaging, verified alerts, and safe routing even during internet blackouts.',
    tags: ['DRDO', 'Offline Navigation', 'Emergency Comms'],
    color: '#06b6d4',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/bharatmapsworking.jpeg',
    featured: true,
  },
  {
    title: 'AI Honeypot',
    sub: 'Autonomous Anti-Scam Intelligence',
    description: 'Autonomous AI agent that calls scammers back, voice-impersonates humans on live calls, extracts structured threat intelligence with zero human involvement.',
    tags: ['Autonomous AI', 'Voice ML', 'Behavioral Classification'],
    color: '#6366f1',
    live: 'https://cyber-rakshak-frontend.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: null,
  },
  {
    title: 'MedGPT',
    sub: 'RAG Medical Knowledge System',
    description: 'RAG over 302 pages of medical literature + real-time PubMed search. Llama 3.1 70B with source citations and query expansion.',
    tags: ['RAG', 'Llama 3.1 70B', 'PubMed', 'Streamlit'],
    color: '#c8a96e',
    live: 'https://medgpt-website.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/medgpt.png',
  },
  {
    title: 'Minar E-commerce',
    sub: 'Next-Gen Shopping Experience',
    description: 'Full-stack e-commerce platform with seamless checkout, inventory management, and real-time payment processing.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    color: '#6366f1',
    live: 'https://minar-theta.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/minar.png',
  },
  {
    title: 'AwaasDirect',
    sub: "India's Broker-Free Property Marketplace",
    description: "India's first AI-powered direct housing marketplace. RERA-verified owners, zero brokerage, AI floor plan generator, 3D virtual tours, real-time chat.",
    tags: ['Next.js', 'Node.js', 'Prisma', 'AI'],
    color: '#06b6d4',
    live: 'https://awaasdirect.vercel.app',
    github: 'https://github.com/vishwastiwari01/awaasdirect',
    image: '/photos/project/awasdirect.png',
    featured: true,
  },
  {
    title: 'Smart Sewage System',
    sub: 'IoT Sewage Management',
    description: 'Real-time monitoring of sewage networks using IoT sensors. Predictive maintenance and overflow alerts dashboard.',
    tags: ['IoT', 'React', 'Node.js'],
    color: '#c8a96e',
    live: 'https://smart-sewage-system-rytr.vercel.app/login',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/Smartflow.png',
  },
  {
    title: 'LearnMate',
    sub: 'Gamified AI Learning Platform',
    description: 'Block Coding · Fill-Blanks · Real Code modes. Live Arena multiplayer battles, AI-powered hints, XP/leveling and achievement streaks.',
    tags: ['Next.js', 'AI', 'Multiplayer', 'Gamification'],
    color: '#6366f1',
    live: 'https://learnmate-nextjs.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/learnmate.png',
  },
  {
    title: 'TwinSpace',
    sub: 'Digital Twin & Defense Intelligence',
    description: 'Next-generation spatial intelligence and mapping for tactical and defense operations. 3D visualization and real-time data sync.',
    tags: ['Three.js', 'Defense', 'WebGL'],
    color: '#06b6d4',
    live: 'https://idex-aditi-4-0.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/signit.png',
    featured: true,
  },
  {
    title: 'FundRadar',
    sub: 'Startup Funding Discovery Platform',
    description: 'Aggregating and tracking real-time funding opportunities for startups. AI-driven match-making between founders and VCs.',
    tags: ['Next.js', 'AI', 'Fintech'],
    color: '#c8a96e',
    live: 'https://fundradar-swart.vercel.app',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/fundradar.png',
  },
  {
    title: 'Smart Portable Freezer',
    sub: 'IoT Temperature Controlled Storage',
    description: 'Hardware-software integrated portable freezer with mobile app monitoring, Bluetooth connectivity, and temperature logging.',
    tags: ['IoT', 'Hardware', 'Flutter', 'BLE'],
    color: '#6366f1',
    github: 'https://github.com/vishwastiwari01',
    image: '/photos/project/smartportablefreezer.jpeg',
  },
  {
    title: 'S.A.M',
    sub: 'Smart Autonomous Mobile Assistant (40MB)',
    description: 'Fine-tuned TinyLLaMA running on-device in just 40MB — no cloud. Full phone control via voice: calls, messages, navigation, apps. Continuous Jarvis wake-word mode.',
    tags: ['TinyLLaMA', 'On-Device ML', 'Flutter'],
    color: '#06b6d4',
    github: 'https://github.com/vishwastiwari01',
    video: '/videos/sam-demo.mp4',
    image: '/photos/project/SAM.jpeg',
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
              className="group relative flex flex-col md:flex-row md:items-stretch gap-8 py-12 border-t border-white/10 transition-colors hover:bg-white/[0.01] px-4 md:px-8 cursor-default"
            >
              {/* Subtle left border glow on hover */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_currentColor]" 
                style={{ background: project.color, color: project.color }}
              ></div>

              {/* Left: Project NUMBER (ghost text) */}
              <div className="w-full md:w-[10%] min-w-[80px] flex md:block items-center justify-between mb-4 md:mb-0">
                <div className="text-[60px] md:text-[80px] font-syne font-thin leading-[0.8] text-white/10 group-hover:text-white/20 transition-colors select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {project.featured && (
                  <span 
                    className="md:hidden font-mono text-[10px] uppercase px-3 py-1 rounded-full border shadow-[0_0_15px_currentColor] select-none"
                    style={{ color: project.color, borderColor: `${project.color}50`, background: `${project.color}20` }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Center: Title, Description, Actions */}
              <div className="w-full md:w-[40%] flex flex-col justify-center gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-syne font-extrabold text-[28px] text-white leading-none">{project.title}</h3>
                    {project.featured && (
                      <span 
                        className="hidden md:inline-block font-mono text-[10px] uppercase px-3 py-1 rounded-full border shadow-[0_0_15px_currentColor] select-none"
                        style={{ color: project.color, borderColor: `${project.color}50`, background: `${project.color}20` }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[#06b6d4] text-xs">{project.sub}</p>
                </div>
                
                <p className="text-white/50 text-[15px] leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
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
                
                <div className="flex gap-4 mt-4">
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

              {/* Right: Image Preview */}
              <div className="w-full md:w-[50%] flex flex-col justify-center mt-6 md:mt-0">
                {project.image ? (
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className="w-full aspect-[16/10] rounded-xl border border-white/10 relative shadow-2xl overflow-hidden flex items-center justify-center bg-[#0c0c1a]">
                    <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}></div>
                    <span className="font-syne font-bold text-3xl opacity-20 select-none" style={{ color: project.color }}>{project.title}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  )
}
