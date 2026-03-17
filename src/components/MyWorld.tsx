'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'

const photos = [
  { src: '/photos/bike.jpg', caption: 'night rides 🏍️', rotate: '-3deg', bg: '#1a1a2e' },
  { src: '/photos/sushi.jpg', caption: 'sushi date 🍣', rotate: '2.5deg', bg: '#2e1a1a' },
  { src: '/photos/nature.jpg', caption: 'golden hour 🌸', rotate: '-1.5deg', bg: '#1a2e1a' },
  { src: '/photos/ramen.jpg', caption: 'ramen therapy 🍜', rotate: '3deg', bg: '#2e2a1a' },
  { src: '/photos/setup.jpg', caption: 'the lab 🖥️', rotate: '-2.5deg', bg: '#1a1a2e' },
  { src: '/photos/vishwas-selfie.jpg', caption: 'just vibes ✨', rotate: '1.5deg', bg: '#2e1a2e' },
]

const songs = [
  { title: 'Tum Se Hi', artist: 'Mohit Chauhan', bg: 'linear-gradient(135deg,#b45309,#78350f)', label: 'SONG' },
  { title: 'Agar Tum Saath Ho', artist: 'A.R. Rahman', bg: 'linear-gradient(135deg,#1e3a8a,#1e40af)', label: 'SONG' },
  { title: 'Raataan Lambiyan', artist: 'Jubin Nautiyal', bg: 'linear-gradient(135deg,#581c87,#7c3aed)', label: 'SONG' },
  { title: 'Blinding Lights', artist: 'The Weeknd', bg: 'linear-gradient(135deg,#991b1b,#dc2626)', label: 'SONG' },
  { title: 'Starboy', artist: 'The Weeknd', bg: 'linear-gradient(135deg,#111827,#374151)', label: 'SONG' },
]

const stats = [
  { label: 'Systems Shipped', value: '15+', sub: 'production AI systems' },
  { label: 'National Rank', value: 'Top 2%', sub: 'of 40,000+ builders' },
  { label: 'GitHub Repos', value: '20+', sub: 'public + private' },
  { label: 'Languages', value: '8', sub: 'Python · JS · Dart · Java · PHP · C · Kotlin · React Native' },
  { label: 'Fav Food Score', value: '∞', sub: 'Paneer Butter Masala + Butter Naan' },
  { label: 'Night Rides', value: 'Every week', sub: 'Hyderabad streets 🏍️' },
]

const favs = [
  { label: 'FAV PLAYER', value: 'Messi 🐐', sub: 'The GOAT. No debate.' },
  { label: 'FAV FOOD', value: 'Paneer Butter Masala', sub: 'with Butter Naan. Always.' },
  { label: 'FAV CITY', value: 'Hyderabad', sub: 'City of Nizams & Biryani 🍖' },
  { label: 'FAV SPORT', value: 'Football ⚽', sub: 'Ballon d\'Or → Messi. Period.' },
  { label: 'FAV DRINK', value: 'Iced Coffee ☕', sub: 'fuel for late night builds' },
  { label: 'FAV SETUP', value: 'Dual Monitor', sub: 'ThinkStation + Dell · where magic happens' },
]

function SongCard({ song }: { song: typeof songs[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg) scale(1.06)`
  }
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 w-52 h-72 rounded-2xl p-6 flex flex-col cursor-pointer select-none"
      style={{ background: song.bg, transition: 'transform 0.15s ease', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
      <span className="font-mono text-xs text-white/50 tracking-widest">{song.label}</span>
      <div className="flex-1" />
      <h3 className="font-syne font-bold text-2xl text-white leading-tight mb-1">{song.title}</h3>
      <p className="text-white/60 text-sm">{song.artist}</p>
    </div>
  )
}

export default function MyWorld() {
  return (
    <section id="about" className="bg-black py-32">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* PHOTO WALL */}
        <div className="mb-32">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">MY WORLD</p>
          <h2 className="font-syne font-black text-6xl md:text-7xl text-white mb-4">Beyond the Code.</h2>
          <p className="text-white/40 font-mono mb-16">the human behind the builds</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div key={photo.src}
                className="group cursor-pointer"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'rotate(0deg) scale(1.05) translateY(-8px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = `rotate(${photo.rotate}) scale(1) translateY(0)`)}>
                <div className="bg-white p-3 pb-10 shadow-2xl"
                  style={{ transform: `rotate(${photo.rotate})`, transition: 'transform 0.3s ease' }}>
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                  </div>
                  <p className="text-gray-700 text-sm text-center mt-3 font-mono">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPOTIFY PLAYLIST */}
        <div className="mb-32">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">WHAT I&apos;M LISTENING TO</p>
          <h2 className="font-syne font-black text-5xl text-white mb-12">Current Playlist 🎵</h2>
          <div className="flex gap-6 overflow-x-auto pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {songs.map((song) => <SongCard key={song.title} song={song} />)}
          </div>
          <div className="mt-8">
            <a href="https://open.spotify.com/playlist/3ieM3camimAeMIUMmKFj4g"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Open Full Playlist on Spotify
            </a>
          </div>
        </div>

        {/* MY STATS */}
        <div className="mb-32">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">NUMBERS</p>
          <h2 className="font-syne font-black text-6xl text-white mb-16">My Stats.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors">
                <p className="font-syne font-black text-4xl md:text-5xl text-yellow-400 mb-2">{stat.value}</p>
                <p className="text-white font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-white/40 text-xs font-mono">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAVOURITES */}
        <div className="mb-32">
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">PERSONAL</p>
          <h2 className="font-syne font-black text-6xl text-white mb-16">FAV.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {favs.map((fav) => (
              <div key={fav.label} className="bg-[#0c0c1a] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 hover:scale-105 transition-all duration-300">
                <p className="font-mono text-xs text-indigo-400 tracking-widest mb-3">{fav.label}</p>
                <p className="font-syne font-bold text-xl text-white mb-2">{fav.value}</p>
                <p className="text-white/40 text-sm">{fav.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
