import { Volume2 } from 'lucide-react'
import { useSpeak } from '../hooks/useSpeak'

export default function SpeakBtn({ text, size = 14, style }) {
  const { speak, isSupported } = useSpeak()
  if (!isSupported || !text) return null
  return (
    <button
      onClick={e => { e.stopPropagation(); speak(text) }}
      title="Écouter"
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '2px 3px', borderRadius: 4, flexShrink: 0,
        color: 'var(--text3)', display: 'inline-flex', alignItems: 'center',
        transition: 'color .15s', lineHeight: 1,
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
    >
      <Volume2 size={size} />
    </button>
  )
}
