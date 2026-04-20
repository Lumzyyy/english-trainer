// 22+ exercices sur le conditionnel
// Types : choose | fill | correct | translate
// Niveaux : easy | medium | hard

export const exercisesCond = [
  // ── EASY ─────────────────────────────────────────────────────────────────
  {
    id: 'c1', type: 'choose', level: 'easy', context: 'daily',
    question: 'If I had more time, I ___ learn a new language.',
    options: ['would', 'will', 'had', 'should'],
    answer: 'would',
    explain: '2nd conditional : If + past simple → would + base verb. "If I had more time" décrit une hypothèse présente irréelle (je n\'ai pas plus de temps). Le résultat → "would learn". Pas de "will" dans la 2nd conditional.',
  },
  {
    id: 'c2', type: 'fill', level: 'easy', context: 'daily',
    question: 'Complete : You ___ (should / call) him — he\'s been waiting.',
    answer: 'should call',
    explain: '"Should + base verb" exprime une recommandation ou un conseil. "You should call him" = je te conseille de l\'appeler. Pas de "to" entre should et le verbe.',
  },
  {
    id: 'c3', type: 'choose', level: 'easy', context: 'data',
    question: 'We ___ try a random forest instead of a neural net.',
    options: ['could', 'would have', 'should have', 'had'],
    answer: 'could',
    explain: '"Could + base verb" suggère une possibilité ou une alternative. "We could try" = une option est disponible, on pourrait envisager cela. C\'est plus doux qu\'une recommandation directe.',
  },
  {
    id: 'c4', type: 'correct', level: 'easy', context: 'daily',
    question: 'Corrige : "If I would have more data, I would train a better model."',
    answer: 'If I had more data, I would train a better model.',
    explain: 'Erreur classique : dans la subordonnée IF de la 2nd conditional, on utilise le Past Simple, jamais "would". "If I had" (Past Simple), pas "If I would have". Le "would" va seulement dans la proposition principale.',
  },
  {
    id: 'c5', type: 'choose', level: 'easy', context: 'daily',
    question: 'She ___ have told you — it was confidential.',
    options: ['shouldn\'t', 'wouldn\'t', 'couldn\'t', 'mightn\'t'],
    answer: 'shouldn\'t',
    explain: '"Shouldn\'t have + PP" exprime un reproche ou une critique : elle aurait dû ne pas le faire (mais elle l\'a fait). C\'est différent de "wouldn\'t have" (résultat hypothétique) ou "couldn\'t have" (impossibilité).',
  },
  {
    id: 'c6', type: 'fill', level: 'easy', context: 'data',
    question: 'Complete : If we ___ (use) cross-validation, we ___ (detect) the overfitting. (3rd conditional)',
    answer: 'had used / would have detected',
    explain: '3rd conditional : If + Past Perfect → would have + PP. "Had used" dans la subordonnée IF (Past Perfect) et "would have detected" dans la principale. On parle d\'un passé alternatif impossible — on n\'a pas utilisé la validation croisée.',
  },
  {
    id: 'c7', type: 'choose', level: 'easy', context: 'daily',
    question: '___  you help me with this presentation?',
    options: ['Could', 'Should', 'Had', 'Would have'],
    answer: 'Could',
    explain: '"Could you + base verb?" est la façon la plus polie de faire une demande. "Could" ici est un conditionnel de politesse. "Would you" est aussi possible mais "Could you" est légèrement plus poli.',
  },
  {
    id: 'c8', type: 'translate', level: 'easy', context: 'data',
    question: 'Traduis : "Tu aurais dû utiliser un meilleur taux d\'apprentissage."',
    answer: 'You should have used a better learning rate.',
    explain: '"Aurais dû" = "should have + PP". C\'est le conditionnel passé de conseil/reproche. On n\'a pas utilisé le bon taux d\'apprentissage — c\'est un regret ou une critique après coup.',
  },

  // ── MEDIUM ────────────────────────────────────────────────────────────────
  {
    id: 'c9', type: 'choose', level: 'medium', context: 'data',
    question: 'If the data ___ cleaner, the model ___ better.',
    options: ['were / would perform', 'is / will perform', 'had been / would have performed', 'was / would performed'],
    answer: 'were / would perform',
    explain: '2nd conditional avec "were" : dans la 2nd conditional formelle, on utilise "were" pour toutes les personnes (pas seulement he/she/it), surtout dans un registre soigné. "If the data were cleaner" est plus correct que "was cleaner" à l\'écrit.',
  },
  {
    id: 'c10', type: 'fill', level: 'medium', context: 'daily',
    question: 'Complete : I wish I ___ (speak) better English. (conditionnel/souhait)',
    answer: 'spoke / could speak',
    explain: '"I wish + Past Simple" exprime un souhait sur la réalité présente. "I wish I spoke" = je regrette de ne pas parler mieux anglais maintenant. C\'est la même structure que la 2nd conditional. Les deux formes "spoke" et "could speak" sont correctes.',
  },
  {
    id: 'c11', type: 'correct', level: 'medium', context: 'data',
    question: 'Corrige : "Had we knew about the bug, we would have fixed it."',
    answer: 'Had we known about the bug, we would have fixed it.',
    explain: 'Inversion formelle de la 3rd conditional : "Had + subject + PP…" (sans IF). "Known" est le Past Participle de "know", pas "knew". "Had we known" = "If we had known" mais dans un registre formel écrit.',
  },
  {
    id: 'c12', type: 'choose', level: 'medium', context: 'daily',
    question: 'You look terrible. You ___ have gone to bed earlier.',
    options: ['should', 'would', 'could', 'might'],
    answer: 'should',
    explain: '"Should have + PP" = conseil/reproche après le fait. "You should have gone to bed earlier" implique qu\'on ne l\'a pas fait et que c\'était une erreur. C\'est un jugement rétrospectif.',
  },
  {
    id: 'c13', type: 'translate', level: 'medium', context: 'data',
    question: 'Traduis : "Si nous avions un meilleur GPU, nous pourrions entraîner le modèle 10x plus vite."',
    answer: 'If we had a better GPU, we could train the model 10 times faster.',
    explain: '2nd conditional avec "could" au lieu de "would" pour la possibilité. "If we had" (Past Simple) + "we could train" (could + BV). "Could" exprime la capacité conditionnelle, "would" exprimerait plutôt la certitude du résultat.',
  },
  {
    id: 'c14', type: 'choose', level: 'medium', context: 'data',
    question: 'If I ___ you, I would start with exploratory data analysis.',
    options: ['were', 'would be', 'am', 'had been'],
    answer: 'were',
    explain: '"If I were you" est une expression figée utilisant "were" (pas "was") pour toutes les personnes dans la 2nd conditional. Elle exprime un conseil en se mettant à la place de l\'autre. Toujours "were", jamais "was" dans cette expression.',
  },
  {
    id: 'c15', type: 'fill', level: 'medium', context: 'daily',
    question: 'Complete : He ___ (might / become) a manager if he improves his soft skills.',
    answer: 'might become',
    explain: '"Might + base verb" exprime une possibilité moins certaine que "would" ou "could". "He might become" = c\'est possible mais incertain. Attention : quand la condition IF est au présent simple, c\'est la 1st conditional (possibilité réelle).',
  },
  {
    id: 'c16', type: 'correct', level: 'medium', context: 'data',
    question: 'Corrige : "The deployment wouldn\'t failed if we had tested properly."',
    answer: 'The deployment wouldn\'t have failed if we had tested properly.',
    explain: '"Wouldn\'t have + PP" est la forme correcte du conditionnel passé négatif. "Wouldn\'t failed" est incorrect (il manque "have"). 3rd conditional : If + Past Perfect → would/wouldn\'t have + Past Participle.',
  },
  {
    id: 'c17', type: 'translate', level: 'medium', context: 'data',
    question: 'Traduis : "On aurait pu éviter cet incident de production si on avait surveillé les métriques."',
    answer: 'We could have avoided this production incident if we had monitored the metrics.',
    explain: '3rd conditional avec "could have" pour la possibilité manquée. "Could have avoided" = c\'était possible mais ça ne s\'est pas réalisé. "If we had monitored" = Past Perfect dans la subordonnée IF.',
  },

  // ── HARD ──────────────────────────────────────────────────────────────────
  {
    id: 'c18', type: 'choose', level: 'hard', context: 'data',
    question: 'If we had started sooner, we ___ done by now.',
    options: ['would be', 'would have been', 'will be', 'were'],
    answer: 'would be',
    explain: 'Mixed conditional : If + Past Perfect (passé) → would + BV (résultat présent). "If we had started sooner" = dans le passé. "We would be done by now" = le résultat serait visible MAINTENANT. Ce mélange 3rd IF + 2nd résultat est très naturel en anglais.',
  },
  {
    id: 'c19', type: 'fill', level: 'hard', context: 'daily',
    question: 'Complete : It\'s time we ___ (take) this project more seriously.',
    answer: 'took',
    explain: '"It\'s time + Past Simple" est une structure qui exprime qu\'une action devrait se produire maintenant (avec une nuance de reproche). "It\'s time we took" = on aurait dû le faire, il est temps d\'agir. C\'est une forme de conditionnel implicite.',
  },
  {
    id: 'c20', type: 'correct', level: 'hard', context: 'data',
    question: 'Corrige : "If only we would have more compute budget, we could scale this solution."',
    answer: 'If only we had more compute budget, we could scale this solution.',
    explain: '"If only + Past Simple" (2nd conditional) pour exprimer un souhait frustré. Jamais "would" dans la subordonnée IF/If only. "Had" est le Past Simple de "have" → "if only we had more budget".',
  },
  {
    id: 'c21', type: 'translate', level: 'hard', context: 'data',
    question: 'Traduis : "Si j\'avais su que les données étaient biaisées, je n\'aurais jamais déployé ce modèle." (registre formel)',
    answer: 'Had I known the data was biased, I would never have deployed this model.',
    explain: 'Inversion formelle de la 3rd conditional : "Had I known" = "If I had known". La négation se place entre "would" et "have" : "would never have deployed". Ce registre est courant à l\'écrit technique et dans les analyses post-mortem.',
  },
  {
    id: 'c22', type: 'choose', level: 'hard', context: 'data',
    question: 'The model ___ generalizing better now if we ___ the regularization last week.',
    options: ['would be / had tuned', 'would have been / tuned', 'will be / tune', 'were / would tune'],
    answer: 'would be / had tuned',
    explain: 'Mixed conditional inversé : action passée manquée (If + Past Perfect "had tuned") → résultat présent (would + BV "would be"). "Would be generalizing better now" = le résultat actuel dans le présent. C\'est la structure mixte la plus fréquente dans les analyses techniques.',
  },
  {
    id: 'c23', type: 'fill', level: 'hard', context: 'daily',
    question: 'Complete : I\'d rather you ___ (not/tell) him about this yet.',
    answer: 'didn\'t tell',
    explain: '"I\'d rather + subject + Past Simple" exprime une préférence pour une action d\'une autre personne. C\'est une structure subjunctive : "I\'d rather you didn\'t tell him" = je préférerais que tu ne le lui dises pas. Le Past Simple est requis même pour parler du présent/futur.',
  },
  {
    id: 'c24', type: 'correct', level: 'hard', context: 'data',
    question: 'Corrige : "Supposing we would switch to a microservices architecture, what would change?"',
    answer: 'Supposing we switched to a microservices architecture, what would change?',
    explain: '"Supposing + Past Simple" (ou "Suppose that + Past Simple") est une alternative à "If" dans la 2nd conditional. Jamais "would" dans la proposition conditionnelle. "Switched" (Past Simple) est la forme correcte.',
  },
]
