/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';

export default function About() {
  const timeline = [
    {
      date: 'FEB 2026',
      title: '🏆 Top 2% — India AI Impact Buildathon',
      sub: 'GUVI × HCL · 40,000+ participants nationwide',
      color: 'primary',
    },
    {
      date: 'JAN 2026',
      title: '📜 Eduaithon — ICTIEE 2026',
      sub: 'GITAM University × IUCEE Foundation',
      color: 'cyan',
    },
    {
      date: '2024 — PRESENT',
      title: '🏢 Co-Founder, Enfibio Technologies',
      sub: 'Registered startup · Hyderabad, India',
      color: 'gold',
    },
    {
      date: '2024',
      title: '💡 IEDC-Funded Innovator',
      sub: 'Secured institutional grant for Smart Portable Freezer IoT prototype',
      color: '#10b981', // emerald
    },
    {
      date: '2022 — MAY 2026',
      title: '🎓 B.Tech — Computer Science',
      sub: 'Sphoorthy Engineering College, Hyderabad',
      color: 'muted',
    },
  ];

  return (
    <section id="about" className="py-28 relative z-10 w-full overflow-hidden border-t border-[rgba(255,255,255,0.06)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] text-primary tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-[1px] bg-primary block"></span>
              About Me
            </div>
            <h2 className="font-syne text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-text mb-4">
              Built different<br />from day one.
            </h2>
            
            <p className="text-base text-slate-400 leading-[1.8] mb-5">
              I&apos;m a final-year Computer Science student and Co-Founder of{' '}
              <strong className="text-text font-medium">Enfibio Technologies Pvt. Ltd.</strong>
              , a registered startup based in Hyderabad, India. I lead development across AI, IoT, and mobile divisions.
            </p>
            
            <p className="text-base text-slate-400 leading-[1.8] mb-5">
              My work spans a weird range — from{' '}
              <strong className="text-text font-medium">fine-tuning LLMs to run in 40MB on a phone</strong>
              , to building autonomous agents that waste scammers&apos; time, to creating defense-grade drone intelligence dashboards. The thread connecting all of it: AI that actually works in the real world.
            </p>
            
            <div className="bg-gradient-to-br from-[rgba(99,102,241,0.08)] to-[rgba(6,182,212,0.06)] border border-[rgba(99,102,241,0.15)] border-l-4 border-l-primary rounded-r-xl py-5 px-6 my-8 font-syne text-base text-text font-semibold italic">
              "The gap between a prototype and a production system is where most people stop. I push through it."
            </div>
            
            <p className="text-base text-slate-400 leading-[1.8] mb-5">
              Located in Hyderabad. Open to AI/ML engineering roles, research collaborations, and building things that shouldn&apos;t exist yet.
            </p>
          </motion.div>

          {/* Right Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {timeline.map((item, idx) => {
              // Map color names to actual values
              let dotColor = 'var(--primary)';
              if (item.color === 'cyan') dotColor = 'var(--cyan)';
              else if (item.color === 'gold') dotColor = 'var(--gold)';
              else if (item.color === 'muted') dotColor = 'var(--muted)';
              else if (item.color.startsWith('#')) dotColor = item.color;

              return (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className="w-3 h-3 rounded-full shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                      style={{ backgroundColor: dotColor }}
                    ></div>
                    {/* Line wrapper */}
                    {idx < timeline.length - 1 && (
                      <div className="w-[1px] flex-1 min-h-[24px] bg-gradient-to-b from-border to-transparent mt-1"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-mono text-[0.6rem] text-muted tracking-wide mb-1">
                      {item.date}
                    </div>
                    <div className="font-syne text-[0.95rem] font-bold text-text mb-1">
                      {item.title}
                    </div>
                    <div className="text-[0.82rem] text-muted">
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
