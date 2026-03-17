"use client"
import { useState, useEffect } from 'react'

const songs = [
  { title: 'Softly', artist: 'Karan Aujla', color: '#3d0066' },
  { title: '12:12', artist: 'Karan Aujla', color: '#001a4d' },
  { title: 'Tera Hona', artist: 'Atif Aslam', color: '#4d0000' },
  { title: 'Tu Hi Meri Shab Hai', artist: 'KK', color: '#001433' },
  { title: 'Woh Lamhe', artist: 'Atif Aslam', color: '#331a00' },
  { title: 'Pehli Nazar Mein', artist: 'Atif Aslam', color: '#1a0033' },
  { title: 'O Humdum Suniyo Re', artist: 'Emraan Hashmi', color: '#001a00' },
  { title: 'Ajab Si', artist: 'KK', color: '#1a1400' },
]

export default function FavSongs() {
  const [current, setCurrent] = useState(0)
  const [songsWithArt, setSongsWithArt] = useState<any[]>(songs)

  useEffect(() => {
    const fetchAlbumArt = async () => {
      const updatedSongs = await Promise.all(
        songs.map(async (song) => {
          try {
            const query = encodeURIComponent(`${song.title} ${song.artist}`)
            const res = await fetch(
              `https://itunes.apple.com/search?term=${query}&media=music&limit=1`
            )
            const data = await res.json()
            if (data.results?.[0]?.artworkUrl100) {
              const art = data.results[0].artworkUrl100.replace('100x100', '600x600')
              return { ...song, img: art }
            }
          } catch {}
          return song
        })
      )
      setSongsWithArt(updatedSongs)
    }
    fetchAlbumArt()
  }, [])

  const handleNext = () => setCurrent(i => (i + 1) % songsWithArt.length)
  const handlePrev = () => setCurrent(i => (i - 1 + songsWithArt.length) % songsWithArt.length)

  const getCardStyle = (index: number) => {
    let offset = index - current;
    const total = songsWithArt.length;
    
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;
    
    if (Math.abs(offset) > 2) {
      return {
        opacity: 0,
        transform: `translateX(-50%) translateX(${offset > 0 ? 400 : -400}px) scale(0.5) rotateY(${offset > 0 ? -60 : 60}deg)`,
        zIndex: 0,
        pointerEvents: 'none' as const,
      }
    }
    
    const sign = Math.sign(offset);
    let translateX = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10 - Math.abs(offset);
    
    if (Math.abs(offset) === 0) {
      translateX = 0;
      rotateY = 0;
      scale = 1;
      opacity = 1;
    } else if (Math.abs(offset) === 1) {
      translateX = sign * 180;
      rotateY = sign * -15;
      scale = 0.85;
      opacity = 0.8;
    } else if (Math.abs(offset) === 2) {
      translateX = sign * 320;
      rotateY = sign * -30;
      scale = 0.7;
      opacity = 0.4;
    }
    
    return {
       transform: `translateX(-50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
       zIndex,
       opacity,
       position: 'absolute' as const,
       left: '50%',
       top: '0',
       transformOrigin: 'center center',
       transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }
  }

  return (
    <div style={{ background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)", position: 'relative', zIndex: 1 }} className="py-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 text-center">WHAT I&apos;M LISTENING TO</p>
      
      <h2 style={{ fontFamily: 'var(--font-syne)', fontWeight: 900, fontSize: 'clamp(40px, 8vw, 80px)', color: 'white', letterSpacing: '-0.03em' }} className="mb-16 text-center leading-[0.95]">
        Current Playlist <span style={{fontSize:'0.7em'}}>🎵</span>
      </h2>
      
      <div className="relative w-full max-w-5xl mx-auto h-[450px]" style={{ perspective: '1200px' }}>
        {songsWithArt.map((song, i) => {
          return (
            <div 
              key={i} 
              className="w-[280px] h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl flex flex-col relative"
              style={getCardStyle(i)}
              onClick={() => setCurrent(i)}
            >
              <div className="absolute inset-0 z-0">
                {song.img ? (
                  <img
                    src={song.img}
                    alt={song.title}
                    style={{
                      width: '100%',
                      height: '62%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '62%',
                    background: `linear-gradient(160deg, ${song.color}, #000)`,
                  }} />
                )}
              </div>
              
              <div
                className="absolute top-2 right-2 text-[120px] font-black font-syne leading-none select-none z-10"
                style={{ color: 'rgba(255,255,255,0.06)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              
              <div className="absolute inset-x-0 bottom-0 top-[38%] z-20 flex flex-col justify-end p-6" style={{ background: `linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 80%, transparent)` }}>
                 <p className="font-mono text-[10px] tracking-[3px] text-white/50 mb-3 uppercase">SONG</p>
                 <h3 className="font-syne font-black text-2xl text-white mb-1 leading-tight tracking-[-0.03em]">{song.title}</h3>
                 <p className="text-[13px] text-white/60 font-sans">{song.artist}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="flex justify-center gap-6 mt-8 relative z-20">
        <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          ←
        </button>
        <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          →
        </button>
      </div>

      <div className="flex justify-center mt-10 relative z-20">
        <a
          href="https://open.spotify.com/playlist/3ieM3camimAeMIUMmKFj4g"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1DB954] text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-sm"
        >
          Open Full Playlist on Spotify →
        </a>
      </div>
    </div>
  )
}
