'use client'
import { useEffect, useState } from 'react'

type ContributionDay = { date: string; count: number; level: number }

const levelColors = [
  'bg-white/5',
  'bg-green-900',
  'bg-green-700',
  'bg-green-500',
  'bg-green-400',
]

export default function GitHubGraph() {
  const [weeks, setWeeks] = useState<ContributionDay[][]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/vishwastiwari01?y=2026')
      .then(r => r.json())
      .then(data => {
        const contributions: ContributionDay[] = data.contributions || []
        setTotal(data.total?.['2026'] || 0)
        const grouped: ContributionDay[][] = []
        let week: ContributionDay[] = []
        contributions.forEach((day: ContributionDay, i: number) => {
          week.push(day)
          if (week.length === 7 || i === contributions.length - 1) {
            grouped.push(week)
            week = []
          }
        })
        setWeeks(grouped)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="bg-black py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">GITHUB</p>
        <h2 className="font-syne font-black text-6xl text-white mb-2">My Contributions.</h2>
        <p className="font-mono text-white/40 mb-12">THIS YEAR · 2026 · {total} contributions</p>

        {loading ? (
          <div className="text-white/40 font-mono text-sm">Loading contributions...</div>
        ) : (
          <div className="bg-[#0c0c1a] border border-white/[0.06] rounded-2xl p-6 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <div key={day.date}
                      title={`${day.date}: ${day.count} contributions`}
                      className={`w-3 h-3 rounded-sm cursor-pointer hover:opacity-80 transition-opacity ${levelColors[day.level] || levelColors[0]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 justify-end">
              <span className="font-mono text-xs text-white/30">Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
              ))}
              <span className="font-mono text-xs text-white/30">More</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
