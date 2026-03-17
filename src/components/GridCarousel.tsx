'use client'

const allPhotos = [
  '/photos/bike.jpg',
  '/photos/sushi.jpg', 
  '/photos/nature.jpg',
  '/photos/setup.jpg',
  '/photos/ramen.jpg',
  '/photos/vishwas1.jpg',
  '/photos/vishwas-selfie.jpg',
  '/photos/hyderabad.jpg',
  '/photos/dietcoke.jpg',
  '/photos/favfood.webp',
  '/photos/messi.webp',
  '/photos/nature.jpg',
]

const row1 = allPhotos.slice(0, 6)
const row2 = allPhotos.slice(6, 12)

export default function GridCarousel() {
  return (
    <div
      id="about"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)" }}
      className="py-20 overflow-hidden"
    >
      <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4 text-center">MY WORLD</p>
      <h1
        style={{ fontFamily: 'var(--font-syne)', fontWeight: 900 }}
        className="text-center text-6xl text-white mb-16 px-6"
      >
        Beyond the Code.
      </h1>

      {/* Row 1 — LEFT scroll */}
      <div className="overflow-hidden mb-3">
        <div
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
            animation: 'scrollLeft 30s linear infinite',
          }}
        >
          {[...row1, ...row1, ...row1].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '280px',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#1a1a2e',
              }}
            >
              <img
                src={src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — RIGHT scroll */}
      <div className="overflow-hidden">
        <div
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
            animation: 'scrollRight 35s linear infinite',
          }}
        >
          {[...row2, ...row2, ...row2].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '280px',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#1a1a2e',
              }}
            >
              <img
                src={src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
