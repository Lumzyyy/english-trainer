import { useState, useMemo } from 'react'
import { vocabulary, vocabCategories } from '../data/vocabulary'
import { ChevronDown, ChevronUp, Search, Shuffle, Volume2 } from 'lucide-react'
import SpeakBtn from './SpeakBtn'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const catColors = Object.fromEntries(vocabCategories.map(c => [c.id, c.color]))

function CategoryBadge({ category }) {
  const cat = vocabCategories.find(c => c.id === category)
  if (!cat) return null
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', fontSize: '.68rem', fontWeight: 600,
      padding: '2px 8px', borderRadius: 20, letterSpacing: '.04em', textTransform: 'uppercase',
      background: `color-mix(in srgb, ${cat.color} 15%, transparent)`, color: cat.color,
    }}>{cat.label}</span>
  )
}

function PronBadge({ text }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontFamily: 'var(--font-title)', fontSize: '.72rem',
      background: 'var(--bg3)', color: 'var(--text2)',
      padding: '2px 8px', borderRadius: 6,
    }}>
      <Volume2 size={10} /> {text}
    </span>
  )
}

function ExampleBlock({ label, en, fr, context }) {
  return (
    <div style={{ borderLeft: `3px solid ${context === 'data' ? 'var(--tag-data)' : 'var(--tag-daily)'}`, paddingLeft: 10, marginBottom: 8 }}>
      <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
        <div style={{ fontFamily: 'var(--font-title)', fontSize: '.82rem', color: 'var(--text)', lineHeight: 1.5, flex: 1 }}>{en}</div>
        <SpeakBtn text={en} />
      </div>
      <div style={{ fontSize: '.78rem', color: 'var(--text2)', fontStyle: 'italic', marginTop: 2 }}>{fr}</div>
    </div>
  )
}

function WordAccordion({ item, isOpen, onToggle }) {
  const color = catColors[item.category] || 'var(--accent)'
  return (
    <div className="card" style={{ overflow: 'hidden', marginBottom: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={onToggle}
          style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', minWidth: 0 }}
        >
          <div style={{ width: 3, height: 36, borderRadius: 2, background: color, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '.95rem', color: 'var(--text)', fontWeight: 600 }}>{item.word}</span>
              <PronBadge text={item.pronunciation} />
            </div>
            <div style={{ fontSize: '.82rem', color: 'var(--text2)', marginTop: 2, fontStyle: 'italic' }}>{item.fr}</div>
          </div>
          <CategoryBadge category={item.category} />
          {isOpen ? <ChevronUp size={16} color="var(--text3)" style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color="var(--text3)" style={{ flexShrink: 0 }} />}
        </button>
        <SpeakBtn text={item.word} style={{ marginRight: 12 }} />
      </div>

      {isOpen && (
        <div style={{ padding: '0 16px 16px 16px', borderTop: '1px solid var(--border)' }}>
          {item.note && (
            <div style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent)', borderRadius: 8, padding: '8px 12px', margin: '12px 0', fontSize: '.82rem', color: 'var(--text)', lineHeight: 1.5 }}>
              💡 {item.note}
            </div>
          )}
          <div style={{ marginTop: item.note ? 0 : 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <ExampleBlock label="☀️ Quotidien" en={item.exampleDaily.en} fr={item.exampleDaily.fr} context="daily" />
            <ExampleBlock label="⚡ Data / IA" en={item.exampleData.en} fr={item.exampleData.fr} context="data" />
          </div>
        </div>
      )}
    </div>
  )
}

// ── Flashcard mode ──────────────────────────────────────────────────────────
function FlashCard({ item, onNext, onPrev, idx, total }) {
  const [flipped, setFlipped] = useState(false)
  const color = catColors[item.category] || 'var(--accent)'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div onClick={() => setFlipped(f => !f)} style={{ cursor: 'pointer', userSelect: 'none' }}>
        <div className="card" style={{ padding: '32px 24px', minHeight: 160, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transition: 'transform .15s', transform: flipped ? 'scale(0.97)' : 'scale(1)' }}>
          {!flipped ? (
            <>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' }}>Français → Anglais</div>
              <div style={{ fontSize: '1.2rem', color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.4 }}>{item.fr}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 14 }}>Appuie pour révéler</div>
            </>
          ) : (
            <>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' }}>Réponse</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.3rem', color, fontWeight: 700 }}>{item.word}</div>
                <SpeakBtn text={item.word} size={16} />
              </div>
              <PronBadge text={item.pronunciation} />
              <CategoryBadge category={item.category} />
              {item.note && (
                <div style={{ marginTop: 12, fontSize: '.78rem', color: 'var(--text2)', maxWidth: 300, lineHeight: 1.5 }}>{item.note}</div>
              )}
            </>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
        <button className="btn btn-ghost" onClick={() => { setFlipped(false); onPrev() }}>← Préc.</button>
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '.8rem', color: 'var(--text3)' }}>{idx + 1}/{total}</span>
        <button className="btn btn-ghost" onClick={() => { setFlipped(false); onNext() }}>Suivant →</button>
      </div>
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────
export default function VocabularyView() {
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')
  const [view, setView] = useState('list')
  const [openId, setOpenId] = useState(null)
  const [deck, setDeck] = useState(() => shuffle(vocabulary))
  const [flashIdx, setFlashIdx] = useState(0)

  const filtered = useMemo(() =>
    vocabulary.filter(v =>
      (cat === 'all' || v.category === cat) &&
      (!search || v.word.toLowerCase().includes(search.toLowerCase()) || v.fr.toLowerCase().includes(search.toLowerCase()))
    ), [cat, search])

  const startFlash = () => {
    setDeck(shuffle(filtered))
    setFlashIdx(0)
    setView('flash')
    setOpenId(null)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button className={`btn ${view === 'list' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.8rem', padding: '6px 12px' }} onClick={() => setView('list')}>
          📋 Liste
        </button>
        <button className={`btn ${view === 'flash' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.8rem', padding: '6px 12px' }} onClick={startFlash}>
          <Shuffle size={13} /> Flashcards
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
        {vocabCategories.map(c => (
          <button key={c.id}
            className="btn"
            style={{
              fontSize: '.72rem', padding: '4px 10px',
              background: cat === c.id ? c.color : 'transparent',
              color: cat === c.id ? '#fff' : c.color,
              border: `1.5px solid ${c.color}`,
              opacity: cat === c.id ? 1 : 0.7,
            }}
            onClick={() => { setCat(c.id); if (view === 'flash') { setDeck(shuffle(filtered)); setFlashIdx(0) } }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Search (list mode only) */}
      {view === 'list' && (
        <div style={{ position: 'relative' }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text3)' }} />
          <input type="text" placeholder="Chercher un mot ou une traduction..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 30, fontSize: '.85rem' }} />
        </div>
      )}

      {/* Flashcard counter refresh */}
      {view === 'flash' && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{filtered.length} mots dans la sélection</span>
          <button className="btn btn-ghost" style={{ fontSize: '.75rem', padding: '4px 10px' }} onClick={() => { setDeck(shuffle(filtered)); setFlashIdx(0) }}>
            <Shuffle size={12} /> Mélanger
          </button>
        </div>
      )}

      {/* Content */}
      {view === 'list' ? (
        filtered.length === 0 ? (
          <div className="card" style={{ padding: 24, textAlign: 'center', color: 'var(--text3)' }}>Aucun mot pour ce filtre.</div>
        ) : (
          <div>
            <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 10 }}>{filtered.length} mot{filtered.length > 1 ? 's' : ''}</div>
            {filtered.map(item => (
              <WordAccordion key={item.id} item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
            ))}
          </div>
        )
      ) : (
        deck.length === 0 ? (
          <div className="card" style={{ padding: 24, textAlign: 'center', color: 'var(--text3)' }}>Aucune carte pour ce filtre.</div>
        ) : (
          <FlashCard
            key={`${deck[flashIdx]?.id}-${flashIdx}`}
            item={deck[flashIdx]}
            idx={flashIdx}
            total={deck.length}
            onNext={() => setFlashIdx(i => Math.min(i + 1, deck.length - 1))}
            onPrev={() => setFlashIdx(i => Math.max(i - 1, 0))}
          />
        )
      )}
    </div>
  )
}
