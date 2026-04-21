import { useState, useMemo } from 'react'
import { CheckCircle, XCircle, RotateCcw, ChevronRight, Lightbulb, Filter } from 'lucide-react'

const TENSE_LABELS = {
  all:  'Tous',
  c0:   '0 — Vérités',
  c1:   '1st — Réel',
  c2:   '2nd — Irréel',
  c3:   '3rd — Passé',
  cmix: 'Mixte',
}

function Badge({ label, color, bg }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 20, background: bg, color, marginRight: 6, letterSpacing: '.03em' }}>
      {label}
    </span>
  )
}

function TenseBadge({ tense }) {
  if (!tense) return null
  const colors = { c0: '#0ea5e9', c1: '#6366f1', c2: '#8b5cf6', c3: '#10b981', cmix: '#f59e0b' }
  const c = colors[tense] || 'var(--accent)'
  return (
    <Badge label={TENSE_LABELS[tense] || tense} color={c} bg={`color-mix(in srgb, ${c} 15%, transparent)`} />
  )
}

function ExerciseCard({ ex, idx, total, onNext, onPrev }) {
  const [input, setInput]     = useState('')
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = () => {
    const ans      = ex.type === 'choose' ? selected : input.trim().toLowerCase()
    const expected = ex.answer.toLowerCase()
    if (ex.type === 'choose') return ans === expected
    const variants = expected.split('/').map(v => v.trim())
    return variants.some(v => ans === v || ans.replace(/'/g, "'") === v.replace(/'/g, "'"))
  }

  const handleSubmit = () => {
    if (ex.type === 'choose' && !selected) return
    if (ex.type !== 'choose' && !input.trim()) return
    setSubmitted(true)
  }

  const handleNext = () => {
    setInput(''); setSelected(null); setSubmitted(false)
    onNext()
  }

  const correct = submitted ? isCorrect() : null
  const levelColors = { easy: ['var(--success)', 'var(--success-bg)'], medium: ['var(--warn)', 'var(--warn-bg)'], hard: ['var(--error)', 'var(--error-bg)'] }
  const [lc, lb] = levelColors[ex.level]

  return (
    <div className="card" style={{ padding: 20 }}>
      {/* Header badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', color: 'var(--text3)' }}>{idx + 1}/{total}</span>
        <Badge label={ex.level === 'easy' ? 'Facile' : ex.level === 'medium' ? 'Moyen' : 'Difficile'} color={lc} bg={lb} />
        <Badge label={ex.context === 'data' ? '⚡ Data/IA' : '☀️ Quotidien'} color={ex.context === 'data' ? 'var(--tag-data)' : 'var(--tag-daily)'} bg={ex.context === 'data' ? 'color-mix(in srgb, var(--tag-data) 15%, transparent)' : 'color-mix(in srgb, var(--tag-daily) 15%, transparent)'} />
        <Badge label={ex.type === 'choose' ? 'QCM' : ex.type === 'fill' ? 'À compléter' : ex.type === 'correct' ? 'Corriger' : 'Traduire'} color="var(--accent)" bg="var(--accent-bg)" />
        {ex.tense && <TenseBadge tense={ex.tense} />}
      </div>

      {/* Question */}
      <div style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: 16 }}>
        {ex.question}
      </div>

      {/* Input */}
      {ex.type === 'choose' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {ex.options.map(opt => {
            let bg = 'var(--bg2)', border = '1.5px solid var(--border)', color = 'var(--text)'
            if (!submitted && selected === opt) { border = '1.5px solid var(--accent)'; bg = 'var(--accent-bg)' }
            if (submitted && opt === ex.answer)  { border = '1.5px solid var(--success)'; bg = 'var(--success-bg)'; color = 'var(--success)' }
            if (submitted && opt === selected && opt !== ex.answer) { border = '1.5px solid var(--error)'; bg = 'var(--error-bg)'; color = 'var(--error)' }
            return (
              <button key={opt} disabled={submitted} onClick={() => setSelected(opt)}
                style={{ textAlign: 'left', padding: '10px 14px', borderRadius: 8, background: bg, border, color, fontFamily: 'var(--font-body)', fontSize: '.9rem', cursor: submitted ? 'default' : 'pointer', transition: 'all .15s', fontWeight: selected === opt ? 600 : 400 }}>
                {opt}
              </button>
            )
          })}
        </div>
      ) : (
        <input type="text" disabled={submitted}
          placeholder={ex.type === 'translate' ? 'Ta traduction...' : ex.type === 'correct' ? 'Ta correction...' : 'Ta réponse...'}
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !submitted && handleSubmit()}
          style={{ marginBottom: 16, borderColor: submitted ? (correct ? 'var(--success)' : 'var(--error)') : undefined }} />
      )}

      {/* Feedback */}
      {submitted && (
        <div style={{ borderRadius: 8, padding: '12px 14px', marginBottom: 16, background: correct ? 'var(--success-bg)' : 'var(--error-bg)', border: `1px solid ${correct ? 'var(--success)' : 'var(--error)'}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: correct ? 4 : 8 }}>
            {correct
              ? <><CheckCircle size={16} color="var(--success)" /><span style={{ color: 'var(--success)', fontWeight: 600 }}>Correct !</span></>
              : <><XCircle size={16} color="var(--error)" /><span style={{ color: 'var(--error)', fontWeight: 600 }}>Incorrect</span></>
            }
          </div>
          {!correct && (
            <div style={{ marginBottom: 10, padding: '8px 12px', background: 'var(--surface)', borderRadius: 6 }}>
              <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 3 }}>Ta réponse</div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.875rem', color: 'var(--error)' }}>{ex.type === 'choose' ? selected : input}</div>
              <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 8, marginBottom: 3 }}>Bonne réponse</div>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.875rem', color: 'var(--success)' }}>{ex.answer}</div>
            </div>
          )}
          <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
            <Lightbulb size={15} style={{ flexShrink: 0, marginTop: 2, color: 'var(--warn)' }} />
            <div style={{ fontSize: '.875rem', color: 'var(--text)', lineHeight: 1.6 }}>{ex.explain}</div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
        <button className="btn btn-ghost" onClick={onPrev} style={{ fontSize: '.85rem' }}>← Préc.</button>
        {!submitted
          ? <button className="btn btn-primary" onClick={handleSubmit} style={{ flex: 1, maxWidth: 160 }}>Valider</button>
          : <button className="btn btn-primary" onClick={handleNext} style={{ flex: 1, maxWidth: 160 }}>Suivant <ChevronRight size={14} /></button>
        }
      </div>
    </div>
  )
}

export default function ExerciseView({ exercises }) {
  const [idx, setIdx]               = useState(0)
  const [levelFilter, setLevelFilter]     = useState('all')
  const [contextFilter, setContextFilter] = useState('all')
  const [tenseFilter, setTenseFilter]     = useState('all')
  const [showFilters, setShowFilters]     = useState(false)

  // Detect available tenses in this exercise set
  const hasTense = exercises.some(e => e.tense)
  const availableTenses = hasTense
    ? ['all', ...Array.from(new Set(exercises.map(e => e.tense).filter(Boolean)))]
    : []

  const filtered = useMemo(() =>
    exercises.filter(e =>
      (levelFilter   === 'all' || e.level   === levelFilter) &&
      (contextFilter === 'all' || e.context === contextFilter) &&
      (tenseFilter   === 'all' || !hasTense || e.tense === tenseFilter)
    ), [exercises, levelFilter, contextFilter, tenseFilter, hasTense])

  const safeIdx = Math.min(idx, Math.max(0, filtered.length - 1))
  const current = filtered[safeIdx]

  if (!current) return (
    <div className="card" style={{ padding: 24, textAlign: 'center', color: 'var(--text2)' }}>
      Aucun exercice pour ce filtre.
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Controls bar */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button className="btn btn-ghost" style={{ fontSize: '.78rem', padding: '6px 10px' }} onClick={() => setShowFilters(s => !s)}>
          <Filter size={13} /> Filtres
        </button>
        <div style={{ flex: 1, height: 6, background: 'var(--bg3)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: `${((safeIdx + 1) / filtered.length) * 100}%`, height: '100%', background: 'var(--accent)', borderRadius: 3, transition: 'width .3s' }} />
        </div>
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', color: 'var(--text3)' }}>{safeIdx + 1}/{filtered.length}</span>
      </div>

      {showFilters && (
        <div className="card" style={{ padding: '12px 16px', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {/* Level */}
          <div>
            <div style={{ fontSize: '.68rem', color: 'var(--text3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.05em' }}>Niveau</div>
            <div style={{ display: 'flex', gap: 5 }}>
              {['all', 'easy', 'medium', 'hard'].map(l => (
                <button key={l} className={`btn ${levelFilter === l ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.72rem', padding: '3px 9px' }}
                  onClick={() => { setLevelFilter(l); setIdx(0) }}>
                  {l === 'all' ? 'Tous' : l === 'easy' ? 'Facile' : l === 'medium' ? 'Moyen' : 'Difficile'}
                </button>
              ))}
            </div>
          </div>
          {/* Context */}
          <div>
            <div style={{ fontSize: '.68rem', color: 'var(--text3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.05em' }}>Contexte</div>
            <div style={{ display: 'flex', gap: 5 }}>
              {['all', 'daily', 'data'].map(c => (
                <button key={c} className={`btn ${contextFilter === c ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.72rem', padding: '3px 9px' }}
                  onClick={() => { setContextFilter(c); setIdx(0) }}>
                  {c === 'all' ? 'Tous' : c === 'daily' ? '☀️' : '⚡ Data'}
                </button>
              ))}
            </div>
          </div>
          {/* Tense filter (only when available) */}
          {hasTense && (
            <div>
              <div style={{ fontSize: '.68rem', color: 'var(--text3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.05em' }}>Conditional</div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {availableTenses.map(t => (
                  <button key={t} className={`btn ${tenseFilter === t ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.72rem', padding: '3px 9px' }}
                    onClick={() => { setTenseFilter(t); setIdx(0) }}>
                    {TENSE_LABELS[t] || t}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Reset */}
          <button className="btn btn-ghost" style={{ alignSelf: 'flex-end', fontSize: '.72rem', padding: '3px 9px' }}
            onClick={() => { setLevelFilter('all'); setContextFilter('all'); setTenseFilter('all'); setIdx(0) }}>
            <RotateCcw size={11} /> Reset
          </button>
        </div>
      )}

      <ExerciseCard
        key={`${current.id}-${safeIdx}`}
        ex={current} idx={safeIdx} total={filtered.length}
        onNext={() => setIdx(i => Math.min(i + 1, filtered.length - 1))}
        onPrev={() => setIdx(i => Math.max(i - 1, 0))}
      />
    </div>
  )
}
