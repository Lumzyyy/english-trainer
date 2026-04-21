import { useCallback, useRef } from 'react'

const PREF_LANGS = ['en-GB', 'en-US', 'en-AU', 'en']

function pickVoice() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null
  const voices = window.speechSynthesis.getVoices()
  // Prefer a natural-sounding English voice
  const ranked = PREF_LANGS.flatMap(lang =>
    voices.filter(v => v.lang.startsWith(lang))
  )
  return ranked[0] ?? voices.find(v => v.lang.startsWith('en')) ?? null
}

export function useSpeak() {
  const voiceRef = useRef(null)

  const speak = useCallback((text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return

    // Cancel anything currently playing
    window.speechSynthesis.cancel()

    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'en-GB'
    utter.rate = 0.92
    utter.pitch = 1

    // Lazily resolve voice (voices load async on first call)
    if (!voiceRef.current) voiceRef.current = pickVoice()
    // If still empty, wait for voiceschanged then retry once
    if (!voiceRef.current) {
      const retry = () => {
        voiceRef.current = pickVoice()
        if (voiceRef.current) utter.voice = voiceRef.current
        window.speechSynthesis.speak(utter)
        window.speechSynthesis.removeEventListener('voiceschanged', retry)
      }
      window.speechSynthesis.addEventListener('voiceschanged', retry, { once: true })
      // Fallback: speak without explicit voice (browser default)
      window.speechSynthesis.speak(utter)
      return
    }

    utter.voice = voiceRef.current
    window.speechSynthesis.speak(utter)
  }, [])

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  return { speak, isSupported }
}
