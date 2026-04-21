import { useState } from 'react'
import { Moon, Sun, BookOpen, PenLine, GitBranch, FlaskConical, Table2, Map, BookMarked } from 'lucide-react'
import { useTheme } from './hooks/useTheme'
import LessonView from './components/LessonView'
import ExerciseView from './components/ExerciseView'
import VerbTable from './components/VerbTable'
import VocabularyView from './components/VocabularyView'
import Summary from './components/Summary'
import { lessonsPast } from './data/lessons-past'
import { lessonsCond } from './data/lessons-cond'
import { exercisesPast } from './data/exercises-past'
import { exercisesCond } from './data/exercises-cond'

const TABS = [
  { id: 'past',    label: 'Passé',      shortLabel: 'Passé',  icon: BookOpen,     color: '#6366f1' },
  { id: 'ex-past', label: 'Exos Passé', shortLabel: 'Ex·P',   icon: PenLine,      color: '#8b5cf6' },
  { id: 'cond',    label: 'Cond.',      shortLabel: 'Cond.',  icon: GitBranch,    color: '#f59e0b' },
  { id: 'ex-cond', label: 'Exos Cond.', shortLabel: 'Ex·C',   icon: FlaskConical, color: '#10b981' },
  { id: 'verbs',   label: 'Verbes',     shortLabel: 'Verbes', icon: Table2,       color: '#0ea5e9' },
  { id: 'vocab',   label: 'Vocab',      shortLabel: 'Vocab',  icon: BookMarked,   color: '#ec4899' },
  { id: 'summary', label: 'Résumé',     shortLabel: 'Résumé', icon: Map,          color: '#ef4444' },
]

export default function App() {
  const [dark, setDark] = useTheme()
  const [tab, setTab] = useState('past')

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        background: 'var(--surface)', borderBottom: '1px solid var(--border)',
        padding: 'env(safe-area-inset-top) 0 0',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12 }}>
            <div>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text)', letterSpacing: '-.01em' }}>English</span>
              <span style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--accent)', marginLeft: 4 }}>Trainer</span>
              <span style={{ fontSize: '.7rem', color: 'var(--text3)', marginLeft: 8, background: 'var(--bg2)', padding: '2px 6px', borderRadius: 4, letterSpacing: '.03em' }}>Data/IA · B1→B2</span>
            </div>
            <button className="btn-icon" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Tab bar */}
          <nav style={{ display: 'flex', gap: 0, marginTop: 8, overflowX: 'auto', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
            {TABS.map(t => {
              const Icon = t.icon
              const active = tab === t.id
              return (
                <button key={t.id} onClick={() => setTab(t.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 5, padding: '8px 10px',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    borderBottom: `2px solid ${active ? t.color : 'transparent'}`,
                    color: active ? t.color : 'var(--text3)',
                    fontFamily: 'var(--font-body)', fontSize: '.78rem', fontWeight: active ? 600 : 400,
                    whiteSpace: 'nowrap', transition: 'all .15s', flexShrink: 0,
                  }}>
                  <Icon size={13} />
                  {t.shortLabel}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main style={{ flex: 1, padding: '16px 16px calc(16px + env(safe-area-inset-bottom))', maxWidth: 760, margin: '0 auto', width: '100%' }}>
        {tab === 'past'    && <LessonView lessons={lessonsPast} />}
        {tab === 'ex-past' && <ExerciseView exercises={exercisesPast} />}
        {tab === 'cond'    && <LessonView lessons={lessonsCond} />}
        {tab === 'ex-cond' && <ExerciseView exercises={exercisesCond} />}
        {tab === 'verbs'   && <VerbTable />}
        {tab === 'vocab'   && <VocabularyView />}
        {tab === 'summary' && <Summary />}
      </main>
    </div>
  )
}
