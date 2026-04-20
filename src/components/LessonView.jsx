import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, Zap } from 'lucide-react'

function RuleCard({ rule, detail }) {
  return (
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 14px', marginBottom: 8 }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '.8rem', color: 'var(--accent)', marginBottom: 4 }}>{rule}</div>
      <div style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.5 }}>{detail}</div>
    </div>
  )
}

function ExampleRow({ en, fr, context }) {
  return (
    <div style={{ borderLeft: `3px solid ${context === 'data' ? 'var(--tag-data)' : 'var(--tag-daily)'}`, paddingLeft: 12, marginBottom: 10 }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '.9rem', color: 'var(--text)', lineHeight: 1.4 }}>{en}</div>
      <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginTop: 2, fontStyle: 'italic' }}>{fr}</div>
      <span className={`tag tag-${context}`} style={{ marginTop: 4 }}>{context === 'data' ? '⚡ Data/IA' : '☀️ Quotidien'}</span>
    </div>
  )
}

export default function LessonView({ lessons }) {
  const [openId, setOpenId] = useState(lessons[0]?.id)
  const [filter, setFilter] = useState('all')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['all', 'daily', 'data'].map(f => (
          <button key={f} className={`btn ${filter === f ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.8rem', padding: '5px 12px' }}
            onClick={() => setFilter(f)}>
            {f === 'all' ? 'Tous les exemples' : f === 'daily' ? '☀️ Quotidien' : '⚡ Data/IA'}
          </button>
        ))}
      </div>

      {lessons.map(lesson => {
        const isOpen = openId === lesson.id
        const examples = filter === 'all' ? lesson.examples : lesson.examples.filter(e => e.context === filter)
        return (
          <div key={lesson.id} className="card" style={{ overflow: 'hidden' }}>
            <button
              onClick={() => setOpenId(isOpen ? null : lesson.id)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <div style={{ width: 4, height: 40, borderRadius: 2, background: lesson.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text)' }}>{lesson.title}</div>
                <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginTop: 2 }}>{lesson.subtitle}</div>
              </div>
              {isOpen ? <ChevronUp size={18} color="var(--text3)" /> : <ChevronDown size={18} color="var(--text3)" />}
            </button>

            {isOpen && (
              <div style={{ padding: '0 20px 20px' }}>
                <div style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent)', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: '.875rem', color: 'var(--text)', lineHeight: 1.6 }}>
                  <BookOpen size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  {lesson.usage}
                </div>

                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>Règles</div>
                  {lesson.rules.map((r, i) => <RuleCard key={i} {...r} />)}
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                    Exemples ({examples.length})
                  </div>
                  {examples.length === 0
                    ? <div style={{ color: 'var(--text3)', fontSize: '.875rem' }}>Aucun exemple pour ce filtre.</div>
                    : examples.map((ex, i) => <ExampleRow key={i} {...ex} />)
                  }
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
