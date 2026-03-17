"use client"
import { CrowdCanvas } from './ui/skiper-ui/skiper39'
import DynamicText from './DynamicText'
import Link from 'next/link'

export default function Hero() {
  return (
    <div
      id="home"
      style={{ background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)" }}
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Text content — top 40% only, sits above crowd */}
      <div className="absolute top-16 w-full z-50 flex flex-col items-center px-6">
        <DynamicText />

        {/* i'm VISHWAS. — scaled down to fit above crowd */}
        <div className="flex justify-center items-baseline gap-3 md:gap-5 flex-wrap">
          <span
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 700 }}
            className="text-amber-300 text-5xl md:text-6xl"
          >
            i&apos;m
          </span>
          <span
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 900 }}
            className="text-white text-6xl md:text-8xl tracking-tight"
          >
            VISHWAS.
          </span>
        </div>

        {/* CTA Buttons only */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <Link
            href="#works"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105"
          >
            View My Work →
          </Link>
          <Link
            href="#contact"
            className="border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* CrowdCanvas — occupies bottom 60% */}
      <div className="absolute bottom-0 left-0 right-0 h-[60%] z-10">
        <CrowdCanvas
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
          rows={15}
          cols={7}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  )
}
