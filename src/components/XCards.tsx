"use client"

const tweets = [
  {
    name: "Vishwas Tiwari", handle: "@TheVish_",
    text: "Building in public is the fastest way to grow. Ship ugly, iterate fast, learn loud.",
    date: "Feb 12, 2026",
    reply_name: "Enfibio Tech", reply_handle: "@EnfibioTech",
    reply_text: "This is the way 🔥"
  },
  {
    name: "Vishwas Tiwari", handle: "@TheVish_",  
    text: "From 0 to ₹2.5L grant in 8 months. The grind is real but so are the results. Keep building.",
    date: "Jan 28, 2026",
    reply_name: "NIT Raipur CSE", reply_handle: "@NITRCSE",
    reply_text: "Proud of you! 🚀"
  }
]

export default function XCards() {
  return (
    <div style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)" }}
      className="py-20 px-6 flex flex-col items-center">
      <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">TWITTER / X</p>
      <h1 className="text-6xl text-white mb-16 font-syne font-black">MY TWEETS.</h1>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
        {tweets.map((tweet, i) => (
          <div key={i} className="flex-1 bg-[#111] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="/photos/vishwas1.jpg" alt="Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <p className="text-white font-semibold text-sm">{tweet.name}</p>
                  <p className="text-white/40 text-xs font-mono">{tweet.handle}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            
            <p className="text-white/90 leading-relaxed mb-4 text-[15px]">{tweet.text}</p>
            <p className="text-white/40 text-xs font-mono mb-4">{tweet.date}</p>
            
            <div className="pt-4 border-t border-white/10 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-indigo-600/30 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  {tweet.reply_name[0]}
                </div>
                <p className="text-white/70 text-sm font-semibold">{tweet.reply_name} <span className="text-white/30 font-normal text-xs font-mono">{tweet.reply_handle}</span></p>
              </div>
              <p className="text-white/60 text-sm pl-8">{tweet.reply_text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <a href="https://x.com/TheVish_" target="_blank" rel="noopener noreferrer"
        className="mt-12 bg-[#cbd5e1] text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform text-sm inline-flex items-center gap-2">
        Follow me on X →
      </a>
    </div>
  )
}
