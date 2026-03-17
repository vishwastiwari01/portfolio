export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-white/30 text-xs">
          Vishwas Tiwari · Built with Next.js · Hyderabad 🇮🇳 · 2026
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/vishwastiwari01' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/vishwas-tiwari-a05a65256' },
            { label: 'Twitter', href: 'https://x.com/TheVish_' },
            { label: 'Spotify', href: 'https://open.spotify.com/playlist/3ieM3camimAeMIUMmKFj4g' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-white/30 hover:text-white transition-colors uppercase tracking-widest">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
