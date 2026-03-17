'use client'
import { useEffect } from 'react'

export default function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-6 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors text-xl">
          ✕
        </button>
        <video src={src} controls autoPlay className="w-full aspect-video bg-black" />
      </div>
    </div>
  )
}
