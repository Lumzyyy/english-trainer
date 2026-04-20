import { GitBranch, Clock, Zap, Target } from 'lucide-react'

function Section({ icon, title, color, children }) {
  return (
    <div className="card" style={{ padding: '16px 20px', marginBottom: 12 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: `color-mix(in srgb, ${color} 15%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
        <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '1rem', color: 'var(--text)' }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}

function Rule({ label, detail, color }) {
  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, marginTop: 6, flexShrink: 0 }} />
      <div>
        <span style={{ fontFamily: 'var(--font-title)', fontSize: '.8rem', color }}>{label}</span>
        {detail && <span style={{ fontSize: '.8rem', color: 'var(--text2)', marginLeft: 6 }}>{detail}</span>}
      </div>
    </div>
  )
}

function DecisionTree() {
  const box = (label, color, bg) => (
    <div style={{ padding: '8px 14px', borderRadius: 8, background: bg, border: `1.5px solid ${color}`, color, fontFamily: 'var(--font-title)', fontSize: '.75rem', textAlign: 'center', lineHeight: 1.4 }}>
      {label}
    </div>
  )
  const arrow = () => <div style={{ textAlign: 'center', color: 'var(--text3)', fontSize: '1.2rem', lineHeight: 1 }}>↓</div>
  const branch = (left, right) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      {left}
      {right}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {box('Action dans le passé ?', 'var(--text)', 'var(--bg2)')}
      {arrow()}
      {branch(
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {box('Date/heure précise\n(yesterday, in 2020, ago)', 'var(--accent)', 'var(--accent-bg)')}
          {arrow()}
          {box('SIMPLE PAST', '#fff', 'var(--accent)')}
        </div>,
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {box('Résultat/bilan\n(just, already, ever, since)', '#fff', 'color-mix(in srgb, #8b5cf6 80%, transparent)')}
          {arrow()}
          {box('PRESENT PERFECT', '#fff', '#8b5cf6')}
        </div>
      )}
    </div>
  )
}

function CondTree() {
  const box = (label, color, bg) => (
    <div style={{ padding: '8px 14px', borderRadius: 8, background: bg, border: `1.5px solid ${color}`, color, fontFamily: 'var(--font-title)', fontSize: '.75rem', textAlign: 'center', lineHeight: 1.4 }}>
      {label}
    </div>
  )
  const arrow = () => <div style={{ textAlign: 'center', color: 'var(--text3)', fontSize: '1.2rem', lineHeight: 1 }}>↓</div>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {box('Hypothèse irréelle ?', 'var(--text)', 'var(--bg2)')}
      {arrow()}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {box('Présent/futur\n(pas de chance que ça arrive)', 'var(--accent)', 'var(--accent-bg)')}
          {arrow()}
          {box('If + Past → would', '#fff', 'var(--accent)')}
          <div style={{ fontSize: '.7rem', color: 'var(--text3)', textAlign: 'center' }}>2nd Conditional</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {box('Passé\n(impossible à changer)', '#fff', 'color-mix(in srgb, #10b981 80%, transparent)')}
          {arrow()}
          {box('If + Had PP → would have', '#fff', '#10b981')}
          <div style={{ fontSize: '.7rem', color: 'var(--text3)', textAlign: 'center' }}>3rd Conditional</div>
        </div>
      </div>
    </div>
  )
}

export default function Summary() {
  return (
    <div>
      <Section icon={<Clock size={16} color="#6366f1" />} title="Les temps du passé" color="#6366f1">
        <Rule color="#6366f1" label="Simple Past" detail="Date précise, récit : I worked, she went, they didn't come" />
        <Rule color="#8b5cf6" label="Present Perfect" detail="Bilan, expérience, résultat : I have worked, she has gone" />
        <Rule color="#0ea5e9" label="Past Continuous" detail="Action en cours : I was working when she called" />
        <Rule color="#10b981" label="Past Perfect" detail="Avant une action passée : I had worked before she arrived" />
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' }}>Arbre de décision SP vs PP</div>
          <DecisionTree />
        </div>
        <div style={{ marginTop: 12, background: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: 8, padding: '10px 12px', fontSize: '.8rem', color: 'var(--error)' }}>
          ❌ JAMAIS : "I have seen him yesterday" → ✅ "I saw him yesterday"
        </div>
      </Section>

      <Section icon={<GitBranch size={16} color="#f59e0b" />} title="Le Conditionnel" color="#f59e0b">
        <Rule color="#6366f1" label="would + BV" detail="Résultat hypothétique : I would use Python" />
        <Rule color="#8b5cf6" label="should + BV" detail="Conseil/obligation : You should normalize the data" />
        <Rule color="#0ea5e9" label="could + BV" detail="Possibilité : We could try XGBoost" />
        <Rule color="#10b981" label="would have + PP" detail="Passé alternatif : We would have won if… " />
        <Rule color="#f59e0b" label="should have + PP" detail="Regret/reproche : You should have tested first" />
        <Rule color="#ef4444" label="could have + PP" detail="Occasion manquée : It could have worked" />
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', color: 'var(--text3)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '.05em' }}>Arbre de décision Conditionnels</div>
          <CondTree />
        </div>
        <div style={{ marginTop: 12, background: 'var(--error-bg)', border: '1px solid var(--error)', borderRadius: 8, padding: '10px 12px', fontSize: '.8rem', color: 'var(--error)' }}>
          ❌ JAMAIS "would" dans la subordonnée IF → ✅ "If I had…" (past simple ou past perfect)
        </div>
      </Section>

      <Section icon={<Target size={16} color="#10b981" />} title="Marqueurs temporels clés" color="#10b981">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { label: 'Simple Past', words: 'yesterday, last…, ago, in 2020, when, then', color: '#6366f1' },
            { label: 'Present Perfect', words: 'just, already, yet, ever, never, recently, since, for, so far', color: '#8b5cf6' },
            { label: 'Past Continuous', words: 'while, when (interruption), all day, at 3PM yesterday', color: '#0ea5e9' },
            { label: 'Past Perfect', words: 'before, after, already, by the time, once, never (before)', color: '#10b981' },
          ].map(({ label, words, color }) => (
            <div key={label} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', color, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--text2)', lineHeight: 1.5 }}>{words}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Zap size={16} color="#f59e0b" />} title="Vocab Data/IA à retenir" color="#f59e0b">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {['train → trained → trained', 'deploy → deployed → deployed', 'fine-tune → fine-tuned', 'overfit → overfitted', 'infer → inferred', 'embed → embedded', 'tokenize → tokenized', 'query → queried', 'preprocess → preprocessed', 'retrieve → retrieved'].map(w => (
            <span key={w} style={{ fontFamily: 'var(--font-title)', fontSize: '.75rem', padding: '4px 10px', borderRadius: 20, background: 'var(--accent-bg)', color: 'var(--accent)', border: '1px solid var(--accent)' }}>{w}</span>
          ))}
        </div>
      </Section>
    </div>
  )
}
