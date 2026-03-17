"use client"
import { useState, useEffect } from 'react'

const greetings = [
  '• नमस्ते', '• Hello', '• Hola', '• Bonjour',
  '• こんにちは', '• Ciao', '• مرحبا', '• Vanakkam', '• నమస్కారం'
]

export default function DynamicText() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setIndex(i => (i + 1) % greetings.length); setVisible(true) }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex justify-center mb-4">
      <span
        className="font-mono text-2xl text-white/60 tracking-widest transition-opacity duration-400"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {greetings[index]}
      </span>
    </div>
  )
}
