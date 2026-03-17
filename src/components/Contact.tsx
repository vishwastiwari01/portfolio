'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  
  return (
    <section id="contact" className="py-32 px-6" style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* LEFT HALF (40%) */}
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <h2 className="text-5xl md:text-[48px] text-white mb-4" style={{ fontFamily: 'var(--font-syne)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95 }}>Let&apos;s build<br />something.</h2>
            <p className="text-gray-400 mb-12 font-sans text-lg">Open to full-time roles, contracts & collabs.</p>
            
            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:vishwast656@gmail.com" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors w-fit">
                <span className="text-xl">📧</span>
                <span className="font-mono text-sm relative outline-none">
                  vishwast656@gmail.com
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
              <a href="https://linkedin.com/in/vishwas-tiwari" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors w-fit">
                <span className="text-xl">🔗</span>
                <span className="font-mono text-sm relative outline-none">
                  linkedin.com/in/vishwas-tiwari
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
              <a href="https://x.com/TheVish_" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors w-fit">
                <span className="text-xl">🐦</span>
                <span className="font-mono text-sm relative outline-none">
                  x.com/TheVish_
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
              <a href="https://github.com/vishwastiwari01" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white hover:text-cyan-400 transition-colors w-fit">
                <span className="text-xl">⚡</span>
                <span className="font-mono text-sm relative outline-none">
                  github.com/vishwastiwari01
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
                </span>
              </a>
            </div>
            
            <button className="self-start border border-white text-white font-mono px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all">
              Download Resume →
            </button>
          </div>
          
          {/* RIGHT HALF (60%) */}
          <div className="w-full md:w-[60%]">
            <div className="p-10 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)' }}>
              {sent ? (
                <div className="py-20 text-center">
                  <p className="text-cyan-400 font-syne font-bold text-3xl mb-4">Message received! 🚀</p>
                  <p className="text-white/50 text-lg">I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  
                  <div className="relative">
                    <input type="text" id="name" required placeholder=" " 
                      className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-[#06b6d4] focus:outline-none transition-colors rounded-none shadow-none text-base" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#06b6d4] font-mono cursor-text">Name</label>
                  </div>
                  
                  <div className="relative">
                    <input type="email" id="email" required placeholder=" " 
                      className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-[#06b6d4] focus:outline-none transition-colors rounded-none shadow-none text-base" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#06b6d4] font-mono cursor-text">Email</label>
                  </div>
                  
                  <div className="relative">
                    <input type="text" id="subject" required placeholder=" " 
                      className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-[#06b6d4] focus:outline-none transition-colors rounded-none shadow-none text-base" />
                    <label htmlFor="subject" className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#06b6d4] font-mono cursor-text">Subject</label>
                  </div>
                  
                  <div className="relative">
                    <textarea id="message" required placeholder=" " rows={4}
                      className="peer w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-transparent focus:border-[#06b6d4] focus:outline-none transition-colors rounded-none shadow-none resize-none text-base" />
                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-white/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#06b6d4] font-mono cursor-text">Message</label>
                  </div>
                  
                  <button type="submit" 
                    className="w-full py-4 mt-6 text-white font-bold tracking-wide rounded-xl transition-all hover:scale-[1.01] hover:brightness-110 shadow-xl"
                    style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1)' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
