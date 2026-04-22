import { useState } from 'react'
import { BookOpen, GitBranch, BookMarked, Table2 } from 'lucide-react'
import ExerciseView from './ExerciseView'
import { exercisesPast } from '../data/exercises-past'
import { exercisesCond } from '../data/exercises-cond'
import { exercisesVocab } from '../data/exercises-vocab'
import { exercisesVerbs } from '../data/exercises-verbs'

const TOPICS = [
  { id: 'past',  label: 'Passé',        icon: BookOpen,   color: '#6366f1', data: exercisesPast,  count: exercisesPast.length },
  { id: 'cond',  label: 'Conditionnel', icon: GitBranch,  color: '#f59e0b', data: exercisesCond,  count: exercisesCond.length },
  { id: 'vocab', label: 'Vocabulaire',  icon: BookMarked, color: '#ec4899', data: exercisesVocab, count: exercisesVocab.length },
  { id: 'verbs', label: 'Verbes',       icon: Table2,     color: '#0ea5e9', data: exercisesVerbs, count: exercisesVerbs.length },
]

export default function ExerciseHub() {
  const [topic, setTopic] = useState(null)

  if (topic) {
    const t = TOPICS.find(t => t.id === topic)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button
          className="btn btn-ghost"
          style={{ alignSelf: 'flex-start', fontSize: '.8rem' }}
          onClick={() => setTopic(null)}
        >
          ← Choisir un thème
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <t.icon size={16} color={t.color} />
          <span style={{ fontFamily: 'var(--font-title)', fontSize: '.9rem', color: t.color, fontWeight: 600 }}>{t.label}</span>
          <span style={{ fontSize: '.75rem', color: 'var(--text3)', background: 'var(--bg2)', padding: '2px 7px', borderRadius: 10 }}>{t.count} exos</span>
        </div>
        <ExerciseView exercises={t.data} />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text)', marginBottom: 4 }}>Exercices</div>
        <div style={{ fontSize: '.82rem', color: 'var(--text2)' }}>Choisir un thème pour commencer.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
        {TOPICS.map(t => (
          <button
            key={t.id}
            onClick={() => setTopic(t.id)}
            style={{
              display: 'flex', flexDirection: 'column', gap: 12,
              padding: '20px 18px', borderRadius: 12, cursor: 'pointer',
              background: 'var(--surface)', border: `1.5px solid var(--border)`,
              textAlign: 'left', transition: 'border-color .15s, transform .1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `color-mix(in srgb, ${t.color} 15%, transparent)` }}>
              <t.icon size={18} color={t.color} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.9rem', color: 'var(--text)', fontWeight: 600 }}>{t.label}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 3 }}>{t.count} exercices</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
