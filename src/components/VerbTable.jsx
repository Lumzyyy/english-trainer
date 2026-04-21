import { useState, useMemo } from 'react'
import { verbs, verbCategories } from '../data/verbs'
import { Shuffle, Eye, EyeOff, Search } from 'lucide-react'
import SpeakBtn from './SpeakBtn'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function FlashCard({ verb, mode }) {
  const [flipped, setFlipped] = useState(false)

  // mode: 'conj' (base → past + pp) | 'fr' (fr → base)
  const front = mode === 'conj' ? verb.base : verb.fr
  const back = mode === 'conj'
    ? <><span style={{ color: 'var(--accent)' }}>{verb.past}</span><span style={{ color: 'var(--text3)', margin: '0 8px' }}>→</span><span style={{ color: 'var(--success)' }}>{verb.pp}</span></>
    : <span style={{ color: 'var(--accent)' }}>{verb.base}</span>

  return (
    <div onClick={() => setFlipped(f => !f)} style={{ cursor: 'pointer', userSelect: 'none' }}>
      <div className="card" style={{
        padding: '32px 24px', textAlign: 'center', minHeight: 140,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        transition: 'transform .15s', transform: flipped ? 'scale(0.97)' : 'scale(1)',
      }}>
        {!flipped ? (
          <>
            <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              {mode === 'conj' ? 'Base' : 'Français'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', color: 'var(--text)' }}>{front}</div>
              {mode === 'conj' && <SpeakBtn text={verb.base} size={16} />}
            </div>
            <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 10 }}>Appuie pour retourner</div>
          </>
        ) : (
          <>
            <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              {mode === 'conj' ? 'Past → Past Participle' : 'Base verb'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                {back}
              </div>
              <SpeakBtn text={mode === 'conj' ? `${verb.base}, ${verb.past}, ${verb.pp}` : verb.base} size={16} />
            </div>
            {mode === 'conj' && (
              <div style={{ fontSize: '.8rem', color: 'var(--text2)', marginTop: 8, fontStyle: 'italic' }}>{verb.fr}</div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function VerbTable() {
  const [view, setView] = useState('table')
  const [cat, setCat] = useState('all')
  const [search, setSearch] = useState('')
  const [flashMode, setFlashMode] = useState('conj')
  const [flashList, setFlashList] = useState(null)
  const [flashIdx, setFlashIdx] = useState(0)

  const filtered = useMemo(() =>
    verbs.filter(v =>
      (cat === 'all' || v.category === cat) &&
      (!search || v.base.includes(search.toLowerCase()) || v.fr.toLowerCase().includes(search.toLowerCase()))
    ), [cat, search])

  const deck = flashList ?? filtered

  const startFlash = () => {
    setFlashList(shuffle(filtered))
    setFlashIdx(0)
    setView('flash')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <button className={`btn ${view === 'table' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.8rem', padding: '6px 12px' }} onClick={() => setView('table')}>
          Tableau
        </button>
        <button className={`btn ${view === 'flash' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.8rem', padding: '6px 12px' }} onClick={startFlash}>
          <Shuffle size={13} /> Flashcards
        </button>
        {view === 'flash' && (
          <>
            <button className={`btn ${flashMode === 'conj' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.75rem', padding: '4px 10px' }} onClick={() => { setFlashMode('conj'); setFlashList(shuffle(filtered)); setFlashIdx(0) }}>
              Conjugaison
            </button>
            <button className={`btn ${flashMode === 'fr' ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.75rem', padding: '4px 10px' }} onClick={() => { setFlashMode('fr'); setFlashList(shuffle(filtered)); setFlashIdx(0) }}>
              FR → EN
            </button>
          </>
        )}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        {verbCategories.map(c => (
          <button key={c} className={`btn ${cat === c ? 'btn-primary' : 'btn-ghost'}`} style={{ fontSize: '.75rem', padding: '4px 10px' }}
            onClick={() => { setCat(c); if (view === 'flash') { setFlashList(shuffle(filtered)); setFlashIdx(0) } }}>
            {c === 'all' ? 'Tous' : c === 'irregular' ? 'Irréguliers' : 'Data/IA'}
          </button>
        ))}
        <div style={{ position: 'relative', flex: 1, minWidth: 140 }}>
          <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text3)' }} />
          <input type="text" placeholder="Chercher..." value={search} onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 30, fontSize: '.85rem' }} />
        </div>
      </div>

      {view === 'table' ? (
        <div className="card" style={{ overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                {['Base', 'Past', 'Past Participle', 'Français'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontFamily: 'var(--font-title)', fontSize: '.75rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((v, i) => (
                <tr key={v.base} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--bg2)' }}>
                  <td style={{ padding: '9px 12px', fontFamily: 'var(--font-title)', color: 'var(--accent)', fontWeight: 700 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      {v.base}<SpeakBtn text={v.base} size={13} />
                    </span>
                  </td>
                  <td style={{ padding: '9px 12px', fontFamily: 'var(--font-title)', color: 'var(--text)' }}>{v.past}</td>
                  <td style={{ padding: '9px 12px', fontFamily: 'var(--font-title)', color: 'var(--success)' }}>{v.pp}</td>
                  <td style={{ padding: '9px 12px', color: 'var(--text2)', fontStyle: 'italic' }}>{v.fr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '10px 16px', borderTop: '1px solid var(--border)', fontSize: '.75rem', color: 'var(--text3)' }}>{filtered.length} verbe(s)</div>
        </div>
      ) : (
        <div>
          <FlashCard key={`${deck[flashIdx]?.base}-${flashIdx}`} verb={deck[flashIdx]} mode={flashMode} />
          <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center', alignItems: 'center' }}>
            <button className="btn btn-ghost" onClick={() => setFlashIdx(i => Math.max(0, i - 1))}>← Préc.</button>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '.8rem', color: 'var(--text3)' }}>{flashIdx + 1}/{deck.length}</span>
            <button className="btn btn-ghost" onClick={() => setFlashIdx(i => Math.min(deck.length - 1, i + 1))}>Suivant →</button>
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, justifyContent: 'center' }}>
            <button className="btn btn-ghost" style={{ fontSize: '.8rem' }} onClick={() => { setFlashList(shuffle(filtered)); setFlashIdx(0) }}>
              <Shuffle size={13} /> Mélanger
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
