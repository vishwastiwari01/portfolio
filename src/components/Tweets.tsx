'use client'

const tweets = [
  {
    text: "Building AI that calls scammers back and wastes their time. Zero human involvement. This is the future of anti-scam tech. 🤖📞",
    date: "Mar 2026",
    likes: 142,
  },
  {
    text: "Top 2% of 40,000+ at India AI Buildathon. Never thought shipping 15+ AI systems in college would lead here. Keep building. 🏆",
    date: "Feb 2026",
    likes: 387,
  },
  {
    text: "On-device AI in 40MB. No cloud. Full phone control. The future is edge computing and it's already here. S.A.M is real. 🤖",
    date: "Jan 2026",
    likes: 256,
  },
]

export default function Tweets() {
  return (
    <section className="bg-[#04040c] py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">TWITTER / X</p>
        <h2 className="font-syne font-black text-6xl text-white mb-4">My Tweets.</h2>
        <a href="https://x.com/TheVish_" target="_blank" rel="noopener noreferrer"
          className="font-mono text-white/40 hover:text-white transition-colors text-sm mb-16 inline-block">
          @TheVish_ ↗
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {tweets.map((tweet, i) => (
            <div key={i}
              className={`bg-[#0c0c1a] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all hover:scale-[1.02] ${i === 0 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    VT
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Vishwas Tiwari</p>
                    <p className="text-white/40 text-xs font-mono">@TheVish_</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-4">{tweet.text}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/30">{tweet.date}</span>
                <span className="font-mono text-xs text-white/30">♥ {tweet.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
