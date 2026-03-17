'use client'

const achievements = [
  {
    id: '01',
    title: 'National Finalist',
    org: 'Smart India Hackathon 2024 — National Level',
    desc: 'Selected among top teams nationally out of 1M+ participants. Presented defense-tech solution (PANOPTIC) at national level.',
    color: '#c8a96e', // GOLD
    icon: '🏆',
  },
  {
    id: '02',
    title: '₹2.5 Lakh Grant',
    org: 'IEDC Startup Grant — Govt. of India',
    desc: 'Received ₹2,50,000 seed funding from Innovation and Entrepreneurship Development Centre for Enfibio Technologies.',
    color: '#06b6d4', // CYAN
    icon: '💰',
  },
  {
    id: '03',
    title: 'YUKTI–APF Fellow',
    org: 'AICTE Productization Fellowship',
    desc: "Selected for AICTE's YUKTI–APF program — India's flagship productization fellowship for turning student innovations into market-ready products.",
    color: '#6366f1', // INDIGO
    icon: '🎯',
  },
  {
    id: '04',
    title: 'National Finalist',
    org: 'Eduaithon 2024 — AI National Hackathon',
    desc: 'National-level AI hackathon finalist. Built SAM — a multi-agent medical AI system using RAG + LLMs.',
    color: '#ec4899', // PINK
    icon: '🤖',
  }
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ background: "radial-gradient(125% 125% at 50% 0%, #000000 40%, #0d1a36 100%)" }}
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 text-center cursor-default">RECOGNITION</p>
        <h1
          style={{ fontFamily: 'var(--font-syne)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95 }}
          className="text-5xl md:text-7xl text-white mb-20 text-center cursor-default"
        >
          Where the work<br />got noticed.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
             <div 
               key={item.id}
               className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl transition-all duration-300 backdrop-blur-md cursor-default"
               style={{
                 background: 'rgba(255,255,255,0.03)',
                 border: '1px solid rgba(255,255,255,0.08)',
                 boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.borderColor = item.color;
                 e.currentTarget.style.boxShadow = `0 0 40px ${item.color}30, 0 4px 30px rgba(0,0,0,0.1)`;
                 e.currentTarget.style.transform = 'translateY(-4px)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                 e.currentTarget.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
                 e.currentTarget.style.transform = 'none';
               }}
             >
                <div className="flex flex-col items-center sm:items-start gap-4 flex-shrink-0 w-32">
                   <div className="text-6xl select-none">{item.icon}</div>
                   <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider select-none text-center" style={{ background: item.color + '20', color: item.color, border: `1px solid ${item.color}40`, width: 'fit-content' }}>
                     AWARD
                   </div>
                </div>
                <div>
                   <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}>{item.title}</h3>
                   <p className="font-mono text-xs mb-4 text-[#06b6d4]">{item.org}</p>
                   <p className="text-gray-400 font-sans text-[15px] leading-relaxed">{item.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  )
}
