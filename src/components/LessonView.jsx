import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react'
import SpeakBtn from './SpeakBtn'

function RuleCard({ rule, detail }) {
  const exIdx = detail.indexOf(' Ex:')
  const mainText = exIdx !== -1 ? detail.slice(0, exIdx) : detail
  const exText   = exIdx !== -1 ? detail.slice(exIdx + 1) : null

  return (
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 14px', marginBottom: 8 }}>
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '.78rem', color: 'var(--accent)', marginBottom: 4 }}>{rule}</div>
      <div style={{ fontSize: '.875rem', color: 'var(--text2)', lineHeight: 1.5 }}>{mainText}</div>
      {exText && (
        <div style={{ marginTop: 6, fontSize: '.82rem', color: 'var(--text3)', fontStyle: 'italic', borderLeft: '2px solid var(--border)', paddingLeft: 8 }}>
          {exText}
        </div>
      )}
    </div>
  )
}

function ExampleRow({ en, fr, context }) {
  return (
    <div style={{ borderLeft: `3px solid ${context === 'data' ? 'var(--tag-data)' : 'var(--tag-daily)'}`, paddingLeft: 12, marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '.88rem', color: 'var(--text)', lineHeight: 1.5, flex: 1 }}>{en}</div>
        <SpeakBtn text={en} />
      </div>
      <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginTop: 2, fontStyle: 'italic' }}>{fr}</div>
      <span className={`tag tag-${context}`} style={{ marginTop: 4 }}>{context === 'data' ? '⚡ Data/IA' : '☀️ Quotidien'}</span>
    </div>
  )
}

// Rendu spécial pour la leçon de comparaison (paires 1st vs 2nd)
function PairsView({ pairs }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {pairs.map((pair, i) => (
        <div key={i} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
          {/* 1st conditional */}
          <div style={{ borderLeft: '4px solid #6366f1', padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: '.68rem', fontFamily: 'var(--font-title)', color: '#6366f1', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>1st Conditional — possible</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.88rem', color: 'var(--text)', lineHeight: 1.5, flex: 1 }}>{pair.c1.en}</div>
              <SpeakBtn text={pair.c1.en} />
            </div>
            <div style={{ fontSize: '.78rem', color: 'var(--text2)', fontStyle: 'italic', marginTop: 2 }}>{pair.c1.fr}</div>
          </div>
          {/* 2nd conditional */}
          <div style={{ borderLeft: '4px solid #8b5cf6', padding: '10px 14px' }}>
            <div style={{ fontSize: '.68rem', fontFamily: 'var(--font-title)', color: '#8b5cf6', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>2nd Conditional — hypothétique</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.88rem', color: 'var(--text)', lineHeight: 1.5, flex: 1 }}>{pair.c2.en}</div>
              <SpeakBtn text={pair.c2.en} />
            </div>
            <div style={{ fontSize: '.78rem', color: 'var(--text2)', fontStyle: 'italic', marginTop: 2 }}>{pair.c2.fr}</div>
          </div>
          {/* Note */}
          {pair.note && (
            <div style={{ padding: '8px 14px', background: 'var(--accent-bg)', borderTop: '1px solid var(--border)', fontSize: '.78rem', color: 'var(--text2)' }}>
              💡 {pair.note}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function LessonView({ lessons }) {
  const [openId, setOpenId] = useState(lessons[0]?.id)
  const [filter, setFilter] = useState('all')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Example filter (only when lesson has examples, not pairs) */}
      {lessons.some(l => l.examples) && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['all', 'daily', 'data'].map(f => (
            <button key={f} className={`btn ${filter === f ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.78rem', padding: '5px 12px' }}
              onClick={() => setFilter(f)}>
              {f === 'all' ? 'Tous les exemples' : f === 'daily' ? '☀️ Quotidien' : '⚡ Data/IA'}
            </button>
          ))}
        </div>
      )}

      {lessons.map(lesson => {
        const isOpen = openId === lesson.id
        const examples = lesson.examples
          ? (filter === 'all' ? lesson.examples : lesson.examples.filter(e => e.context === filter))
          : null

        return (
          <div key={lesson.id} className="card" style={{ overflow: 'hidden' }}>
            {/* Header */}
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
                {/* Usage box */}
                <div style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent)', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: '.875rem', color: 'var(--text)', lineHeight: 1.6 }}>
                  <BookOpen size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                  {lesson.usage}
                </div>

                {/* Rules */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>Règles</div>
                  {lesson.rules.map((r, i) => <RuleCard key={i} {...r} />)}
                </div>

                {/* Examples or Pairs */}
                {lesson.pairs ? (
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      {lesson.pairs.length} paires comparatives
                    </div>
                    <PairsView pairs={lesson.pairs} />
                  </div>
                ) : examples && (
                  <div>
                    <div style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      Exemples ({examples.length})
                    </div>
                    {examples.length === 0
                      ? <div style={{ color: 'var(--text3)', fontSize: '.875rem' }}>Aucun exemple pour ce filtre.</div>
                      : examples.map((ex, i) => <ExampleRow key={i} {...ex} />)
                    }
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
